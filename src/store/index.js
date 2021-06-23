// import { connect } from 'react-redux'
import { createStore } from "redux"; // step 1️⃣

const initialState = {
  counter: 0,
  showCounter: true,
};
// step 3️⃣
const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "INCREASE") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if(action.type === 'TOGGLE'){
      return {
          showCounter:!state.showCounter,
          counter: state.counter
      }
  }

  return state;
};

// create counter store from redux
// step 2️⃣
const store = createStore(counterReducer);

// const counterSubscriber = () =>{
//     const latestState = store.getState()
//     console.log(latestState);
// }

// // step 4️⃣
// store.subscribe(counterSubscriber)

// //step 5️⃣
// function increment(){
//     store.dispatch({
//         type: "INCREMENT",
//     })
// }

// function decrement(){
//     store.dispatch({
//         type: "DECREMENT",
//     })
// }

export default store;
