function TaskCard({ task, roommate, rotation, isActive }) {
  const containerStyle = {
    transform: `rotateZ(${rotation}deg)`
  };

  const cardClassName = `task-card ${isActive ? 'active' : ''}`;

  return (
    <div style={containerStyle} className="task-card-container">
      <div className={cardClassName}>
        <div className="task-name">{task}</div>
        <div className="roommate-name">{roommate}</div>
      </div>
    </div>
  );
}

export default TaskCard;