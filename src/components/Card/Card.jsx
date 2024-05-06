import React from 'react';
import './Card.styled.jsx'; 

const Card = ({ priority, title, description, priority, deadline }) => {
  return (
    <div className={`card ${priority.toLowerCase()}`}>
      <div className="card-header">
        <span className="priority">{priority}</span>
        <span className="deadline">{deadline ? `Deadline: ${deadline}` : 'No Deadline'}</span>
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <div className="card-footer">
        {priority && <span className="priority">Priority: {priority}</span>}
        {/* Icons would be added here */}
      </div>
    </div>
  );
};

export default Card;
