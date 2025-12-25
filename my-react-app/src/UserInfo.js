function UserInfo(props){
    return (
        <div>
            <h1>User Information</h1>
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
        </div>

    );
}
export default UserInfo;