import {useEffect,useState} from "react";
//**Classes**//
import MasterReminder from "../../classes/masterReminder";
//**Components**//
import ReminderLayout from './Layout';
import ReminderController from "./Controller";
//**Styles**//
import style from './style.module.css'

const Reminder = ({currentTime}) => {
    const [title,setTitle] = useState('');
    const [hour,setHour] = useState(0);
    const [minute,setMinute] = useState(0);
    const [reminders,setReminders] = useState([]);

    //**Config-Layout**//
    function handleChangeTitle(event) {
        setTitle(event);
    }
    function handleChangeHour(event) {
        setHour(event);
    }
    function handleChangeMinute(event) {
        setMinute(event);
    }
    function setInitialValues() {
        setTitle('');
        setHour(0);
        setMinute(0);
    }
    function handleClickNewReminder() {
        const parseHour = parseInt(hour);
        const parseMinute = parseInt(minute);
        if(!title) return {status: 'Error', message: 'Is not possible to create a new reminder without a title.'};
        if(!hour) return {status: 'Error', message: 'Is not possible to create a new reminder without an hour.'};
        if(!minute) return {status: 'Error', message: 'Is not possible to create a new reminder without minutes.'};
        const newReminder = new MasterReminder(title,'In progress',parseHour,parseMinute);
        setReminders([...reminders, newReminder]);
        setInitialValues();
        return {status: 'Success', message:'The Reminder has created successfully.'};
    }

    return (
        <>
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
                    reminders.map((item,index) => <ReminderLayout key={index} status={item.status} title={item.title} time={item.endTime} reminder={reminders[index]}
                                                                  currentTime={currentTime}/>)
                    : 'Not found reminders'
                }
            </section>
        </>
    )
}

export default Reminder;