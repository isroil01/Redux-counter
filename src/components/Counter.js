import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux';
import { counterActions } from '../store';

const Counter = () => {
 const counter =  useSelector((state) => state.counter.counter);
 const showCounter = useSelector(state => state.counter.showCounter)
 
 const dispatch = useDispatch();
 
  const toggleCounterHandler = () => {
     dispatch(counterActions.toggle());
  };

  const IncrementHandeler = () =>{
    dispatch(counterActions.increment());
  }
  const DecrementHAndeler = () =>{
    dispatch(counterActions.decrement());
  }
  const IncreaseHandeler = () =>{
    dispatch(counterActions.increase(5));
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>-- {counter} --</div>}
      <div>
        <button onClick={IncrementHandeler}>Increment</button>
        <button onClick={DecrementHAndeler}>Decrement</button>
        <button onClick={IncreaseHandeler}>increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
