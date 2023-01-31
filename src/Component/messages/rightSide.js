import React from "react";

const RightSide = () => {
  return (
    <>
      <div className="right-side">
        <div className="header">
          <div></div>
          <div className="icon-container self-end">
            <img src="./images/Check.png" alt="img" className="icon-img" />
          </div>
        </div>
        <div className="chat-header">
          <p className="heading">Content</p>
          <button> </button>
        </div>
        <form class="search-bar" id="form-message">
          <img src="./images/Check.png" alt="img" className="icon-img-sm" />
          <input type="text" placeholder="search chat.." />
        </form>
        <div className="chat-header">
          <p className="heading">Content</p>
          <button className="dropdown"><img src="./images/Check.png" alt="img" className="icon-img-sm" /></button>
        </div>
        <div className="chat-header">
          <p className="heading">Content</p>
          <button className="dropdown"><img src="./images/Check.png" alt="img" className="icon-img-sm" /></button>
        </div>
      </div>
    </>
  );
};

export default RightSide;
