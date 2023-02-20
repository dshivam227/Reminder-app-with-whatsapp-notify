
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import DateTimePicker from "react-datetime-picker";



function App() {
  const [reminderMsg, setReminderMsg] = useState('');
  const [reminderDate, setReminderDate] = useState(new Date());
  const addReminder = () => {
    axios.post('http://localhost:3001/reminders', {
      reminderMsg,
      reminderDate
    })
      .then(res => {
        console.log(res.data)
      })
  }
  return (
    <div className="App">
      <div className="homepage">

        <div className="homepage-header">
          <h1>Remind Me</h1>
          <input type="text" placeholder='Reminder Notes here ...' value={reminderMsg} onChange={e => setReminderMsg(e.target.value)} />
          <DateTimePicker
            value={reminderDate}
            onChange={setReminderDate}
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
          <div className="reminder-card">
            <h2>Reminder Note</h2>
            <h3>Remind me at :</h3>
            <p>26/05/2021 @ 2AM</p>
            <button className="delete"> Delete </button>
          </div>
          <div className="reminder-card">
            <h2>Reminder Note</h2>
            <h3>Remind me at :</h3>
            <p>26/05/2021 @ 2AM</p>
            <button className="delete"> Delete </button>
          </div>
          <div className="reminder-card">
            <h2>Reminder Note</h2>
            <h3>Remind me at :</h3>
            <p>26/05/2021 @ 2AM</p>
            <button className="delete"> Delete </button>
          </div>
          <div className="reminder-card">
            <h2>Reminder Note</h2>
            <h3>Remind me at :</h3>
            <p>26/05/2021 @ 2AM</p>
            <button className="delete"> Delete </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
