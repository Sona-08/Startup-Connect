import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import "./Meetings.css";

function Meetings() {

    const [meeting, setMeeting] = useState({
        investor: "",
        date: "",
        time: "",
        mode: "Online",
        location: ""
    });

    const [meetings, setMeetings] = useState([]);

    const handleChange = (e) => {
        setMeeting({
            ...meeting,
            [e.target.name]: e.target.value
        });
    };

    const scheduleMeeting = (e) => {

        e.preventDefault();

        setMeetings([...meetings, meeting]);

        alert("Meeting Scheduled Successfully!");

        setMeeting({
            investor:"",
            date:"",
            time:"",
            mode:"Online",
            location:""
        });

    };

    return (

        <>

            <Navbar/>

            <div className="meeting-page">

                <Sidebar/>

                <div className="meeting-container">

                    <h1>Meeting Scheduler</h1>

                    <form onSubmit={scheduleMeeting}>

                        <input
                            type="text"
                            name="investor"
                            placeholder="Investor Name"
                            value={meeting.investor}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="date"
                            name="date"
                            value={meeting.date}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="time"
                            name="time"
                            value={meeting.time}
                            onChange={handleChange}
                            required
                        />

                        <select
                            name="mode"
                            value={meeting.mode}
                            onChange={handleChange}
                        >

                            <option>Online</option>

                            <option>Offline</option>

                        </select>

                        <input
                            type="text"
                            name="location"
                            placeholder="Meeting Link / Location"
                            value={meeting.location}
                            onChange={handleChange}
                        />

                        <button>
                            Schedule Meeting
                        </button>

                    </form>

                    <h2>Upcoming Meetings</h2>

                    <table>

                        <thead>

                            <tr>

                                <th>Investor</th>

                                <th>Date</th>

                                <th>Time</th>

                                <th>Mode</th>

                                <th>Location</th>

                            </tr>

                        </thead>

                        <tbody>

                            {meetings.map((item,index)=>(

                                <tr key={index}>

                                    <td>{item.investor}</td>

                                    <td>{item.date}</td>

                                    <td>{item.time}</td>

                                    <td>{item.mode}</td>

                                    <td>{item.location}</td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

            <Footer/>

        </>

    );

}

export default Meetings;