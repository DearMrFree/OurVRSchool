export interface Course {
  id: string;
  name: string;
  code: string;
  credits: number;
  grade: string;
  ucAgCourseId?: string;
  subjectArea: string;
  level: string;
  year: number;
}

export interface Student {
  id: string;
  name: string;
  dateOfBirth: string;
  studentId: string;
  vrAddress: string;
  graduationDate: string;
  grade: number;
  gpa: number;
  enrollmentStatus: string;
  cumulativeCredits: number;
  freshmanGPA: number;
  sophomoreGPA: number;
  juniorGPA: number | string;
  seniorGPA: number | string;
  courses: Course[];
}

export interface Students {
  [key: string]: Student;
}

