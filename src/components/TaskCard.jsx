function TaskCard({ task, roommate, rotation, isActive }) {
  const style = {
    transform: `rotateZ(${rotation}deg) translateY(-250px) rotateZ(${-rotation}deg)`
  };

  const cardClassName = `task-card ${isActive ? 'active' : ''}`;

  return (
    <div className={cardClassName} style={style}>
      <div className="task-name">{task}</div>
      <div className="roommate-name">{roommate}</div>
    </div>
  );
}

export default TaskCard;