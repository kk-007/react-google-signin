import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { signIn,signOut } from "./actions/auth";
function App() {
  let dispatch = useDispatch();
  let auth = useSelector(state=>state).auth;
  useEffect(()=>{
    window.gapi.load('client:auth2',()=>{
      window.gapi.auth2.init({
        client_id:'210767855072-cratf6e4jb79atmqb11880oaigapoiih.apps.googleusercontent.com',
        scope:'profile'
      })
    });
  },[]);
  return (
    <div>
      {auth.isSignIn?'Welcome '+auth.Name:''}
      {auth.isSignIn?<button onClick={()=>dispatch(signOut())}>Sign Out</button>:<button onClick={()=>dispatch(signIn())}>Sign In</button>}
    </div>
  );
}

export default App;
