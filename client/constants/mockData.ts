import { PerformanceLoadUnit, StateCourse, TermType } from "./";

import type {
  SearchProgramMutation,
  SearchStudentMutation,
  PerformanceByLoad,
} from "../src/graphql";

const data: {
  searchProgramData: {
    program: SearchProgramMutation["program"];
  };
  searchStudentData: {
    student: NonNullable<SearchStudentMutation["student"]>;
  };
  performanceByLoad: PerformanceByLoad[];
} = {
  searchProgramData: {
    program: {
      id: "1708",
      name: "INGENIERÍA CIVIL EN INFORMÁTICA",
      desc: "",
      active: true,

      courseGroupedStats: [
        {
          id: "INFO280-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "2016",
          n_total: 10,
          n_finished: 9,
          n_pass: 9,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 2,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 8,
            },
            {
              label: "4-5",
              value: 8,
            },
            {
              label: "5-6",
              value: 1,
            },
            {
              label: "6-7",
              value: 2,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN150-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "2016",
          n_total: 12,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 10,
          distribution: [
            {
              label: "1-2",
              value: 2,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 2,
            },
            {
              label: "4-5",
              value: 2,
            },
            {
              label: "5-6",
              value: 0,
            },
            {
              label: "6-7",
              value: 8,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO278-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "2016",
          n_total: 11,
          n_finished: 8,
          n_pass: 8,
          n_fail: 0,
          n_drop: 3,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 3,
            },
            {
              label: "3-4",
              value: 6,
            },
            {
              label: "4-5",
              value: 7,
            },
            {
              label: "5-6",
              value: 2,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO295-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "2016",
          n_total: 10,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 7,
          distribution: [
            {
              label: "1-2",
              value: 4,
            },
            {
              label: "2-3",
              value: 5,
            },
            {
              label: "3-4",
              value: 0,
            },
            {
              label: "4-5",
              value: 9,
            },
            {
              label: "5-6",
              value: 6,
            },
            {
              label: "6-7",
              value: 0,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO139-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "2016",
          n_total: 5,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 3,
          distribution: [
            {
              label: "1-2",
              value: 0,
            },
            {
              label: "2-3",
              value: 1,
            },
            {
              label: "3-4",
              value: 0,
            },
            {
              label: "4-5",
              value: 9,
            },
            {
              label: "5-6",
              value: 0,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI146-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "2016",
          n_total: 10,
          n_finished: 6,
          n_pass: 6,
          n_fail: 0,
          n_drop: 4,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 0,
            },
            {
              label: "3-4",
              value: 2,
            },
            {
              label: "4-5",
              value: 4,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO139-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "2020",
          n_total: 10,
          n_finished: 6,
          n_pass: 6,
          n_fail: 0,
          n_drop: 4,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 0,
            },
            {
              label: "3-4",
              value: 2,
            },
            {
              label: "4-5",
              value: 4,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT116",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "2016",
          n_total: 8,
          n_finished: 6,
          n_pass: 6,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 0,
            },
            {
              label: "3-4",
              value: 7,
            },
            {
              label: "4-5",
              value: 4,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 1,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO280-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "2017",
          n_total: 13,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 11,
          distribution: [
            {
              label: "1-2",
              value: 9,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 6,
            },
            {
              label: "4-5",
              value: 4,
            },
            {
              label: "5-6",
              value: 8,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN150-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "2017",
          n_total: 19,
          n_finished: 15,
          n_pass: 15,
          n_fail: 0,
          n_drop: 4,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 8,
            },
            {
              label: "3-4",
              value: 2,
            },
            {
              label: "4-5",
              value: 3,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO278-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "2017",
          n_total: 4,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 3,
          distribution: [
            {
              label: "1-2",
              value: 0,
            },
            {
              label: "2-3",
              value: 5,
            },
            {
              label: "3-4",
              value: 9,
            },
            {
              label: "4-5",
              value: 3,
            },
            {
              label: "5-6",
              value: 6,
            },
            {
              label: "6-7",
              value: 9,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO295-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "2017",
          n_total: 12,
          n_finished: 6,
          n_pass: 6,
          n_fail: 0,
          n_drop: 6,
          distribution: [
            {
              label: "1-2",
              value: 6,
            },
            {
              label: "2-3",
              value: 9,
            },
            {
              label: "3-4",
              value: 4,
            },
            {
              label: "4-5",
              value: 7,
            },
            {
              label: "5-6",
              value: 1,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO139-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "2017",
          n_total: 17,
          n_finished: 8,
          n_pass: 8,
          n_fail: 0,
          n_drop: 9,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 1,
            },
            {
              label: "3-4",
              value: 7,
            },
            {
              label: "4-5",
              value: 8,
            },
            {
              label: "5-6",
              value: 4,
            },
            {
              label: "6-7",
              value: 1,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI146-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "2017",
          n_total: 17,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 14,
          distribution: [
            {
              label: "1-2",
              value: 6,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 9,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 9,
            },
            {
              label: "6-7",
              value: 6,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT116",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "2017",
          n_total: 7,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 6,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 6,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 3,
            },
            {
              label: "6-7",
              value: 0,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO280-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "",
          n_total: 18,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 17,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 2,
            },
            {
              label: "3-4",
              value: 9,
            },
            {
              label: "4-5",
              value: 5,
            },
            {
              label: "5-6",
              value: 4,
            },
            {
              label: "6-7",
              value: 1,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN150-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "",
          n_total: 18,
          n_finished: 12,
          n_pass: 12,
          n_fail: 0,
          n_drop: 6,
          distribution: [
            {
              label: "1-2",
              value: 0,
            },
            {
              label: "2-3",
              value: 5,
            },
            {
              label: "3-4",
              value: 0,
            },
            {
              label: "4-5",
              value: 9,
            },
            {
              label: "5-6",
              value: 0,
            },
            {
              label: "6-7",
              value: 9,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO278-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "",
          n_total: 17,
          n_finished: 5,
          n_pass: 5,
          n_fail: 0,
          n_drop: 12,
          distribution: [
            {
              label: "1-2",
              value: 4,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 0,
            },
            {
              label: "4-5",
              value: 9,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 8,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO295-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "",
          n_total: 2,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 5,
            },
            {
              label: "2-3",
              value: 2,
            },
            {
              label: "3-4",
              value: 9,
            },
            {
              label: "4-5",
              value: 5,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 2,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO139-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "",
          n_total: 16,
          n_finished: 8,
          n_pass: 8,
          n_fail: 0,
          n_drop: 8,
          distribution: [
            {
              label: "1-2",
              value: 9,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 4,
            },
            {
              label: "4-5",
              value: 3,
            },
            {
              label: "5-6",
              value: 3,
            },
            {
              label: "6-7",
              value: 8,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI146-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "",
          n_total: 5,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 4,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 8,
            },
            {
              label: "3-4",
              value: 4,
            },
            {
              label: "4-5",
              value: 4,
            },
            {
              label: "5-6",
              value: 1,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT116",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "",
          n_total: 8,
          n_finished: 7,
          n_pass: 7,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 0,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 0,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 2,
            },
            {
              label: "6-7",
              value: 6,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO280-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2016",
          n_total: 5,
          n_finished: 4,
          n_pass: 4,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 9,
            },
            {
              label: "3-4",
              value: 2,
            },
            {
              label: "4-5",
              value: 7,
            },
            {
              label: "5-6",
              value: 4,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN150-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2016",
          n_total: 7,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 5,
          distribution: [
            {
              label: "1-2",
              value: 8,
            },
            {
              label: "2-3",
              value: 0,
            },
            {
              label: "3-4",
              value: 3,
            },
            {
              label: "4-5",
              value: 2,
            },
            {
              label: "5-6",
              value: 2,
            },
            {
              label: "6-7",
              value: 1,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO278-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2016",
          n_total: 4,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 6,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 7,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 4,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO295-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2016",
          n_total: 12,
          n_finished: 7,
          n_pass: 7,
          n_fail: 0,
          n_drop: 5,
          distribution: [
            {
              label: "1-2",
              value: 5,
            },
            {
              label: "2-3",
              value: 3,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 9,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO139-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2016",
          n_total: 4,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 5,
            },
            {
              label: "2-3",
              value: 8,
            },
            {
              label: "3-4",
              value: 7,
            },
            {
              label: "4-5",
              value: 1,
            },
            {
              label: "5-6",
              value: 3,
            },
            {
              label: "6-7",
              value: 5,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI146-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2016",
          n_total: 9,
          n_finished: 8,
          n_pass: 8,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 0,
            },
            {
              label: "2-3",
              value: 5,
            },
            {
              label: "3-4",
              value: 9,
            },
            {
              label: "4-5",
              value: 2,
            },
            {
              label: "5-6",
              value: 0,
            },
            {
              label: "6-7",
              value: 6,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT116",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2016",
          n_total: 14,
          n_finished: 13,
          n_pass: 13,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 5,
            },
            {
              label: "2-3",
              value: 9,
            },
            {
              label: "3-4",
              value: 2,
            },
            {
              label: "4-5",
              value: 1,
            },
            {
              label: "5-6",
              value: 3,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO280-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2017",
          n_total: 11,
          n_finished: 9,
          n_pass: 9,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 5,
            },
            {
              label: "2-3",
              value: 3,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 5,
            },
            {
              label: "5-6",
              value: 4,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN150-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2017",
          n_total: 11,
          n_finished: 6,
          n_pass: 6,
          n_fail: 0,
          n_drop: 5,
          distribution: [
            {
              label: "1-2",
              value: 8,
            },
            {
              label: "2-3",
              value: 8,
            },
            {
              label: "3-4",
              value: 8,
            },
            {
              label: "4-5",
              value: 9,
            },
            {
              label: "5-6",
              value: 9,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO278-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2017",
          n_total: 13,
          n_finished: 12,
          n_pass: 12,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 2,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 5,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO295-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2017",
          n_total: 13,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 12,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 0,
            },
            {
              label: "3-4",
              value: 3,
            },
            {
              label: "4-5",
              value: 8,
            },
            {
              label: "5-6",
              value: 8,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO139-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2017",
          n_total: 7,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 4,
          distribution: [
            {
              label: "1-2",
              value: 6,
            },
            {
              label: "2-3",
              value: 1,
            },
            {
              label: "3-4",
              value: 1,
            },
            {
              label: "4-5",
              value: 4,
            },
            {
              label: "5-6",
              value: 3,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI146-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2017",
          n_total: 18,
          n_finished: 14,
          n_pass: 14,
          n_fail: 0,
          n_drop: 4,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 1,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 8,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT116",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2017",
          n_total: 9,
          n_finished: 7,
          n_pass: 7,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 5,
            },
            {
              label: "3-4",
              value: 1,
            },
            {
              label: "4-5",
              value: 2,
            },
            {
              label: "5-6",
              value: 1,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO280-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "",
          n_total: 3,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 1,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 9,
            },
            {
              label: "4-5",
              value: 8,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 0,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN150-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "",
          n_total: 5,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 5,
            },
            {
              label: "3-4",
              value: 0,
            },
            {
              label: "4-5",
              value: 2,
            },
            {
              label: "5-6",
              value: 6,
            },
            {
              label: "6-7",
              value: 0,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO278-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "",
          n_total: 5,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 3,
          distribution: [
            {
              label: "1-2",
              value: 4,
            },
            {
              label: "2-3",
              value: 5,
            },
            {
              label: "3-4",
              value: 2,
            },
            {
              label: "4-5",
              value: 7,
            },
            {
              label: "5-6",
              value: 2,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO295-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "",
          n_total: 11,
          n_finished: 6,
          n_pass: 6,
          n_fail: 0,
          n_drop: 5,
          distribution: [
            {
              label: "1-2",
              value: 1,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 2,
            },
            {
              label: "5-6",
              value: 3,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO139-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "",
          n_total: 7,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 4,
          distribution: [
            {
              label: "1-2",
              value: 5,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 1,
            },
            {
              label: "4-5",
              value: 9,
            },
            {
              label: "5-6",
              value: 3,
            },
            {
              label: "6-7",
              value: 9,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI146-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "",
          n_total: 5,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 5,
            },
            {
              label: "3-4",
              value: 1,
            },
            {
              label: "4-5",
              value: 7,
            },
            {
              label: "5-6",
              value: 3,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT116",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "",
          n_total: 11,
          n_finished: 9,
          n_pass: 9,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 1,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 6,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 2,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO280-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "2016",
          n_total: 7,
          n_finished: 6,
          n_pass: 6,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 9,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 7,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 8,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN150-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "2016",
          n_total: 7,
          n_finished: 6,
          n_pass: 6,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 9,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 2,
            },
            {
              label: "4-5",
              value: 9,
            },
            {
              label: "5-6",
              value: 9,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO278-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "2016",
          n_total: 19,
          n_finished: 13,
          n_pass: 13,
          n_fail: 0,
          n_drop: 6,
          distribution: [
            {
              label: "1-2",
              value: 1,
            },
            {
              label: "2-3",
              value: 1,
            },
            {
              label: "3-4",
              value: 6,
            },
            {
              label: "4-5",
              value: 9,
            },
            {
              label: "5-6",
              value: 6,
            },
            {
              label: "6-7",
              value: 2,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO295-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "2016",
          n_total: 5,
          n_finished: 4,
          n_pass: 4,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 8,
            },
            {
              label: "2-3",
              value: 0,
            },
            {
              label: "3-4",
              value: 3,
            },
            {
              label: "4-5",
              value: 5,
            },
            {
              label: "5-6",
              value: 3,
            },
            {
              label: "6-7",
              value: 5,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO139-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "2016",
          n_total: 14,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 13,
          distribution: [
            {
              label: "1-2",
              value: 2,
            },
            {
              label: "2-3",
              value: 2,
            },
            {
              label: "3-4",
              value: 2,
            },
            {
              label: "4-5",
              value: 3,
            },
            {
              label: "5-6",
              value: 8,
            },
            {
              label: "6-7",
              value: 0,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI146-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "2016",
          n_total: 5,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 4,
          distribution: [
            {
              label: "1-2",
              value: 9,
            },
            {
              label: "2-3",
              value: 8,
            },
            {
              label: "3-4",
              value: 9,
            },
            {
              label: "4-5",
              value: 4,
            },
            {
              label: "5-6",
              value: 0,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT116",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "2016",
          n_total: 11,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 8,
          distribution: [
            {
              label: "1-2",
              value: 0,
            },
            {
              label: "2-3",
              value: 5,
            },
            {
              label: "3-4",
              value: 7,
            },
            {
              label: "4-5",
              value: 2,
            },
            {
              label: "5-6",
              value: 9,
            },
            {
              label: "6-7",
              value: 1,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO280-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "2017",
          n_total: 15,
          n_finished: 14,
          n_pass: 14,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 4,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 8,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN150-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "2017",
          n_total: 8,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 5,
          distribution: [
            {
              label: "1-2",
              value: 6,
            },
            {
              label: "2-3",
              value: 5,
            },
            {
              label: "3-4",
              value: 7,
            },
            {
              label: "4-5",
              value: 2,
            },
            {
              label: "5-6",
              value: 9,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO278-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "2017",
          n_total: 2,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 4,
            },
            {
              label: "2-3",
              value: 1,
            },
            {
              label: "3-4",
              value: 3,
            },
            {
              label: "4-5",
              value: 6,
            },
            {
              label: "5-6",
              value: 0,
            },
            {
              label: "6-7",
              value: 0,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO295-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "2017",
          n_total: 6,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 5,
          distribution: [
            {
              label: "1-2",
              value: 5,
            },
            {
              label: "2-3",
              value: 2,
            },
            {
              label: "3-4",
              value: 3,
            },
            {
              label: "4-5",
              value: 9,
            },
            {
              label: "5-6",
              value: 0,
            },
            {
              label: "6-7",
              value: 1,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO139-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "2017",
          n_total: 12,
          n_finished: 6,
          n_pass: 6,
          n_fail: 0,
          n_drop: 6,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 1,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 9,
            },
            {
              label: "6-7",
              value: 9,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI146-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "2017",
          n_total: 5,
          n_finished: 4,
          n_pass: 4,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 2,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 4,
            },
            {
              label: "4-5",
              value: 4,
            },
            {
              label: "5-6",
              value: 6,
            },
            {
              label: "6-7",
              value: 2,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT116",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "2017",
          n_total: 18,
          n_finished: 13,
          n_pass: 13,
          n_fail: 0,
          n_drop: 5,
          distribution: [
            {
              label: "1-2",
              value: 1,
            },
            {
              label: "2-3",
              value: 0,
            },
            {
              label: "3-4",
              value: 8,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 3,
            },
            {
              label: "6-7",
              value: 6,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO280-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "",
          n_total: 14,
          n_finished: 11,
          n_pass: 11,
          n_fail: 0,
          n_drop: 3,
          distribution: [
            {
              label: "1-2",
              value: 9,
            },
            {
              label: "2-3",
              value: 5,
            },
            {
              label: "3-4",
              value: 3,
            },
            {
              label: "4-5",
              value: 9,
            },
            {
              label: "5-6",
              value: 2,
            },
            {
              label: "6-7",
              value: 2,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN150-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "",
          n_total: 8,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 7,
          distribution: [
            {
              label: "1-2",
              value: 0,
            },
            {
              label: "2-3",
              value: 0,
            },
            {
              label: "3-4",
              value: 9,
            },
            {
              label: "4-5",
              value: 9,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 2,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO278-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "",
          n_total: 5,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 3,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 0,
            },
            {
              label: "3-4",
              value: 7,
            },
            {
              label: "4-5",
              value: 1,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 5,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO295-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "",
          n_total: 4,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 6,
            },
            {
              label: "2-3",
              value: 5,
            },
            {
              label: "3-4",
              value: 8,
            },
            {
              label: "4-5",
              value: 8,
            },
            {
              label: "5-6",
              value: 0,
            },
            {
              label: "6-7",
              value: 9,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO139-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "",
          n_total: 8,
          n_finished: 7,
          n_pass: 7,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 1,
            },
            {
              label: "4-5",
              value: 8,
            },
            {
              label: "5-6",
              value: 1,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI146-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "",
          n_total: 13,
          n_finished: 11,
          n_pass: 11,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 5,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 0,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT116",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "",
          n_total: 6,
          n_finished: 4,
          n_pass: 4,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 2,
            },
            {
              label: "2-3",
              value: 3,
            },
            {
              label: "3-4",
              value: 4,
            },
            {
              label: "4-5",
              value: 3,
            },
            {
              label: "5-6",
              value: 6,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO280-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2016",
          n_total: 12,
          n_finished: 11,
          n_pass: 11,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 8,
            },
            {
              label: "2-3",
              value: 2,
            },
            {
              label: "3-4",
              value: 7,
            },
            {
              label: "4-5",
              value: 5,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 1,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN150-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2016",
          n_total: 9,
          n_finished: 6,
          n_pass: 6,
          n_fail: 0,
          n_drop: 3,
          distribution: [
            {
              label: "1-2",
              value: 0,
            },
            {
              label: "2-3",
              value: 1,
            },
            {
              label: "3-4",
              value: 9,
            },
            {
              label: "4-5",
              value: 9,
            },
            {
              label: "5-6",
              value: 4,
            },
            {
              label: "6-7",
              value: 0,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO278-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2016",
          n_total: 6,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 5,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 8,
            },
            {
              label: "3-4",
              value: 2,
            },
            {
              label: "4-5",
              value: 3,
            },
            {
              label: "5-6",
              value: 8,
            },
            {
              label: "6-7",
              value: 8,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO295-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2016",
          n_total: 7,
          n_finished: 6,
          n_pass: 6,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 4,
            },
            {
              label: "2-3",
              value: 2,
            },
            {
              label: "3-4",
              value: 6,
            },
            {
              label: "4-5",
              value: 6,
            },
            {
              label: "5-6",
              value: 6,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO139-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2016",
          n_total: 12,
          n_finished: 6,
          n_pass: 6,
          n_fail: 0,
          n_drop: 6,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 6,
            },
            {
              label: "4-5",
              value: 9,
            },
            {
              label: "5-6",
              value: 4,
            },
            {
              label: "6-7",
              value: 0,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI146-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2016",
          n_total: 3,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 0,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 0,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT116",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2016",
          n_total: 15,
          n_finished: 7,
          n_pass: 7,
          n_fail: 0,
          n_drop: 8,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 1,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 8,
            },
            {
              label: "5-6",
              value: 8,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO280-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2017",
          n_total: 8,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 6,
          distribution: [
            {
              label: "1-2",
              value: 1,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 4,
            },
            {
              label: "5-6",
              value: 9,
            },
            {
              label: "6-7",
              value: 9,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN150-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2017",
          n_total: 13,
          n_finished: 9,
          n_pass: 9,
          n_fail: 0,
          n_drop: 4,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 1,
            },
            {
              label: "3-4",
              value: 3,
            },
            {
              label: "4-5",
              value: 6,
            },
            {
              label: "5-6",
              value: 1,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO278-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2017",
          n_total: 19,
          n_finished: 18,
          n_pass: 18,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 9,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 6,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 5,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO295-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2017",
          n_total: 8,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 6,
          distribution: [
            {
              label: "1-2",
              value: 6,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 4,
            },
            {
              label: "4-5",
              value: 7,
            },
            {
              label: "5-6",
              value: 0,
            },
            {
              label: "6-7",
              value: 5,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO139-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2017",
          n_total: 17,
          n_finished: 10,
          n_pass: 10,
          n_fail: 0,
          n_drop: 7,
          distribution: [
            {
              label: "1-2",
              value: 2,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 9,
            },
            {
              label: "5-6",
              value: 1,
            },
            {
              label: "6-7",
              value: 0,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI146-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2017",
          n_total: 2,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 1,
            },
            {
              label: "4-5",
              value: 3,
            },
            {
              label: "5-6",
              value: 2,
            },
            {
              label: "6-7",
              value: 0,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT116",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2017",
          n_total: 15,
          n_finished: 7,
          n_pass: 7,
          n_fail: 0,
          n_drop: 8,
          distribution: [
            {
              label: "1-2",
              value: 6,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 9,
            },
            {
              label: "4-5",
              value: 9,
            },
            {
              label: "5-6",
              value: 2,
            },
            {
              label: "6-7",
              value: 5,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO280-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "",
          n_total: 17,
          n_finished: 6,
          n_pass: 6,
          n_fail: 0,
          n_drop: 11,
          distribution: [
            {
              label: "1-2",
              value: 9,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 3,
            },
            {
              label: "4-5",
              value: 1,
            },
            {
              label: "5-6",
              value: 2,
            },
            {
              label: "6-7",
              value: 1,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN150-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "",
          n_total: 17,
          n_finished: 9,
          n_pass: 9,
          n_fail: 0,
          n_drop: 8,
          distribution: [
            {
              label: "1-2",
              value: 9,
            },
            {
              label: "2-3",
              value: 9,
            },
            {
              label: "3-4",
              value: 8,
            },
            {
              label: "4-5",
              value: 5,
            },
            {
              label: "5-6",
              value: 1,
            },
            {
              label: "6-7",
              value: 2,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO278-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "",
          n_total: 7,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 5,
          distribution: [
            {
              label: "1-2",
              value: 4,
            },
            {
              label: "2-3",
              value: 1,
            },
            {
              label: "3-4",
              value: 7,
            },
            {
              label: "4-5",
              value: 6,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 8,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO295-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "",
          n_total: 11,
          n_finished: 8,
          n_pass: 8,
          n_fail: 0,
          n_drop: 3,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 2,
            },
            {
              label: "3-4",
              value: 6,
            },
            {
              label: "4-5",
              value: 5,
            },
            {
              label: "5-6",
              value: 1,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO139-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "",
          n_total: 7,
          n_finished: 5,
          n_pass: 5,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 9,
            },
            {
              label: "3-4",
              value: 0,
            },
            {
              label: "4-5",
              value: 3,
            },
            {
              label: "5-6",
              value: 4,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI146-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "",
          n_total: 8,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 6,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 8,
            },
            {
              label: "3-4",
              value: 3,
            },
            {
              label: "4-5",
              value: 5,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 0,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT116",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "",
          n_total: 13,
          n_finished: 4,
          n_pass: 4,
          n_fail: 0,
          n_drop: 9,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 9,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO280-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "2016",
          n_total: 4,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 9,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 7,
            },
            {
              label: "4-5",
              value: 3,
            },
            {
              label: "5-6",
              value: 6,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN150-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "2016",
          n_total: 6,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 4,
          distribution: [
            {
              label: "1-2",
              value: 2,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 9,
            },
            {
              label: "4-5",
              value: 3,
            },
            {
              label: "5-6",
              value: 9,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO278-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "2016",
          n_total: 5,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 5,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 2,
            },
            {
              label: "4-5",
              value: 4,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 8,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO295-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "2016",
          n_total: 9,
          n_finished: 4,
          n_pass: 4,
          n_fail: 0,
          n_drop: 5,
          distribution: [
            {
              label: "1-2",
              value: 6,
            },
            {
              label: "2-3",
              value: 3,
            },
            {
              label: "3-4",
              value: 7,
            },
            {
              label: "4-5",
              value: 8,
            },
            {
              label: "5-6",
              value: 9,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO139-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "2016",
          n_total: 13,
          n_finished: 12,
          n_pass: 12,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 0,
            },
            {
              label: "2-3",
              value: 2,
            },
            {
              label: "3-4",
              value: 6,
            },
            {
              label: "4-5",
              value: 8,
            },
            {
              label: "5-6",
              value: 8,
            },
            {
              label: "6-7",
              value: 5,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI146-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "2016",
          n_total: 3,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 3,
            },
            {
              label: "3-4",
              value: 3,
            },
            {
              label: "4-5",
              value: 4,
            },
            {
              label: "5-6",
              value: 9,
            },
            {
              label: "6-7",
              value: 1,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT116",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "2016",
          n_total: 14,
          n_finished: 4,
          n_pass: 4,
          n_fail: 0,
          n_drop: 10,
          distribution: [
            {
              label: "1-2",
              value: 8,
            },
            {
              label: "2-3",
              value: 1,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 8,
            },
            {
              label: "5-6",
              value: 4,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO280-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "2017",
          n_total: 11,
          n_finished: 8,
          n_pass: 8,
          n_fail: 0,
          n_drop: 3,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 9,
            },
            {
              label: "3-4",
              value: 8,
            },
            {
              label: "4-5",
              value: 7,
            },
            {
              label: "5-6",
              value: 0,
            },
            {
              label: "6-7",
              value: 6,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN150-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "2017",
          n_total: 9,
          n_finished: 5,
          n_pass: 5,
          n_fail: 0,
          n_drop: 4,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 0,
            },
            {
              label: "3-4",
              value: 7,
            },
            {
              label: "4-5",
              value: 6,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 9,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO278-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "2017",
          n_total: 17,
          n_finished: 4,
          n_pass: 4,
          n_fail: 0,
          n_drop: 13,
          distribution: [
            {
              label: "1-2",
              value: 5,
            },
            {
              label: "2-3",
              value: 0,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 3,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 0,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO295-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "2017",
          n_total: 13,
          n_finished: 11,
          n_pass: 11,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 4,
            },
            {
              label: "2-3",
              value: 3,
            },
            {
              label: "3-4",
              value: 1,
            },
            {
              label: "4-5",
              value: 9,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO139-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "2017",
          n_total: 2,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 0,
            },
            {
              label: "2-3",
              value: 9,
            },
            {
              label: "3-4",
              value: 3,
            },
            {
              label: "4-5",
              value: 4,
            },
            {
              label: "5-6",
              value: 3,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI146-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "2017",
          n_total: 14,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 13,
          distribution: [
            {
              label: "1-2",
              value: 9,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 8,
            },
            {
              label: "4-5",
              value: 4,
            },
            {
              label: "5-6",
              value: 6,
            },
            {
              label: "6-7",
              value: 6,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT116",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "2017",
          n_total: 17,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 14,
          distribution: [
            {
              label: "1-2",
              value: 1,
            },
            {
              label: "2-3",
              value: 2,
            },
            {
              label: "3-4",
              value: 6,
            },
            {
              label: "4-5",
              value: 5,
            },
            {
              label: "5-6",
              value: 4,
            },
            {
              label: "6-7",
              value: 5,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO280-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "",
          n_total: 16,
          n_finished: 5,
          n_pass: 5,
          n_fail: 0,
          n_drop: 11,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 3,
            },
            {
              label: "4-5",
              value: 9,
            },
            {
              label: "5-6",
              value: 3,
            },
            {
              label: "6-7",
              value: 2,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN150-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "",
          n_total: 10,
          n_finished: 4,
          n_pass: 4,
          n_fail: 0,
          n_drop: 6,
          distribution: [
            {
              label: "1-2",
              value: 8,
            },
            {
              label: "2-3",
              value: 2,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 5,
            },
            {
              label: "5-6",
              value: 4,
            },
            {
              label: "6-7",
              value: 0,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO278-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "",
          n_total: 2,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 2,
            },
            {
              label: "2-3",
              value: 9,
            },
            {
              label: "3-4",
              value: 6,
            },
            {
              label: "4-5",
              value: 8,
            },
            {
              label: "5-6",
              value: 9,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO295-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "",
          n_total: 15,
          n_finished: 11,
          n_pass: 11,
          n_fail: 0,
          n_drop: 4,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 8,
            },
            {
              label: "4-5",
              value: 9,
            },
            {
              label: "5-6",
              value: 8,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO139-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "",
          n_total: 17,
          n_finished: 9,
          n_pass: 9,
          n_fail: 0,
          n_drop: 8,
          distribution: [
            {
              label: "1-2",
              value: 4,
            },
            {
              label: "2-3",
              value: 2,
            },
            {
              label: "3-4",
              value: 3,
            },
            {
              label: "4-5",
              value: 1,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 9,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI146-17",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "",
          n_total: 7,
          n_finished: 5,
          n_pass: 5,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 4,
            },
            {
              label: "5-6",
              value: 0,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT116",
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "",
          n_total: 7,
          n_finished: 5,
          n_pass: 5,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 8,
            },
            {
              label: "4-5",
              value: 4,
            },
            {
              label: "5-6",
              value: 0,
            },
            {
              label: "6-7",
              value: 2,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO280-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2016",
          n_total: 7,
          n_finished: 5,
          n_pass: 5,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 8,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 1,
            },
            {
              label: "4-5",
              value: 1,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN150-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2016",
          n_total: 2,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 0,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 8,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO278-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2016",
          n_total: 6,
          n_finished: 5,
          n_pass: 5,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 6,
            },
            {
              label: "4-5",
              value: 3,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO295-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2016",
          n_total: 14,
          n_finished: 12,
          n_pass: 12,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 0,
            },
            {
              label: "4-5",
              value: 6,
            },
            {
              label: "5-6",
              value: 9,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO139-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2016",
          n_total: 17,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 16,
          distribution: [
            {
              label: "1-2",
              value: 8,
            },
            {
              label: "2-3",
              value: 2,
            },
            {
              label: "3-4",
              value: 1,
            },
            {
              label: "4-5",
              value: 2,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI146-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2016",
          n_total: 9,
          n_finished: 4,
          n_pass: 4,
          n_fail: 0,
          n_drop: 5,
          distribution: [
            {
              label: "1-2",
              value: 2,
            },
            {
              label: "2-3",
              value: 9,
            },
            {
              label: "3-4",
              value: 6,
            },
            {
              label: "4-5",
              value: 8,
            },
            {
              label: "5-6",
              value: 0,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT116",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2016",
          n_total: 3,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 0,
            },
            {
              label: "2-3",
              value: 1,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 6,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 0,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO280-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2017",
          n_total: 2,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 4,
            },
            {
              label: "4-5",
              value: 1,
            },
            {
              label: "5-6",
              value: 0,
            },
            {
              label: "6-7",
              value: 8,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN150-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2017",
          n_total: 12,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 10,
          distribution: [
            {
              label: "1-2",
              value: 1,
            },
            {
              label: "2-3",
              value: 1,
            },
            {
              label: "3-4",
              value: 2,
            },
            {
              label: "4-5",
              value: 7,
            },
            {
              label: "5-6",
              value: 6,
            },
            {
              label: "6-7",
              value: 2,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO278-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2017",
          n_total: 12,
          n_finished: 9,
          n_pass: 9,
          n_fail: 0,
          n_drop: 3,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 9,
            },
            {
              label: "3-4",
              value: 9,
            },
            {
              label: "4-5",
              value: 3,
            },
            {
              label: "5-6",
              value: 9,
            },
            {
              label: "6-7",
              value: 0,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO295-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2017",
          n_total: 13,
          n_finished: 5,
          n_pass: 5,
          n_fail: 0,
          n_drop: 8,
          distribution: [
            {
              label: "1-2",
              value: 8,
            },
            {
              label: "2-3",
              value: 5,
            },
            {
              label: "3-4",
              value: 1,
            },
            {
              label: "4-5",
              value: 1,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 2,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO139-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2017",
          n_total: 6,
          n_finished: 5,
          n_pass: 5,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 5,
            },
            {
              label: "2-3",
              value: 9,
            },
            {
              label: "3-4",
              value: 6,
            },
            {
              label: "4-5",
              value: 1,
            },
            {
              label: "5-6",
              value: 6,
            },
            {
              label: "6-7",
              value: 2,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI146-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2017",
          n_total: 2,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 8,
            },
            {
              label: "2-3",
              value: 3,
            },
            {
              label: "3-4",
              value: 3,
            },
            {
              label: "4-5",
              value: 2,
            },
            {
              label: "5-6",
              value: 6,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT116",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2017",
          n_total: 2,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 1,
            },
            {
              label: "2-3",
              value: 9,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 4,
            },
            {
              label: "6-7",
              value: 0,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO280-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "",
          n_total: 10,
          n_finished: 9,
          n_pass: 9,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 6,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 6,
            },
            {
              label: "4-5",
              value: 6,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN150-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "",
          n_total: 4,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 3,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 0,
            },
            {
              label: "3-4",
              value: 1,
            },
            {
              label: "4-5",
              value: 1,
            },
            {
              label: "5-6",
              value: 3,
            },
            {
              label: "6-7",
              value: 1,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO278-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "",
          n_total: 10,
          n_finished: 4,
          n_pass: 4,
          n_fail: 0,
          n_drop: 6,
          distribution: [
            {
              label: "1-2",
              value: 2,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 2,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 0,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO295-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "",
          n_total: 7,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 6,
          distribution: [
            {
              label: "1-2",
              value: 2,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 2,
            },
            {
              label: "4-5",
              value: 4,
            },
            {
              label: "5-6",
              value: 6,
            },
            {
              label: "6-7",
              value: 1,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO139-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "",
          n_total: 16,
          n_finished: 12,
          n_pass: 12,
          n_fail: 0,
          n_drop: 4,
          distribution: [
            {
              label: "1-2",
              value: 0,
            },
            {
              label: "2-3",
              value: 9,
            },
            {
              label: "3-4",
              value: 3,
            },
            {
              label: "4-5",
              value: 8,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 1,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI146-17",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "",
          n_total: 2,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 9,
            },
            {
              label: "2-3",
              value: 1,
            },
            {
              label: "3-4",
              value: 0,
            },
            {
              label: "4-5",
              value: 8,
            },
            {
              label: "5-6",
              value: 2,
            },
            {
              label: "6-7",
              value: 6,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT116",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "",
          n_total: 9,
          n_finished: 4,
          n_pass: 4,
          n_fail: 0,
          n_drop: 5,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 0,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 4,
            },
            {
              label: "5-6",
              value: 8,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO261-08",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "2016",
          n_total: 16,
          n_finished: 9,
          n_pass: 9,
          n_fail: 0,
          n_drop: 7,
          distribution: [
            {
              label: "1-2",
              value: 4,
            },
            {
              label: "2-3",
              value: 8,
            },
            {
              label: "3-4",
              value: 1,
            },
            {
              label: "4-5",
              value: 4,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI298-09",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "2016",
          n_total: 12,
          n_finished: 10,
          n_pass: 10,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 1,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 2,
            },
            {
              label: "4-5",
              value: 2,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 6,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT20",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "2016",
          n_total: 9,
          n_finished: 7,
          n_pass: 7,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 8,
            },
            {
              label: "2-3",
              value: 1,
            },
            {
              label: "3-4",
              value: 3,
            },
            {
              label: "4-5",
              value: 2,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN036-07",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "2016",
          n_total: 4,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 3,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 8,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 6,
            },
            {
              label: "5-6",
              value: 9,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO284-08",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "2016",
          n_total: 19,
          n_finished: 12,
          n_pass: 12,
          n_fail: 0,
          n_drop: 7,
          distribution: [
            {
              label: "1-2",
              value: 2,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 7,
            },
            {
              label: "4-5",
              value: 7,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN038-07",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "2016",
          n_total: 10,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 9,
          distribution: [
            {
              label: "1-2",
              value: 2,
            },
            {
              label: "2-3",
              value: 5,
            },
            {
              label: "3-4",
              value: 9,
            },
            {
              label: "4-5",
              value: 1,
            },
            {
              label: "5-6",
              value: 3,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN041-07",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "2016",
          n_total: 11,
          n_finished: 6,
          n_pass: 6,
          n_fail: 0,
          n_drop: 5,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 9,
            },
            {
              label: "3-4",
              value: 3,
            },
            {
              label: "4-5",
              value: 5,
            },
            {
              label: "5-6",
              value: 3,
            },
            {
              label: "6-7",
              value: 6,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO261-08",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "2017",
          n_total: 6,
          n_finished: 5,
          n_pass: 5,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 9,
            },
            {
              label: "3-4",
              value: 7,
            },
            {
              label: "4-5",
              value: 9,
            },
            {
              label: "5-6",
              value: 2,
            },
            {
              label: "6-7",
              value: 2,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI298-09",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "2017",
          n_total: 2,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 8,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 1,
            },
            {
              label: "4-5",
              value: 6,
            },
            {
              label: "5-6",
              value: 1,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT20",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "2017",
          n_total: 6,
          n_finished: 5,
          n_pass: 5,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 1,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 3,
            },
            {
              label: "5-6",
              value: 3,
            },
            {
              label: "6-7",
              value: 8,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN036-07",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "2017",
          n_total: 11,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 10,
          distribution: [
            {
              label: "1-2",
              value: 1,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 8,
            },
            {
              label: "4-5",
              value: 4,
            },
            {
              label: "5-6",
              value: 6,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO284-08",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "2017",
          n_total: 18,
          n_finished: 6,
          n_pass: 6,
          n_fail: 0,
          n_drop: 12,
          distribution: [
            {
              label: "1-2",
              value: 5,
            },
            {
              label: "2-3",
              value: 1,
            },
            {
              label: "3-4",
              value: 4,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 2,
            },
            {
              label: "6-7",
              value: 5,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN038-07",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "2017",
          n_total: 13,
          n_finished: 8,
          n_pass: 8,
          n_fail: 0,
          n_drop: 5,
          distribution: [
            {
              label: "1-2",
              value: 9,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 1,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 6,
            },
            {
              label: "6-7",
              value: 0,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN041-07",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "2017",
          n_total: 4,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 1,
            },
            {
              label: "2-3",
              value: 0,
            },
            {
              label: "3-4",
              value: 9,
            },
            {
              label: "4-5",
              value: 3,
            },
            {
              label: "5-6",
              value: 4,
            },
            {
              label: "6-7",
              value: 2,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO261-08",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "",
          n_total: 19,
          n_finished: 15,
          n_pass: 15,
          n_fail: 0,
          n_drop: 4,
          distribution: [
            {
              label: "1-2",
              value: 8,
            },
            {
              label: "2-3",
              value: 0,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 4,
            },
            {
              label: "5-6",
              value: 9,
            },
            {
              label: "6-7",
              value: 6,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI298-09",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "",
          n_total: 15,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 12,
          distribution: [
            {
              label: "1-2",
              value: 9,
            },
            {
              label: "2-3",
              value: 0,
            },
            {
              label: "3-4",
              value: 8,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 8,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT20",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "",
          n_total: 6,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 5,
          distribution: [
            {
              label: "1-2",
              value: 6,
            },
            {
              label: "2-3",
              value: 8,
            },
            {
              label: "3-4",
              value: 4,
            },
            {
              label: "4-5",
              value: 1,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN036-07",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "",
          n_total: 18,
          n_finished: 13,
          n_pass: 13,
          n_fail: 0,
          n_drop: 5,
          distribution: [
            {
              label: "1-2",
              value: 6,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 4,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 9,
            },
            {
              label: "6-7",
              value: 1,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO284-08",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "",
          n_total: 2,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 6,
            },
            {
              label: "4-5",
              value: 9,
            },
            {
              label: "5-6",
              value: 4,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN038-07",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "",
          n_total: 18,
          n_finished: 7,
          n_pass: 7,
          n_fail: 0,
          n_drop: 11,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 6,
            },
            {
              label: "4-5",
              value: 2,
            },
            {
              label: "5-6",
              value: 4,
            },
            {
              label: "6-7",
              value: 0,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN041-07",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "",
          n_total: 16,
          n_finished: 13,
          n_pass: 13,
          n_fail: 0,
          n_drop: 3,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 0,
            },
            {
              label: "3-4",
              value: 0,
            },
            {
              label: "4-5",
              value: 5,
            },
            {
              label: "5-6",
              value: 1,
            },
            {
              label: "6-7",
              value: 5,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO261-08",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "2016",
          n_total: 5,
          n_finished: 4,
          n_pass: 4,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 0,
            },
            {
              label: "3-4",
              value: 3,
            },
            {
              label: "4-5",
              value: 7,
            },
            {
              label: "5-6",
              value: 3,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI298-09",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "2016",
          n_total: 3,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 1,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 7,
            },
            {
              label: "4-5",
              value: 3,
            },
            {
              label: "5-6",
              value: 1,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT20",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "2016",
          n_total: 14,
          n_finished: 6,
          n_pass: 6,
          n_fail: 0,
          n_drop: 8,
          distribution: [
            {
              label: "1-2",
              value: 6,
            },
            {
              label: "2-3",
              value: 1,
            },
            {
              label: "3-4",
              value: 1,
            },
            {
              label: "4-5",
              value: 1,
            },
            {
              label: "5-6",
              value: 8,
            },
            {
              label: "6-7",
              value: 8,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN036-07",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "2016",
          n_total: 7,
          n_finished: 6,
          n_pass: 6,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 8,
            },
            {
              label: "2-3",
              value: 9,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 8,
            },
            {
              label: "5-6",
              value: 0,
            },
            {
              label: "6-7",
              value: 5,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO284-08",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "2016",
          n_total: 3,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 2,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 7,
            },
            {
              label: "4-5",
              value: 7,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN038-07",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "2016",
          n_total: 5,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 3,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 0,
            },
            {
              label: "3-4",
              value: 0,
            },
            {
              label: "4-5",
              value: 8,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 9,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN041-07",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "2016",
          n_total: 19,
          n_finished: 6,
          n_pass: 6,
          n_fail: 0,
          n_drop: 13,
          distribution: [
            {
              label: "1-2",
              value: 8,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 2,
            },
            {
              label: "4-5",
              value: 7,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO261-08",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "2017",
          n_total: 16,
          n_finished: 12,
          n_pass: 12,
          n_fail: 0,
          n_drop: 4,
          distribution: [
            {
              label: "1-2",
              value: 8,
            },
            {
              label: "2-3",
              value: 9,
            },
            {
              label: "3-4",
              value: 2,
            },
            {
              label: "4-5",
              value: 6,
            },
            {
              label: "5-6",
              value: 0,
            },
            {
              label: "6-7",
              value: 6,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI298-09",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "2017",
          n_total: 6,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 5,
          distribution: [
            {
              label: "1-2",
              value: 1,
            },
            {
              label: "2-3",
              value: 2,
            },
            {
              label: "3-4",
              value: 3,
            },
            {
              label: "4-5",
              value: 3,
            },
            {
              label: "5-6",
              value: 6,
            },
            {
              label: "6-7",
              value: 0,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT20",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "2017",
          n_total: 10,
          n_finished: 7,
          n_pass: 7,
          n_fail: 0,
          n_drop: 3,
          distribution: [
            {
              label: "1-2",
              value: 2,
            },
            {
              label: "2-3",
              value: 2,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 3,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 8,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN036-07",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "2017",
          n_total: 6,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 4,
          distribution: [
            {
              label: "1-2",
              value: 6,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 6,
            },
            {
              label: "4-5",
              value: 8,
            },
            {
              label: "5-6",
              value: 0,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO284-08",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "2017",
          n_total: 5,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 2,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 6,
            },
            {
              label: "4-5",
              value: 4,
            },
            {
              label: "5-6",
              value: 2,
            },
            {
              label: "6-7",
              value: 9,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN038-07",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "2017",
          n_total: 18,
          n_finished: 7,
          n_pass: 7,
          n_fail: 0,
          n_drop: 11,
          distribution: [
            {
              label: "1-2",
              value: 4,
            },
            {
              label: "2-3",
              value: 8,
            },
            {
              label: "3-4",
              value: 8,
            },
            {
              label: "4-5",
              value: 1,
            },
            {
              label: "5-6",
              value: 6,
            },
            {
              label: "6-7",
              value: 0,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN041-07",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "2017",
          n_total: 11,
          n_finished: 4,
          n_pass: 4,
          n_fail: 0,
          n_drop: 7,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 9,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 1,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO261-08",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "",
          n_total: 15,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 14,
          distribution: [
            {
              label: "1-2",
              value: 1,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 3,
            },
            {
              label: "4-5",
              value: 9,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 9,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI298-09",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "",
          n_total: 17,
          n_finished: 12,
          n_pass: 12,
          n_fail: 0,
          n_drop: 5,
          distribution: [
            {
              label: "1-2",
              value: 2,
            },
            {
              label: "2-3",
              value: 0,
            },
            {
              label: "3-4",
              value: 1,
            },
            {
              label: "4-5",
              value: 5,
            },
            {
              label: "5-6",
              value: 1,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT20",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "",
          n_total: 10,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 7,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 4,
            },
            {
              label: "4-5",
              value: 9,
            },
            {
              label: "5-6",
              value: 9,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN036-07",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "",
          n_total: 7,
          n_finished: 4,
          n_pass: 4,
          n_fail: 0,
          n_drop: 3,
          distribution: [
            {
              label: "1-2",
              value: 9,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 2,
            },
            {
              label: "4-5",
              value: 5,
            },
            {
              label: "5-6",
              value: 9,
            },
            {
              label: "6-7",
              value: 1,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO284-08",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "",
          n_total: 14,
          n_finished: 5,
          n_pass: 5,
          n_fail: 0,
          n_drop: 9,
          distribution: [
            {
              label: "1-2",
              value: 2,
            },
            {
              label: "2-3",
              value: 2,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN038-07",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "",
          n_total: 4,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 6,
            },
            {
              label: "2-3",
              value: 9,
            },
            {
              label: "3-4",
              value: 4,
            },
            {
              label: "4-5",
              value: 2,
            },
            {
              label: "5-6",
              value: 1,
            },
            {
              label: "6-7",
              value: 6,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN041-07",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "",
          n_total: 6,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 4,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 0,
            },
            {
              label: "3-4",
              value: 9,
            },
            {
              label: "4-5",
              value: 4,
            },
            {
              label: "5-6",
              value: 2,
            },
            {
              label: "6-7",
              value: 2,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO261-08",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "2016",
          n_total: 5,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 3,
          distribution: [
            {
              label: "1-2",
              value: 4,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 3,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 8,
            },
            {
              label: "6-7",
              value: 0,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI298-09",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "2016",
          n_total: 5,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 6,
            },
            {
              label: "2-3",
              value: 3,
            },
            {
              label: "3-4",
              value: 6,
            },
            {
              label: "4-5",
              value: 2,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 2,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT20",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "2016",
          n_total: 12,
          n_finished: 10,
          n_pass: 10,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 9,
            },
            {
              label: "2-3",
              value: 5,
            },
            {
              label: "3-4",
              value: 3,
            },
            {
              label: "4-5",
              value: 7,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 9,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN036-07",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "2016",
          n_total: 5,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 9,
            },
            {
              label: "2-3",
              value: 2,
            },
            {
              label: "3-4",
              value: 9,
            },
            {
              label: "4-5",
              value: 8,
            },
            {
              label: "5-6",
              value: 1,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO284-08",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "2016",
          n_total: 17,
          n_finished: 13,
          n_pass: 13,
          n_fail: 0,
          n_drop: 4,
          distribution: [
            {
              label: "1-2",
              value: 1,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 4,
            },
            {
              label: "4-5",
              value: 2,
            },
            {
              label: "5-6",
              value: 2,
            },
            {
              label: "6-7",
              value: 9,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN038-07",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "2016",
          n_total: 6,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 3,
          distribution: [
            {
              label: "1-2",
              value: 4,
            },
            {
              label: "2-3",
              value: 2,
            },
            {
              label: "3-4",
              value: 7,
            },
            {
              label: "4-5",
              value: 8,
            },
            {
              label: "5-6",
              value: 9,
            },
            {
              label: "6-7",
              value: 1,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN041-07",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "2016",
          n_total: 6,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 5,
          distribution: [
            {
              label: "1-2",
              value: 4,
            },
            {
              label: "2-3",
              value: 3,
            },
            {
              label: "3-4",
              value: 1,
            },
            {
              label: "4-5",
              value: 2,
            },
            {
              label: "5-6",
              value: 2,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO261-08",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "2017",
          n_total: 16,
          n_finished: 5,
          n_pass: 5,
          n_fail: 0,
          n_drop: 11,
          distribution: [
            {
              label: "1-2",
              value: 8,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 0,
            },
            {
              label: "4-5",
              value: 7,
            },
            {
              label: "5-6",
              value: 3,
            },
            {
              label: "6-7",
              value: 1,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI298-09",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "2017",
          n_total: 9,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 7,
          distribution: [
            {
              label: "1-2",
              value: 2,
            },
            {
              label: "2-3",
              value: 8,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 8,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 2,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT20",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "2017",
          n_total: 15,
          n_finished: 8,
          n_pass: 8,
          n_fail: 0,
          n_drop: 7,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 9,
            },
            {
              label: "3-4",
              value: 7,
            },
            {
              label: "4-5",
              value: 9,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 2,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN036-07",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "2017",
          n_total: 6,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 5,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 5,
            },
            {
              label: "3-4",
              value: 4,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 9,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO284-08",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "2017",
          n_total: 17,
          n_finished: 10,
          n_pass: 10,
          n_fail: 0,
          n_drop: 7,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 1,
            },
            {
              label: "3-4",
              value: 0,
            },
            {
              label: "4-5",
              value: 3,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 0,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN038-07",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "2017",
          n_total: 7,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 4,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 5,
            },
            {
              label: "3-4",
              value: 3,
            },
            {
              label: "4-5",
              value: 3,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 9,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN041-07",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "2017",
          n_total: 11,
          n_finished: 9,
          n_pass: 9,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 8,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 1,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO261-08",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "",
          n_total: 11,
          n_finished: 10,
          n_pass: 10,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 0,
            },
            {
              label: "2-3",
              value: 5,
            },
            {
              label: "3-4",
              value: 3,
            },
            {
              label: "4-5",
              value: 7,
            },
            {
              label: "5-6",
              value: 6,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI298-09",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "",
          n_total: 10,
          n_finished: 6,
          n_pass: 6,
          n_fail: 0,
          n_drop: 4,
          distribution: [
            {
              label: "1-2",
              value: 0,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 9,
            },
            {
              label: "4-5",
              value: 2,
            },
            {
              label: "5-6",
              value: 0,
            },
            {
              label: "6-7",
              value: 2,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT20",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "",
          n_total: 14,
          n_finished: 4,
          n_pass: 4,
          n_fail: 0,
          n_drop: 10,
          distribution: [
            {
              label: "1-2",
              value: 0,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 3,
            },
            {
              label: "4-5",
              value: 9,
            },
            {
              label: "5-6",
              value: 2,
            },
            {
              label: "6-7",
              value: 8,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN036-07",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "",
          n_total: 16,
          n_finished: 10,
          n_pass: 10,
          n_fail: 0,
          n_drop: 6,
          distribution: [
            {
              label: "1-2",
              value: 2,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 7,
            },
            {
              label: "4-5",
              value: 1,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO284-08",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "",
          n_total: 16,
          n_finished: 14,
          n_pass: 14,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 1,
            },
            {
              label: "2-3",
              value: 9,
            },
            {
              label: "3-4",
              value: 9,
            },
            {
              label: "4-5",
              value: 3,
            },
            {
              label: "5-6",
              value: 9,
            },
            {
              label: "6-7",
              value: 1,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN038-07",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "",
          n_total: 16,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 15,
          distribution: [
            {
              label: "1-2",
              value: 1,
            },
            {
              label: "2-3",
              value: 5,
            },
            {
              label: "3-4",
              value: 2,
            },
            {
              label: "4-5",
              value: 9,
            },
            {
              label: "5-6",
              value: 0,
            },
            {
              label: "6-7",
              value: 5,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN041-07",
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "",
          n_total: 14,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 11,
          distribution: [
            {
              label: "1-2",
              value: 9,
            },
            {
              label: "2-3",
              value: 1,
            },
            {
              label: "3-4",
              value: 9,
            },
            {
              label: "4-5",
              value: 5,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 6,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO261-08",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2016",
          n_total: 5,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 4,
          distribution: [
            {
              label: "1-2",
              value: 2,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 1,
            },
            {
              label: "4-5",
              value: 4,
            },
            {
              label: "5-6",
              value: 2,
            },
            {
              label: "6-7",
              value: 2,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI298-09",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2016",
          n_total: 7,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 6,
          distribution: [
            {
              label: "1-2",
              value: 4,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 8,
            },
            {
              label: "4-5",
              value: 5,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 2,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT20",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2016",
          n_total: 15,
          n_finished: 9,
          n_pass: 9,
          n_fail: 0,
          n_drop: 6,
          distribution: [
            {
              label: "1-2",
              value: 1,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 2,
            },
            {
              label: "4-5",
              value: 1,
            },
            {
              label: "5-6",
              value: 2,
            },
            {
              label: "6-7",
              value: 0,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN036-07",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2016",
          n_total: 7,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 4,
          distribution: [
            {
              label: "1-2",
              value: 1,
            },
            {
              label: "2-3",
              value: 2,
            },
            {
              label: "3-4",
              value: 3,
            },
            {
              label: "4-5",
              value: 5,
            },
            {
              label: "5-6",
              value: 1,
            },
            {
              label: "6-7",
              value: 0,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO284-08",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2016",
          n_total: 16,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 15,
          distribution: [
            {
              label: "1-2",
              value: 8,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 4,
            },
            {
              label: "4-5",
              value: 5,
            },
            {
              label: "5-6",
              value: 4,
            },
            {
              label: "6-7",
              value: 5,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN038-07",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2016",
          n_total: 15,
          n_finished: 11,
          n_pass: 11,
          n_fail: 0,
          n_drop: 4,
          distribution: [
            {
              label: "1-2",
              value: 5,
            },
            {
              label: "2-3",
              value: 5,
            },
            {
              label: "3-4",
              value: 1,
            },
            {
              label: "4-5",
              value: 1,
            },
            {
              label: "5-6",
              value: 0,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN041-07",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2016",
          n_total: 8,
          n_finished: 7,
          n_pass: 7,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 4,
            },
            {
              label: "2-3",
              value: 5,
            },
            {
              label: "3-4",
              value: 3,
            },
            {
              label: "4-5",
              value: 7,
            },
            {
              label: "5-6",
              value: 8,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO261-08",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2017",
          n_total: 14,
          n_finished: 10,
          n_pass: 10,
          n_fail: 0,
          n_drop: 4,
          distribution: [
            {
              label: "1-2",
              value: 2,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 3,
            },
            {
              label: "4-5",
              value: 2,
            },
            {
              label: "5-6",
              value: 9,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI298-09",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2017",
          n_total: 15,
          n_finished: 6,
          n_pass: 6,
          n_fail: 0,
          n_drop: 9,
          distribution: [
            {
              label: "1-2",
              value: 6,
            },
            {
              label: "2-3",
              value: 8,
            },
            {
              label: "3-4",
              value: 1,
            },
            {
              label: "4-5",
              value: 1,
            },
            {
              label: "5-6",
              value: 1,
            },
            {
              label: "6-7",
              value: 9,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT20",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2017",
          n_total: 14,
          n_finished: 12,
          n_pass: 12,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 6,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 2,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 0,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN036-07",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2017",
          n_total: 12,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 11,
          distribution: [
            {
              label: "1-2",
              value: 9,
            },
            {
              label: "2-3",
              value: 2,
            },
            {
              label: "3-4",
              value: 0,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 0,
            },
            {
              label: "6-7",
              value: 2,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO284-08",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2017",
          n_total: 6,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 3,
          distribution: [
            {
              label: "1-2",
              value: 5,
            },
            {
              label: "2-3",
              value: 8,
            },
            {
              label: "3-4",
              value: 8,
            },
            {
              label: "4-5",
              value: 3,
            },
            {
              label: "5-6",
              value: 8,
            },
            {
              label: "6-7",
              value: 8,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN038-07",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2017",
          n_total: 16,
          n_finished: 10,
          n_pass: 10,
          n_fail: 0,
          n_drop: 6,
          distribution: [
            {
              label: "1-2",
              value: 0,
            },
            {
              label: "2-3",
              value: 2,
            },
            {
              label: "3-4",
              value: 9,
            },
            {
              label: "4-5",
              value: 2,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 1,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN041-07",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2017",
          n_total: 5,
          n_finished: 4,
          n_pass: 4,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 9,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 6,
            },
            {
              label: "4-5",
              value: 2,
            },
            {
              label: "5-6",
              value: 8,
            },
            {
              label: "6-7",
              value: 8,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO261-08",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "",
          n_total: 5,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 3,
          distribution: [
            {
              label: "1-2",
              value: 6,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 1,
            },
            {
              label: "4-5",
              value: 3,
            },
            {
              label: "5-6",
              value: 0,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI298-09",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "",
          n_total: 19,
          n_finished: 8,
          n_pass: 8,
          n_fail: 0,
          n_drop: 11,
          distribution: [
            {
              label: "1-2",
              value: 1,
            },
            {
              label: "2-3",
              value: 2,
            },
            {
              label: "3-4",
              value: 1,
            },
            {
              label: "4-5",
              value: 1,
            },
            {
              label: "5-6",
              value: 2,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT20",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "",
          n_total: 12,
          n_finished: 10,
          n_pass: 10,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 9,
            },
            {
              label: "2-3",
              value: 9,
            },
            {
              label: "3-4",
              value: 4,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 2,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN036-07",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "",
          n_total: 9,
          n_finished: 5,
          n_pass: 5,
          n_fail: 0,
          n_drop: 4,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 3,
            },
            {
              label: "3-4",
              value: 7,
            },
            {
              label: "4-5",
              value: 1,
            },
            {
              label: "5-6",
              value: 9,
            },
            {
              label: "6-7",
              value: 1,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO284-08",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "",
          n_total: 7,
          n_finished: 6,
          n_pass: 6,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 9,
            },
            {
              label: "2-3",
              value: 3,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 6,
            },
            {
              label: "5-6",
              value: 4,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN038-07",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "",
          n_total: 19,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 17,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 3,
            },
            {
              label: "3-4",
              value: 7,
            },
            {
              label: "4-5",
              value: 8,
            },
            {
              label: "5-6",
              value: 3,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN041-07",
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "",
          n_total: 19,
          n_finished: 13,
          n_pass: 13,
          n_fail: 0,
          n_drop: 6,
          distribution: [
            {
              label: "1-2",
              value: 1,
            },
            {
              label: "2-3",
              value: 5,
            },
            {
              label: "3-4",
              value: 2,
            },
            {
              label: "4-5",
              value: 9,
            },
            {
              label: "5-6",
              value: 9,
            },
            {
              label: "6-7",
              value: 0,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO261-08",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2016",
          n_total: 9,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 6,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 8,
            },
            {
              label: "3-4",
              value: 6,
            },
            {
              label: "4-5",
              value: 3,
            },
            {
              label: "5-6",
              value: 4,
            },
            {
              label: "6-7",
              value: 6,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI298-09",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2016",
          n_total: 18,
          n_finished: 9,
          n_pass: 9,
          n_fail: 0,
          n_drop: 9,
          distribution: [
            {
              label: "1-2",
              value: 4,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 6,
            },
            {
              label: "4-5",
              value: 8,
            },
            {
              label: "5-6",
              value: 3,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT20",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2016",
          n_total: 15,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 12,
          distribution: [
            {
              label: "1-2",
              value: 1,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 8,
            },
            {
              label: "4-5",
              value: 9,
            },
            {
              label: "5-6",
              value: 1,
            },
            {
              label: "6-7",
              value: 1,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN036-07",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2016",
          n_total: 19,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 16,
          distribution: [
            {
              label: "1-2",
              value: 0,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 8,
            },
            {
              label: "4-5",
              value: 5,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 2,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO284-08",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2016",
          n_total: 2,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 2,
            },
            {
              label: "2-3",
              value: 8,
            },
            {
              label: "3-4",
              value: 2,
            },
            {
              label: "4-5",
              value: 7,
            },
            {
              label: "5-6",
              value: 4,
            },
            {
              label: "6-7",
              value: 1,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN038-07",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2016",
          n_total: 8,
          n_finished: 5,
          n_pass: 5,
          n_fail: 0,
          n_drop: 3,
          distribution: [
            {
              label: "1-2",
              value: 9,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 0,
            },
            {
              label: "4-5",
              value: 6,
            },
            {
              label: "5-6",
              value: 0,
            },
            {
              label: "6-7",
              value: 1,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN041-07",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2016",
          n_total: 6,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 4,
          distribution: [
            {
              label: "1-2",
              value: 1,
            },
            {
              label: "2-3",
              value: 8,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 7,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 2,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO261-08",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2017",
          n_total: 7,
          n_finished: 4,
          n_pass: 4,
          n_fail: 0,
          n_drop: 3,
          distribution: [
            {
              label: "1-2",
              value: 5,
            },
            {
              label: "2-3",
              value: 9,
            },
            {
              label: "3-4",
              value: 6,
            },
            {
              label: "4-5",
              value: 9,
            },
            {
              label: "5-6",
              value: 8,
            },
            {
              label: "6-7",
              value: 9,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI298-09",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2017",
          n_total: 12,
          n_finished: 5,
          n_pass: 5,
          n_fail: 0,
          n_drop: 7,
          distribution: [
            {
              label: "1-2",
              value: 1,
            },
            {
              label: "2-3",
              value: 2,
            },
            {
              label: "3-4",
              value: 4,
            },
            {
              label: "4-5",
              value: 2,
            },
            {
              label: "5-6",
              value: 4,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT20",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2017",
          n_total: 12,
          n_finished: 6,
          n_pass: 6,
          n_fail: 0,
          n_drop: 6,
          distribution: [
            {
              label: "1-2",
              value: 0,
            },
            {
              label: "2-3",
              value: 1,
            },
            {
              label: "3-4",
              value: 6,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 4,
            },
            {
              label: "6-7",
              value: 5,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN036-07",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2017",
          n_total: 19,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 16,
          distribution: [
            {
              label: "1-2",
              value: 1,
            },
            {
              label: "2-3",
              value: 9,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 8,
            },
            {
              label: "5-6",
              value: 6,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO284-08",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2017",
          n_total: 19,
          n_finished: 6,
          n_pass: 6,
          n_fail: 0,
          n_drop: 13,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 0,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 8,
            },
            {
              label: "5-6",
              value: 6,
            },
            {
              label: "6-7",
              value: 1,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN038-07",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2017",
          n_total: 7,
          n_finished: 6,
          n_pass: 6,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 1,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 6,
            },
            {
              label: "5-6",
              value: 2,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN041-07",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2017",
          n_total: 16,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 13,
          distribution: [
            {
              label: "1-2",
              value: 4,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 1,
            },
            {
              label: "4-5",
              value: 6,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO261-08",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "",
          n_total: 14,
          n_finished: 11,
          n_pass: 11,
          n_fail: 0,
          n_drop: 3,
          distribution: [
            {
              label: "1-2",
              value: 4,
            },
            {
              label: "2-3",
              value: 9,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 8,
            },
            {
              label: "5-6",
              value: 6,
            },
            {
              label: "6-7",
              value: 6,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI298-09",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "",
          n_total: 8,
          n_finished: 5,
          n_pass: 5,
          n_fail: 0,
          n_drop: 3,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 3,
            },
            {
              label: "3-4",
              value: 6,
            },
            {
              label: "4-5",
              value: 2,
            },
            {
              label: "5-6",
              value: 3,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT20",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "",
          n_total: 10,
          n_finished: 7,
          n_pass: 7,
          n_fail: 0,
          n_drop: 3,
          distribution: [
            {
              label: "1-2",
              value: 4,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 0,
            },
            {
              label: "4-5",
              value: 8,
            },
            {
              label: "5-6",
              value: 1,
            },
            {
              label: "6-7",
              value: 0,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN036-07",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "",
          n_total: 17,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 15,
          distribution: [
            {
              label: "1-2",
              value: 2,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 9,
            },
            {
              label: "4-5",
              value: 4,
            },
            {
              label: "5-6",
              value: 4,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO284-08",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "",
          n_total: 19,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 18,
          distribution: [
            {
              label: "1-2",
              value: 8,
            },
            {
              label: "2-3",
              value: 2,
            },
            {
              label: "3-4",
              value: 6,
            },
            {
              label: "4-5",
              value: 4,
            },
            {
              label: "5-6",
              value: 6,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN038-07",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "",
          n_total: 16,
          n_finished: 15,
          n_pass: 15,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 5,
            },
            {
              label: "2-3",
              value: 3,
            },
            {
              label: "3-4",
              value: 6,
            },
            {
              label: "4-5",
              value: 3,
            },
            {
              label: "5-6",
              value: 9,
            },
            {
              label: "6-7",
              value: 2,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN041-07",
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "",
          n_total: 11,
          n_finished: 9,
          n_pass: 9,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 0,
            },
            {
              label: "2-3",
              value: 9,
            },
            {
              label: "3-4",
              value: 7,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO261-08",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2016",
          n_total: 3,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 3,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 2,
            },
            {
              label: "6-7",
              value: 5,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI298-09",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2016",
          n_total: 5,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 9,
            },
            {
              label: "2-3",
              value: 1,
            },
            {
              label: "3-4",
              value: 1,
            },
            {
              label: "4-5",
              value: 8,
            },
            {
              label: "5-6",
              value: 8,
            },
            {
              label: "6-7",
              value: 8,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT20",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2016",
          n_total: 8,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 5,
          distribution: [
            {
              label: "1-2",
              value: 3,
            },
            {
              label: "2-3",
              value: 1,
            },
            {
              label: "3-4",
              value: 2,
            },
            {
              label: "4-5",
              value: 5,
            },
            {
              label: "5-6",
              value: 0,
            },
            {
              label: "6-7",
              value: 9,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN036-07",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2016",
          n_total: 5,
          n_finished: 4,
          n_pass: 4,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 0,
            },
            {
              label: "2-3",
              value: 5,
            },
            {
              label: "3-4",
              value: 6,
            },
            {
              label: "4-5",
              value: 4,
            },
            {
              label: "5-6",
              value: 8,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO284-08",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2016",
          n_total: 19,
          n_finished: 6,
          n_pass: 6,
          n_fail: 0,
          n_drop: 13,
          distribution: [
            {
              label: "1-2",
              value: 5,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 9,
            },
            {
              label: "4-5",
              value: 1,
            },
            {
              label: "5-6",
              value: 1,
            },
            {
              label: "6-7",
              value: 6,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN038-07",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2016",
          n_total: 8,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 7,
          distribution: [
            {
              label: "1-2",
              value: 4,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 9,
            },
            {
              label: "4-5",
              value: 2,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN041-07",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2016",
          n_total: 10,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 9,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 9,
            },
            {
              label: "5-6",
              value: 0,
            },
            {
              label: "6-7",
              value: 9,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO261-08",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2017",
          n_total: 3,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 4,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 2,
            },
            {
              label: "4-5",
              value: 4,
            },
            {
              label: "5-6",
              value: 8,
            },
            {
              label: "6-7",
              value: 8,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI298-09",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2017",
          n_total: 18,
          n_finished: 10,
          n_pass: 10,
          n_fail: 0,
          n_drop: 8,
          distribution: [
            {
              label: "1-2",
              value: 1,
            },
            {
              label: "2-3",
              value: 9,
            },
            {
              label: "3-4",
              value: 7,
            },
            {
              label: "4-5",
              value: 3,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 9,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT20",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2017",
          n_total: 11,
          n_finished: 6,
          n_pass: 6,
          n_fail: 0,
          n_drop: 5,
          distribution: [
            {
              label: "1-2",
              value: 0,
            },
            {
              label: "2-3",
              value: 3,
            },
            {
              label: "3-4",
              value: 8,
            },
            {
              label: "4-5",
              value: 7,
            },
            {
              label: "5-6",
              value: 1,
            },
            {
              label: "6-7",
              value: 0,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN036-07",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2017",
          n_total: 8,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 6,
          distribution: [
            {
              label: "1-2",
              value: 4,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 6,
            },
            {
              label: "4-5",
              value: 9,
            },
            {
              label: "5-6",
              value: 6,
            },
            {
              label: "6-7",
              value: 7,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO284-08",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2017",
          n_total: 14,
          n_finished: 5,
          n_pass: 5,
          n_fail: 0,
          n_drop: 9,
          distribution: [
            {
              label: "1-2",
              value: 9,
            },
            {
              label: "2-3",
              value: 0,
            },
            {
              label: "3-4",
              value: 9,
            },
            {
              label: "4-5",
              value: 7,
            },
            {
              label: "5-6",
              value: 0,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN038-07",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2017",
          n_total: 2,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 5,
            },
            {
              label: "2-3",
              value: 6,
            },
            {
              label: "3-4",
              value: 9,
            },
            {
              label: "4-5",
              value: 8,
            },
            {
              label: "5-6",
              value: 9,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN041-07",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2017",
          n_total: 7,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 4,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 1,
            },
            {
              label: "3-4",
              value: 1,
            },
            {
              label: "4-5",
              value: 6,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 9,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO261-08",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "",
          n_total: 6,
          n_finished: 2,
          n_pass: 2,
          n_fail: 0,
          n_drop: 4,
          distribution: [
            {
              label: "1-2",
              value: 7,
            },
            {
              label: "2-3",
              value: 3,
            },
            {
              label: "3-4",
              value: 9,
            },
            {
              label: "4-5",
              value: 8,
            },
            {
              label: "5-6",
              value: 4,
            },
            {
              label: "6-7",
              value: 3,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "EICI298-09",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "",
          n_total: 8,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 5,
          distribution: [
            {
              label: "1-2",
              value: 1,
            },
            {
              label: "2-3",
              value: 2,
            },
            {
              label: "3-4",
              value: 2,
            },
            {
              label: "4-5",
              value: 5,
            },
            {
              label: "5-6",
              value: 4,
            },
            {
              label: "6-7",
              value: 9,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "ELECT20",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "",
          n_total: 10,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 7,
          distribution: [
            {
              label: "1-2",
              value: 2,
            },
            {
              label: "2-3",
              value: 5,
            },
            {
              label: "3-4",
              value: 5,
            },
            {
              label: "4-5",
              value: 0,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 6,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN036-07",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "",
          n_total: 2,
          n_finished: 1,
          n_pass: 1,
          n_fail: 0,
          n_drop: 1,
          distribution: [
            {
              label: "1-2",
              value: 5,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 2,
            },
            {
              label: "4-5",
              value: 6,
            },
            {
              label: "5-6",
              value: 7,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "INFO284-08",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "",
          n_total: 12,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 9,
          distribution: [
            {
              label: "1-2",
              value: 8,
            },
            {
              label: "2-3",
              value: 7,
            },
            {
              label: "3-4",
              value: 1,
            },
            {
              label: "4-5",
              value: 3,
            },
            {
              label: "5-6",
              value: 1,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN038-07",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "",
          n_total: 8,
          n_finished: 5,
          n_pass: 5,
          n_fail: 0,
          n_drop: 3,
          distribution: [
            {
              label: "1-2",
              value: 6,
            },
            {
              label: "2-3",
              value: 8,
            },
            {
              label: "3-4",
              value: 0,
            },
            {
              label: "4-5",
              value: 8,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 6,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
        {
          id: "BAIN041-07",
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "",
          n_total: 5,
          n_finished: 3,
          n_pass: 3,
          n_fail: 0,
          n_drop: 2,
          distribution: [
            {
              label: "1-2",
              value: 0,
            },
            {
              label: "2-3",
              value: 4,
            },
            {
              label: "3-4",
              value: 9,
            },
            {
              label: "4-5",
              value: 2,
            },
            {
              label: "5-6",
              value: 5,
            },
            {
              label: "6-7",
              value: 4,
            },
          ],
          color_bands: [
            {
              min: 1,
              max: 3.4999,
              color: "#d6604d",
            },
            {
              min: 3.5,
              max: 3.9999,
              color: "#f48873",
            },
            {
              min: 4,
              max: 4.4999,
              color: "#a7dc78",
            },
            {
              min: 4.5,
              max: 7,
              color: "#66b43e",
            },
          ],
        },
      ],

      groupedComplementary: [
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "2016",
          total_students: 28,
          university_degree_rate: 68,
          retention_rate: 55,
          average_time_university_degree: 57,
          timely_university_degree_rate: 55,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "2016",
          total_students: 20,
          university_degree_rate: 66,
          retention_rate: 64,
          average_time_university_degree: 51,
          timely_university_degree_rate: 61,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2016",
          total_students: 17,
          university_degree_rate: 50,
          retention_rate: 46,
          average_time_university_degree: 68,
          timely_university_degree_rate: 52,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "2017",
          total_students: 14,
          university_degree_rate: 48,
          retention_rate: 49,
          average_time_university_degree: 48,
          timely_university_degree_rate: 47,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "2017",
          total_students: 28,
          university_degree_rate: 67,
          retention_rate: 46,
          average_time_university_degree: 47,
          timely_university_degree_rate: 50,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2017",
          total_students: 15,
          university_degree_rate: 68,
          retention_rate: 48,
          average_time_university_degree: 49,
          timely_university_degree_rate: 63,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "2018",
          total_students: 14,
          university_degree_rate: 48,
          retention_rate: 65,
          average_time_university_degree: 51,
          timely_university_degree_rate: 65,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "2018",
          total_students: 16,
          university_degree_rate: 61,
          retention_rate: 66,
          average_time_university_degree: 59,
          timely_university_degree_rate: 55,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2018",
          total_students: 22,
          university_degree_rate: 50,
          retention_rate: 55,
          average_time_university_degree: 58,
          timely_university_degree_rate: 51,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "2019",
          total_students: 21,
          university_degree_rate: 55,
          retention_rate: 55,
          average_time_university_degree: 64,
          timely_university_degree_rate: 67,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "2019",
          total_students: 19,
          university_degree_rate: 59,
          retention_rate: 49,
          average_time_university_degree: 55,
          timely_university_degree_rate: 69,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2019",
          total_students: 27,
          university_degree_rate: 69,
          retention_rate: 58,
          average_time_university_degree: 57,
          timely_university_degree_rate: 67,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "2020",
          total_students: 28,
          university_degree_rate: 63,
          retention_rate: 62,
          average_time_university_degree: 57,
          timely_university_degree_rate: 66,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "2020",
          total_students: 20,
          university_degree_rate: 56,
          retention_rate: 58,
          average_time_university_degree: 57,
          timely_university_degree_rate: 62,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2020",
          total_students: 16,
          university_degree_rate: 48,
          retention_rate: 57,
          average_time_university_degree: 50,
          timely_university_degree_rate: 52,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "",
          total_students: 25,
          university_degree_rate: 50,
          retention_rate: 55,
          average_time_university_degree: 55,
          timely_university_degree_rate: 67,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "",
          total_students: 20,
          university_degree_rate: 58,
          retention_rate: 65,
          average_time_university_degree: 68,
          timely_university_degree_rate: 54,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "",
          total_students: 12,
          university_degree_rate: 59,
          retention_rate: 46,
          average_time_university_degree: 62,
          timely_university_degree_rate: 60,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "2016",
          total_students: 22,
          university_degree_rate: 53,
          retention_rate: 51,
          average_time_university_degree: 48,
          timely_university_degree_rate: 68,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "2016",
          total_students: 11,
          university_degree_rate: 52,
          retention_rate: 57,
          average_time_university_degree: 63,
          timely_university_degree_rate: 52,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2016",
          total_students: 22,
          university_degree_rate: 65,
          retention_rate: 66,
          average_time_university_degree: 65,
          timely_university_degree_rate: 48,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "2017",
          total_students: 27,
          university_degree_rate: 63,
          retention_rate: 68,
          average_time_university_degree: 64,
          timely_university_degree_rate: 58,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "2017",
          total_students: 23,
          university_degree_rate: 46,
          retention_rate: 50,
          average_time_university_degree: 60,
          timely_university_degree_rate: 59,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2017",
          total_students: 18,
          university_degree_rate: 54,
          retention_rate: 46,
          average_time_university_degree: 64,
          timely_university_degree_rate: 60,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "2018",
          total_students: 24,
          university_degree_rate: 61,
          retention_rate: 62,
          average_time_university_degree: 46,
          timely_university_degree_rate: 58,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "2018",
          total_students: 21,
          university_degree_rate: 60,
          retention_rate: 69,
          average_time_university_degree: 52,
          timely_university_degree_rate: 53,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2018",
          total_students: 28,
          university_degree_rate: 55,
          retention_rate: 60,
          average_time_university_degree: 62,
          timely_university_degree_rate: 57,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "2019",
          total_students: 25,
          university_degree_rate: 68,
          retention_rate: 49,
          average_time_university_degree: 64,
          timely_university_degree_rate: 59,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "2019",
          total_students: 28,
          university_degree_rate: 64,
          retention_rate: 55,
          average_time_university_degree: 60,
          timely_university_degree_rate: 47,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2019",
          total_students: 20,
          university_degree_rate: 47,
          retention_rate: 60,
          average_time_university_degree: 66,
          timely_university_degree_rate: 54,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "2020",
          total_students: 10,
          university_degree_rate: 66,
          retention_rate: 50,
          average_time_university_degree: 49,
          timely_university_degree_rate: 46,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "2020",
          total_students: 25,
          university_degree_rate: 64,
          retention_rate: 51,
          average_time_university_degree: 50,
          timely_university_degree_rate: 62,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2020",
          total_students: 19,
          university_degree_rate: 68,
          retention_rate: 67,
          average_time_university_degree: 65,
          timely_university_degree_rate: 59,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "",
          total_students: 26,
          university_degree_rate: 66,
          retention_rate: 61,
          average_time_university_degree: 54,
          timely_university_degree_rate: 56,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "",
          total_students: 24,
          university_degree_rate: 68,
          retention_rate: 53,
          average_time_university_degree: 68,
          timely_university_degree_rate: 56,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "",
          total_students: 16,
          university_degree_rate: 49,
          retention_rate: 50,
          average_time_university_degree: 61,
          timely_university_degree_rate: 54,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "2016",
          total_students: 26,
          university_degree_rate: 47,
          retention_rate: 45,
          average_time_university_degree: 68,
          timely_university_degree_rate: 68,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "2016",
          total_students: 28,
          university_degree_rate: 67,
          retention_rate: 69,
          average_time_university_degree: 58,
          timely_university_degree_rate: 63,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2016",
          total_students: 25,
          university_degree_rate: 58,
          retention_rate: 55,
          average_time_university_degree: 52,
          timely_university_degree_rate: 47,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "2017",
          total_students: 16,
          university_degree_rate: 50,
          retention_rate: 50,
          average_time_university_degree: 56,
          timely_university_degree_rate: 60,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "2017",
          total_students: 15,
          university_degree_rate: 53,
          retention_rate: 65,
          average_time_university_degree: 62,
          timely_university_degree_rate: 69,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2017",
          total_students: 10,
          university_degree_rate: 60,
          retention_rate: 45,
          average_time_university_degree: 46,
          timely_university_degree_rate: 58,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "2018",
          total_students: 22,
          university_degree_rate: 50,
          retention_rate: 46,
          average_time_university_degree: 45,
          timely_university_degree_rate: 48,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "2018",
          total_students: 20,
          university_degree_rate: 57,
          retention_rate: 58,
          average_time_university_degree: 47,
          timely_university_degree_rate: 47,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2018",
          total_students: 15,
          university_degree_rate: 62,
          retention_rate: 62,
          average_time_university_degree: 62,
          timely_university_degree_rate: 48,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "2019",
          total_students: 18,
          university_degree_rate: 56,
          retention_rate: 45,
          average_time_university_degree: 55,
          timely_university_degree_rate: 68,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "2019",
          total_students: 18,
          university_degree_rate: 46,
          retention_rate: 54,
          average_time_university_degree: 67,
          timely_university_degree_rate: 55,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2019",
          total_students: 12,
          university_degree_rate: 57,
          retention_rate: 49,
          average_time_university_degree: 63,
          timely_university_degree_rate: 45,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "2020",
          total_students: 16,
          university_degree_rate: 62,
          retention_rate: 69,
          average_time_university_degree: 59,
          timely_university_degree_rate: 45,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "2020",
          total_students: 23,
          university_degree_rate: 65,
          retention_rate: 69,
          average_time_university_degree: 57,
          timely_university_degree_rate: 51,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2020",
          total_students: 25,
          university_degree_rate: 61,
          retention_rate: 51,
          average_time_university_degree: 47,
          timely_university_degree_rate: 53,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "",
          total_students: 28,
          university_degree_rate: 52,
          retention_rate: 63,
          average_time_university_degree: 45,
          timely_university_degree_rate: 63,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "",
          total_students: 15,
          university_degree_rate: 68,
          retention_rate: 50,
          average_time_university_degree: 62,
          timely_university_degree_rate: 60,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "",
          total_students: 20,
          university_degree_rate: 58,
          retention_rate: 62,
          average_time_university_degree: 59,
          timely_university_degree_rate: 55,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "PACE",
          cohort: "2016",
          total_students: 21,
          university_degree_rate: 54,
          retention_rate: 58,
          average_time_university_degree: 54,
          timely_university_degree_rate: 49,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "PACE",
          cohort: "2017",
          total_students: 13,
          university_degree_rate: 61,
          retention_rate: 55,
          average_time_university_degree: 69,
          timely_university_degree_rate: 52,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "PACE",
          cohort: "2018",
          total_students: 20,
          university_degree_rate: 52,
          retention_rate: 66,
          average_time_university_degree: 62,
          timely_university_degree_rate: 67,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "PACE",
          cohort: "2019",
          total_students: 22,
          university_degree_rate: 50,
          retention_rate: 53,
          average_time_university_degree: 61,
          timely_university_degree_rate: 62,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "PACE",
          cohort: "2020",
          total_students: 18,
          university_degree_rate: 59,
          retention_rate: 60,
          average_time_university_degree: 68,
          timely_university_degree_rate: 65,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "PACE",
          cohort: "",
          total_students: 13,
          university_degree_rate: 50,
          retention_rate: 53,
          average_time_university_degree: 46,
          timely_university_degree_rate: 47,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "PSU",
          cohort: "2016",
          total_students: 14,
          university_degree_rate: 46,
          retention_rate: 46,
          average_time_university_degree: 59,
          timely_university_degree_rate: 60,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "PSU",
          cohort: "2017",
          total_students: 10,
          university_degree_rate: 69,
          retention_rate: 47,
          average_time_university_degree: 58,
          timely_university_degree_rate: 66,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "PSU",
          cohort: "2018",
          total_students: 21,
          university_degree_rate: 52,
          retention_rate: 47,
          average_time_university_degree: 62,
          timely_university_degree_rate: 62,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "PSU",
          cohort: "2019",
          total_students: 15,
          university_degree_rate: 65,
          retention_rate: 45,
          average_time_university_degree: 59,
          timely_university_degree_rate: 61,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "PSU",
          cohort: "2020",
          total_students: 25,
          university_degree_rate: 57,
          retention_rate: 56,
          average_time_university_degree: 46,
          timely_university_degree_rate: 60,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "PSU",
          cohort: "",
          total_students: 20,
          university_degree_rate: 67,
          retention_rate: 54,
          average_time_university_degree: 53,
          timely_university_degree_rate: 52,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "",
          cohort: "2016",
          total_students: 25,
          university_degree_rate: 56,
          retention_rate: 45,
          average_time_university_degree: 51,
          timely_university_degree_rate: 49,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "",
          cohort: "2017",
          total_students: 23,
          university_degree_rate: 54,
          retention_rate: 53,
          average_time_university_degree: 47,
          timely_university_degree_rate: 58,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "",
          cohort: "2018",
          total_students: 17,
          university_degree_rate: 62,
          retention_rate: 57,
          average_time_university_degree: 63,
          timely_university_degree_rate: 57,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "",
          cohort: "2019",
          total_students: 12,
          university_degree_rate: 48,
          retention_rate: 55,
          average_time_university_degree: 51,
          timely_university_degree_rate: 68,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "",
          cohort: "2020",
          total_students: 13,
          university_degree_rate: 69,
          retention_rate: 69,
          average_time_university_degree: 45,
          timely_university_degree_rate: 63,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "",
          cohort: "",
          total_students: 14,
          university_degree_rate: 63,
          retention_rate: 64,
          average_time_university_degree: 45,
          timely_university_degree_rate: 53,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2016",
          total_students: 29,
          university_degree_rate: 46,
          retention_rate: 50,
          average_time_university_degree: 54,
          timely_university_degree_rate: 60,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2017",
          total_students: 16,
          university_degree_rate: 46,
          retention_rate: 57,
          average_time_university_degree: 69,
          timely_university_degree_rate: 51,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2018",
          total_students: 21,
          university_degree_rate: 61,
          retention_rate: 59,
          average_time_university_degree: 49,
          timely_university_degree_rate: 48,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2019",
          total_students: 16,
          university_degree_rate: 47,
          retention_rate: 69,
          average_time_university_degree: 47,
          timely_university_degree_rate: 65,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2020",
          total_students: 15,
          university_degree_rate: 62,
          retention_rate: 54,
          average_time_university_degree: 62,
          timely_university_degree_rate: 63,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "PACE",
          cohort: "",
          total_students: 16,
          university_degree_rate: 48,
          retention_rate: 62,
          average_time_university_degree: 45,
          timely_university_degree_rate: 54,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2016",
          total_students: 11,
          university_degree_rate: 66,
          retention_rate: 54,
          average_time_university_degree: 49,
          timely_university_degree_rate: 58,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2017",
          total_students: 23,
          university_degree_rate: 69,
          retention_rate: 62,
          average_time_university_degree: 48,
          timely_university_degree_rate: 65,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2018",
          total_students: 22,
          university_degree_rate: 49,
          retention_rate: 48,
          average_time_university_degree: 62,
          timely_university_degree_rate: 56,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2019",
          total_students: 25,
          university_degree_rate: 59,
          retention_rate: 57,
          average_time_university_degree: 49,
          timely_university_degree_rate: 48,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2020",
          total_students: 22,
          university_degree_rate: 52,
          retention_rate: 48,
          average_time_university_degree: 65,
          timely_university_degree_rate: 55,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "PSU",
          cohort: "",
          total_students: 17,
          university_degree_rate: 62,
          retention_rate: 59,
          average_time_university_degree: 49,
          timely_university_degree_rate: 66,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "",
          cohort: "2016",
          total_students: 19,
          university_degree_rate: 54,
          retention_rate: 47,
          average_time_university_degree: 64,
          timely_university_degree_rate: 57,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "",
          cohort: "2017",
          total_students: 13,
          university_degree_rate: 45,
          retention_rate: 51,
          average_time_university_degree: 49,
          timely_university_degree_rate: 53,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "",
          cohort: "2018",
          total_students: 15,
          university_degree_rate: 60,
          retention_rate: 57,
          average_time_university_degree: 63,
          timely_university_degree_rate: 45,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "",
          cohort: "2019",
          total_students: 21,
          university_degree_rate: 49,
          retention_rate: 52,
          average_time_university_degree: 54,
          timely_university_degree_rate: 48,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "",
          cohort: "2020",
          total_students: 20,
          university_degree_rate: 53,
          retention_rate: 69,
          average_time_university_degree: 59,
          timely_university_degree_rate: 62,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "",
          cohort: "",
          total_students: 10,
          university_degree_rate: 61,
          retention_rate: 67,
          average_time_university_degree: 53,
          timely_university_degree_rate: 51,
        },
      ],
      groupedEmployed: [
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "PACE",
          cohort: "2016",
          total_students: 12,
          employed_rate: 55,
          average_time_job_finding: 58,
          employed_rate_educational_system: 59,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "PACE",
          cohort: "2017",
          total_students: 21,
          employed_rate: 50,
          average_time_job_finding: 56,
          employed_rate_educational_system: 67,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "PACE",
          cohort: "2018",
          total_students: 14,
          employed_rate: 50,
          average_time_job_finding: 60,
          employed_rate_educational_system: 53,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "PACE",
          cohort: "2019",
          total_students: 13,
          employed_rate: 49,
          average_time_job_finding: 59,
          employed_rate_educational_system: 58,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "PACE",
          cohort: "2020",
          total_students: 15,
          employed_rate: 57,
          average_time_job_finding: 46,
          employed_rate_educational_system: 53,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "PACE",
          cohort: "",
          total_students: 12,
          employed_rate: 51,
          average_time_job_finding: 53,
          employed_rate_educational_system: 66,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "PSU",
          cohort: "2016",
          total_students: 19,
          employed_rate: 49,
          average_time_job_finding: 52,
          employed_rate_educational_system: 57,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "PSU",
          cohort: "2017",
          total_students: 23,
          employed_rate: 68,
          average_time_job_finding: 49,
          employed_rate_educational_system: 52,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "PSU",
          cohort: "2018",
          total_students: 19,
          employed_rate: 46,
          average_time_job_finding: 48,
          employed_rate_educational_system: 63,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "PSU",
          cohort: "2019",
          total_students: 25,
          employed_rate: 45,
          average_time_job_finding: 56,
          employed_rate_educational_system: 60,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "PSU",
          cohort: "2020",
          total_students: 19,
          employed_rate: 52,
          average_time_job_finding: 59,
          employed_rate_educational_system: 65,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "PSU",
          cohort: "",
          total_students: 12,
          employed_rate: 52,
          average_time_job_finding: 48,
          employed_rate_educational_system: 52,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "",
          cohort: "2016",
          total_students: 25,
          employed_rate: 53,
          average_time_job_finding: 62,
          employed_rate_educational_system: 61,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "",
          cohort: "2017",
          total_students: 20,
          employed_rate: 52,
          average_time_job_finding: 55,
          employed_rate_educational_system: 67,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "",
          cohort: "2018",
          total_students: 26,
          employed_rate: 61,
          average_time_job_finding: 67,
          employed_rate_educational_system: 57,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "",
          cohort: "2019",
          total_students: 29,
          employed_rate: 64,
          average_time_job_finding: 58,
          employed_rate_educational_system: 64,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "",
          cohort: "2020",
          total_students: 18,
          employed_rate: 57,
          average_time_job_finding: 56,
          employed_rate_educational_system: 52,
        },
        {
          program_id: "1700",
          curriculum: "2013",
          type_admission: "",
          cohort: "",
          total_students: 22,
          employed_rate: 47,
          average_time_job_finding: 52,
          employed_rate_educational_system: 51,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2016",
          total_students: 10,
          employed_rate: 61,
          average_time_job_finding: 54,
          employed_rate_educational_system: 66,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2017",
          total_students: 29,
          employed_rate: 60,
          average_time_job_finding: 51,
          employed_rate_educational_system: 48,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2018",
          total_students: 10,
          employed_rate: 47,
          average_time_job_finding: 61,
          employed_rate_educational_system: 56,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2019",
          total_students: 17,
          employed_rate: 51,
          average_time_job_finding: 45,
          employed_rate_educational_system: 60,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2020",
          total_students: 20,
          employed_rate: 55,
          average_time_job_finding: 60,
          employed_rate_educational_system: 45,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "PACE",
          cohort: "",
          total_students: 26,
          employed_rate: 57,
          average_time_job_finding: 57,
          employed_rate_educational_system: 55,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2016",
          total_students: 13,
          employed_rate: 47,
          average_time_job_finding: 57,
          employed_rate_educational_system: 45,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2017",
          total_students: 21,
          employed_rate: 65,
          average_time_job_finding: 57,
          employed_rate_educational_system: 49,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2018",
          total_students: 21,
          employed_rate: 60,
          average_time_job_finding: 56,
          employed_rate_educational_system: 69,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2019",
          total_students: 13,
          employed_rate: 60,
          average_time_job_finding: 59,
          employed_rate_educational_system: 60,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2020",
          total_students: 27,
          employed_rate: 54,
          average_time_job_finding: 65,
          employed_rate_educational_system: 68,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "PSU",
          cohort: "",
          total_students: 23,
          employed_rate: 54,
          average_time_job_finding: 55,
          employed_rate_educational_system: 54,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "",
          cohort: "2016",
          total_students: 14,
          employed_rate: 60,
          average_time_job_finding: 46,
          employed_rate_educational_system: 64,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "",
          cohort: "2017",
          total_students: 14,
          employed_rate: 67,
          average_time_job_finding: 47,
          employed_rate_educational_system: 46,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "",
          cohort: "2018",
          total_students: 14,
          employed_rate: 68,
          average_time_job_finding: 63,
          employed_rate_educational_system: 68,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "",
          cohort: "2019",
          total_students: 14,
          employed_rate: 66,
          average_time_job_finding: 67,
          employed_rate_educational_system: 56,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "",
          cohort: "2020",
          total_students: 12,
          employed_rate: 63,
          average_time_job_finding: 49,
          employed_rate_educational_system: 63,
        },
        {
          program_id: "1700",
          curriculum: "",
          type_admission: "",
          cohort: "",
          total_students: 29,
          employed_rate: 64,
          average_time_job_finding: 59,
          employed_rate_educational_system: 66,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "2016",
          total_students: 15,
          employed_rate: 59,
          average_time_job_finding: 46,
          employed_rate_educational_system: 48,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "2016",
          total_students: 11,
          employed_rate: 69,
          average_time_job_finding: 48,
          employed_rate_educational_system: 55,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2016",
          total_students: 19,
          employed_rate: 61,
          average_time_job_finding: 51,
          employed_rate_educational_system: 60,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "2017",
          total_students: 23,
          employed_rate: 55,
          average_time_job_finding: 65,
          employed_rate_educational_system: 53,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "2017",
          total_students: 24,
          employed_rate: 63,
          average_time_job_finding: 56,
          employed_rate_educational_system: 52,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2017",
          total_students: 27,
          employed_rate: 50,
          average_time_job_finding: 69,
          employed_rate_educational_system: 62,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "2018",
          total_students: 14,
          employed_rate: 59,
          average_time_job_finding: 57,
          employed_rate_educational_system: 45,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "2018",
          total_students: 21,
          employed_rate: 62,
          average_time_job_finding: 64,
          employed_rate_educational_system: 56,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2018",
          total_students: 10,
          employed_rate: 46,
          average_time_job_finding: 62,
          employed_rate_educational_system: 54,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "2019",
          total_students: 10,
          employed_rate: 61,
          average_time_job_finding: 68,
          employed_rate_educational_system: 53,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "2019",
          total_students: 26,
          employed_rate: 49,
          average_time_job_finding: 54,
          employed_rate_educational_system: 66,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2019",
          total_students: 27,
          employed_rate: 59,
          average_time_job_finding: 61,
          employed_rate_educational_system: 51,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "2020",
          total_students: 16,
          employed_rate: 55,
          average_time_job_finding: 54,
          employed_rate_educational_system: 65,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "2020",
          total_students: 18,
          employed_rate: 56,
          average_time_job_finding: 63,
          employed_rate_educational_system: 49,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "2020",
          total_students: 24,
          employed_rate: 62,
          average_time_job_finding: 51,
          employed_rate_educational_system: 68,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PACE",
          cohort: "",
          total_students: 11,
          employed_rate: 47,
          average_time_job_finding: 65,
          employed_rate_educational_system: 64,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PACE",
          cohort: "",
          total_students: 19,
          employed_rate: 57,
          average_time_job_finding: 61,
          employed_rate_educational_system: 60,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "PACE",
          cohort: "",
          total_students: 15,
          employed_rate: 47,
          average_time_job_finding: 64,
          employed_rate_educational_system: 56,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "2016",
          total_students: 17,
          employed_rate: 69,
          average_time_job_finding: 66,
          employed_rate_educational_system: 49,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "2016",
          total_students: 14,
          employed_rate: 51,
          average_time_job_finding: 64,
          employed_rate_educational_system: 46,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2016",
          total_students: 12,
          employed_rate: 65,
          average_time_job_finding: 62,
          employed_rate_educational_system: 67,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "2017",
          total_students: 15,
          employed_rate: 49,
          average_time_job_finding: 49,
          employed_rate_educational_system: 63,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "2017",
          total_students: 21,
          employed_rate: 48,
          average_time_job_finding: 54,
          employed_rate_educational_system: 62,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2017",
          total_students: 10,
          employed_rate: 51,
          average_time_job_finding: 45,
          employed_rate_educational_system: 53,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "2018",
          total_students: 12,
          employed_rate: 68,
          average_time_job_finding: 67,
          employed_rate_educational_system: 56,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "2018",
          total_students: 21,
          employed_rate: 69,
          average_time_job_finding: 50,
          employed_rate_educational_system: 54,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2018",
          total_students: 24,
          employed_rate: 57,
          average_time_job_finding: 45,
          employed_rate_educational_system: 62,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "2019",
          total_students: 12,
          employed_rate: 63,
          average_time_job_finding: 67,
          employed_rate_educational_system: 61,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "2019",
          total_students: 19,
          employed_rate: 47,
          average_time_job_finding: 59,
          employed_rate_educational_system: 55,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2019",
          total_students: 12,
          employed_rate: 66,
          average_time_job_finding: 54,
          employed_rate_educational_system: 58,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "2020",
          total_students: 18,
          employed_rate: 53,
          average_time_job_finding: 69,
          employed_rate_educational_system: 57,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "2020",
          total_students: 19,
          employed_rate: 61,
          average_time_job_finding: 56,
          employed_rate_educational_system: 45,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "2020",
          total_students: 18,
          employed_rate: 48,
          average_time_job_finding: 54,
          employed_rate_educational_system: 48,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "PSU",
          cohort: "",
          total_students: 20,
          employed_rate: 54,
          average_time_job_finding: 56,
          employed_rate_educational_system: 50,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "PSU",
          cohort: "",
          total_students: 11,
          employed_rate: 52,
          average_time_job_finding: 61,
          employed_rate_educational_system: 51,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "PSU",
          cohort: "",
          total_students: 25,
          employed_rate: 55,
          average_time_job_finding: 58,
          employed_rate_educational_system: 50,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "2016",
          total_students: 10,
          employed_rate: 67,
          average_time_job_finding: 51,
          employed_rate_educational_system: 65,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "2016",
          total_students: 22,
          employed_rate: 61,
          average_time_job_finding: 57,
          employed_rate_educational_system: 45,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2016",
          total_students: 14,
          employed_rate: 53,
          average_time_job_finding: 52,
          employed_rate_educational_system: 69,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "2017",
          total_students: 20,
          employed_rate: 61,
          average_time_job_finding: 59,
          employed_rate_educational_system: 50,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "2017",
          total_students: 28,
          employed_rate: 48,
          average_time_job_finding: 55,
          employed_rate_educational_system: 64,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2017",
          total_students: 18,
          employed_rate: 62,
          average_time_job_finding: 49,
          employed_rate_educational_system: 50,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "2018",
          total_students: 12,
          employed_rate: 55,
          average_time_job_finding: 50,
          employed_rate_educational_system: 52,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "2018",
          total_students: 14,
          employed_rate: 58,
          average_time_job_finding: 48,
          employed_rate_educational_system: 67,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2018",
          total_students: 15,
          employed_rate: 57,
          average_time_job_finding: 60,
          employed_rate_educational_system: 49,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "2019",
          total_students: 12,
          employed_rate: 59,
          average_time_job_finding: 61,
          employed_rate_educational_system: 57,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "2019",
          total_students: 26,
          employed_rate: 62,
          average_time_job_finding: 69,
          employed_rate_educational_system: 58,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2019",
          total_students: 10,
          employed_rate: 45,
          average_time_job_finding: 48,
          employed_rate_educational_system: 59,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "2020",
          total_students: 17,
          employed_rate: 53,
          average_time_job_finding: 51,
          employed_rate_educational_system: 45,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "2020",
          total_students: 14,
          employed_rate: 48,
          average_time_job_finding: 50,
          employed_rate_educational_system: 68,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "2020",
          total_students: 14,
          employed_rate: 64,
          average_time_job_finding: 58,
          employed_rate_educational_system: 52,
        },
        {
          program_id: "1708",
          curriculum: "2015",
          type_admission: "",
          cohort: "",
          total_students: 29,
          employed_rate: 52,
          average_time_job_finding: 58,
          employed_rate_educational_system: 68,
        },
        {
          program_id: "1708",
          curriculum: "2017",
          type_admission: "",
          cohort: "",
          total_students: 27,
          employed_rate: 49,
          average_time_job_finding: 53,
          employed_rate_educational_system: 60,
        },
        {
          program_id: "1708",
          curriculum: "",
          type_admission: "",
          cohort: "",
          total_students: 11,
          employed_rate: 60,
          average_time_job_finding: 69,
          employed_rate_educational_system: 51,
        },
      ],

      curriculums: [
        {
          id: "2017",
          semesters: [
            {
              id: 1,
              courses: [
                {
                  code: "EID-17",
                  name: "PRUEBA INICIAL DIAGNÓSTICA",
                  credits: [
                    {
                      label: "Créditos",
                      value: 0,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [],
                  requisites: [],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 56,
                    },
                    {
                      label: "2-3",
                      value: 233,
                    },
                    {
                      label: "3-4",
                      value: 942,
                    },
                    {
                      label: "4-5",
                      value: 1111,
                    },
                    {
                      label: "5-6",
                      value: 788,
                    },
                    {
                      label: "6-7",
                      value: 111,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
                {
                  code: "BAIN065-14",
                  name: "ÁLGEBRA PARA INGENIERÍA",
                  credits: [
                    {
                      label: "Créditos",
                      value: 6,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "BAIN073-14",
                    },
                    {
                      code: "BAIN075-14",
                    },
                    {
                      code: "BAIN077-14",
                    },
                    {
                      code: "EICI146-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 609,
                    },
                    {
                      label: "2-3",
                      value: 1041,
                    },
                    {
                      label: "3-4",
                      value: 942,
                    },
                    {
                      label: "4-5",
                      value: 1713,
                    },
                    {
                      label: "5-6",
                      value: 522,
                    },
                    {
                      label: "6-7",
                      value: 111,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
                {
                  code: "BAIN067-14",
                  name: "GEOMETRÍA PARA INGENIERÍA",
                  credits: [
                    {
                      label: "Créditos",
                      value: 6,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "BAIN075-14",
                    },
                    {
                      code: "BAIN077-14",
                    },
                    {
                      code: "EICI146-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 888,
                    },
                    {
                      label: "2-3",
                      value: 792,
                    },
                    {
                      label: "3-4",
                      value: 849,
                    },
                    {
                      label: "4-5",
                      value: 1674,
                    },
                    {
                      label: "5-6",
                      value: 504,
                    },
                    {
                      label: "6-7",
                      value: 192,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
                {
                  code: "BAIN071-14",
                  name: "COMUNICACIÓN IDIOMA ESPAÑOL",
                  credits: [
                    {
                      label: "Créditos",
                      value: 4,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO083-17",
                    },
                    {
                      code: "EICI146-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 189,
                    },
                    {
                      label: "2-3",
                      value: 36,
                    },
                    {
                      label: "3-4",
                      value: 24,
                    },
                    {
                      label: "4-5",
                      value: 339,
                    },
                    {
                      label: "5-6",
                      value: 1500,
                    },
                    {
                      label: "6-7",
                      value: 1509,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
                {
                  code: "INFO073-17",
                  name: "TALLER DE INGENIERÍA: INTRODUCCIÓN A LA PROFESIÓN",
                  credits: [
                    {
                      label: "Créditos",
                      value: 4,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO083-17",
                    },
                    {
                      code: "EICI146-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 12,
                    },
                    {
                      label: "2-3",
                      value: 0,
                    },
                    {
                      label: "3-4",
                      value: 3,
                    },
                    {
                      label: "4-5",
                      value: 75,
                    },
                    {
                      label: "5-6",
                      value: 237,
                    },
                    {
                      label: "6-7",
                      value: 291,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
                {
                  code: "INFO063-17",
                  name: "INTRODUCCIÓN A LA PROGRAMACIÓN",
                  credits: [
                    {
                      label: "Créditos",
                      value: 6,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO081-17",
                    },
                    {
                      code: "INFO083-17",
                    },
                    {
                      code: "EICI146-17",
                    },
                    {
                      code: "INFO128-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 57,
                    },
                    {
                      label: "2-3",
                      value: 141,
                    },
                    {
                      label: "3-4",
                      value: 69,
                    },
                    {
                      label: "4-5",
                      value: 282,
                    },
                    {
                      label: "5-6",
                      value: 162,
                    },
                    {
                      label: "6-7",
                      value: 36,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
              ],
            },
            {
              id: 2,
              courses: [
                {
                  code: "BAIN073-14",
                  name: "ÁLGEBRA LINEAL PARA INGENIERÍA",
                  credits: [
                    {
                      label: "Créditos",
                      value: 5,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "BAIN081-14",
                    },
                    {
                      code: "BAIN091-14",
                    },
                    {
                      code: "INFO099-17",
                    },
                    {
                      code: "EICI146-17",
                    },
                    {
                      code: "INFO200-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "BAIN065-14",
                    },
                  ],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 348,
                    },
                    {
                      label: "2-3",
                      value: 642,
                    },
                    {
                      label: "3-4",
                      value: 516,
                    },
                    {
                      label: "4-5",
                      value: 1017,
                    },
                    {
                      label: "5-6",
                      value: 93,
                    },
                    {
                      label: "6-7",
                      value: 18,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
                {
                  code: "BAIN079-14",
                  name: "COMUNICACIÓN IDIOMA INGLÉS",
                  credits: [
                    {
                      label: "Créditos",
                      value: 4,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "EICI146-17",
                    },
                    {
                      code: "BAIN140-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 165,
                    },
                    {
                      label: "2-3",
                      value: 60,
                    },
                    {
                      label: "3-4",
                      value: 132,
                    },
                    {
                      label: "4-5",
                      value: 666,
                    },
                    {
                      label: "5-6",
                      value: 651,
                    },
                    {
                      label: "6-7",
                      value: 459,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
                {
                  code: "INFO081-17",
                  name: "PROGRAMACIÓN",
                  credits: [
                    {
                      label: "Créditos",
                      value: 6,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO090-17",
                    },
                    {
                      code: "INFO088-17",
                    },
                    {
                      code: "INFO085-17",
                    },
                    {
                      code: "EICI146-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "INFO063-17",
                    },
                  ],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 42,
                    },
                    {
                      label: "2-3",
                      value: 45,
                    },
                    {
                      label: "3-4",
                      value: 48,
                    },
                    {
                      label: "4-5",
                      value: 216,
                    },
                    {
                      label: "5-6",
                      value: 51,
                    },
                    {
                      label: "6-7",
                      value: 27,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
                {
                  code: "INFO083-17",
                  name: "TALLER DE INGENIERÍA: PROGRAMACIÓN APLICADA",
                  credits: [
                    {
                      label: "Créditos",
                      value: 4,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO088-17",
                    },
                    {
                      code: "EICI146-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "BAIN071-14",
                    },
                    {
                      code: "INFO073-17",
                    },
                    {
                      code: "INFO063-17",
                    },
                  ],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 6,
                    },
                    {
                      label: "2-3",
                      value: 6,
                    },
                    {
                      label: "3-4",
                      value: 15,
                    },
                    {
                      label: "4-5",
                      value: 57,
                    },
                    {
                      label: "5-6",
                      value: 162,
                    },
                    {
                      label: "6-7",
                      value: 72,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
                {
                  code: "BAIN069-14",
                  name: "QUÍMICA PARA INGENIERÍA",
                  credits: [
                    {
                      label: "Créditos",
                      value: 4,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "EICI146-17",
                    },
                    {
                      code: "INFO128-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 300,
                    },
                    {
                      label: "2-3",
                      value: 300,
                    },
                    {
                      label: "3-4",
                      value: 558,
                    },
                    {
                      label: "4-5",
                      value: 1587,
                    },
                    {
                      label: "5-6",
                      value: 822,
                    },
                    {
                      label: "6-7",
                      value: 201,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
                {
                  code: "DYRE070-14",
                  name: "EDUCACIÓN FÍSICA Y SALUD",
                  credits: [
                    {
                      label: "Créditos",
                      value: 4,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "EICI146-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 0,
                    },
                    {
                      label: "2-3",
                      value: 0,
                    },
                    {
                      label: "3-4",
                      value: 0,
                    },
                    {
                      label: "4-5",
                      value: 0,
                    },
                    {
                      label: "5-6",
                      value: 0,
                    },
                    {
                      label: "6-7",
                      value: 306,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
                {
                  code: "BAIN075-14",
                  name: "CÁLCULO EN UNA VARIABLE",
                  credits: [
                    {
                      label: "Créditos",
                      value: 5,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "BAIN081-14",
                    },
                    {
                      code: "BAIN083-14",
                    },
                    {
                      code: "BAIN085-14",
                    },
                    {
                      code: "EICI146-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "BAIN065-14",
                    },
                    {
                      code: "BAIN067-14",
                    },
                  ],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 324,
                    },
                    {
                      label: "2-3",
                      value: 480,
                    },
                    {
                      label: "3-4",
                      value: 588,
                    },
                    {
                      label: "4-5",
                      value: 1089,
                    },
                    {
                      label: "5-6",
                      value: 120,
                    },
                    {
                      label: "6-7",
                      value: 24,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
              ],
            },
            {
              id: 3,
              courses: [
                {
                  code: "BAIN077-14",
                  name: "FÍSICA: MECÁNICA",
                  credits: [
                    {
                      label: "Créditos",
                      value: 8,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "BAIN085-14",
                    },
                    {
                      code: "EICI146-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "BAIN065-14",
                    },
                    {
                      code: "BAIN067-14",
                    },
                  ],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 261,
                    },
                    {
                      label: "2-3",
                      value: 273,
                    },
                    {
                      label: "3-4",
                      value: 417,
                    },
                    {
                      label: "4-5",
                      value: 1125,
                    },
                    {
                      label: "5-6",
                      value: 105,
                    },
                    {
                      label: "6-7",
                      value: 15,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
                {
                  code: "ELECT12",
                  name: "OFG 1",
                  credits: [
                    {
                      label: "Créditos",
                      value: 0,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "EICI146-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [],
                  historicalDistribution: [],
                  bandColors: [],
                },
                {
                  code: "BAIN081-14",
                  name: "ECUACIONES DIFERENCIALES PARA INGENIERÍA",
                  credits: [
                    {
                      label: "Créditos",
                      value: 5,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "BAIN087-14",
                    },
                    {
                      code: "EICI146-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "BAIN073-14",
                    },
                    {
                      code: "BAIN075-14",
                    },
                  ],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 135,
                    },
                    {
                      label: "2-3",
                      value: 198,
                    },
                    {
                      label: "3-4",
                      value: 339,
                    },
                    {
                      label: "4-5",
                      value: 675,
                    },
                    {
                      label: "5-6",
                      value: 81,
                    },
                    {
                      label: "6-7",
                      value: 6,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
                {
                  code: "BAIN083-14",
                  name: "CÁLCULO EN VARIAS VARIABLES",
                  credits: [
                    {
                      label: "Créditos",
                      value: 5,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "EICI146-17",
                    },
                    {
                      code: "INFO200-17",
                    },
                    {
                      code: "EICI223-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "BAIN075-14",
                    },
                  ],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 282,
                    },
                    {
                      label: "2-3",
                      value: 354,
                    },
                    {
                      label: "3-4",
                      value: 312,
                    },
                    {
                      label: "4-5",
                      value: 558,
                    },
                    {
                      label: "5-6",
                      value: 45,
                    },
                    {
                      label: "6-7",
                      value: 0,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
                {
                  code: "INFO088-17",
                  name:
                    "TALLER DE INGENIERÍA: ESTRUCTURA DE DATOS Y ALGORITMOS",
                  credits: [
                    {
                      label: "Créditos",
                      value: 4,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO104-17",
                    },
                    {
                      code: "EICI146-17",
                    },
                    {
                      code: "INFO139-17",
                    },
                    {
                      code: "INFO198-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "INFO081-17",
                    },
                    {
                      code: "INFO083-17",
                    },
                  ],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 33,
                    },
                    {
                      label: "2-3",
                      value: 21,
                    },
                    {
                      label: "3-4",
                      value: 15,
                    },
                    {
                      label: "4-5",
                      value: 105,
                    },
                    {
                      label: "5-6",
                      value: 72,
                    },
                    {
                      label: "6-7",
                      value: 12,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
                {
                  code: "INFO085-17",
                  name: "ESTRUCTURA DE DATOS Y ALGORITMOS",
                  credits: [
                    {
                      label: "Créditos",
                      value: 6,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO104-17",
                    },
                    {
                      code: "EICI146-17",
                    },
                    {
                      code: "INFO145-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "INFO081-17",
                    },
                  ],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 63,
                    },
                    {
                      label: "2-3",
                      value: 66,
                    },
                    {
                      label: "3-4",
                      value: 57,
                    },
                    {
                      label: "4-5",
                      value: 105,
                    },
                    {
                      label: "5-6",
                      value: 27,
                    },
                    {
                      label: "6-7",
                      value: 0,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
              ],
            },
            {
              id: 4,
              courses: [
                {
                  code: "INFO090-17",
                  name: "PROGRAMACIÓN ORIENTADA A OBJETO",
                  credits: [
                    {
                      label: "Créditos",
                      value: 5,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "EICI146-17",
                    },
                    {
                      code: "INFO188-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "INFO081-17",
                    },
                  ],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 0,
                    },
                    {
                      label: "2-3",
                      value: 9,
                    },
                    {
                      label: "3-4",
                      value: 6,
                    },
                    {
                      label: "4-5",
                      value: 60,
                    },
                    {
                      label: "5-6",
                      value: 36,
                    },
                    {
                      label: "6-7",
                      value: 21,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
                {
                  code: "BAIN091-14",
                  name: "ESTADÍSTICA Y PROBABILIDADES PARA INGENIERÍA",
                  credits: [
                    {
                      label: "Créditos",
                      value: 4,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "EICI146-17",
                    },
                    {
                      code: "INFO145-17",
                    },
                    {
                      code: "INFO200-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "BAIN073-14",
                    },
                  ],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 84,
                    },
                    {
                      label: "2-3",
                      value: 72,
                    },
                    {
                      label: "3-4",
                      value: 66,
                    },
                    {
                      label: "4-5",
                      value: 375,
                    },
                    {
                      label: "5-6",
                      value: 99,
                    },
                    {
                      label: "6-7",
                      value: 15,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
                {
                  code: "BAIN085-14",
                  name: "FÍSICA: ONDAS Y ELECTROMAGNETISMO",
                  credits: [
                    {
                      label: "Créditos",
                      value: 8,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "EICI146-17",
                    },
                    {
                      code: "INFO128-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "BAIN075-14",
                    },
                    {
                      code: "BAIN077-14",
                    },
                  ],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 27,
                    },
                    {
                      label: "2-3",
                      value: 90,
                    },
                    {
                      label: "3-4",
                      value: 126,
                    },
                    {
                      label: "4-5",
                      value: 597,
                    },
                    {
                      label: "5-6",
                      value: 114,
                    },
                    {
                      label: "6-7",
                      value: 18,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
                {
                  code: "BAIN087-14",
                  name: "MÉTODOS NUMÉRICOS PARA INGENIERÍA",
                  credits: [
                    {
                      label: "Créditos",
                      value: 4,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "EICI146-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "BAIN081-14",
                    },
                  ],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 81,
                    },
                    {
                      label: "2-3",
                      value: 87,
                    },
                    {
                      label: "3-4",
                      value: 156,
                    },
                    {
                      label: "4-5",
                      value: 309,
                    },
                    {
                      label: "5-6",
                      value: 33,
                    },
                    {
                      label: "6-7",
                      value: 3,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
                {
                  code: "INFO099-17",
                  name: "ESTRUCTURAS DISCRETAS",
                  credits: [
                    {
                      label: "Créditos",
                      value: 6,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "EICI146-17",
                    },
                    {
                      code: "INFO145-17",
                    },
                    {
                      code: "INFO139-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "BAIN073-14",
                    },
                  ],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 21,
                    },
                    {
                      label: "2-3",
                      value: 27,
                    },
                    {
                      label: "3-4",
                      value: 15,
                    },
                    {
                      label: "4-5",
                      value: 72,
                    },
                    {
                      label: "5-6",
                      value: 6,
                    },
                    {
                      label: "6-7",
                      value: 3,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
                {
                  code: "INFO104-17",
                  name: "TALLER DE CONSTRUCCIÓN DE SOFTWARE",
                  credits: [
                    {
                      label: "Créditos",
                      value: 4,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "EICI146-17",
                    },
                    {
                      code: "INFO133-17",
                    },
                    {
                      code: "INFO208-17",
                    },
                    {
                      code: "INFO188-17",
                    },
                    {
                      code: "EICI223-17",
                    },
                    {
                      code: "INFO289-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "INFO088-17",
                    },
                    {
                      code: "INFO085-17",
                    },
                  ],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 0,
                    },
                    {
                      label: "2-3",
                      value: 3,
                    },
                    {
                      label: "3-4",
                      value: 0,
                    },
                    {
                      label: "4-5",
                      value: 18,
                    },
                    {
                      label: "5-6",
                      value: 33,
                    },
                    {
                      label: "6-7",
                      value: 87,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
              ],
            },
            {
              id: 5,
              courses: [
                {
                  code: "EICI146-17",
                  name: "PRÁCTICA INICIAL",
                  credits: [
                    {
                      label: "Créditos",
                      value: 4,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "INFO090-17",
                    },
                    {
                      code: "BAIN065-14",
                    },
                    {
                      code: "BAIN067-14",
                    },
                    {
                      code: "BAIN071-14",
                    },
                    {
                      code: "INFO073-17",
                    },
                    {
                      code: "INFO063-17",
                    },
                    {
                      code: "BAIN073-14",
                    },
                    {
                      code: "BAIN079-14",
                    },
                    {
                      code: "INFO081-17",
                    },
                    {
                      code: "INFO083-17",
                    },
                    {
                      code: "BAIN069-14",
                    },
                    {
                      code: "DYRE070-14",
                    },
                    {
                      code: "BAIN075-14",
                    },
                    {
                      code: "BAIN077-14",
                    },
                    {
                      code: "ELECT12",
                    },
                    {
                      code: "BAIN081-14",
                    },
                    {
                      code: "BAIN083-14",
                    },
                    {
                      code: "INFO088-17",
                    },
                    {
                      code: "INFO085-17",
                    },
                    {
                      code: "BAIN091-14",
                    },
                    {
                      code: "BAIN085-14",
                    },
                    {
                      code: "BAIN087-14",
                    },
                    {
                      code: "INFO099-17",
                    },
                    {
                      code: "INFO104-17",
                    },
                  ],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 0,
                    },
                    {
                      label: "2-3",
                      value: 0,
                    },
                    {
                      label: "3-4",
                      value: 0,
                    },
                    {
                      label: "4-5",
                      value: 0,
                    },
                    {
                      label: "5-6",
                      value: 0,
                    },
                    {
                      label: "6-7",
                      value: 0,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
                {
                  code: "INFO145-17",
                  name: "DISEÑO Y ANÁLISIS DE ALGORITMOS",
                  credits: [
                    {
                      label: "Créditos",
                      value: 4,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO257-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "INFO085-17",
                    },
                    {
                      code: "BAIN091-14",
                    },
                    {
                      code: "INFO099-17",
                    },
                  ],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 0,
                    },
                    {
                      label: "2-3",
                      value: 0,
                    },
                    {
                      label: "3-4",
                      value: 0,
                    },
                    {
                      label: "4-5",
                      value: 3,
                    },
                    {
                      label: "5-6",
                      value: 9,
                    },
                    {
                      label: "6-7",
                      value: 3,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
                {
                  code: "ELECT100",
                  name: "OPTATIVO DE ESPECIALIZACIÓN I",
                  credits: [
                    {
                      label: "Créditos",
                      value: 0,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [],
                  historicalDistribution: [],
                  bandColors: [],
                },
                {
                  code: "INFO128-17",
                  name: "ARQUITECTURA DE COMPUTADORES",
                  credits: [
                    {
                      label: "Créditos",
                      value: 5,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO198-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "INFO063-17",
                    },
                    {
                      code: "BAIN069-14",
                    },
                    {
                      code: "BAIN085-14",
                    },
                  ],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 0,
                    },
                    {
                      label: "2-3",
                      value: 6,
                    },
                    {
                      label: "3-4",
                      value: 3,
                    },
                    {
                      label: "4-5",
                      value: 60,
                    },
                    {
                      label: "5-6",
                      value: 12,
                    },
                    {
                      label: "6-7",
                      value: 6,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
                {
                  code: "BAIN140-17",
                  name: "INGLÉS INSTRUMENTAL",
                  credits: [
                    {
                      label: "Créditos",
                      value: 4,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "BAIN150-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "BAIN079-14",
                    },
                  ],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 3,
                    },
                    {
                      label: "2-3",
                      value: 0,
                    },
                    {
                      label: "3-4",
                      value: 3,
                    },
                    {
                      label: "4-5",
                      value: 12,
                    },
                    {
                      label: "5-6",
                      value: 24,
                    },
                    {
                      label: "6-7",
                      value: 15,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
                {
                  code: "INFO139-17",
                  name: "TEORÍA DE AUTÓMATAS",
                  credits: [
                    {
                      label: "Créditos",
                      value: 6,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO239-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "INFO088-17",
                    },
                    {
                      code: "INFO099-17",
                    },
                  ],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 3,
                    },
                    {
                      label: "2-3",
                      value: 3,
                    },
                    {
                      label: "3-4",
                      value: 21,
                    },
                    {
                      label: "4-5",
                      value: 30,
                    },
                    {
                      label: "5-6",
                      value: 30,
                    },
                    {
                      label: "6-7",
                      value: 3,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
                {
                  code: "INFO133-17",
                  name: "BASE DE DATOS",
                  credits: [
                    {
                      label: "Créditos",
                      value: 6,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO229-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "INFO104-17",
                    },
                  ],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 6,
                    },
                    {
                      label: "2-3",
                      value: 3,
                    },
                    {
                      label: "3-4",
                      value: 3,
                    },
                    {
                      label: "4-5",
                      value: 51,
                    },
                    {
                      label: "5-6",
                      value: 24,
                    },
                    {
                      label: "6-7",
                      value: 6,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
              ],
            },
            {
              id: 6,
              courses: [
                {
                  code: "INFO229-17",
                  name: "ARQUITECTURA DE SOFTWARE",
                  credits: [
                    {
                      label: "Créditos",
                      value: 4,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO248-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "INFO133-17",
                    },
                  ],
                  historicalDistribution: [],
                  bandColors: [],
                },
                {
                  code: "BAIN150-17",
                  name: "INGLÉS FUNCIONAL",
                  credits: [
                    {
                      label: "Créditos",
                      value: 4,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO245-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "BAIN140-17",
                    },
                  ],
                  historicalDistribution: [],
                  bandColors: [],
                },
                {
                  code: "INFO200-17",
                  name: "INVESTIGACIÓN OPERATIVA",
                  credits: [
                    {
                      label: "Créditos",
                      value: 8,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO270-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "BAIN073-14",
                    },
                    {
                      code: "BAIN083-14",
                    },
                    {
                      code: "BAIN091-14",
                    },
                  ],
                  historicalDistribution: [],
                  bandColors: [],
                },
                {
                  code: "INFO208-17",
                  name: "INGENIERÍA DE REQUISITOS",
                  credits: [
                    {
                      label: "Créditos",
                      value: 4,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO248-17",
                    },
                    {
                      code: "INFO245-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "INFO104-17",
                    },
                  ],
                  historicalDistribution: [],
                  bandColors: [],
                },
                {
                  code: "INFO188-17",
                  name: "PROGRAMACIÓN EN PARADIGMAS FUNCIONAL Y PARALELO",
                  credits: [
                    {
                      label: "Créditos",
                      value: 4,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO257-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "INFO090-17",
                    },
                    {
                      code: "INFO104-17",
                    },
                  ],
                  historicalDistribution: [],
                  bandColors: [],
                },
                {
                  code: "INFO198-17",
                  name: "SISTEMAS OPERATIVOS",
                  credits: [
                    {
                      label: "Créditos",
                      value: 6,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO239-17",
                    },
                    {
                      code: "INFO288-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "INFO088-17",
                    },
                    {
                      code: "INFO128-17",
                    },
                  ],
                  historicalDistribution: [],
                  bandColors: [],
                },
              ],
            },
            {
              id: 7,
              courses: [
                {
                  code: "END-17",
                  name: "PRUEBA NACIONAL DIAGNÓSTICA",
                  credits: [
                    {
                      label: "Créditos",
                      value: 0,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [],
                  requisites: [],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 56,
                    },
                    {
                      label: "2-3",
                      value: 111,
                    },
                    {
                      label: "3-4",
                      value: 775,
                    },
                    {
                      label: "4-5",
                      value: 2000,
                    },
                    {
                      label: "5-6",
                      value: 122,
                    },
                    {
                      label: "6-7",
                      value: 566,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
                {
                  code: "ELECT101",
                  name: "OPTATIVO DE ESPECIALIZACIÓN II",
                  credits: [
                    {
                      label: "Créditos",
                      value: 0,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [],
                  historicalDistribution: [],
                  bandColors: [],
                },
                {
                  code: "EICI223-17",
                  name: "GESTIÓN ORGANIZACIONAL",
                  credits: [
                    {
                      label: "Créditos",
                      value: 4,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO270-17",
                    },
                    {
                      code: "INFO278-17",
                    },
                    {
                      code: "INFO280-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "BAIN083-14",
                    },
                    {
                      code: "INFO104-17",
                    },
                  ],
                  historicalDistribution: [],
                  bandColors: [],
                },
                {
                  code: "INFO257-17",
                  name: "INTELIGENCIA ARTIFICIAL",
                  credits: [
                    {
                      label: "Créditos",
                      value: 6,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "INFO145-17",
                    },
                    {
                      code: "INFO188-17",
                    },
                  ],
                  historicalDistribution: [],
                  bandColors: [],
                },
                {
                  code: "INFO248-17",
                  name: "INGENIERÍA DE SOFTWARE",
                  credits: [
                    {
                      label: "Créditos",
                      value: 5,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO270-17",
                    },
                    {
                      code: "INFO278-17",
                    },
                    {
                      code: "INFO282-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "INFO229-17",
                    },
                    {
                      code: "INFO208-17",
                    },
                  ],
                  historicalDistribution: [],
                  bandColors: [],
                },
                {
                  code: "INFO245-17",
                  name: "INTERACCIÓN HUMANO-COMPUTADOR",
                  credits: [
                    {
                      label: "Créditos",
                      value: 4,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO282-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "BAIN150-17",
                    },
                    {
                      code: "INFO208-17",
                    },
                  ],
                  historicalDistribution: [],
                  bandColors: [],
                },
                {
                  code: "INFO239-17",
                  name: "COMUNICACIONES",
                  credits: [
                    {
                      label: "Créditos",
                      value: 6,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO276-17",
                    },
                    {
                      code: "INFO294-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "INFO139-17",
                    },
                    {
                      code: "INFO198-17",
                    },
                  ],
                  historicalDistribution: [],
                  bandColors: [],
                },
              ],
            },
            {
              id: 8,
              courses: [
                {
                  code: "INFO270-17",
                  name: "EVALUACIÓN DE PROYECTOS INFORMÁTICOS",
                  credits: [
                    {
                      label: "Créditos",
                      value: 5,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "EICI270-17",
                    },
                    {
                      code: "INFO286-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "INFO200-17",
                    },
                    {
                      code: "EICI223-17",
                    },
                    {
                      code: "INFO248-17",
                    },
                  ],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 0,
                    },
                    {
                      label: "2-3",
                      value: 0,
                    },
                    {
                      label: "3-4",
                      value: 0,
                    },
                    {
                      label: "4-5",
                      value: 0,
                    },
                    {
                      label: "5-6",
                      value: 0,
                    },
                    {
                      label: "6-7",
                      value: 3,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
                {
                  code: "ELECT111",
                  name: "OPTATIVO DE ESPECIALIZACIÓN III",
                  credits: [
                    {
                      label: "Créditos",
                      value: 0,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [],
                  historicalDistribution: [],
                  bandColors: [],
                },
                {
                  code: "INFO276-17",
                  name: "REDES",
                  credits: [
                    {
                      label: "Créditos",
                      value: 6,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO289-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "INFO239-17",
                    },
                  ],
                  historicalDistribution: [],
                  bandColors: [],
                },
                {
                  code: "INFO278-17",
                  name: "SISTEMAS DE INFORMACIÓN",
                  credits: [
                    {
                      label: "Créditos",
                      value: 6,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO286-17",
                    },
                    {
                      code: "INFO295-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "EICI223-17",
                    },
                    {
                      code: "INFO248-17",
                    },
                  ],
                  historicalDistribution: [],
                  bandColors: [],
                },
                {
                  code: "INFO280-17",
                  name: "SEMINARIO DE ÉTICA PROFESIONAL",
                  credits: [
                    {
                      label: "Créditos",
                      value: 2,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO293-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "EICI223-17",
                    },
                  ],
                  historicalDistribution: [],
                  bandColors: [],
                },
                {
                  code: "INFO282-17",
                  name: "TALLER DE INGENIERÍA DE SOFTWARE",
                  credits: [
                    {
                      label: "Créditos",
                      value: 7,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO290-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "INFO248-17",
                    },
                    {
                      code: "INFO245-17",
                    },
                  ],
                  historicalDistribution: [],
                  bandColors: [],
                },
              ],
            },
            {
              id: 9,
              courses: [
                {
                  code: "EICI270-17",
                  name: "TALLER DE EMPRENDIMIENTO",
                  credits: [
                    {
                      label: "Créditos",
                      value: 6,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [],
                  requisites: [
                    {
                      code: "INFO270-17",
                    },
                  ],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 0,
                    },
                    {
                      label: "2-3",
                      value: 0,
                    },
                    {
                      label: "3-4",
                      value: 0,
                    },
                    {
                      label: "4-5",
                      value: 0,
                    },
                    {
                      label: "5-6",
                      value: 3,
                    },
                    {
                      label: "6-7",
                      value: 0,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
                {
                  code: "INFO288-17",
                  name: "SISTEMAS DISTRIBUIDOS",
                  credits: [
                    {
                      label: "Créditos",
                      value: 4,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [],
                  requisites: [
                    {
                      code: "INFO198-17",
                    },
                  ],
                  historicalDistribution: [],
                  bandColors: [],
                },
                {
                  code: "ELECT112",
                  name: "OPTATIVO DE PROFUNDIZACIÓN I",
                  credits: [
                    {
                      label: "Créditos",
                      value: 0,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [],
                  requisites: [],
                  historicalDistribution: [],
                  bandColors: [],
                },
                {
                  code: "INFO289-17",
                  name:
                    "TALLER DE INTEGRACIÓN DE TECNOLOGÍA DE LA INFORMACIÓN Y COMUNICACIÓN",
                  credits: [
                    {
                      label: "Créditos",
                      value: 6,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO297-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "INFO104-17",
                    },
                    {
                      code: "INFO276-17",
                    },
                  ],
                  historicalDistribution: [],
                  bandColors: [],
                },
                {
                  code: "INFO290-17",
                  name: "MÉTODOS Y MODELOS DE INGENIERÍA DE SOFTWARE",
                  credits: [
                    {
                      label: "Créditos",
                      value: 4,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO297-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "INFO282-17",
                    },
                  ],
                  historicalDistribution: [],
                  bandColors: [],
                },
                {
                  code: "INFO286-17",
                  name: "SISTEMAS DE GESTIÓN",
                  credits: [
                    {
                      label: "Créditos",
                      value: 5,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO297-17",
                    },
                    {
                      code: "INFO293-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "INFO270-17",
                    },
                    {
                      code: "INFO278-17",
                    },
                  ],
                  historicalDistribution: [],
                  bandColors: [],
                },
              ],
            },
            {
              id: 10,
              courses: [
                {
                  code: "ELECT116",
                  name: "OPTATIVO DE PROFUNDIZACIÓN II",
                  credits: [
                    {
                      label: "Créditos",
                      value: 0,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [],
                  requisites: [],
                  historicalDistribution: [],
                  bandColors: [],
                },
                {
                  code: "INFO294-17",
                  name: "REALIDAD TECNOLÓGICA NACIONAL",
                  credits: [
                    {
                      label: "Créditos",
                      value: 4,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [],
                  requisites: [
                    {
                      code: "INFO090-17",
                    },
                    {
                      code: "ELECT101",
                    },
                    {
                      code: "BAIN065-14",
                    },
                    {
                      code: "BAIN067-14",
                    },
                    {
                      code: "BAIN071-14",
                    },
                    {
                      code: "INFO073-17",
                    },
                    {
                      code: "INFO063-17",
                    },
                    {
                      code: "BAIN073-14",
                    },
                    {
                      code: "BAIN079-14",
                    },
                    {
                      code: "INFO081-17",
                    },
                    {
                      code: "INFO083-17",
                    },
                    {
                      code: "BAIN069-14",
                    },
                    {
                      code: "DYRE070-14",
                    },
                    {
                      code: "BAIN075-14",
                    },
                    {
                      code: "BAIN077-14",
                    },
                    {
                      code: "ELECT12",
                    },
                    {
                      code: "BAIN081-14",
                    },
                    {
                      code: "BAIN083-14",
                    },
                    {
                      code: "INFO088-17",
                    },
                    {
                      code: "INFO085-17",
                    },
                    {
                      code: "BAIN091-14",
                    },
                    {
                      code: "BAIN085-14",
                    },
                    {
                      code: "BAIN087-14",
                    },
                    {
                      code: "INFO099-17",
                    },
                    {
                      code: "INFO104-17",
                    },
                    {
                      code: "EICI146-17",
                    },
                    {
                      code: "INFO145-17",
                    },
                    {
                      code: "ELECT100",
                    },
                    {
                      code: "INFO128-17",
                    },
                    {
                      code: "BAIN140-17",
                    },
                    {
                      code: "INFO139-17",
                    },
                    {
                      code: "INFO133-17",
                    },
                    {
                      code: "INFO229-17",
                    },
                    {
                      code: "BAIN150-17",
                    },
                    {
                      code: "INFO200-17",
                    },
                    {
                      code: "INFO208-17",
                    },
                    {
                      code: "INFO188-17",
                    },
                    {
                      code: "INFO198-17",
                    },
                    {
                      code: "EICI223-17",
                    },
                    {
                      code: "INFO257-17",
                    },
                    {
                      code: "INFO248-17",
                    },
                    {
                      code: "INFO245-17",
                    },
                    {
                      code: "INFO239-17",
                    },
                  ],
                  historicalDistribution: [],
                  bandColors: [],
                },
                {
                  code: "INFO297-17",
                  name: "TALLER DE TÍTULO",
                  credits: [
                    {
                      label: "Créditos",
                      value: 6,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [
                    {
                      code: "INFO299-17",
                    },
                    {
                      code: "INFO298-17",
                    },
                  ],
                  requisites: [
                    {
                      code: "INFO289-17",
                    },
                    {
                      code: "INFO290-17",
                    },
                    {
                      code: "INFO286-17",
                    },
                  ],
                  historicalDistribution: [],
                  bandColors: [],
                },
                {
                  code: "INFO293-17",
                  name:
                    "TECNOLOGÍA DE LA INFORMACIÓN PARA LA GESTIÓN ORGANIZACIONAL",
                  credits: [
                    {
                      label: "Créditos",
                      value: 6,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [],
                  requisites: [
                    {
                      code: "INFO280-17",
                    },
                    {
                      code: "INFO286-17",
                    },
                  ],
                  historicalDistribution: [],
                  bandColors: [],
                },
              ],
            },
            {
              id: 11,
              courses: [
                {
                  code: "INFO299-17",
                  name: "PROYECTO DE TÍTULO: MEMORIA (a)",
                  credits: [
                    {
                      label: "Créditos",
                      value: 6,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [],
                  requisites: [
                    {
                      code: "INFO297-17",
                    },
                  ],
                  historicalDistribution: [],
                  bandColors: [],
                },
                {
                  code: "INFO295-17",
                  name: "PRÁCTICA PROFESIONAL (a) y (b)",
                  credits: [
                    {
                      label: "Créditos",
                      value: 28,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [],
                  requisites: [
                    {
                      code: "INFO090-17",
                    },
                    {
                      code: "ELECT101",
                    },
                    {
                      code: "BAIN065-14",
                    },
                    {
                      code: "BAIN067-14",
                    },
                    {
                      code: "BAIN071-14",
                    },
                    {
                      code: "INFO073-17",
                    },
                    {
                      code: "INFO063-17",
                    },
                    {
                      code: "BAIN073-14",
                    },
                    {
                      code: "BAIN079-14",
                    },
                    {
                      code: "INFO081-17",
                    },
                    {
                      code: "INFO083-17",
                    },
                    {
                      code: "BAIN069-14",
                    },
                    {
                      code: "DYRE070-14",
                    },
                    {
                      code: "BAIN075-14",
                    },
                    {
                      code: "BAIN077-14",
                    },
                    {
                      code: "ELECT12",
                    },
                    {
                      code: "BAIN081-14",
                    },
                    {
                      code: "BAIN083-14",
                    },
                    {
                      code: "INFO088-17",
                    },
                    {
                      code: "INFO085-17",
                    },
                    {
                      code: "BAIN091-14",
                    },
                    {
                      code: "BAIN085-14",
                    },
                    {
                      code: "BAIN087-14",
                    },
                    {
                      code: "INFO099-17",
                    },
                    {
                      code: "INFO104-17",
                    },
                    {
                      code: "EICI146-17",
                    },
                    {
                      code: "INFO145-17",
                    },
                    {
                      code: "ELECT100",
                    },
                    {
                      code: "INFO128-17",
                    },
                    {
                      code: "BAIN140-17",
                    },
                    {
                      code: "INFO139-17",
                    },
                    {
                      code: "INFO133-17",
                    },
                    {
                      code: "INFO229-17",
                    },
                    {
                      code: "BAIN150-17",
                    },
                    {
                      code: "INFO200-17",
                    },
                    {
                      code: "INFO208-17",
                    },
                    {
                      code: "INFO188-17",
                    },
                    {
                      code: "INFO198-17",
                    },
                    {
                      code: "EICI223-17",
                    },
                    {
                      code: "INFO257-17",
                    },
                    {
                      code: "INFO248-17",
                    },
                    {
                      code: "INFO245-17",
                    },
                    {
                      code: "INFO239-17",
                    },
                    {
                      code: "INFO270-17",
                    },
                    {
                      code: "ELECT111",
                    },
                    {
                      code: "INFO276-17",
                    },
                    {
                      code: "INFO278-17",
                    },
                  ],
                  historicalDistribution: [],
                  bandColors: [],
                },
                {
                  code: "INFO298-17",
                  name: "PROYECTO DE TÍTULO: ARTÍCULO DE INVESTIGACIÓN (b)",
                  credits: [
                    {
                      label: "Créditos",
                      value: 6,
                    },
                    {
                      label: "SCT",
                      value: -1,
                    },
                  ],
                  mention: "",
                  flow: [],
                  requisites: [
                    {
                      code: "INFO297-17",
                    },
                  ],
                  historicalDistribution: [
                    {
                      label: "1-2",
                      value: 0,
                    },
                    {
                      label: "2-3",
                      value: 0,
                    },
                    {
                      label: "3-4",
                      value: 0,
                    },
                    {
                      label: "4-5",
                      value: 0,
                    },
                    {
                      label: "5-6",
                      value: 0,
                    },
                    {
                      label: "6-7",
                      value: 15,
                    },
                  ],
                  bandColors: [
                    {
                      min: 1,
                      max: 3.4999,
                      color: "#d6604d",
                    },
                    {
                      min: 3.5,
                      max: 3.9999,
                      color: "#f48873",
                    },
                    {
                      min: 4,
                      max: 4.4999,
                      color: "#a7dc78",
                    },
                    {
                      min: 4.5,
                      max: 7,
                      color: "#66b43e",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
  searchStudentData: {
    student: {
      id: "e078c7de4d67798a915801ba7e2539fb",
      programs: [
        {
          id: "1708",
          name: "INGENIERÍA CIVIL EN INFORMÁTICA",
        },
      ],
      curriculums: ["2017"],
      start_year: 2017,
      mention: "",
      terms: [
        {
          id: 125725,
          student_id: "e078c7de4d67798a915801ba7e2539fb",
          year: 2019,
          term: TermType.Second,
          situation: "",
          semestral_grade: 0,
          cumulated_grade: 0,
          program_grade: 4.31,
          comments: "",
          takenCourses: [
            {
              id: 123123,
              code: "END-17",
              equiv: "",
              name: "EVALUACIÓN NACIONAL DIAGNÓSTICA",
              registration: "REGISTRADA",
              grade: 0,
              state: StateCourse.Pending,
              parallelGroup: 0,
              currentDistribution: [],
              bandColors: [],
            },
            {
              id: 647897,
              code: "INFO229-17",
              equiv: "",
              name: "ARQUITECTURA DE SOFTWARE",
              registration: "REGISTRADA",
              grade: 0,
              state: StateCourse.Pending,
              parallelGroup: 0,
              currentDistribution: [],
              bandColors: [],
            },
            {
              id: 647861,
              code: "INFO208-17",
              equiv: "",
              name: "INGENIERÍA DE REQUISITOS",
              registration: "REGISTRADA",
              grade: 0,
              state: StateCourse.Current,
              parallelGroup: 0,
              currentDistribution: [],
              bandColors: [],
            },
            {
              id: 647823,
              code: "INFO188-17",
              equiv: "",
              name: "PROGRAMACIÓN EN PARADIGMAS FUNCIONAL Y PARALELO",
              registration: "REGISTRADA",
              grade: 0,
              state: StateCourse.Current,
              parallelGroup: 0,
              currentDistribution: [],
              bandColors: [],
            },
            {
              id: 606941,
              code: "BAIN150-17",
              equiv: "",
              name: "INGLÉS FUNCIONAL",
              registration: "REGISTRADA",
              grade: 0,
              state: StateCourse.Current,
              parallelGroup: 0,
              currentDistribution: [],
              bandColors: [],
            },
            {
              id: 606740,
              code: "BAIN091-14",
              equiv: "",
              name: "ESTADÍSTICA Y PROBABILIDADES PARA INGENIERÍA",
              registration: "REGISTRADA",
              grade: 0,
              state: StateCourse.Current,
              parallelGroup: 3,
              currentDistribution: [],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
            {
              id: 606465,
              code: "BAIN087-14",
              equiv: "",
              name: "MÉTODOS NUMÉRICOS PARA INGENIERÍA",
              registration: "REGISTRADA",
              grade: 0,
              state: StateCourse.Current,
              parallelGroup: 3,
              currentDistribution: [],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
            {
              id: 606317,
              code: "BAIN085-14",
              equiv: "",
              name: "FÍSICA: ONDAS Y ELECTROMAGNETISMO",
              registration: "REGISTRADA",
              grade: 0,
              state: StateCourse.Current,
              parallelGroup: 5,
              currentDistribution: [],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
          ],
        },
        {
          id: 125724,
          student_id: "e078c7de4d67798a915801ba7e2539fb",
          year: 2019,
          term: TermType.First,
          situation: "REGULAR",
          semestral_grade: 4.85,
          cumulated_grade: 5.49,
          program_grade: 4.31,
          comments: "",
          takenCourses: [
            {
              id: 578337,
              code: "INFO139-17",
              equiv: "",
              name: "TEORÍA DE AUTÓMATAS",
              registration: "CURSADA",
              grade: 3.6,
              state: StateCourse.Failed,
              parallelGroup: 0,
              currentDistribution: [
                {
                  label: "1-2",
                  value: 1,
                },
                {
                  label: "2-3",
                  value: 1,
                },
                {
                  label: "3-4",
                  value: 7,
                },
                {
                  label: "4-5",
                  value: 10,
                },
                {
                  label: "5-6",
                  value: 10,
                },
                {
                  label: "6-7",
                  value: 1,
                },
              ],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
            {
              id: 578302,
              code: "INFO133-17",
              equiv: "",
              name: "BASE DE DATOS",
              registration: "CURSADA",
              grade: 2.8,
              state: StateCourse.Failed,
              parallelGroup: 0,
              currentDistribution: [
                {
                  label: "1-2",
                  value: 2,
                },
                {
                  label: "2-3",
                  value: 1,
                },
                {
                  label: "3-4",
                  value: 1,
                },
                {
                  label: "4-5",
                  value: 17,
                },
                {
                  label: "5-6",
                  value: 8,
                },
                {
                  label: "6-7",
                  value: 2,
                },
              ],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
            {
              id: 546153,
              code: "DYRE000-90",
              equiv: "ELECT12",
              name: "DYRE000-90",
              registration: "CURSADA",
              grade: 6.7,
              state: StateCourse.Passed,
              parallelGroup: 0,
              currentDistribution: [],
              bandColors: [],
            },
            {
              id: 533248,
              code: "BAIN140-17",
              equiv: "",
              name: "INGLÉS INSTRUMENTAL",
              registration: "CURSADA",
              grade: 6.5,
              state: StateCourse.Passed,
              parallelGroup: 0,
              currentDistribution: [
                {
                  label: "1-2",
                  value: 1,
                },
                {
                  label: "2-3",
                  value: 0,
                },
                {
                  label: "3-4",
                  value: 1,
                },
                {
                  label: "4-5",
                  value: 4,
                },
                {
                  label: "5-6",
                  value: 8,
                },
                {
                  label: "6-7",
                  value: 5,
                },
              ],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
            {
              id: 533139,
              code: "BAIN091-14",
              equiv: "",
              name: "ESTADÍSTICA Y PROBABILIDADES PARA INGENIERÍA",
              registration: "ANULADA",
              grade: 0,
              state: StateCourse.Canceled,
              parallelGroup: 1,
              currentDistribution: [
                {
                  label: "1-2",
                  value: 3,
                },
                {
                  label: "2-3",
                  value: 2,
                },
                {
                  label: "3-4",
                  value: 1,
                },
                {
                  label: "4-5",
                  value: 19,
                },
                {
                  label: "5-6",
                  value: 3,
                },
                {
                  label: "6-7",
                  value: 0,
                },
              ],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
            {
              id: 532993,
              code: "BAIN087-14",
              equiv: "",
              name: "MÉTODOS NUMÉRICOS PARA INGENIERÍA",
              registration: "ANULADA",
              grade: 0,
              state: StateCourse.Canceled,
              parallelGroup: 3,
              currentDistribution: [
                {
                  label: "1-2",
                  value: 0,
                },
                {
                  label: "2-3",
                  value: 5,
                },
                {
                  label: "3-4",
                  value: 3,
                },
                {
                  label: "4-5",
                  value: 6,
                },
                {
                  label: "5-6",
                  value: 0,
                },
                {
                  label: "6-7",
                  value: 0,
                },
              ],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
            {
              id: 532865,
              code: "BAIN085-14",
              equiv: "",
              name: "FÍSICA: ONDAS Y ELECTROMAGNETISMO",
              registration: "CURSADA",
              grade: 3.8,
              state: StateCourse.Failed,
              parallelGroup: 1,
              currentDistribution: [
                {
                  label: "1-2",
                  value: 1,
                },
                {
                  label: "2-3",
                  value: 0,
                },
                {
                  label: "3-4",
                  value: 7,
                },
                {
                  label: "4-5",
                  value: 15,
                },
                {
                  label: "5-6",
                  value: 3,
                },
                {
                  label: "6-7",
                  value: 1,
                },
              ],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
          ],
        },
        {
          id: 125723,
          student_id: "e078c7de4d67798a915801ba7e2539fb",
          year: 2018,
          term: TermType.Second,
          situation: "REGULAR",
          semestral_grade: 5.25,
          cumulated_grade: 5.66,
          program_grade: 4.31,
          comments: "REINCORP",
          takenCourses: [
            {
              id: 455472,
              code: "INFO104-17",
              equiv: "",
              name: "TALLER DE CONSTRUCCIÓN DE SOFTWARE",
              registration: "CURSADA",
              grade: 6.1,
              state: StateCourse.Passed,
              parallelGroup: 0,
              currentDistribution: [
                {
                  label: "1-2",
                  value: 0,
                },
                {
                  label: "2-3",
                  value: 1,
                },
                {
                  label: "3-4",
                  value: 0,
                },
                {
                  label: "4-5",
                  value: 2,
                },
                {
                  label: "5-6",
                  value: 3,
                },
                {
                  label: "6-7",
                  value: 21,
                },
              ],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
            {
              id: 455449,
              code: "INFO099-17",
              equiv: "",
              name: "ESTRUCTURAS DISCRETAS",
              registration: "CURSADA",
              grade: 5.5,
              state: StateCourse.Passed,
              parallelGroup: 0,
              currentDistribution: [
                {
                  label: "1-2",
                  value: 4,
                },
                {
                  label: "2-3",
                  value: 4,
                },
                {
                  label: "3-4",
                  value: 2,
                },
                {
                  label: "4-5",
                  value: 15,
                },
                {
                  label: "5-6",
                  value: 2,
                },
                {
                  label: "6-7",
                  value: 1,
                },
              ],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
            {
              id: 455395,
              code: "INFO090-17",
              equiv: "",
              name: "PROGRAMACIÓN ORIENTADA A OBJETO",
              registration: "CURSADA",
              grade: 6.2,
              state: StateCourse.Passed,
              parallelGroup: 0,
              currentDistribution: [
                {
                  label: "1-2",
                  value: 0,
                },
                {
                  label: "2-3",
                  value: 3,
                },
                {
                  label: "3-4",
                  value: 1,
                },
                {
                  label: "4-5",
                  value: 11,
                },
                {
                  label: "5-6",
                  value: 7,
                },
                {
                  label: "6-7",
                  value: 6,
                },
              ],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
            {
              id: 293724,
              code: "BAIN083-14",
              equiv: "",
              name: "CÁLCULO EN VARIAS VARIABLES",
              registration: "CURSADA",
              grade: 4,
              state: StateCourse.Passed,
              parallelGroup: 3,
              currentDistribution: [
                {
                  label: "1-2",
                  value: 16,
                },
                {
                  label: "2-3",
                  value: 15,
                },
                {
                  label: "3-4",
                  value: 6,
                },
                {
                  label: "4-5",
                  value: 19,
                },
                {
                  label: "5-6",
                  value: 1,
                },
                {
                  label: "6-7",
                  value: 0,
                },
              ],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
            {
              id: 293167,
              code: "BAIN081-14",
              equiv: "",
              name: "ECUACIONES DIFERENCIALES PARA INGENIERÍA",
              registration: "CURSADA",
              grade: 5.9,
              state: StateCourse.Passed,
              parallelGroup: 3,
              currentDistribution: [
                {
                  label: "1-2",
                  value: 4,
                },
                {
                  label: "2-3",
                  value: 6,
                },
                {
                  label: "3-4",
                  value: 11,
                },
                {
                  label: "4-5",
                  value: 12,
                },
                {
                  label: "5-6",
                  value: 2,
                },
                {
                  label: "6-7",
                  value: 0,
                },
              ],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
            {
              id: 291962,
              code: "BAIN077-14",
              equiv: "",
              name: "FÍSICA: MECÁNICA",
              registration: "CURSADA",
              grade: 4.4,
              state: StateCourse.Passed,
              parallelGroup: 7,
              currentDistribution: [
                {
                  label: "1-2",
                  value: 3,
                },
                {
                  label: "2-3",
                  value: 5,
                },
                {
                  label: "3-4",
                  value: 7,
                },
                {
                  label: "4-5",
                  value: 14,
                },
                {
                  label: "5-6",
                  value: 0,
                },
                {
                  label: "6-7",
                  value: 0,
                },
              ],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
          ],
        },
        {
          id: 125722,
          student_id: "e078c7de4d67798a915801ba7e2539fb",
          year: 2018,
          term: TermType.First,
          situation: "REGULAR",
          semestral_grade: 3.61,
          cumulated_grade: 5.15,
          program_grade: 4.31,
          comments: "",
          takenCourses: [
            {
              id: 455341,
              code: "INFO088-17",
              equiv: "",
              name: "TALLER DE INGENIERÍA: ESTRUCTURA DE DATOS Y ALGORITMOS",
              registration: "CURSADA",
              grade: 6.4,
              state: StateCourse.Passed,
              parallelGroup: 1,
              currentDistribution: [
                {
                  label: "1-2",
                  value: 3,
                },
                {
                  label: "2-3",
                  value: 2,
                },
                {
                  label: "3-4",
                  value: 2,
                },
                {
                  label: "4-5",
                  value: 10,
                },
                {
                  label: "5-6",
                  value: 8,
                },
                {
                  label: "6-7",
                  value: 3,
                },
              ],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
            {
              id: 455299,
              code: "INFO085-17",
              equiv: "",
              name: "ESTRUCTURA DE DATOS Y ALGORITMOS",
              registration: "CURSADA",
              grade: 4.8,
              state: StateCourse.Passed,
              parallelGroup: 0,
              currentDistribution: [
                {
                  label: "1-2",
                  value: 8,
                },
                {
                  label: "2-3",
                  value: 10,
                },
                {
                  label: "3-4",
                  value: 6,
                },
                {
                  label: "4-5",
                  value: 9,
                },
                {
                  label: "5-6",
                  value: 3,
                },
                {
                  label: "6-7",
                  value: 0,
                },
              ],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
            {
              id: 293715,
              code: "BAIN083-14",
              equiv: "",
              name: "CÁLCULO EN VARIAS VARIABLES",
              registration: "CURSADA",
              grade: 0,
              state: StateCourse.Failed,
              parallelGroup: 3,
              currentDistribution: [
                {
                  label: "1-2",
                  value: 8,
                },
                {
                  label: "2-3",
                  value: 8,
                },
                {
                  label: "3-4",
                  value: 9,
                },
                {
                  label: "4-5",
                  value: 9,
                },
                {
                  label: "5-6",
                  value: 1,
                },
                {
                  label: "6-7",
                  value: 0,
                },
              ],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
            {
              id: 293175,
              code: "BAIN081-14",
              equiv: "",
              name: "ECUACIONES DIFERENCIALES PARA INGENIERÍA",
              registration: "CURSADA",
              grade: 3.2,
              state: StateCourse.Failed,
              parallelGroup: 3,
              currentDistribution: [
                {
                  label: "1-2",
                  value: 2,
                },
                {
                  label: "2-3",
                  value: 5,
                },
                {
                  label: "3-4",
                  value: 10,
                },
                {
                  label: "4-5",
                  value: 19,
                },
                {
                  label: "5-6",
                  value: 1,
                },
                {
                  label: "6-7",
                  value: 0,
                },
              ],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
            {
              id: 292004,
              code: "BAIN077-14",
              equiv: "",
              name: "FÍSICA: MECÁNICA",
              registration: "CURSADA",
              grade: 2.4,
              state: StateCourse.Failed,
              parallelGroup: 3,
              currentDistribution: [
                {
                  label: "1-2",
                  value: 7,
                },
                {
                  label: "2-3",
                  value: 3,
                },
                {
                  label: "3-4",
                  value: 6,
                },
                {
                  label: "4-5",
                  value: 7,
                },
                {
                  label: "5-6",
                  value: 1,
                },
                {
                  label: "6-7",
                  value: 0,
                },
              ],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
          ],
        },
        {
          id: 125721,
          student_id: "e078c7de4d67798a915801ba7e2539fb",
          year: 2017,
          term: TermType.Second,
          situation: "REGULAR",
          semestral_grade: 5.89,
          cumulated_grade: 5.95,
          program_grade: 4.31,
          comments: "",
          takenCourses: [
            {
              id: 455162,
              code: "INFO083-17",
              equiv: "",
              name: "TALLER DE INGENIERÍA: PROGRAMACIÓN APLICADA",
              registration: "CURSADA",
              grade: 1,
              state: StateCourse.Failed,
              parallelGroup: 1,
              currentDistribution: [
                {
                  label: "1-2",
                  value: 0,
                },
                {
                  label: "2-3",
                  value: 0,
                },
                {
                  label: "3-4",
                  value: 2,
                },
                {
                  label: "4-5",
                  value: 1,
                },
                {
                  label: "5-6",
                  value: 16,
                },
                {
                  label: "6-7",
                  value: 8,
                },
              ],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
            {
              id: 455104,
              code: "INFO081-17",
              equiv: "",
              name: "PROGRAMACIÓN",
              registration: "CURSADA",
              grade: 6.2,
              state: StateCourse.Passed,
              parallelGroup: 1,
              currentDistribution: [
                {
                  label: "1-2",
                  value: 2,
                },
                {
                  label: "2-3",
                  value: 1,
                },
                {
                  label: "3-4",
                  value: 3,
                },
                {
                  label: "4-5",
                  value: 16,
                },
                {
                  label: "5-6",
                  value: 3,
                },
                {
                  label: "6-7",
                  value: 3,
                },
              ],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
            {
              id: 344984,
              code: "DYRE070-14",
              equiv: "",
              name: "EDUCACIÓN FÍSICA Y SALUD",
              registration: "CURSADA",
              grade: 0,
              state: StateCourse.Passed,
              parallelGroup: 15,
              currentDistribution: [
                {
                  label: "1-2",
                  value: 0,
                },
                {
                  label: "2-3",
                  value: 0,
                },
                {
                  label: "3-4",
                  value: 0,
                },
                {
                  label: "4-5",
                  value: 0,
                },
                {
                  label: "5-6",
                  value: 0,
                },
                {
                  label: "6-7",
                  value: 0,
                },
              ],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
            {
              id: 292721,
              code: "BAIN079-14",
              equiv: "",
              name: "COMUNICACIÓN IDIOMA INGLÉS",
              registration: "CURSADA",
              grade: 7,
              state: StateCourse.Passed,
              parallelGroup: 4,
              currentDistribution: [
                {
                  label: "1-2",
                  value: 2,
                },
                {
                  label: "2-3",
                  value: 1,
                },
                {
                  label: "3-4",
                  value: 4,
                },
                {
                  label: "4-5",
                  value: 10,
                },
                {
                  label: "5-6",
                  value: 16,
                },
                {
                  label: "6-7",
                  value: 17,
                },
              ],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
            {
              id: 291257,
              code: "BAIN075-14",
              equiv: "",
              name: "CÁLCULO EN UNA VARIABLE",
              registration: "CURSADA",
              grade: 5.6,
              state: StateCourse.Passed,
              parallelGroup: 3,
              currentDistribution: [
                {
                  label: "1-2",
                  value: 5,
                },
                {
                  label: "2-3",
                  value: 9,
                },
                {
                  label: "3-4",
                  value: 6,
                },
                {
                  label: "4-5",
                  value: 6,
                },
                {
                  label: "5-6",
                  value: 2,
                },
                {
                  label: "6-7",
                  value: 1,
                },
              ],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
            {
              id: 290420,
              code: "BAIN073-14",
              equiv: "",
              name: "ÁLGEBRA LINEAL PARA INGENIERÍA",
              registration: "CURSADA",
              grade: 4.9,
              state: StateCourse.Passed,
              parallelGroup: 3,
              currentDistribution: [
                {
                  label: "1-2",
                  value: 5,
                },
                {
                  label: "2-3",
                  value: 7,
                },
                {
                  label: "3-4",
                  value: 3,
                },
                {
                  label: "4-5",
                  value: 9,
                },
                {
                  label: "5-6",
                  value: 2,
                },
                {
                  label: "6-7",
                  value: 1,
                },
              ],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
            {
              id: 288964,
              code: "BAIN069-14",
              equiv: "",
              name: "QUÍMICA PARA INGENIERÍA",
              registration: "CURSADA",
              grade: 5.8,
              state: StateCourse.Passed,
              parallelGroup: 2,
              currentDistribution: [
                {
                  label: "1-2",
                  value: 0,
                },
                {
                  label: "2-3",
                  value: 3,
                },
                {
                  label: "3-4",
                  value: 11,
                },
                {
                  label: "4-5",
                  value: 19,
                },
                {
                  label: "5-6",
                  value: 7,
                },
                {
                  label: "6-7",
                  value: 1,
                },
              ],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
          ],
        },
        {
          id: 125720,
          student_id: "e078c7de4d67798a915801ba7e2539fb",
          year: 2017,
          term: TermType.First,
          situation: "REGULAR",
          semestral_grade: 6.02,
          cumulated_grade: 6.02,
          program_grade: 4.31,
          comments: "",
          takenCourses: [
            {
              id: 123567,
              code: "EID-17",
              equiv: "",
              name: "PRUEBA INICIAL DIAGNÓSTICA",
              registration: "CURSADA",
              grade: 6.5,
              state: StateCourse.Passed,
              parallelGroup: 1,
              currentDistribution: [
                {
                  label: "1-2",
                  value: 10,
                },
                {
                  label: "2-3",
                  value: 5,
                },
                {
                  label: "3-4",
                  value: 0,
                },
                {
                  label: "4-5",
                  value: 5,
                },
                {
                  label: "5-6",
                  value: 9,
                },
                {
                  label: "6-7",
                  value: 24,
                },
              ],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
            {
              id: 454944,
              code: "INFO073-17",
              equiv: "",
              name: "TALLER DE INGENIERÍA: INTRODUCCIÓN A LA PROFESIÓN",
              registration: "CURSADA",
              grade: 6.5,
              state: StateCourse.Passed,
              parallelGroup: 1,
              currentDistribution: [
                {
                  label: "1-2",
                  value: 0,
                },
                {
                  label: "2-3",
                  value: 0,
                },
                {
                  label: "3-4",
                  value: 0,
                },
                {
                  label: "4-5",
                  value: 5,
                },
                {
                  label: "5-6",
                  value: 9,
                },
                {
                  label: "6-7",
                  value: 24,
                },
              ],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
            {
              id: 454517,
              code: "INFO063-17",
              equiv: "",
              name: "INTRODUCCIÓN A LA PROGRAMACIÓN",
              registration: "CURSADA",
              grade: 6,
              state: StateCourse.Passed,
              parallelGroup: 2,
              currentDistribution: [
                {
                  label: "1-2",
                  value: 0,
                },
                {
                  label: "2-3",
                  value: 9,
                },
                {
                  label: "3-4",
                  value: 7,
                },
                {
                  label: "4-5",
                  value: 17,
                },
                {
                  label: "5-6",
                  value: 3,
                },
                {
                  label: "6-7",
                  value: 2,
                },
              ],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
            {
              id: 289703,
              code: "BAIN071-14",
              equiv: "",
              name: "COMUNICACIÓN IDIOMA ESPAÑOL",
              registration: "CURSADA",
              grade: 5.9,
              state: StateCourse.Passed,
              parallelGroup: 5,
              currentDistribution: [
                {
                  label: "1-2",
                  value: 0,
                },
                {
                  label: "2-3",
                  value: 0,
                },
                {
                  label: "3-4",
                  value: 0,
                },
                {
                  label: "4-5",
                  value: 3,
                },
                {
                  label: "5-6",
                  value: 27,
                },
                {
                  label: "6-7",
                  value: 8,
                },
              ],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
            {
              id: 287745,
              code: "BAIN067-14",
              equiv: "",
              name: "GEOMETRÍA PARA INGENIERÍA",
              registration: "CURSADA",
              grade: 6.2,
              state: StateCourse.Passed,
              parallelGroup: 7,
              currentDistribution: [
                {
                  label: "1-2",
                  value: 14,
                },
                {
                  label: "2-3",
                  value: 5,
                },
                {
                  label: "3-4",
                  value: 5,
                },
                {
                  label: "4-5",
                  value: 5,
                },
                {
                  label: "5-6",
                  value: 0,
                },
                {
                  label: "6-7",
                  value: 2,
                },
              ],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
            {
              id: 286927,
              code: "BAIN065-14",
              equiv: "",
              name: "ÁLGEBRA PARA INGENIERÍA",
              registration: "CURSADA",
              grade: 5.6,
              state: StateCourse.Passed,
              parallelGroup: 7,
              currentDistribution: [
                {
                  label: "1-2",
                  value: 10,
                },
                {
                  label: "2-3",
                  value: 9,
                },
                {
                  label: "3-4",
                  value: 10,
                },
                {
                  label: "4-5",
                  value: 7,
                },
                {
                  label: "5-6",
                  value: 1,
                },
                {
                  label: "6-7",
                  value: 1,
                },
              ],
              bandColors: [
                {
                  min: 1,
                  max: 3.4999,
                  color: "#d6604d",
                },
                {
                  min: 3.5,
                  max: 3.9999,
                  color: "#f48873",
                },
                {
                  min: 4,
                  max: 4.4999,
                  color: "#a7dc78",
                },
                {
                  min: 4.5,
                  max: 7,
                  color: "#66b43e",
                },
              ],
            },
          ],
        },
      ],
      n_cycles: ["bachillerato", "licenciatura"],
      n_courses_cycles: [24, 20, 25, 1],

      dropout: {
        prob_dropout: 60.56,
        model_accuracy: 0.82,
        active: true,
      },
      admission: {
        type_admission: "PSU",
        initial_test: 10,
        final_test: null,
        active: true,
      },
      employed: {
        employed: true,
        educational_system: "Sistema educacional chileno",
        institution: "Liceo Recto Armando Robles",
        months_to_first_job: 15,
      },
    },
  },
  performanceByLoad: [
    {
      // LOW CREDITS - LOW PERFORMANCE
      id: 0,
      lowerBoundary: 0,
      upperBoundary: 20,
      adviceTitle: "¡Tu carga de estudio no es alta!",
      adviceParagraph:
        "Sólo un <LowFailRate /> de estudiantes con promedios similares al tuyo que han tomado una carga similar han pasado todos los cursos. Un <MidFailRate /> de ellos han reprobado 1 curso, y <HighFailRate /> han reprobado dos o más.",
      failRateLow: 23,
      failRateMid: 21,
      failRateHigh: 56,
      loadUnit: PerformanceLoadUnit.Credits,
      clusterLabel: "pga <= 4.38",
      isStudentCluster: false,
    },
    {
      // MID CREDITS - LOW PERFORMANCE
      id: 1,
      lowerBoundary: 21,
      upperBoundary: 26,
      adviceTitle: "¡Tu carga planeada parece moderada!",
      adviceParagraph:
        "Sólo un <LowFailRate /> de estudiantes con promedios similares al tuyo que han tomado una carga similar han pasado todos los cursos. Un <MidFailRate /> de ellos han reprobado 1 curso, y <HighFailRate /> han reprobado más de uno.",
      failRateLow: 10,
      failRateMid: 15,
      failRateHigh: 75,
      loadUnit: PerformanceLoadUnit.Credits,
      clusterLabel: "pga <= 4.38",
      isStudentCluster: false,
    },
    {
      // HIGH CREDITS - LOW PERFORMANCE
      id: 2,
      lowerBoundary: 27,
      upperBoundary: 30,
      adviceTitle: "¡Tu carga de estudio es alta!",
      adviceParagraph:
        "Sólo un <LowFailRate /> de estudiantes con promedios similares al tuyo que han tomado una carga similar han pasado todos los cursos. Un <MidFailRate /> de ellos han reprobado 1 curso, y <HighFailRate /> han reprobado más de uno.",
      failRateLow: 14,
      failRateMid: 8,
      failRateHigh: 78,
      loadUnit: PerformanceLoadUnit.Credits,
      clusterLabel: "pga <= 4.38",
      isStudentCluster: false,
    },
    {
      // VERY HIGH CREDITS - LOW PERFORMANCE
      id: 3,
      lowerBoundary: 31,
      upperBoundary: 9999,
      adviceTitle: "¡Tu carga de estudio es muy alta!",
      adviceParagraph:
        "Sólo un <LowFailRate /> de estudiantes con promedios similares al tuyo que han tomado una carga similar han pasado todos los cursos. Un <MidFailRate /> de ellos han reprobado 1 curso, y <HighFailRate /> han reprobado más de uno.",
      failRateLow: 9,
      failRateMid: 10,
      failRateHigh: 81,
      loadUnit: PerformanceLoadUnit.Credits,
      clusterLabel: "pga <= 4.38",
      isStudentCluster: false,
    },
    {
      // LOW CREDITS - MID PERFORMANCE
      id: 4,
      lowerBoundary: 0,
      upperBoundary: 20,
      adviceTitle: "¡Tu carga de estudio parece algo baja!",
      adviceParagraph:
        "Un <LowFailRate /> de estudiantes con promedios similares al tuyo que han tomado una carga similar han pasado todos los cursos. Un <MidFailRate /> de ellos han reprobado 1 curso, y sólo <HighFailRate /> han reprobado más de uno.",

      failRateLow: 40,
      failRateMid: 32,
      failRateHigh: 28,
      loadUnit: PerformanceLoadUnit.Credits,
      clusterLabel: "4.38 < pga <= 4.82",
      isStudentCluster: false,
    },
    {
      // MID CREDITS - MID PERFORMANCE
      id: 5,
      lowerBoundary: 20,
      upperBoundary: 26,
      adviceTitle: "¡Tu carga planeada parece moderada!",
      adviceParagraph:
        "Sólo un <LowFailRate /> de estudiantes con promedios similares al tuyo que han tomado una carga similar han pasado todos los cursos. Un <MidFailRate /> de ellos han reprobado 1 curso, y <HighFailRate /> han reprobado más de uno.",
      failRateLow: 26,
      failRateMid: 26,
      failRateHigh: 48,
      loadUnit: PerformanceLoadUnit.Credits,
      clusterLabel: "4.38 < pga <= 4.82",
      isStudentCluster: false,
    },
    {
      // HIGH CREDITS - MID PERFORMANCE
      id: 6,
      lowerBoundary: 27,
      upperBoundary: 30,
      adviceTitle: "¡Tu carga de estudio es alta!",
      adviceParagraph:
        "Sólo un <LowFailRate /> de estudiantes con promedios similares al tuyo que han tomado una carga similar han pasado todos los cursos. Un <MidFailRate /> de ellos han reprobado 1 curso, y <HighFailRate /> han reprobado más de uno.",
      failRateLow: 27,
      failRateMid: 24,
      failRateHigh: 49,
      loadUnit: PerformanceLoadUnit.Credits,
      clusterLabel: "4.38 < pga <= 4.82",
      isStudentCluster: false,
    },
    {
      // VERY HIGH CREDITS - MID PERFORMANCE
      id: 7,
      lowerBoundary: 31,
      upperBoundary: 9999,
      adviceTitle: "¡Tu carga de estudio es muy alta!",
      adviceParagraph:
        "Sólo un <LowFailRate /> de estudiantes con promedios similares al tuyo que han tomado una carga similar han pasado todos los cursos. Un <MidFailRate /> de ellos han reprobado 1 curso, y <HighFailRate /> han reprobado más de uno.",
      failRateLow: 33,
      failRateMid: 21,
      failRateHigh: 46,
      loadUnit: PerformanceLoadUnit.Credits,
      clusterLabel: "4.38 < pga <= 4.82",
      isStudentCluster: false,
    },
    {
      // LOW CREDITS - GOOD PERFORMANCE
      id: 8,
      lowerBoundary: 0,
      upperBoundary: 20,
      adviceTitle: "¡Tu carga de estudio parece algo baja!",
      adviceParagraph:
        "Un <LowFailRate /> de estudiantes con promedios similares al tuyo que han tomado una carga similar han pasado todos los cursos. Un <MidFailRate /> de ellos han reprobado 1 curso, y <HighFailRate /> han reprobado más de uno.",
      failRateLow: 66,
      failRateMid: 21,
      failRateHigh: 13,
      loadUnit: PerformanceLoadUnit.Credits,
      clusterLabel: "pga > 4.82",
      isStudentCluster: true,
    },
    {
      // MID CREDITS - GOOD PERFORMANCE
      id: 9,
      lowerBoundary: 20,
      upperBoundary: 26,
      adviceTitle: "¡Tu carga planeada parece moderada!",
      adviceParagraph:
        "Un <LowFailRate /> de estudiantes con promedios similares al tuyo que han tomado una carga similar han pasado todos los cursos. Un <MidFailRate /> de ellos han reprobado 1 curso, y <HighFailRate /> han reprobado más de uno.",
      failRateLow: 60,
      failRateMid: 21,
      failRateHigh: 19,
      loadUnit: PerformanceLoadUnit.Credits,
      clusterLabel: "pga > 4.82",
      isStudentCluster: true,
    },
    {
      // HIGH CREDITS - GOOD PERFORMANCE
      id: 10,
      lowerBoundary: 27,
      upperBoundary: 30,
      adviceTitle: "¡Tu carga de estudio es alta!",
      adviceParagraph:
        "Un <LowFailRate /> de estudiantes con promedios similares al tuyo que han tomado una carga similar han pasado todos los cursos. Un <MidFailRate /> de ellos han reprobado 1 curso, y <HighFailRate /> han reprobado más de uno.",
      failRateLow: 64,
      failRateMid: 18,
      failRateHigh: 18,
      loadUnit: PerformanceLoadUnit.Credits,
      clusterLabel: "pga > 4.82",
      isStudentCluster: true,
    },
    {
      // VERY HIGH CREDITS - GOOD PERFORMANCE
      id: 11,
      lowerBoundary: 31,
      upperBoundary: 9999,
      adviceTitle: "¡Tu carga de estudio es muy alta!",
      adviceParagraph:
        "Un <LowFailRate /> de estudiantes con promedios similares al tuyo que han tomado una carga similar han pasado todos los cursos. Un <MidFailRate /> de ellos han reprobado 1 curso, y <HighFailRate /> han reprobado más de uno.",
      failRateLow: 70,
      failRateMid: 16,
      failRateHigh: 14,
      loadUnit: PerformanceLoadUnit.Credits,
      clusterLabel: "pga > 4.82",
      isStudentCluster: true,
    },
  ],
};

export default data;
