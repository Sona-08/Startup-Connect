import React, { useState } from "react";
import api from "../../services/api";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import "./AIMarketAnalysis.css";

function AIMarketAnalysis() {

    const [startupId, setStartupId] = useState("");
    const [analysis, setAnalysis] = useState(null);

    const analyze = async () => {

        try {

            const response = await api.post(`/analysis/${startupId}`);

            setAnalysis(response.data);

        } catch (error) {

            console.log(error);

            alert("Analysis Failed");

        }

    };

    return (

        <>
            <Navbar />

            <div className="profile-page">

                <Sidebar />

                <div className="profile-container">

                    <h1>AI Market Analysis</h1>

                    <input
                        type="number"
                        placeholder="Enter Startup ID"
                        value={startupId}
                        onChange={(e) => setStartupId(e.target.value)}
                    />

                    <br /><br />

                    <button onClick={analyze}>
                        Analyze Startup
                    </button>

                    {
                        analysis && (

                            <div className="analysis-result">

                                <h2>Analysis Report</h2>

                                <p><b>Market Size:</b> {analysis.marketSize}</p>

                                <p><b>Competitors:</b> {analysis.competitors}</p>

                                <p><b>Target Audience:</b> {analysis.targetAudience}</p>

                                <p><b>Suggestions:</b> {analysis.suggestions}</p>

                                <p><b>Risk Level:</b> {analysis.riskLevel}</p>

                                <p><b>Score:</b> {analysis.score}/100</p>

                            </div>

                        )
                    }

                </div>

            </div>

            <Footer />

        </>

    );

}

export default AIMarketAnalysis;