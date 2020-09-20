
const initialState = {
  cats: [],
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case 'ADD_CAT_FACT':
      return {
        ...state,
        cats: [...state.cats, ...[payload]],
      };
    case 'GET_CAT_FACT':
      return { ...state, cats: payload };
    default:
      return state;
  }
}
