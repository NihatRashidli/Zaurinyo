import React, { useContext, useState } from 'react';
import Navbar from '../navbar/Navbar';
import { NavbarContext } from '../../NavbarContext';
import { Link, useNavigate } from 'react-router-dom';
function Home() {
    const { setNavbarText } = useContext(NavbarContext);
    const [text, setText] = useState("");

    const handleInputChange = (event) => {
        setText(event.target.value);
    };
    const navigate = useNavigate();

    const handleButtonClick = () => {
        if (text.trim() !== "") {
            setNavbarText(text);
            setText("");
            setTimeout(() => {
                navigate("/products");
            }, 1000);
        } else {
            alert("Zəhmət olmasa mətn daxil edin!");
        }
    };

    return (
        <div>
            <Navbar />
            <main style={{ padding: '20px', textAlign: 'center' }}>
                <h1>TODO REACT</h1>
                <p>CAVAN OĞLANSAN</p>
                <input
                    type="text"
                    placeholder="Mətn daxil edin"
                    value={text}
                    onChange={handleInputChange}
                    style={{
                        padding: '10px',
                        fontSize: '16px',
                        marginTop: '10px',
                        width: '300px',
                    }}
                />
               <button
                    onClick={handleButtonClick}
                    style={{
                        marginLeft: '10px',
                        padding: '10px 20px',
                        fontSize: '16px',
                        cursor: 'pointer',
                    }}
                >
                    Add
                </button>
            </main>
        </div>
    );
}

export default Home;
