import React from 'react';
import Channel  from './Channel';
import "./ChannelList.css"

const ChannelList =(props)=>{

    const handleClick = (id) => {
        props.onSelectChannel(id);
    }
    let list = <div className="no-content-message">There is no channels to show</div>;
    if (props.channels && props.channels.map) {
        list = props.channels.map(c => <Channel key={c.id} id={c.id} name={c.name} participants={c.participants} onClick={handleClick} />);
    }
    async function connect(){
  
        document.getElementById('connect-button').addEventListener('click', event => {
          let account;
          let button = event.target;
          window.ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
            account = accounts[0];
            console.log(account);
            button.textContent = account;
      
            window.ethereum.request({method: 'eth_getBalance' , params: [account, 'latest']}).then(result => {
              
              let wei = parseInt(result,16);
              let balance = wei / (10**18);
              console.log(balance + " ETH");
            });
          });
        });
      
      }
    return (
        <div className='channel-list'>
            {list}
            <button onClick={connect} id="connect-button"> Connect to metamask</button>
        </div>
        
        );
    
}
export default ChannelList;
