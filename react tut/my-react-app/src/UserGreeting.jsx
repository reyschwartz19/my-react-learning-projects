import PropTypes from 'prop-types'
function UserGreeting({isloggedIn = false, username = "guest"}){
 
 const welcomeMessage = <h2 className="welcome-message">Welcome {username}</h2> ;
 const loginPrompt =  <h2 className="login-prompt">Please login</h2>;
    return(isloggedIn ?
        welcomeMessage
     : 
        loginPrompt
    );
}
UserGreeting.proptypes ={
    isloggedIn: PropTypes.bool,
    username: PropTypes.string,
}
export default UserGreeting