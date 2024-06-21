import profilePic from './assets/profile.png'

function Card(){
    return (
        <div className="card">
            <img className="card-image" alt="ProfilePicture" src={profilePic}></img>
            <h2 className='card-title'>DSSMSS Profile</h2>
            <p className='card-text'>Development Signage Software</p>
        </div>
    );
}

export default Card;