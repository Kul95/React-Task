import {useState} from 'react';
function State1(){
    const[data,setData]=useState(0)
    function updateData(){
        setData(data+1);
      
    }
    return (
        <div>
<h1>{data}</h1>
<button onClick={updateData}>Ok Update</button>
        </div>
    )
}
export default State1;