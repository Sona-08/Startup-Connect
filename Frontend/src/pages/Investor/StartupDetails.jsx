import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import "./StartupDetails.css";

function StartupDetails() {

    const { id } = useParams();

    const [startup, setStartup] = useState(null);

    useEffect(() => {
        loadStartup();
    }, []);

    const loadStartup = async () => {

        try {

            const response = await api.get(`/startups/${id}`);

            setStartup(response.data);

        } catch (error) {

            console.log(error);

            alert("Unable to load startup");

        }

    };

    if (!startup) {
        return <h2>Loading...</h2>;
    }

    return (

        <>
            <Navbar />

            <div className="profile-page">

                <Sidebar />

                <div className="profile-container">

                    <h1>{startup.startupName}</h1>

                    <p><b>Description:</b> {startup.description}</p>

                    <p><b>Industry:</b> {startup.industry}</p>

                    <p><b>Funding Required:</b> ₹{startup.fundingRequired}</p>

                    <p><b>Team Size:</b> {startup.teamSize}</p>

                    <p><b>Year Founded:</b> {startup.yearFounded}</p>

                    <p><b>Website:</b> {startup.website}</p>

                    <p><b>Location:</b> {startup.location}</p>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default StartupDetails;