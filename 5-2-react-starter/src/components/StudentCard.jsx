import React from 'react';


function StudentCard({ name, id, department }) {
  return (
    <div className="student-card">
      <h3>Name: {name}</h3>
      <p>ID: {id}</p>
      <p>Department: {department}</p>
    </div>
  );
}

export default StudentCard;
