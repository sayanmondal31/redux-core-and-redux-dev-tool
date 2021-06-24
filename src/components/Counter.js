import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter"; 

const Counter = () => {
  // useDispatch is used to set the action to redux
  const dispatch = useDispatch();
  // useSelector takes state from redux store
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  function incrementHandler() {
    // we have to execute increment() to automatically create action behind the scene
    dispatch(counterActions.increment());
  }
  function incrementByFiveHandler() {
    dispatch(counterActions.increase(5));
  }
  function decrementHandler() {
    dispatch(counterActions.decrement());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>-- {counter} --</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementByFiveHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
