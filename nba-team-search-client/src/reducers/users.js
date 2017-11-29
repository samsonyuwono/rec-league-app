export default (state = [], action) => {
  switch(action.type) {

    case 'CREATE_USER_SUCCESS':
      return state.concat(action.user);

    default:
      return state;
  }
}