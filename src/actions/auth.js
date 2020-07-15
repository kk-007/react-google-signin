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
        window.alert('System Error')
        break;
    }
  }
export const signIn = authInstance=>{
    return async dispatch=>{
        try {
            let user = await authInstance.signIn();
            dispatch({
                type:'SIGN_IN',
                payload:{
                    Name:user.getBasicProfile().getName()
                }
            });
        } catch (e) {
            handleSignInError(e.error)
        }
    }
}

export const signOut = authInstance=>{
    return async dispatch=>{
        try {
            await authInstance.signOut();
            dispatch({
                type:'SIGN_OUT',
            });
        } catch (e) {
            handleSignInError(e.error)
        }
    }
}