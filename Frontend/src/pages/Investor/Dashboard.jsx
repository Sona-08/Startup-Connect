import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import "./Dashboard.css";

function Dashboard() {

    return (

        <>

            <Navbar />

            <div className="investor-page">

                <Sidebar />

                <div className="investor-container">

                    <h1>Investor Dashboard</h1>

                    <div className="card-grid">

                        <Card
                            title="Available Startups"
                            value="156"
                        />

                        <Card
                            title="Investments"
                            value="24"
                        />

                        <Card
                            title="Meetings"
                            value="11"
                        />

                        <Card
                            title="Pending Requests"
                            value="9"
                        />

                    </div>

                    <div className="dashboard-section">

                        <h2>Recent Investments</h2>

                        <table>

                            <thead>

                                <tr>

                                    <th>Startup</th>

                                    <th>Industry</th>

                                    <th>Investment</th>

                                    <th>Status</th>

                                </tr>

                            </thead>

                            <tbody>

                                <tr>

                                    <td>StartupConnect</td>

                                    <td>Technology</td>

                                    <td>₹40,00,000</td>

                                    <td>Active</td>

                                </tr>

                                <tr>

                                    <td>GreenFarm AI</td>

                                    <td>Agriculture</td>

                                    <td>₹22,00,000</td>

                                    <td>Completed</td>

                                </tr>

                                <tr>

                                    <td>MediCare Plus</td>

                                    <td>Healthcare</td>

                                    <td>₹60,00,000</td>

                                    <td>Pending</td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default Dashboard;