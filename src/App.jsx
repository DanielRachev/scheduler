import './App.css'
import { differenceInWeeks } from 'date-fns'

const ROOMMATES = ['Alice', 'Bob', 'Charlie', 'Diana', 'Evan'];
const TASKS = ['Kitchen', 'Trash', 'Floors', 'Bathroom', 'Toilet'];

const START_DATE = new Date('2025-09-08');

function getScheduleForDate(date) {
  const weekOffset = differenceInWeeks(date, START_DATE);

  const schedule = TASKS.map((task, index) => {
    const roommateIndex = (index + weekOffset) % ROOMMATES.length;
    const roommate = ROOMMATES[roommateIndex];
    return { task, roommate };
  });

  return schedule;
}


function App() {
  const today = new Date();
  const currentSchedule = getScheduleForDate(today);

  return (
    <div className="App">
      <h1>Weekly Cleaning Schedule</h1>

      <h2>This Week's Schedule:</h2>
      <ul>
        {currentSchedule.map(({ task, roommate }) => (
          <li key={task}>
            <strong>{task}:</strong> {roommate}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App