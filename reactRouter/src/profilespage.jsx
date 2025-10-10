import { NavLink,Outlet } from "react-router-dom";

const Profiles = () =>{

   const profiles = [1,2,3,4,5];

    return(
        <div>
            <div>
            {profiles.map((profile)=>(
                <NavLink key={profile} to={`/profiles/${profile}`}  >
                    Profile  {profile}
                </NavLink>
            ))}
           
        </div>
        <Outlet/>
            
        </div>
    );

}
/*When you use curly braces {} in an arrow function, you need to explicitly use the return keyword, or the function returns undefined by default.*/ 

export default Profiles