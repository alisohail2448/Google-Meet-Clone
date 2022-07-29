import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faUserFriends,
  faCommentAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import "./Messenger.scss";
import { formatDate } from "../../../utils/helpers"

const Messenger = ({setIsMessenger, sendMsg, messageList}) => {
  const [msg, setMsg] = useState("");

  const handleChangeMsg = (e) =>{
    setMsg(e.target.value);
  }

  const handleKeyDown = (e) =>{
    if(e.key === "Enter"){
      sendMsg(msg);
      setMsg("");
    }
  }

  const handleSendMsg = () =>{
    sendMsg(msg);
    setMsg("");
  }

  return (
    <div className="messenger-container">
      <div className="messenger-header">
        <h3>Meeting Details</h3>
        <FontAwesomeIcon className="icon" icon={faTimes} onClick={()=>setIsMessenger(false)} />
      </div>
      <div className="messenger-header-tab">
        <div className="tab">
          <FontAwesomeIcon className="icon" icon={faUserFriends} />
          <p>People (1)</p>
        </div>
        <div className="tab active">
          <FontAwesomeIcon className="icon" icon={faCommentAlt} />
          <p>Chat</p>
        </div>
      </div>

      <div className="chat-section">
        {
          messageList.map((item) =>(
            <div className="chat-block" key={item.time} >
          <div className="sender">
            {item.user} <small>{formatDate(item.time)}</small>
          </div>
          <p className="msg">{item.msg}</p>
        </div>
          ))
        }
      </div>
      <div className="send-msg-section">
        <input type="text" placeholder="Send a message to everyone" value={msg} onChange={(e)=> handleChangeMsg(e)} onKeyDown={(e) => handleKeyDown(e)} />
        <FontAwesomeIcon className="icon" icon={faPaperPlane} onClick={handleSendMsg} />
      </div>
    </div>
  );
};

export default Messenger;