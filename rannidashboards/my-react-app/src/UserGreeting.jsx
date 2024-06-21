
import PropTypes from 'prop-types';

function UserGreeting(props){
    
    const welcomeMessage = <h2>Welcome {props.username}</h2>,
        loginMessage = <h2>Please log in to continue</h2>;

    return ( props.isLoggedIn ? welcomeMessage : loginMessage )
    /* if ( props.isLoggedIn ){
        return <h2>Welcome {props.username}</h2>
    }
    
    return <h2>Please log in to continue</h2>
    */
}

UserGreeting.propTypes ={
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps ={
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting;