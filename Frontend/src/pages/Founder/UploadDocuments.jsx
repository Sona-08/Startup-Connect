import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import "./UploadDocuments.css";

function UploadDocuments() {

    const [businessPlan, setBusinessPlan] = useState(null);
    const [pitchDeck, setPitchDeck] = useState(null);

    const handleBusinessPlan = (e) => {
        setBusinessPlan(e.target.files[0]);
    };

    const handlePitchDeck = (e) => {
        setPitchDeck(e.target.files[0]);
    };

    const uploadDocuments = () => {

        alert("Documents Uploaded Successfully!");

        console.log({
            businessPlan,
            pitchDeck
        });

    };

    return (

        <>

            <Navbar/>

            <div className="upload-page">

                <Sidebar/>

                <div className="upload-container">

                    <h1>Upload Documents</h1>

                    <div className="upload-card">

                        <label>Business Plan (PDF/DOC)</label>

                        <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleBusinessPlan}
                        />

                        {
                            businessPlan &&
                            <p>{businessPlan.name}</p>
                        }

                    </div>

                    <div className="upload-card">

                        <label>Pitch Deck (PDF/PPT)</label>

                        <input
                            type="file"
                            accept=".pdf,.ppt,.pptx"
                            onChange={handlePitchDeck}
                        />

                        {
                            pitchDeck &&
                            <p>{pitchDeck.name}</p>
                        }

                    </div>

                    <button
                        className="upload-btn"
                        onClick={uploadDocuments}
                    >
                        Upload Documents
                    </button>

                </div>

            </div>

            <Footer/>

        </>

    );

}

export default UploadDocuments;