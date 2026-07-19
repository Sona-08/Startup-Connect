import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import "./InvestorDirectory.css";

function InvestorDirectory() {

    const investors = [

        {
            id:1,
            company:"Sequoia Capital",
            industry:"Technology",
            location:"Bangalore",
            selected:false
        },

        {
            id:2,
            company:"Accel India",
            industry:"Technology",
            location:"Bangalore",
            selected:false
        },

        {
            id:3,
            company:"Peak XV",
            industry:"FinTech",
            location:"Mumbai",
            selected:false
        },

        {
            id:4,
            company:"Y Combinator",
            industry:"Global",
            location:"USA",
            selected:false
        },

        {
            id:5,
            company:"100X.VC",
            industry:"Startup",
            location:"Mumbai",
            selected:false
        }

    ];

    const [data,setData]=useState(investors);

    const [search,setSearch]=useState("");

    const toggleInvestor=(id)=>{

        setData(

            data.map(item=>

                item.id===id

                ?

                {...item,selected:!item.selected}

                :

                item

            )

        );

    };

    const sendProposal=()=>{

        const selected=data.filter(item=>item.selected);

        if(selected.length===0){

            alert("Please select at least one Investor");

            return;

        }

        alert(

            "Proposal sent successfully to "+selected.length+" Investors"

        );

    };

    const filtered=data.filter(item=>

        item.company.toLowerCase().includes(search.toLowerCase()) ||

        item.industry.toLowerCase().includes(search.toLowerCase())

    );

    return(

        <>

        <Navbar/>

        <div className="directory-page">

            <Sidebar/>

            <div className="directory-container">

                <h1>Verified Investor Companies</h1>

                <input

                    type="text"

                    placeholder="Search Investors..."

                    value={search}

                    onChange={(e)=>setSearch(e.target.value)}

                    className="search"

                />

                <div className="investor-grid">

                    {

                        filtered.map(item=>(

                            <div

                                key={item.id}

                                className="investor-card"

                            >

                                <h2>{item.company}</h2>

                                <p>{item.industry}</p>

                                <p>{item.location}</p>

                                <input

                                    type="checkbox"

                                    checked={item.selected}

                                    onChange={()=>toggleInvestor(item.id)}

                                />

                                Select Investor

                            </div>

                        ))

                    }

                </div>

                <button

                    className="send-btn"

                    onClick={sendProposal}

                >

                    Send Proposal To Selected Investors

                </button>

            </div>

        </div>

        <Footer/>

        </>

    );

}

export default InvestorDirectory;