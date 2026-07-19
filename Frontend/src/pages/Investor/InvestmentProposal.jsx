import React, { useState } from "react";
import api from "../../services/api";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import "./InvestmentProposal.css";

function InvestmentProposal() {

    const [proposal, setProposal] = useState({
        startupId: "",
        investorId: "",
        amount: "",
        message: ""
    });

    const handleChange = (e) => {
        setProposal({
            ...proposal,
            [e.target.name]: e.target.value
        });
    };

    const submitProposal = async (e) => {

        e.preventDefault();

        try {

            const requestData = {
                startupId: Number(proposal.startupId),
                investorId: Number(proposal.investorId),
                amount: Number(proposal.amount),
                message: proposal.message,
                status: "PENDING",
                requestDate: new Date().toISOString().split("T")[0]
            };

            console.log(requestData);
            console.log(JSON.stringify(requestData));

            await api.post("/funding", requestData);

            alert("Proposal Sent Successfully");

            setProposal({
                startupId: "",
                investorId: "",
                amount: "",
                message: ""
            });

        } catch (error) {

            console.error(error);

            alert("Failed to send proposal");

        }

    };

    return (
        <>
            <Navbar />

            <div className="profile-page">

                <Sidebar />

                <div className="profile-container">

                    <h1>Investment Proposal</h1>

                    <form onSubmit={submitProposal}>

                        <input
                            type="number"
                            name="startupId"
                            placeholder="Startup ID"
                            value={proposal.startupId}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="number"
                            name="investorId"
                            placeholder="Investor ID"
                            value={proposal.investorId}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="number"
                            name="amount"
                            placeholder="Investment Amount"
                            value={proposal.amount}
                            onChange={handleChange}
                            required
                        />

                        <textarea
                            name="message"
                            placeholder="Proposal Message"
                            value={proposal.message}
                            onChange={handleChange}
                            rows="5"
                            required
                        />

                        <button type="submit">
                            Send Proposal
                        </button>

                    </form>

                </div>

            </div>

            <Footer />

        </>
    );
}

export default InvestmentProposal;