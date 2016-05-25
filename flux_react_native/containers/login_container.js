import { connect } from 'react-redux';
import { login } from '../actions';
import LoginScene from '../components/login_scene';

const mapStateToProps = (state) => {
  return { state: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: ( username, password ) => {
      dispatch( login( username, password ) )
    }
  }
};

const LoginSceneContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)( LoginScene );

export default LoginSceneContainer;
