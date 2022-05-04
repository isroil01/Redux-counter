import { useDispatch } from 'react-redux';
import { authAction } from '../store';
import classes from './Auth.module.css';

const Auth = () => {
  const dispatch = useDispatch();

  const LoginHandeler = (e) =>{
    e.preventDefault();

    dispatch(authAction.logIn())
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={LoginHandeler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
