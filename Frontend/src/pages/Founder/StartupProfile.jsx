import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import api from "../../services/api"
import "./StartupProfile.css";

function StartupProfile() {

    const [profile, setProfile] = useState({
        startupName: "",
        description: "",
        industry: "",
        funding: "",
        teamSize: "",
        foundedYear: "",
        website: "",
        location: "",
        logo: null
    });

    const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        const startupData = {

            startupName: profile.startupName,
            description: profile.description,
            industry: profile.industry,
            fundingRequired: Number(profile.funding),
            teamSize: Number(profile.teamSize),
            yearFounded: Number(profile.foundedYear),
            website: profile.website,
            location: profile.location,
            logoUrl: ""

        };
        console.log(startupData);
        await api.post("/startups", startupData);

        alert("Startup Profile Saved Successfully!");

    }
    catch (error) {

        console.error(error);

        alert("Failed to Save Startup Profile");

    }

};

    const handleLogo = (e) => {
        setProfile({
            ...profile,
            logo: e.target.files[0]
        });
    };

   const handleChange = (e) => {
    setProfile({
        ...profile,
        [e.target.name]: e.target.value
    });
};

    return (

        <>

            <Navbar />

            <div className="profile-page">

                <Sidebar />

                <div className="profile-container">

                    <h1>Create Startup Profile</h1>

                    <form onSubmit={handleSubmit}>

                        <div className="form-group">

                            <label>Startup Name</label>

                            <input
                                type="text"
                                name="startupName"
                                value={profile.startupName}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="form-group">

                            <label>Company Description</label>

                            <textarea
                                rows="4"
                                name="description"
                                value={profile.description}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="form-row">

                            <div className="form-group">

                                <label>Industry</label>

                                <select
                                    name="industry"
                                    value={profile.industry}
                                    onChange={handleChange}
                                >

                                    <option value="">Select Industry</option>

                                    <option>Technology</option>

                                    <option>Healthcare</option>

                                    <option>Education</option>

                                    <option>Finance</option>

                                    <option>Agriculture</option>

                                    <option>E-Commerce</option>

                                </select>

                            </div>

                            <div className="form-group">

                                <label>Funding Requirement</label>

                                <input
                                    type="number"
                                    name="funding"
                                    value={profile.funding}
                                    onChange={handleChange}
                                />

                            </div>

                        </div>

                        <div className="form-row">

                            <div className="form-group">

                                <label>Team Size</label>

                                <input
                                    type="number"
                                    name="teamSize"
                                    value={profile.teamSize}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="form-group">

                                <label>Year Founded</label>

                                <input
                                    type="number"
                                    name="foundedYear"
                                    value={profile.foundedYear}
                                    onChange={handleChange}
                                />

                            </div>

                        </div>

                        <div className="form-group">

                            <label>Website</label>

                            <input
                                type="url"
                                name="website"
                                value={profile.website}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="form-group">

                            <label>Location</label>

                            <input
                                type="text"
                                name="location"
                                value={profile.location}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="form-group">

                            <label>Company Logo</label>

                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleLogo}
                            />

                        </div>

                        <button className="save-btn">
                            Save Profile
                        </button>

                    </form>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default StartupProfile;