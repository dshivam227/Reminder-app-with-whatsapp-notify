
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import DateTimePicker from "react-datetime-picker";



function App() {
  const [reminderMsg, setReminderMsg] = useState('');
  const [remindAt, setremindAt] = useState();
  const [reminderList, setReminderList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9000/getallreminder')
      .then(res => {
        setReminderList(res.data)
      })
  },[])

  const addReminder = () => {
    axios.post('http://localhost:9000/addreminder', {
      reminderMsg,
      remindAt

    })
      .then(res => {
        setReminderList(res.data)
      })
  }

  const deleteReminder = (id) => {
    axios.post("http://localhost:9000/deleteReminder", { id })
    .then( res => setReminderList(res.data))
  }
  return (
    <div className="App">
      {console.log(reminderList)}
      <div className="homepage">

        <div className="homepage-header">
          <h1>Remind Me</h1>
          <input type="text" placeholder='Reminder Notes here ...' value={reminderMsg} onChange={e => setReminderMsg(e.target.value)} />
          <DateTimePicker
            value={remindAt}
            onChange={setremindAt}
            minDate={new Date()}
            minutePlaceholder="mm"
            hourPlaceholder="hh"
            dayPlaceholder="dd"
            monthPlaceholder="mm"
            yearPlaceholder="yyyy"

          />
          <button className="button" onClick={addReminder}>
            Add Reminder
          </button>
        </div>

        <div className="homepage-body">
          {
            reminderList.map(reminder=>{
              return(
                <div className="reminder-card" key={reminder._id}>
                  <h2>{reminder.reminderMsg}</h2>
                  <h3>Remind me at : </h3>
                  <p>{reminder.remindAt}</p>
                  
                  <button className="delete" onClick={() => deleteReminder(reminder._id)}> Delete </button>
                </div>
              )
            })
          }
          
        </div>
      </div>
    </div>
  );
}

export default App;
