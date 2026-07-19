import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import "./AccessApproval.css";

function AccessApproval() {

    const [requests, setRequests] = useState([

        {
            id: 1,
            investor: "Sequoia Capital",
            startup: "StartupConnect",
            status: "Pending"
        },

        {
            id: 2,
            investor: "Accel India",
            startup: "StartupConnect",
            status: "Pending"
        }

    ]);

    const updateStatus = (id, status) => {

        const updated = requests.map((request) =>
            request.id === id
                ? { ...request, status }
                : request
        );

        setRequests(updated);
    };

    return (
        <>
            <Navbar />

            <div className="approval-page">

                <Sidebar />

                <div className="approval-container">

                    <h1>Investor Access Requests</h1>

                    {requests.map((request) => (

                        <div className="approval-card" key={request.id}>

                            <h2>{request.investor}</h2>

                            <p><b>Startup :</b> {request.startup}</p>

                            <p><b>Status :</b> {request.status}</p>

                            {
                                request.status === "Pending" && (

                                    <div>

                                        <button
                                            className="approve-btn"
                                            onClick={() =>
                                                updateStatus(request.id, "Approved")
                                            }
                                        >
                                            Approve
                                        </button>

                                        <button
                                            className="reject-btn"
                                            onClick={() =>
                                                updateStatus(request.id, "Rejected")
                                            }
                                        >
                                            Reject
                                        </button>

                                    </div>

                                )
                            }

                        </div>

                    ))}

                </div>

            </div>

            <Footer />
        </>
    );
}

export default AccessApproval;