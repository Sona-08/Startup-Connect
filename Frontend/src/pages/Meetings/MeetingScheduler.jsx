import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import "./MeetingScheduler.css";

function MeetingScheduler() {

    const [meeting, setMeeting] = useState({
        investor: "",
        date: "",
        time: "",
        platform: "Google Meet",
        link: ""
    });

    const handleChange = (e) => {
        setMeeting({
            ...meeting,
            [e.target.name]: e.target.value
        });
    };

    const scheduleMeeting = (e) => {

        e.preventDefault();

        alert("Meeting Scheduled Successfully!");

        setMeeting({
            investor: "",
            date: "",
            time: "",
            platform: "Google Meet",
            link: ""
        });

    };

    return (

        <>

            <Navbar />

            <div className="meeting-page">

                <Sidebar />

                <div className="meeting-container">

                    <h1>Schedule Meeting</h1>

                    <form onSubmit={scheduleMeeting}>

                        <label>Investor Name</label>

                        <input
                            type="text"
                            name="investor"
                            value={meeting.investor}
                            onChange={handleChange}
                            placeholder="Enter Investor Name"
                            required
                        />

                        <label>Date</label>

                        <input
                            type="date"
                            name="date"
                            value={meeting.date}
                            onChange={handleChange}
                            required
                        />

                        <label>Time</label>

                        <input
                            type="time"
                            name="time"
                            value={meeting.time}
                            onChange={handleChange}
                            required
                        />

                        <label>Meeting Platform</label>

                        <select
                            name="platform"
                            value={meeting.platform}
                            onChange={handleChange}
                        >

                            <option>Google Meet</option>
                            <option>Zoom</option>
                            <option>Microsoft Teams</option>

                        </select>

                        <label>Meeting Link</label>

                        <input
                            type="url"
                            name="link"
                            value={meeting.link}
                            onChange={handleChange}
                            placeholder="Paste Meeting Link"
                            required
                        />

                        <button type="submit">

                            Schedule Meeting

                        </button>

                    </form>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default MeetingScheduler;