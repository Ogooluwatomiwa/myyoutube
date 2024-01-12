import React from "react";

export function Nav() {
  return (
    <nav>
      <div className="leftnav">
        <img src="menu.svg" alt="" />
        <div className="youtubelogo">
          <img src="youtube.svg" alt="" />
          <h1>YouTube</h1>
        </div>
      </div>
      <div className="middlenav">
        <div className="searchbox">
          <input type="text" placeholder="Search" />
          <img src="search.svg" alt="" />
        </div>
        <img src="recorder.svg" alt="" className="record"/>
      </div>
      <div className="rightnav">
        <img src="create.svg" alt="" />
        <img src="notification.svg" alt="" />
        <img src="profile.svg" alt="" />
      </div>
    </nav>
  );
}
