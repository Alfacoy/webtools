import {useEffect,useState} from "react";

import MasterReminder from "../classes/masterReminder";
import MasterTimer from "../classes/masterTimer";

import ReminderLayout from '../components/Reminder/Layout';
import ReminderController from "../components/Reminder/Controller";

const timer = new MasterTimer()

export default function Home() {
    const [title,setTitle] = useState('');
    const [hour,setHour] = useState(0);
    const [minute,setMinute] = useState(0);
    const [reminders,setReminders] = useState([]);
    const [time,setTime] = useState('');

    useEffect(()=>{
        setInterval(()=>{
            setTime(timer.now())
        },1000)
    },[])

  useEffect(()=>{
      const intervalId = setInterval(()=>{
          reminders.forEach((item,index) => {
              if(timer.diff(item.endTime) <= 0){
                  item.status = 'Finalizado'
              }
          })
      },1000)

      return () => clearInterval(intervalId)
  },[reminders])

    //**Config-Layout**//
    function handleChangeTitle (event) {
        setTitle(event);
    }
    function handleChangeHour(event) {
        setHour(event);
    }
    function handleChangeMinute (event) {
        setMinute(event);
    }
    function handleClickNewReminder () {
        if(!title) return console.error('Is not possible to create a new reminder without a title.');
        if(!hour) return console.error('Is not possible to create a new reminder without an hour.');
        if(!minute) return console.error('Is not possible to create a new reminder without minutes.');
        const newReminder = new MasterReminder(title,'En curso',parseInt(hour),parseInt(minute));
        setReminders([...reminders, newReminder]);
        setTitle('');
        setHour(0);
        setMinute(0);
    }

  return (
        <main>
            <h1>Welcome to Reminder</h1>
            <h3>Current Time: {time}</h3>
            <ReminderController
                title={handleChangeTitle}
                hour={handleChangeHour}
                minute={handleChangeMinute}
                create={handleClickNewReminder}
            />
            <section>
                <h3>List of Reminders:</h3>
                <span>Quantity: {reminders.length}</span>
                <br /><br />
                {(reminders.length > 0) ?
                    reminders.map((item,index) => <ReminderLayout key={index} status={item.status} title={item.title} time={item.endTime} reminder={reminders[index]} />)
                     : 'Not found reminders'
                }
            </section>
        </main>
  )
}
