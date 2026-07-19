import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import "./Chat.css";

function Chat() {

    const [messages, setMessages] = useState([
        {
            sender: "Investor",
            text: "Hello! We reviewed your startup proposal."
        },
        {
            sender: "Founder",
            text: "Thank you. I'm happy to answer your questions."
        }
    ]);

    const [input, setInput] = useState("");

    const sendMessage = () => {

        if (input.trim() === "") return;

        setMessages([
            ...messages,
            {
                sender: "Founder",
                text: input
            }
        ]);

        setInput("");

    };

    return (
        <>
            <Navbar />

            <div className="chat-page">

                <Sidebar />

                <div className="chat-container">

                    <div className="chat-header">

                        <h2>Private Chat</h2>

                        <span className="online">
                            🟢 Investor Online
                        </span>

                    </div>

                    <div className="chat-box">

                        {messages.map((msg, index) => (

                            <div
                                key={index}
                                className={
                                    msg.sender === "Founder"
                                        ? "message founder"
                                        : "message investor"
                                }
                            >
                                <b>{msg.sender}</b>

                                <p>{msg.text}</p>

                            </div>

                        ))}

                    </div>

                    <div className="chat-input">

                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={input}
                            onChange={(e) =>
                                setInput(e.target.value)
                            }
                        />

                        <button onClick={sendMessage}>
                            Send
                        </button>

                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default Chat;