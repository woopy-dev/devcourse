import { useState } from "react"

// const Timer: React.FC = () => {
//   const [seconds, setSeconds] = useState<number>();

//   return (
//     <div>
//       <h2>타이머: {seconds}초</h2>
//       <button onClick={() => {
//         setInterval(() => {
//           setSeconds((prev) => (prev !== undefined ? prev + 1 : 1));
//         }, 1000);
//       }}>시작</button>
//     </div>
//   )
// }

// export default Timer;

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  setInterval(() => {
    setTime(new Date());
  }, 1000);

  return (
    <div>
      현재 시간: {time.toLocaleTimeString()}
    </div>
  )
}

export default Clock;