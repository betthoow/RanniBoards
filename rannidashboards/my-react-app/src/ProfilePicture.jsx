function ProfilePicture(){
    const imageURL = './src/assets/profile.png';

    const handleClick = (e) => {
        console.log( "Auuuchhh");
        e.target.style.display = "none";
    }

    return (<>
        <img onClick={(e)=> handleClick(e)} src={imageURL}></img>
    </>)
}

export default ProfilePicture;