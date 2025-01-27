import type React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { Course } from "@/types/student"

interface CourseListProps {
  courses: Course[]
  year: number
}

export const CourseList: React.FC<CourseListProps> = ({ courses, year }) => {
  const filteredCourses = courses.filter((course) => course.year === year)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Course</TableHead>
          <TableHead>Code</TableHead>
          <TableHead>UC-AG Course ID</TableHead>
          <TableHead>Subject Area</TableHead>
          <TableHead>Level</TableHead>
          <TableHead>Credits</TableHead>
          <TableHead>Grade</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredCourses.map((course, index) => (
          <TableRow key={index}>
            <TableCell>{course.name}</TableCell>
            <TableCell>{course.code}</TableCell>
            <TableCell>{course.ucAgCourseId || "N/A"}</TableCell>
            <TableCell>{course.subjectArea}</TableCell>
            <TableCell>{course.level}</TableCell>
            <TableCell>{course.credits}</TableCell>
            <TableCell>{course.grade}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

