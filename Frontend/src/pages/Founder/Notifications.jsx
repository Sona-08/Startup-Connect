import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import "./Notifications.css";

function Notifications() {

    const [notifications, setNotifications] = useState([

        {
            id:1,
            message:"Your startup profile has been verified.",
            type:"success",
            read:false
        },

        {
            id:2,
            message:"Investor ABC Ventures requested access.",
            type:"warning",
            read:false
        },

        {
            id:3,
            message:"Proposal from Future Capital was rejected.",
            type:"error",
            read:true
        }

    ]);

    const markAsRead = (id)=>{

        setNotifications(
            notifications.map(item=>
                item.id===id
                ? {...item,read:true}
                : item
            )
        );

    };

    const markAllRead=()=>{

        setNotifications(
            notifications.map(item=>({
                ...item,
                read:true
            }))
        );

    };

    const deleteNotification=(id)=>{

        setNotifications(
            notifications.filter(item=>item.id!==id)
        );

    };

    return(

        <>

        <Navbar/>

        <div className="notification-page">

            <Sidebar/>

            <div className="notification-container">

                <h1>Notifications</h1>

                <button
                    className="read-all-btn"
                    onClick={markAllRead}
                >
                    Mark All as Read
                </button>

                {
                    notifications.map(item=>(

                        <div
                            key={item.id}
                            className={`notification-card ${item.type}`}
                        >

                            <div>

                                <h3>{item.message}</h3>

                                <p>

                                    Status :

                                    {
                                        item.read
                                        ? " Read"
                                        : " Unread"
                                    }

                                </p>

                            </div>

                            <div>

                                <button
                                    className="action-btn"
                                    onClick={()=>markAsRead(item.id)}
                                >
                                    Read
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={()=>deleteNotification(item.id)}
                                >
                                    Delete
                                </button>

                            </div>

                        </div>

                    ))
                }

            </div>

        </div>

        <Footer/>

        </>

    );

}

export default Notifications;