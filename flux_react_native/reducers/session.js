import { loginSuccess } from '../actions'

import { dispatch } from 'react-redux'

let init_state = {
  status: 'none'
}

const session = (state = init_state, action) => {
  switch( action.type ) {
    case 'LOGIN_STARTED':
      console.log( "attempting login" );

      return Object.assign( {}, state, { status: 'started' } );

    case 'LOGIN_SUCCESS':
      return Object.assign( {}, state, {  status: 'authenticated',
                                          body: action.body} );

    case 'LOGIN_ERROR':
      return state;

    default:
      return state;
  };
}

export default session;
