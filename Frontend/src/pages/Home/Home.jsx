import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

function Home() {

    return(

        <div className="home">

            <Navbar/>

            <section className="hero">

                <div className="hero-left">

                    <h1>
                        Connect Startups with Investors 🚀
                    </h1>

                    <p>
                        StartupConnect helps founders discover investors,
                        showcase innovative ideas and receive AI powered
                        market insights.
                    </p>

                    <div className="buttons">

                        <button className="primary-btn">
                            Get Started
                        </button>

                        <button className="secondary-btn">
                            Learn More
                        </button>

                    </div>

                </div>

                <div className="hero-right">

                    <div className="hero-card">

                        <h2>Platform Highlights</h2>

                        <ul>

                            <li>🚀 Startup Discovery</li>

                            <li>🤖 AI Market Analysis</li>

                            <li>📈 Investment Readiness Score</li>

                            <li>💬 Secure Messaging</li>

                            <li>📅 Meeting Scheduler</li>

                        </ul>

                    </div>

                </div>

            </section>

            <section className="stats">

                <div className="stat-card">
                    <h2>500+</h2>
                    <p>Registered Startups</p>
                </div>

                <div className="stat-card">
                    <h2>200+</h2>
                    <p>Verified Investors</p>
                </div>

                <div className="stat-card">
                    <h2>1200+</h2>
                    <p>Meetings Conducted</p>
                </div>

                <div className="stat-card">
                    <h2>₹50Cr+</h2>
                    <p>Funding Raised</p>
                </div>

            </section>

            <section className="features">

                <h1>Why Choose StartupConnect?</h1>

                <div className="feature-grid">

                    <div className="feature">
                        <h2>🔒 Secure Platform</h2>
                        <p>JWT based authentication for secure access.</p>
                    </div>

                    <div className="feature">
                        <h2>🤖 AI Insights</h2>
                        <p>AI generated market trends and readiness score.</p>
                    </div>

                    <div className="feature">
                        <h2>📊 Smart Dashboard</h2>
                        <p>Interactive analytics for founders and investors.</p>
                    </div>

                    <div className="feature">
                        <h2>🤝 Investor Matching</h2>
                        <p>Connect with verified investors based on domain.</p>
                    </div>

                </div>

            </section>

            <Footer/>

        </div>

    );

}

export default Home;