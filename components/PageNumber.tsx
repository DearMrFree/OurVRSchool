import React from 'react'

interface PageNumberProps {
  studentName: string
  studentId: string
}

export const PageNumber: React.FC<PageNumberProps> = ({ studentName, studentId }) => {
  return (
    <div className="fixed bottom-4 right-4 text-xs text-gray-500 print:text-black">
      <p>{studentName} - {studentId}</p>
      <p>Page <span className="pageNumber"></span> of <span className="totalPages"></span></p>
    </div>
  )
}

