import {useState,useEffect} from "react";
import style from './style.module.css';

const ProgressBar =({reminder, currentTime, isDone})=> {
    const [value, setValue] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(()=>{
        // ((Vi-Vc)/Vi)*100
        const lowerThan = Math.round(((reminder.duration() - reminder.countDown(currentTime)) / reminder.duration()) * 100);
        lowerThan <= 100 ? setValue(lowerThan) : setValue(100);
        if(value === 100) {
            setIsActive(true)
            isDone('Complete')
        };
    });

    useEffect(()=>{
        const audio = new Audio('/assets/sounds/alarm.mp3');
        isActive ? audio.play() : null;
    },[isActive]);

    return (
        <div className={style.container}>
            <div style={{backgroundColor: 'red',width: `${value}%`}}>
                <span className={style.progress}>{value}%</span>
            </div>
        </div>
    )
}

export default ProgressBar;