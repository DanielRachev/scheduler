import './App.css'
import { differenceInWeeks, format, startOfWeek, endOfWeek } from 'date-fns'
import ScheduleWheel from './components/ScheduleWheel';

const ROOMMATES = ['Ziyu', 'Barni', 'Daniel', 'Andrea', 'Olmo'];
const TASKS = ['Kitchen', 'Trash', 'Floors', 'Bathroom', 'Toilet'];
const START_DATE = new Date('2025-09-22');

function getScheduleForDate(date) {
  const weekOffset = differenceInWeeks(date, START_DATE);

  const schedule = TASKS.map((task, index) => {
    const roommateIndex = (ROOMMATES.length + index - weekOffset % ROOMMATES.length) % ROOMMATES.length;
    const roommate = ROOMMATES[roommateIndex];
    return { task, roommate };
  });

  return schedule;
}

function WeekDisplay({ date }) {
  const weekStart = startOfWeek(date, { weekStartsOn: 1 });
  const weekEnd = endOfWeek(date, { weekStartsOn: 1 });

  const formattedStart = format(weekStart, 'MMM d');
  const formattedEnd = format(weekEnd, 'MMM d');

  return (
    <div className="wheel-center">
      <h3>{`${formattedStart} - ${formattedEnd}`}</h3>
    </div>
  )
}

function App() {
  const today = new Date();
  const currentSchedule = getScheduleForDate(today);

  return (
    <div className="wheel-container">
      <div className="mobile-circle-border"></div>
      <ScheduleWheel schedule={currentSchedule} />

      <WeekDisplay date={today} />
    </div>
  )
}

export default App
