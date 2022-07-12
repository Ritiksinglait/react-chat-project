import React from 'react';



const Channel =(props)=>{

    function click(){
        props.onClick(props.id);
    }


    return (
        <div className='channel-item' onClick={click}>
            <div>{props.name}</div>
            <span>{props.participants}</span>
        </div>
    )
    
}
export default Channel;