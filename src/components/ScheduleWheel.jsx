import { useLayoutEffect, useRef, useState } from 'react';
import TaskCard from './TaskCard';

import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';

gsap.registerPlugin(Draggable, InertiaPlugin);

function ScheduleWheel({ schedule }) {
  const totalTasks = schedule.length;
  const angleIncrement = 360 / totalTasks;

  const wheelRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      Draggable.create(wheelRef.current, {
        type: "rotation",
        inertia: true,
        edgeResistance: 0.65,
        onDrag: updateActive,
        onThrowUpdate: updateActive,
      });

      function updateActive() {
        const rotation = this.rotation;
        const index = Math.round(-rotation / angleIncrement);
        const wrappedIndex = (index % totalTasks + totalTasks) % totalTasks;
        
        setActiveIndex(prevIndex => {
          if (prevIndex !== wrappedIndex) {
            return wrappedIndex;
          }
          return prevIndex;
        });
      }

    }, wheelRef);

    return () => ctx.revert();
  }, [totalTasks, angleIncrement]); 

  return (
    <div className="schedule-wheel" ref={wheelRef}>
      {schedule.map(({ task, roommate }, index) => {
        const rotation = index * angleIncrement;
        const isActive = index === activeIndex;

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