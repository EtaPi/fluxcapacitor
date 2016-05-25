let init_state = {
  status: 'no session'
}

const session = (state = init_state, action) => {
  switch( action.type ) {
    case 'LOGIN':
      console.log( "in reducer" );
      return {
        username: action.username,
        login_time: 'now',
        status: 'logged in'
      };

    default:
      return state;
  };
}

export default session;
