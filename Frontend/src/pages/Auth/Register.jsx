import "./Register.css";

function Register(){

    return(

        <div className="register-container">

            <div className="register-box">

                <h1>Create Account</h1>

                <input
                    type="text"
                    placeholder="Full Name"
                />

                <input
                    type="email"
                    placeholder="Email"
                />

                <input
                    type="password"
                    placeholder="Password"
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                />

                <select>

                    <option>Founder</option>

                    <option>Investor</option>

                    <option>Administrator</option>

                </select>

                <button>
                    Register
                </button>

            </div>

        </div>

    );

}

export default Register;