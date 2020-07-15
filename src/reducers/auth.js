export default (state={isSignIn:false},action)=>{
    switch(action.type){
        case 'SIGN_IN':
            return {isSignIn:true,...action.payload};
        case 'SIGN_OUT':
            return {isSignIn:false};
        default:
            return state;
    }
}