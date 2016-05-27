

export const login = ( username, password ) => {
  return ( dispatch ) => {
    dispatch( loginStarted( username, password ) );

    return fetch("http://localhost:8080")
    .then( (response) => { return response.text() } )
    .then( (body) => {
      dispatch( loginSuccess( body ) );
    })
    .catch( (error) => {
      console.warn( error );
    })
  }
};

export const loginStarted = () => {
  return {
    type: 'LOGIN_STARTED',
    status: 'STARTED'
  };
};

export const loginSuccess = ( body ) => {
  return {
    type: 'LOGIN_SUCCESS',
    status: 'SUCCESS',
    body: body
  };
};

export const loginError = ( reason ) => {
  return {
    type: 'LOGIN_ERROR',
    status: 'error',
    reason: 'invalid username password'
  };
};
