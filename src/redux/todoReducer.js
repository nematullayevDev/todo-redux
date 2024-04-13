const defaulState = {
  todo: [],
};

export function todoReducer(state = defaulState, action) {
  if (action.type == "USER_ADD") {
    let copied = JSON.parse(JSON.stringify(state.todo));
    copied.push(action.payload);
    return { ...state, todo: copied };
  } else if (action.type == "USER_DELETE") {
    let copied = JSON.parse(JSON.stringify(state.todo));
    copied = copied.filter((el) => {
      return el.id != action.payload;
    });
    return { ...state, todo: copied };
  } else {
    return state;
  }
}
