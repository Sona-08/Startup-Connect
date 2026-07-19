import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";

function Dashboard() {

    return (

        <>

            <Navbar />

            <div style={{display:"flex",minHeight:"100vh"}}>

                <Sidebar />

                <div style={{flex:1,padding:"40px"}}>

                    <h1>Admin Dashboard</h1>

                    <div
                        style={{
                            display:"grid",
                            gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
                            gap:"20px",
                            marginTop:"30px"
                        }}
                    >

                        <div style={card}>
                            <h2>120</h2>
                            <p>Total Users</p>
                        </div>

                        <div style={card}>
                            <h2>35</h2>
                            <p>Verified Startups</p>
                        </div>

                        <div style={card}>
                            <h2>15</h2>
                            <p>Pending Verification</p>
                        </div>

                        <div style={card}>
                            <h2>50</h2>
                            <p>Investors</p>
                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );

}

const card={

    background:"#fff",
    padding:"20px",
    borderRadius:"10px",
    textAlign:"center",
    boxShadow:"0 4px 10px rgba(0,0,0,.1)"

};

export default Dashboard;