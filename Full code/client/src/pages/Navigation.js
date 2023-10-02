import React, { useState } from 'react';
import { FaHome, FaUser, FaHistory } from 'react-icons/fa';
import '../styles/navigation.css';

function Navigation() {
  const [activeButton, setActiveButton] = useState(null);
  console.log(window.location.pathname)

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  const handleMouseEnter = (buttonIndex) => {
    if (activeButton !== buttonIndex) {
      setActiveButton(buttonIndex);
    }
  };

  const handleMouseLeave = () => {
    setActiveButton(null);
  };

  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <a
            href="/type"
            className={`nav-button ${window.location.pathname === "/type" ? 'active' : ''}`}
            onClick={() => handleButtonClick(0)}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <FaHome />{' '}
            Create
          </a>
        </li>
        <li>
          <a
            href="/account"
            className={`nav-button ${window.location.pathname === "/account" ? 'active' : ''}`}
            onClick={() => handleButtonClick(1)}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <FaUser />{' '}
            Account
          </a>
        </li>
        <li>
          <a
            href="/history"
            className={`nav-button ${window.location.pathname === "/history" ? 'active' : ''}`}
            onClick={() => handleButtonClick(2)}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <FaHistory />{'   '}
            History
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
