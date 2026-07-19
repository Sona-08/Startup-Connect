import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import "./Dashboard.css";

function Dashboard() {

    const [stats, setStats] = useState({
        totalStartups: 0,
        totalInvestors: 0,
        totalFundingRequests: 0,
        pendingRequests: 0,
        acceptedRequests: 0,
        rejectedRequests: 0
    });

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {
        try {
            const response = await api.get("/dashboard");
            setStats(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const cards = [
        { title: "Startup Profile", route: "/founder/startup-profile" },
        { title: "Upload Documents", route: "/founder/upload" },
        { title: "AI Market Analysis", route: "/founder/analysis" },
        { title: "Investment Readiness Score", route: "/founder/score" },
        { title: "Investor Directory", route: "/founder/investors" },
        { title: "Proposal Tracking", route: "/founder/activity" },
        { title: "Access Requests", route: "/founder/access-approval" },
        { title: "Private Chat", route: "/chat" },
        { title: "Meeting Scheduler", route: "/meeting-scheduler" }
    ];

    return (
        <>
            <Navbar />

            <div className="dashboard-page">

                <Sidebar />

                <div className="dashboard-container">

                    <h1>Founder Dashboard</h1>

                    <div className="dashboard-grid">

                        <div className="dashboard-card">
                            <h2>Total Startups</h2>
                            <h1>{stats.totalStartups}</h1>
                        </div>

                        <div className="dashboard-card">
                            <h2>Total Investors</h2>
                            <h1>{stats.totalInvestors}</h1>
                        </div>

                        <div className="dashboard-card">
                            <h2>Funding Requests</h2>
                            <h1>{stats.totalFundingRequests}</h1>
                        </div>

                        <div className="dashboard-card">
                            <h2>Pending</h2>
                            <h1>{stats.pendingRequests}</h1>
                        </div>

                        <div className="dashboard-card">
                            <h2>Accepted</h2>
                            <h1>{stats.acceptedRequests}</h1>
                        </div>

                        <div className="dashboard-card">
                            <h2>Rejected</h2>
                            <h1>{stats.rejectedRequests}</h1>
                        </div>

                        {cards.map((card, index) => (
                            <div key={index} className="dashboard-card">
                                <h2>{card.title}</h2>

                                <Link to={card.route}>
                                    <button>Open</button>
                                </Link>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

            <Footer />

        </>
    );
}

export default Dashboard;