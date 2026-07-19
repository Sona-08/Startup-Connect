import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import "./Proposals.css";

function Proposals() {

    const [statusFilter, setStatusFilter] = useState("All");

    const proposalData = [
        {
            id: 1,
            investor: "ABC Ventures",
            startup: "StartupConnect",
            amount: "₹25,00,000",
            status: "Pending",
            date: "02-07-2026"
        },
        {
            id: 2,
            investor: "Future Capital",
            startup: "StartupConnect",
            amount: "₹40,00,000",
            status: "Approved",
            date: "28-06-2026"
        },
        {
            id: 3,
            investor: "Vision Fund",
            startup: "StartupConnect",
            amount: "₹15,00,000",
            status: "Rejected",
            date: "20-06-2026"
        }
    ];

    const filteredData =
        statusFilter === "All"
            ? proposalData
            : proposalData.filter(
                  proposal => proposal.status === statusFilter
              );

    return (
        <>
            <Navbar />

            <div className="proposal-page">

                <Sidebar />

                <div className="proposal-container">

                    <h1>Proposal Tracking</h1>

                    <div className="filter-section">

                        <label>Filter by Status</label>

                        <select
                            value={statusFilter}
                            onChange={(e)=>setStatusFilter(e.target.value)}
                        >
                            <option>All</option>
                            <option>Pending</option>
                            <option>Approved</option>
                            <option>Rejected</option>
                        </select>

                    </div>

                    <table>

                        <thead>

                            <tr>

                                <th>ID</th>

                                <th>Investor</th>

                                <th>Startup</th>

                                <th>Amount</th>

                                <th>Status</th>

                                <th>Date</th>

                            </tr>

                        </thead>

                        <tbody>

                            {filteredData.map((proposal)=>(
                                <tr key={proposal.id}>

                                    <td>{proposal.id}</td>

                                    <td>{proposal.investor}</td>

                                    <td>{proposal.startup}</td>

                                    <td>{proposal.amount}</td>

                                    <td>

                                        <span
                                            className={`status ${proposal.status.toLowerCase()}`}
                                        >
                                            {proposal.status}
                                        </span>

                                    </td>

                                    <td>{proposal.date}</td>

                                </tr>
                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

            <Footer />

        </>
    );
}

export default Proposals;