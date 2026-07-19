import React, { useState } from "react";
import api from "../../services/api";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./SearchStartups.css";

function SearchStartups() {

    const [name, setName] = useState("");
    const [startups, setStartups] = useState([]);

    const search = async () => {

        try {

            const response = await api.get(`/startups/name/${name}`);

            setStartups(response.data);

        } catch (error) {

            console.log(error);

            alert("No startups found");

        }

    };

    return (

        <>
            <Navbar />

            <div className="profile-page">

                <Sidebar />

                <div className="profile-container">

                    <h1>Search Startups</h1>

                    <input
                        type="text"
                        placeholder="Enter Startup Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <button onClick={search}>
                        Search
                    </button>

                    <br /><br />

                    {startups.map((startup) => (

                        <div key={startup.id} className="analysis-result">

                            <h2>{startup.startupName}</h2>

                            <p>{startup.description}</p>

                            <p>
                                <b>Industry:</b> {startup.industry}
                            </p>

                            <Link
                                to={`/investor/startup-details/${startup.id}`}
                            >
                                <button>View Details</button>
                            </Link>

                        </div>

                    ))}

                </div>

            </div>

            <Footer />

        </>

    );

}

export default SearchStartups;