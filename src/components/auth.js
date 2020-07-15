import React,{useEffect} from 'react';

function Auth() {

  const handleSignInError = err=>{
    console.log(err)
    switch(err){
      case 'popup_closed_by_user':
        window.alert('Sign In for Continue');
        break;
      case 'access_denied':
        window.alert('Detail Required for Reference');
        break;
      case 'popup_blocked_by_browser':
        window.alert('allow popup for sign-in with google');
        break;
      default:
        window.alert('System Error',err.error)
        break;
    }
  }

  const onAuthChange = ()=>{
    console.log('changed')
  }
  useEffect(()=>{
    window.gapi.load('client:auth2',()=>{
      window.gapi.auth2.init({
        client_id:'210767855072-cratf6e4jb79atmqb11880oaigapoiih.apps.googleusercontent.com',
        scope:'profile'
      }).then(()=>{
        window.gapi.auth2.getAuthInstance().isSignedIn.listen(onAuthChange);
        window.gapi.auth2.getAuthInstance().signIn()
        .then(user=>console.log(user.getBasicProfile().getName()))
        .catch(err=>handleSignInError(err.error));
      })
    });
  },[]);
  return (
    <div>
      Hello
    </div>
  );
}

export default Auth;
