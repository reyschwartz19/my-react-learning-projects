import { Link } from "react-router-dom";

const NotFound = () =>{
return <div>404 Not Found 
    <Link to="/">Home</Link><br/>
    {<a href="/">Home from A</a>  /*refreshes entire page */}
</div>

}

export default NotFound;