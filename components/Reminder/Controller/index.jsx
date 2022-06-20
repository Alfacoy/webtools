import style from './style.module.css';

const ReminderController = ({title,hour,minute,create}) => {

    function handleChange (event) {
        const input = event.target;
        switch (input.name){
            case 'title':
                title(event.target.value);
                break;
            case 'hour':
                hour(event.target.value);
                break;
            case 'minute':
                minute(event.target.value);
                break;
        }
    }

    function handleSubmit (event) {
        event.preventDefault()
        create()
        const nodes = event.target.form.childNodes;
        nodes.forEach(node => {
            if(node.name) node.value = null;
        })
    }

    return (
        <form>
            <label>Title</label>
            <input type="text" name="title" onChange={handleChange} required />
            <label>Hour</label>
            <input type="number" name="hour" onChange={handleChange} required />
            <label>Minute</label>
            <input type="number" name="minute" onChange={handleChange} required />
            <input onClick={handleSubmit} type="button" value="New Reminder" />
        </form>
    )
}

export default ReminderController;