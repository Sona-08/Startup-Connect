import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import "./ProposalInbox.css";

function ProposalInbox() {

    const proposals = [

        {
            id:1,
            startup:"StartupConnect",
            founder:"Sona Sekar",
            industry:"Technology",
            funding:"₹50 Lakhs",
            score:"91%",
            status:"New"
        },

        {
            id:2,
            startup:"GreenFarm AI",
            founder:"Arun Kumar",
            industry:"Agriculture",
            funding:"₹30 Lakhs",
            score:"88%",
            status:"Viewed"
        }

    ];

    return (

        <>

        <Navbar/>

        <div className="proposal-page">

            <Sidebar/>

            <div className="proposal-container">

                <h1>Proposal Inbox</h1>

                {

                    proposals.map(item=>(

                        <div
                            className="proposal-card"
                            key={item.id}
                        >

                            <h2>{item.startup}</h2>

                            <p><b>Founder :</b> {item.founder}</p>

                            <p><b>Industry :</b> {item.industry}</p>

                            <p><b>Funding Required :</b> {item.funding}</p>

                            <p><b>AI Readiness Score :</b> {item.score}</p>

                            <p><b>Status :</b> {item.status}</p>

                            <Link to="/investor/startup-details">

                                <button>

                                    View Proposal

                                </button>

                            </Link>

                        </div>

                    ))

                }

            </div>

        </div>

        <Footer/>

        </>

    );

}

export default ProposalInbox;
