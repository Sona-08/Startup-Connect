import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import "./Portfolio.css";

function Portfolio() {

    const investments = [

        {
            id:1,
            startup:"StartupConnect",
            founder:"Sona Sekar",
            amount:"₹50,00,000",
            status:"Active"
        },

        {
            id:2,
            startup:"GreenFarm AI",
            founder:"Arun Kumar",
            amount:"₹30,00,000",
            status:"Pending"
        },

        {
            id:3,
            startup:"MediCare Plus",
            founder:"Karthik",
            amount:"₹80,00,000",
            status:"Completed"
        }

    ];

    return (

        <>
        <Navbar/>

        <div className="portfolio-page">

            <Sidebar/>

            <div className="portfolio-container">

                <h1>Investment Portfolio</h1>

                <div className="portfolio-cards">

                    <div className="summary-card">
                        <h2>₹1.60 Cr</h2>
                        <p>Total Investment</p>
                    </div>

                    <div className="summary-card">
                        <h2>3</h2>
                        <p>Total Startups</p>
                    </div>

                    <div className="summary-card">
                        <h2>2</h2>
                        <p>Active Investments</p>
                    </div>

                </div>

                <table>

                    <thead>

                        <tr>

                            <th>Startup</th>
                            <th>Founder</th>
                            <th>Investment</th>
                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            investments.map(item=>(

                                <tr key={item.id}>

                                    <td>{item.startup}</td>
                                    <td>{item.founder}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.status}</td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </div>

        <Footer/>

        </>

    );

}

export default Portfolio;