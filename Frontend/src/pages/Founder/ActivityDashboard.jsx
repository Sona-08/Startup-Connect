import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import "./ActivityDashboard.css";

function ActivityDashboard() {

    const activities = [

        {
            id:1,
            investor:"Sequoia Capital",
            startup:"StartupConnect",
            progress:25,
            status:"Proposal Received",
            updated:"5 mins ago"
        },

        {
            id:2,
            investor:"Accel India",
            startup:"StartupConnect",
            progress:50,
            status:"Business Plan Reviewed",
            updated:"20 mins ago"
        },

        {
            id:3,
            investor:"Peak XV",
            startup:"StartupConnect",
            progress:75,
            status:"Pitch Deck Under Review",
            updated:"1 hour ago"
        },

        {
            id:4,
            investor:"Y Combinator",
            startup:"StartupConnect",
            progress:100,
            status:"Meeting Scheduled",
            updated:"Today"
        }

    ];

    return (

        <>
        <Navbar/>

        <div className="activity-page">

            <Sidebar/>

            <div className="activity-container">

                <h1>Founder Activity Dashboard</h1>

                {
                    activities.map(item=>(

                        <div
                            className="activity-card"
                            key={item.id}
                        >

                            <h2>{item.investor}</h2>

                            <p><b>Startup :</b> {item.startup}</p>

                            <p><b>Status :</b> {item.status}</p>

                            <p><b>Last Updated :</b> {item.updated}</p>

                            <div className="progress">

                                <div
                                    className="progress-fill"
                                    style={{width:item.progress+"%"}}
                                ></div>

                            </div>

                            <p>{item.progress}% Completed</p>

                        </div>

                    ))
                }

            </div>

        </div>

        <Footer/>

        </>

    );

}

export default ActivityDashboard;