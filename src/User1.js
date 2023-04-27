import { useParams } from "react-router";
function User1(){
    const params=useParams();
    const {name}=params;
    return(
        <div>
        <h1>My Name is {name} Sharma. I am from User One Page</h1>
        </div>
    )
}
export default User1;