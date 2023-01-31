import React from "react";

const LeftSide = () => {
  return (
    <>
      <div className="left-side">
        <div className="header">
          <div>
            <img src="./images/Ellipse 3.png" alt="Avatar" class="avatar" />
          </div>
          <div className="icon-container">
            <img src="./images/Check.png" alt="img" className="icon-img" />
            <img src="./images/Check.png" alt="img" className="icon-img" />
          </div>
        </div>
        <div className="chat-tab">
          <button className="active">messages</button>
          <button>broadcast msg</button>
        </div>
        <div className="chat-header">
          <p className="heading">message</p>
          <button> </button>
        </div>
        <form class="search-bar" id="form-message">
          <img src="./images/Check.png" alt="img" className="icon-img-sm" />
          <input type="text" placeholder="search chat.." />
        </form>
        <div className="badge">
          <button className="active">all</button>
          <button>8879310</button>
          <button>jjbkjvbkjer</button>
        </div>
        <div className="card-container">
          <div className="header-profile">
            <img src="./images/Ellipse 2.png" alt="Avatar" class="avatar" />
            <div className="text">
              <p className="title">name</p>
              <p className="sub-title">description</p>
            </div>
            <div className="msg-count">
              <p className="sub-title">3431</p>
              <span className="number">3</span>
            </div>
          </div>
          <div className="header-profile">
            <img src="./images/Ellipse 1.png" alt="Avatar" class="avatar" />
            <div className="text">
              <p className="title">name</p>
              <p className="sub-title">description</p>
            </div>
            <div className="msg-count">
              <p className="sub-title">3431</p>
              <span className="number">3</span>
            </div>
          </div>
          <div className="header-profile">
            <img src="./images/Ellipse 3.png" alt="Avatar" class="avatar" />
            <div className="text">
              <p className="title">name</p>
              <p className="sub-title">description</p>
            </div>
            <div className="msg-count">
              <p className="sub-title">3431</p>
              <span className="number">3</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSide;
