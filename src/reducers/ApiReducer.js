let initialState = {
    results: []
}

function ApiReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_RESULTS':
          return {...state,
            results: [...state.results, action.data] }
        default:
            return state;
    }
}

export default ApiReducer;
