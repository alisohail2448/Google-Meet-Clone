import React, { useEffect, useState } from 'react'
import { formatDate } from "../../../utils/helpers"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends, faCommentAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./CallPageHeader.scss"

const CallPageHeader = ({isMessenger, setIsMessenger, messageAlert, setMessageAlert}) => {
  let interval = null;
  const [currentTime, setCurrentTime] = useState(() =>{
    return formatDate();
  });

  useEffect(() => {
    interval = setInterval(() => setCurrentTime(formatDate()), 1000);
    return () =>{
      clearInterval(interval)
    }
  }, [])
  

  return (
    <div className="frame-header">
        <div className="header-items icon-block">
        <FontAwesomeIcon icon={faUserFriends} className="icon" />
        </div>
        <div className="header-items icon-block" onClick={() =>{
          setIsMessenger(true);
          setMessageAlert({});
        }} >
        <FontAwesomeIcon icon={faCommentAlt} className="icon" />
       {
        !isMessenger && messageAlert.alert && (
          <span className='alert-circle-icon' ></span>
        )
       }
        </div>
        <div className="header-items date-block">{currentTime}</div>
        <div className="header-items icon-block">
        <FontAwesomeIcon icon={faUserCircle} className="icon profile" />
        </div>
    </div>
  )
}

export default CallPageHeader