import TaskCard from './TaskCard';

function ScheduleWheel({ schedule }) {
  const totalTasks = schedule.length;
  const angleIncrement = 360 / totalTasks;

  return (
    <div className="schedule-wheel">
      {schedule.map(({ task, roommate }, index) => {
        const rotation = index * angleIncrement;
        const isActive = index === 0;

        return (
          <TaskCard
            key={task}
            task={task}
            roommate={roommate}
            rotation={rotation}
            isActive={isActive}
          />
        );
      })}
    </div>
  );
}

export default ScheduleWheel;