export interface Course {
  courseRecordId: string;
  courseTitle: string;
  courseNumbers: string[];
  courseLength: string;
  subjectArea: string;
  ucHonorsDesignation: string;
}

const courses: Course[] = [
  {
    courseRecordId: "YMES6W",
    courseTitle: "AP English Language and Composition",
    courseNumbers: ["ENG301"],
    courseLength: "Full Year",
    subjectArea: "English",
    ucHonorsDesignation: "HON",
  },
  {
    courseRecordId: "CNJ3S5",
    courseTitle: "AP Computer Science Principles",
    courseNumbers: ["CSC301"],
    courseLength: "Full Year",
    subjectArea: "Computer Science",
    ucHonorsDesignation: "HGHHNR",
  },
  {
    courseRecordId: "PM956E",
    courseTitle: "AP European History",
    courseNumbers: ["HIS301"],
    courseLength: "Full Year",
    subjectArea: "History",
    ucHonorsDesignation: "HON",
  },
  // Add more courses as needed
];

export function getCourseById(id: string): Course | undefined {
  return courses.find(course => course.courseRecordId === id);
}

export function getAllCourses(): Course[] {
  return courses;
}

