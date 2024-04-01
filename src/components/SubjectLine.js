// SubjectLine.js
import React from 'react';

const SubjectLine = ({ companyName }) => {
  // Function to capitalize company name and format subject line
  const formatSubjectLine = (name) => {
    return `${name.toUpperCase()} - White Cap Credit Application - `;
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        readOnly
        value={companyName ? formatSubjectLine(companyName) : ''}
        placeholder="Subject line will appear here..."
      />
    </div>
  );
};

export default SubjectLine;
