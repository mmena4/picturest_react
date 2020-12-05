
import {useEffect, useState} from 'react'
import './App.css';
import BoardForm from './components/BoardFrom/BoardForm';
import BoardsList from './components/BoardsList/BoardsList';
import Header from './components/Header/Header';
import UserCard from './components/UserCard/UserCard';
function App () {
/*  cont [user, setUser] = useState({});
  useEffect(() => {
    fetch("http://localhost:500/api/users/1")
    .then((response) => response.json)
    .then((json) => setUser(json));
  } []);
*/
/* const [BoardsList, setBoardsList] = useState({});
useEffect(() => {
  fetch("http://localhost:5000/api/boards")
  .then((response) => response.json)
  .then((json) => setBoardsList(json));

},[]); */
  return (
    <div className="app_body">
      <Header />
      <UserCard
        avatar="https://images.generated.photos/04sF-8YxQPuO-8gjGAzoCAtS1La6sc3jj_5IPrmS4OU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA1MDIzNzcuanBn.jpg" // {user.avatar}
        userName="epito" //{user.userName}
        followingCount={14} //{user.following.lenght + 1}
        fullName="Pepito Garcia" />
        <BoardsList 
          author={8}
          title="Pawling"
          collaborators={[2,3]}/>
        <BoardForm />
    </div>
  );
}
export default App;