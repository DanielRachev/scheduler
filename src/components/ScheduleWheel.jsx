import { useLayoutEffect, useRef } from 'react';
import TaskCard from './TaskCard';

import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';

gsap.registerPlugin(Draggable, InertiaPlugin);

function ScheduleWheel({ schedule }) {
  const totalTasks = schedule.length;
  const angleIncrement = 360 / totalTasks;

  const wheelRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      Draggable.create(wheelRef.current, {
        type: "rotation",
        inertia: true,
        edgeResistance: 0.65,
        // resistance: 2000
      });
    }, wheelRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="schedule-wheel" ref={wheelRef}>
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