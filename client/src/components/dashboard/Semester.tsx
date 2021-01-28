import React, { FC, useContext } from "react";

import { Stack, StackProps, Text } from "@chakra-ui/react";

import { StateCourse } from "../../../constants";
import { ICourse } from "../../../../interfaces";
import { ConfigContext } from "../../context/Config";
import { CourseBox } from "./CourseBox/CourseBox";
import { GroupedCourseBox } from "./CourseBox/GroupedCourseBox";

const toRoman = (num: number, first = false): string => {
  if (first && num === 0) {
    return "-";
  }
  if (num < 1) {
    return "";
  }
  if (num >= 40) {
    return "XL" + toRoman(num - 40);
  }
  if (num >= 10) {
    return "X" + toRoman(num - 10);
  }
  if (num >= 9) {
    return "IX" + toRoman(num - 9);
  }
  if (num >= 5) {
    return "V" + toRoman(num - 5);
  }
  if (num >= 4) {
    return "IV" + toRoman(num - 4);
  }
  if (num >= 1) {
    return "I" + toRoman(num - 1);
  }
  return "";
};

export const Semester: FC<
  {
    courses: ICourse[];
    n: number;
  } & StackProps
> = ({ courses: semester, n, mr, ...stackProps }) => {
  const { SEMESTER_HEADER_TEXT_COLOR, SEMESTER_HEADER_FONT_SIZE } = useContext(
    ConfigContext
  );

  return (
    <Stack {...stackProps} height="fit-content">
      <Text
        color={SEMESTER_HEADER_TEXT_COLOR}
        textAlign="center"
        fontSize={SEMESTER_HEADER_FONT_SIZE}
      >
        <b>{toRoman(n, true)}</b>
      </Text>
      <GroupedCourseBox
        code={"ASD1-23"}
        name={"Curso X"}
        credits={[{ label: "creditos", value: 13 }]}
        groupedDistribution={[{ label: "2", value: 13 }]}
        historicDistribution={[{ label: "1", value: 13 }]}
        n_total={100}
        n_passed={20}
        requisites={[]}
        flow={[]}
        bandColors={[{ min: 1, max: 7, color: "red" }]}
        taken={[
          {
            term: "1",
            year: 1,
            registration: "CURSADA",
            equiv: "",
            grade: 5.6,
            state: StateCourse.Passed,
            currentDistribution: [{ label: "111", value: 13 }],
            parallelGroup: 1,
            bandColors: [{ min: 1, max: 7, color: "blue" }],
          },
        ]}
      />

      {semester.map((course) => (
        <CourseBox key={course.code} {...course} />
      ))}
    </Stack>
  );
};
