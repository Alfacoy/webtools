import {useEffect,useState} from "react";

import Reminder from "../components/Reminder";
import MasterTimer from "../classes/masterTimer";
const timer = new MasterTimer();

export default function Home() {
    const [time,setTime] = useState('');

    useEffect(()=>{
        setInterval(()=>{
            setTime(timer.display())
        },1000)
    },[])

  return (
        <main>
            <h1>Welcome to Reminder test</h1>
            <h3>Current Time: {time}</h3>
            <Reminder currentTime={timer.currentTime()}/>
        </main>
  )
}
