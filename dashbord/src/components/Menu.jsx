import React, { use, useState } from "react";

import { Link } from "react-router-dom";


const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0)
  const [isProfile, setIsProfile] = useState(false)

  function handleClickMenu(index) {
    return setSelectedMenu(index)
  }

  function handleProfile(index) {
    return setIsProfile(!isProfile)
  }

  return (
    <div className="menu-container">
      <img src="/media/images/logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li >
            <Link to="/dashbord" onClick={() => { handleClickMenu(0) }}>
              <p className={selectedMenu == 0 ? "text-red-500" : " hover:text-red-500"}>Dashboard</p>
            </Link>
          </li>

          <li >
            <Link to="/dashbord/Orders" onClick={() => { handleClickMenu(1) }}>
              <p className={selectedMenu == 1 ? "text-red-500" : " hover:text-red-500"}>Orders</p>
            </Link>
          </li>

          <li >
            <Link to="/dashbord/holdings" onClick={() => { handleClickMenu(2) }}>
              <p className={selectedMenu == 2 ? "text-red-500" : " hover:text-red-500"}>Holdings</p>
            </Link>
          </li>

          <li >
            <Link to="/dashbord/positions" onClick={() => { handleClickMenu(3) }}>
              <p className={selectedMenu == 3 ? "text-red-500" : " hover:text-red-500"}>Positions</p>
            </Link>
          </li>
          <li >
            <Link to="/dashbord/funds" onClick={() => { handleClickMenu(4) }}>
              <p className={selectedMenu == 4 ? "text-red-500" : " hover:text-red-500"}>Funds</p>
            </Link>
          </li>
          <li >
            <Link to="/dashbord/apps" onClick={() => { handleClickMenu(5) }}>
              <p className={selectedMenu == 5 ? "text-red-500" : " hover:text-red-500"}>Apps</p>
            </Link>
          </li>

        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
