import UserCard from "../components/userCard/UserCard";
import BoardList from "../components/boardList/BoardList";
import PinsList from "../components/pinsList/PinsList";

export const UserProfilePage = ({ user }) => {

  const localStorageUser = JSON.parse(localStorage.getItem('user'));

  console.log(localStorageUser)


  return (
    <>
      <UserCard
        avatar={localStorageUser.avatar}
        userName={localStorageUser.username}
        followingCount={user.following && user.following.length}
        fullName={`${localStorageUser.firstName} ${localStorageUser.lastName}`}
      />
      <BoardList />
      <PinsList />
    </>
  );
};

export default UserProfilePage;
