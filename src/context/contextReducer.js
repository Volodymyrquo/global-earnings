export const initialState = {
  pageId: 'referralsProgram',
}

const contextReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PAGE':
      return { ...state, pageId: action.payload }
    default:
      return state
  }
}
export default contextReducer
