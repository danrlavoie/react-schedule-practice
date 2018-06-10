const csv = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_CSV':
      return [
        ...state,
        {
          completed: true
        }
      ]
    default:
      return state
  }
}

export default csv