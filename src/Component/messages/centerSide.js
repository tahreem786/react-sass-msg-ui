import React from "react";

function CenterSide() {
  return (
    <div className="center-side">
      {/* header center */}
      <div className="header">
        <div className="header-profile">
          <img src="./images/Ellipse 1.png" alt="Avatar" class="avatar" />
          <div>
            <p className="title">name</p>
            <p className="sub-title">description</p>
          </div>
        </div>
        <div className="icon-container">
          <img src="./images/Check.png" alt="img" className="icon-img" />
          <img src="./images/Check.png" alt="img" className="icon-img" />
        </div>
      </div>
      {/* chet */}
      <div class="conversation">
        <p className="msg-title">description</p>
        <div class="messages messages--received">
          <div class="message">This codepen is an exemple of</div>
          <div class="message">how to create the Facebook thumb up</div>
        </div>
        <div class="messages messages--sent">
          <div class="message">Try to type</div>
          <div class="message">or click the thumb up!</div>
          <div class="message">;)</div>
        </div>
        <div class="messages messages--received">
          <div class="message">Enjoy!</div>
        </div>
      </div>
      {/* text form */}
      <div class="text-bar">
        <form class="text-bar__field" id="form-message">
          <img src="./images/Check.png" alt="img" className="icon-img" />
          <input type="text" placeholder="Type or thumb up ;)" />
          <img src="./images/Check.png" alt="img" className="icon-img" />
          <img src="./images/Check.png" alt="img" className="icon-img" />
          <button>
            <img src="./images/Check.png" alt="img" className="icon-img-sm" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default CenterSide;
