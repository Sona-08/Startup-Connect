import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import "./AccessRequest.css";

function AccessRequest() {

    const [requested, setRequested] = useState(false);

    const sendRequest = () => {
        setRequested(true);
    };

    return (
        <>
            <Navbar />

            <div className="access-page">

                <Sidebar />

                <div className="access-container">

                    <h1>Private Access Request</h1>

                    <div className="startup-card">

                        <h2>StartupConnect</h2>

                        <p><b>Founder:</b> Sona Sekar</p>

                        <p><b>Industry:</b> Technology</p>

                        <p><b>Funding:</b> ₹50 Lakhs</p>

                        <p>
                            Request access to confidential documents,
                            financial reports and private discussion.
                        </p>

                        {
                            requested ?

                            <button disabled className="requested">

                                Request Sent

                            </button>

                            :

                            <button
                                className="request-btn"
                                onClick={sendRequest}
                            >

                                Request Private Access

                            </button>

                        }

                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default AccessRequest;