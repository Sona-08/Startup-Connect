import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import "./VerificationPanel.css";

function VerificationPanel() {

    const [requests,setRequests]=useState([

        {
            id:1,
            startup:"StartupConnect",
            founder:"Sona Sekar",
            status:"Pending"
        },

        {
            id:2,
            startup:"GreenFarm AI",
            founder:"Arun Kumar",
            status:"Pending"
        },

        {
            id:3,
            startup:"MediCare Plus",
            founder:"Karthik",
            status:"Pending"
        }

    ]);

    const updateStatus=(id,status)=>{

        const updated=requests.map(item=>

            item.id===id

            ?

            {...item,status}

            :

            item

        );

        setRequests(updated);

    };

    return(

        <>

        <Navbar/>

        <div className="verify-page">

            <Sidebar/>

            <div className="verify-container">

                <h1>Startup Verification Panel</h1>

                {

                    requests.map(item=>(

                        <div
                            key={item.id}
                            className="verify-card"
                        >

                            <h2>{item.startup}</h2>

                            <p><b>Founder :</b> {item.founder}</p>

                            <p><b>Status :</b> {item.status}</p>

                            {

                                item.status==="Pending"

                                &&

                                <>

                                <button
                                className="approve"
                                onClick={()=>updateStatus(item.id,"Approved")}
                                >

                                Approve

                                </button>

                                <button
                                className="reject"
                                onClick={()=>updateStatus(item.id,"Rejected")}
                                >

                                Reject

                                </button>

                                </>

                            }

                        </div>

                    ))

                }

            </div>

        </div>

        <Footer/>

        </>

    );

}

export default VerificationPanel;