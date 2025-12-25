function Profile({name,age,city}){
    return(
        <div>
        <h2>{name}</h2>
        <p>Age : {age} </p>
        <p>City : {city}</p>
        </div>
    );
}

export default Profile;