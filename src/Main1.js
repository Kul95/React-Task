import React from 'react';

function Main1(){
    let data="Kuldeep Sharma"
    function submit(){
        data="John Singh";
        alert(data+7)
    }
    return(
        <div className='main'>
            <h2>This is sun main Main contaioner....</h2>
            <h1>{data}</h1>
            <button onClick={submit}>Click me....</button>
            <ul className='unorder'>
                <li>Hi..</li>
                <li>Hello</li>
                <li>Joy</li>
                <li>Jney</li>
                <li>Komal</li>
            </ul>
            <p> Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
                <br></br> Mauris placerat eleifend leo.</p>
        </div>
    )
}

export default Main1; 