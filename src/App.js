import React,{useEffect,useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { signIn,signOut } from "./actions/auth";
function App() {
  let dispatch = useDispatch();
  let auth = useSelector(state=>state.auth);
  let [isLoading,setIsLoading] = useState(true);
  useEffect(()=>{
    setIsLoading(true)
    window.gapi.load('client:auth2',()=>{
      window.gapi.auth2.init({
        client_id:'210767855072-cratf6e4jb79atmqb11880oaigapoiih.apps.googleusercontent.com',
        scope:'profile'
      }).then(()=>setIsLoading(false));
    });
  },[]);
  return (
    <div>
      {isLoading?'Loading....':auth.isSignIn?'Welcome '+auth.Name:''}
        {auth.isSignIn?<button onClick={()=>dispatch(signOut())}>Sign Out</button>:<button onClick={()=>dispatch(signIn())}>Sign In</button>}
    </div>
  );
}

export default App;
