const initalState = {
  cash: 50000000,
};

function counterReducer(state = initalState, action) {
  switch (action.type) {
    case "incremented":
      return { cash: state.cash + 1 };
    case "decremented":
      return { cash: state.cash - 1 };
    default:
      return state; 
  }
}


