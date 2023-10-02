import React from 'react';
import { AiOutlineCreditCard, AiOutlineUser, AiOutlineLogout } from 'react-icons/ai';
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="/account"><AiOutlineCreditCard /> Credit</a></li>
        <li><a href="/Profile"><AiOutlineUser /> Profile</a></li>
        <li className='logout'><a href="#"><AiOutlineLogout /> Logout</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;

