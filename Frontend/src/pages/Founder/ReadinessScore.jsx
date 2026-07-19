import React, { useState } from "react";
import api from "../../services/api";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import "./ReadinessScore.css";

function ReadinessScore() {

    const [startupId, setStartupId] = useState("");
    const [result, setResult] = useState(null);

    const calculate = async () => {

        try {

            const response = await api.post(`/readiness/${startupId}`);

            setResult(response.data);

        } catch (error) {

            console.log(error);

            alert("Failed to calculate score");

        }
    };

    return (
        <>
            <Navbar />

            <div className="profile-page">

                <Sidebar />

                <div className="profile-container">

                    <h1>Investment Readiness Score</h1>

                    <input
                        type="number"
                        placeholder="Enter Startup ID"
                        value={startupId}
                        onChange={(e) => setStartupId(e.target.value)}
                    />

                    <br /><br />

                    <button onClick={calculate}>
                        Calculate Score
                    </button>

                    {result && (

                        <div className="analysis-result">

                            <h2>Result</h2>

                            <h3>Score : {result.score}/100</h3>

                            <h3>Status : {result.status}</h3>

                        </div>

                    )}

                </div>

            </div>

            <Footer />
        </>
    );
}

export default ReadinessScore;