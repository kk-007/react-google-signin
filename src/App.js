import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { signIn,signOut } from "./actions/auth";
function App() {
  let dispatch = useDispatch();
  let auth = useSelector(state=>state).auth;
  return (
    <div>
      {auth.isSignIn?'Welcome '+auth.Name:''}
      {auth.isSignIn?<button onClick={()=>dispatch(signOut())}>Sign Out</button>:<button onClick={()=>dispatch(signIn())}>Sign In</button>}
    </div>
  );
}

export default App;
