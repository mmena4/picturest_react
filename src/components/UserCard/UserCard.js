import './UserCard.css';
//primero los props
const UserCard = ({avatar, userName, fullName, followingCount}) => {
return (
    <div className="userCard_container">
        <img src={avatar} alt="User Avatar" className="userCard_image"/>
        <div className="userCard_info__container">
            <span className="userCard_info_userFullName__text">{fullName}</span>
            <span className="userCard_info_username__text">@{userName}</span>
            <span className="userCard_info_userFollowing__text">{followingCount} following</span>
        </div>
    </div>
    );
};
export default UserCard;