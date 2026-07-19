import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {

    return (

        <div className="sidebar">

            <h2>Founder</h2>

            <ul>

                <li>
                    <Link to="/founder/dashboard">Dashboard</Link>
                </li>

                <li>
                    <Link to="/founder/startup-profile">Startup Profile</Link>
                </li>
                <li>
                    <Link to="/founder/upload">Upload Documents</Link>
                </li>

                <li>
                    <Link to="/founder/analysis">AI Analysis</Link>
                </li>

                <li>
                    <Link to="/founder/score">Readiness Score</Link>
                </li>

                <li>
                    <Link to="/founder/proposals">Proposals</Link>
                </li>

                <li>
                    <Link to="/founder/meetings">Meetings</Link>
                </li>

                <li>
                    <Link to="/founder/notifications">Notifications</Link>
                </li>

                 <li>
                    <Link to="/investor/dashboard">Investor Dashboard</Link>
                  </li> 

                  <li>
                    <Link to="/investor/search">Search Startups</Link>
                  </li>

                  <li>
                      <Link to="/investor/access-request">Access Requests</Link>
                  </li>

                  <li>
                    <Link to="/founder/investors">Investor Directory</Link>
                  </li>

                  <li>
                    <Link to="/investor/proposals">Proposal Inbox</Link>
                  </li>

                  <li>  
                  <Link to="/founder/activity">Activity Dashboard</Link>
                  </li>

                  <li>
                    <Link to="/founder/access-approval">Access Approval</Link>
                  </li>

                  <li>  
                  <Link to="/chat">Chat</Link>
                  </li>

                  <li> 
                  <Link to="/meeting-scheduler">Meeting Scheduler</Link>
                  </li>

                  <li>
                  <Link to="/investor/portfolio">Portfolio</Link>
                  </li>

                  <li>
                  <Link to="/admin/verification">Verification Panel</Link>
                  </li>


            </ul>

        </div>

    );

}

export default Sidebar;