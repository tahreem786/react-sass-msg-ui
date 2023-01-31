import React from "react";

import "./message.scss";
import CenterSide from "./centerSide";
import LeftSide from "./leftSide";
import RightSide from "./rightSide";

const Messages = () => {
  return (
    <div className="msg-container">
      <LeftSide/>
      <CenterSide/>
      <RightSide/>
    </div>
  );
};

export default Messages;
