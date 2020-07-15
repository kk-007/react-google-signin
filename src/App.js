import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { signIn,signOut } from "./actions/auth";
function App() {
  let dispatch = useDispatch();
  let auth = useSelector(state=>state.auth);
  let authInstance=null;
  useEffect(()=>{
    window.gapi.load('client:auth2',()=>{
      window.gapi.auth2.init({
        client_id:'210767855072-cratf6e4jb79atmqb11880oaigapoiih.apps.googleusercontent.com',
        scope:'profile'
      }).then(()=>{
        authInstance = window.gapi.auth2.getAuthInstance();
      })
    });
  },[authInstance]);
  return (
    <div>
      {auth.isSignedIn?auth.user.getBasicProfile().getName():''}
      {auth.isSignedIn?<button onClick={()=>dispatch(signOut(authInstance))}>Sign Out</button>:<button onClick={()=>dispatch(signIn(authInstance))}>Sign In</button>}
    </div>
  );
}

export default App;
