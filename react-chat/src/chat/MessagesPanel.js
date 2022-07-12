import React, { useState } from 'react';
import  Message  from './Message';
import './message.css';

const MessagesPanel=(props)=> { 
    const [state,setState]=useState( {input_value: ''});

   
    // state = { input_value: '' }
    function send(){
        if (state.input_value && state.input_value !== '') {
            console.log(props);
            props.onSendMessage(props.channel.id, state.input_value);
            setState({ input_value: '' });
        }
    }

    const handleInput = (e) => {
        setState({ input_value: e.target.value });
        // console.log("hello");
        // console.log((state.input_value));
    }

    let list = <div className="no-content-message"><span>There is no messages to show</span></div>;
        if (props.channel && props.channel.messages) {;
            
            list = props.channel.messages.map(m => <Message key={m.id} id={m.id} senderName={m.senderName} text={m.text} />);
        }
    

   
    return (
        
    
        
        <div className='messages-panel'>
            <div className="meesages-list">{list}</div>
            {
                <div className="messages-input">
                    <input type="text" onChange={handleInput} value={state.input_value} />
                    <button onClick={send}>Send</button>
                </div>
            }
        </div>
        
        
        );
    

}

export default MessagesPanel;