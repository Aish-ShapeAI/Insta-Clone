import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {NavItem} from "./NavItem";

export function Menu() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  // Update the window width whenever it changes
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // If window width is below 769 pixels, use the updated menu
  if (windowWidth < 769) {
    return (
      <div className="Menu">
        <button onClick={toggleSidebar}>
          <FontAwesomeIcon
            icon={faBars}
            style={{ fontSize: "19px", width: "24px", height: "24px" }}
          />
        </button>
        {isSidebarVisible && (
          // Here, you can render your sidebar content when the sidebar is visible
          <div className="sidebar-content">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <NavItem icon="home" text="Home" link=""></NavItem></a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <NavItem icon="search" text="Search" link=""></NavItem></a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <NavItem icon="explore" text="Explore" link=""></NavItem></a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <NavItem icon="video_library" text="Reels" link=""></NavItem></a>
          <a href="https://www.chatgpt.com" target="_blank" rel="noopener noreferrer">
          <NavItem icon="chat" text="Messages" link=""></NavItem></a>
          <a href="https://www.chatgpt.com" target="_blank" rel="noopener noreferrer">
          <NavItem icon="favorite" text="Notifications" link=""></NavItem></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <NavItem icon="add_circle" text="Create" link=""></NavItem></a>
          <a href="/https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <NavItem icon="account_circle" text="Profile" link=""></NavItem></a>

          </div>
        )
}</div>
    );
  } else {
    // If window width is above 769 pixels, hide both icon and sidebar
    return null;
  }
}

export default Menu;
