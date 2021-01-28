import DataLoader from "dataloader";
import { defaultsDeep, Dictionary, keyBy } from "lodash";
import { LRUMap } from "lru_map";

import {
  IProgram,
  ExternalEvaluationStructureTable,
  ProgramTable,
  StudentProgramTable,
  StudentGroupedComplementaryTable,
  PROGRAM_STRUCTURE_TABLE,
  CourseGroupedStatsTable,
} from "../db/tables";

import type { Curriculum } from "../entities/data/program";

export const ProgramDataLoader = new DataLoader(
  async (ids: readonly string[]) => {
    const dataDict: Dictionary<IProgram | undefined> = keyBy(
      await ProgramTable().select("*").whereIn("id", ids),
      "id"
    );

    return ids.map((id) => {
      return dataDict[id];
    });
  },
  {
    cacheMap: new LRUMap(1000),
  }
);

export const StudentProgramDataLoader = new DataLoader(
  async (student_ids: readonly string[]) => {
    return await Promise.all(
      student_ids.map((student_id) => {
        return StudentProgramTable()
          .distinct("program_id", "curriculum", "start_year")
          .where({
            student_id,
          })
          .orderBy("start_year", "desc");
      })
    );
  },
  {
    cacheMap: new LRUMap(1000),
  }
);

export const ProgramDataByStudentDataLoader = new DataLoader(
  async (keys: readonly { student_id: string; program_id: string }[]) => {
    return await Promise.all(
      keys.map(({ student_id, program_id }) => {
        return ProgramTable()
          .select("id", "name", "desc", "active")
          .where({
            id: program_id,
          })
          .whereIn(
            "id",
            StudentProgramTable().distinct("program_id").where({
              student_id,
            })
          )
          .first();
      })
    );
  },
  {
    cacheKeyFn: ({ student_id, program_id }) => {
      return student_id + program_id;
    },
    cacheMap: new LRUMap(1000),
  }
);

export const StudentProgramCurriculumsDataLoader = new DataLoader(
  async (student_ids: readonly string[]) => {
    return await Promise.all(
      student_ids.map((student_id) => {
        return StudentProgramTable()
          .distinct("curriculum", "start_year")
          .where({
            student_id,
          })
          .orderBy("start_year", "desc");
      })
    );
  },
  {
    cacheMap: new LRUMap(1000),
  }
);

export const CurriculumsDataLoader = new DataLoader(
  async (
    keys: readonly { program_id: string; curriculumsIds: Curriculum[] }[]
  ) => {
    return await Promise.all(
      keys.map(async ({ program_id, curriculumsIds }) => {
        const data = curriculumsIds
          ? await ExternalEvaluationStructureTable()
              .select("id", "curriculum", "semester", "external_evaluation_id")
              .unionAll(function () {
                this.select("id", "curriculum", "semester", "course_id")
                  .from(PROGRAM_STRUCTURE_TABLE)
                  .where({ program_id })
                  .whereIn(
                    "curriculum",
                    curriculumsIds.map(({ id }) => id)
                  );
              })
              .where({ program_id })
              .whereIn(
                "curriculum",
                curriculumsIds.map(({ id }) => id)
              )
          : await ExternalEvaluationStructureTable()
              .select("id", "curriculum", "semester", "external_evaluation_id")
              .unionAll(function () {
                this.select("id", "curriculum", "semester", "course_id")
                  .from(PROGRAM_STRUCTURE_TABLE)
                  .where({ program_id });
              })
              .where({ program_id });
        const curriculums = data.reduce<
          Record<
            string /*Curriculum id (program_structure => curriculum)*/,
            {
              id: string /*Curriculum id (program_structure => curriculum)*/;
              semesters: Record<
                number /*Semester id (program_structure => semester) (1-12)*/,
                {
                  id: number /*Semester id (program_structure => semester)*/;
                  courses: {
                    id: number /* Course-semester-curriculum id (program_structure => id) */;
                    code: string /* Course id (program_structure => course_id) */;
                  }[];
                }
              >;
            }
          >
        >((acum, { curriculum, semester, external_evaluation_id, id }) => {
          defaultsDeep(acum, {
            [curriculum]: {
              id: curriculum,
              semesters: {
                [semester]: {
                  id: semester,
                  courses: [],
                },
              },
            },
          });

          acum[curriculum].semesters[semester].courses.push({
            id,
            code: external_evaluation_id,
          });

          return acum;
        }, {});

        return Object.values(curriculums).map(({ id, semesters }) => {
          return {
            id,
            semesters: Object.values(semesters).map(({ id, courses }) => {
              return {
                id,
                courses,
              };
            }),
          };
        });
      })
    );
  },
  {
    cacheKeyFn: ({ program_id, curriculumsIds }) => {
      return (
        program_id +
          curriculumsIds
            ?.map(({ id }) => {
              return id;
            })
            .join("") ?? ""
      );
    },
    cacheMap: new LRUMap(50),
  }
);

export const StudentGroupedComplementaryDataLoader = new DataLoader(
  async (
    keys: readonly {
      program_id: string;
      curriculum: string;
      type_admission: string;
      cohort: string;
    }[]
  ) => {
    return await Promise.all(
      keys.map(({ program_id, curriculum, type_admission, cohort }) => {
        return StudentGroupedComplementaryTable().where({
          program_id: program_id,
          curriculum: curriculum,
          type_admission: type_admission,
          cohort: cohort,
        });
      })
    );
  },
  {
    cacheMap: new LRUMap(1000),
  }
);

export const CourseGroupedStatsDataLoader = new DataLoader(
  async (
    keys: readonly {
      program_id: string;
      curriculum: string;
      type_admission: string;
      cohort: string;
    }[]
  ) => {
    return await Promise.all(
      keys.map(({ program_id, curriculum, type_admission, cohort }) => {
        return CourseGroupedStatsTable().where({
          program_id: program_id,
          curriculum: curriculum,
          type_admission: type_admission,
          cohort: cohort,
        });
      })
    );
  },
  {
    cacheMap: new LRUMap(1000),
  }
);
