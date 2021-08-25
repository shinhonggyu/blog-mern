const Reducer = (state, action) => {
  if (action.type === 'LOGIN_START') {
    return {
      user: null,
      isFetching: true,
      isError: false,
    };
  }
  if (action.type === 'LOGIN_SUCCESS') {
    return {
      user: action.payload,
      isFetching: false,
      isError: false,
    };
  }
  if (action.type === 'LOGIN_FAILURE') {
    return {
      user: null,
      isFetching: false,
      isError: true,
    };
  }
  if (action.type === 'UPDATE_START') {
    return {
      ...state,
      isFetching: true,
    };
  }
  if (action.type === 'UPDATE_SUCCESS') {
    return {
      user: action.payload,
      isFetching: false,
      isError: false,
    };
  }
  if (action.type === 'UPDATE_FAILURE') {
    return {
      user: state.user,
      isFetching: false,
      isError: true,
    };
  }
  if (action.type === 'LOGOUT') {
    return {
      user: null,
      isFetching: false,
      isError: false,
    };
  }
  return state;
};

export default Reducer;
