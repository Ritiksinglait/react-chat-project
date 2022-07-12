import React from 'react';
import './message.css';
import avatar from "../images/avatar.png";

const Message =(props)=>{

    
        return (
            
            <div className='conatiner' >
                <div className='avatar' >
                    <img className='userAvatar' src={avatar}></img>
                </div>
                <div className='message-item'>
                    <div><b>{props.senderName}</b></div>
                    <span>{props.text}</span>
                    <br></br>
                    <p  className="activeTime">few moments ago &#x2714;</p>
                </div>
            </div>
        )
    
}
export default Message;


{/* <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" style="user-select: auto;">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24" style="user-select: auto;">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" style="user-select: auto;"></path>
      </svg>
      <span class="ml-3 text-xl" style="user-select: auto;">Tailblocks</span>
    </a> */}