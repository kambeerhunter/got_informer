import * as AT from '../actions/charactersTypes';

const initialState = {
  elements: [],
  isLoading: false,
  error: null,
}

const checkValueInObject = (obj, value) => {
  let flag = false;
  Object.keys(obj).forEach(key => {
    if (
      obj[key] &&
      value &&
      obj[key].toLowerCase().indexOf(value.toLowerCase()) !== -1) {
      flag = true;
    }
  });
  return flag;
}

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.GET_CHARACTER_LIST:
      return ({
        ...state,
        isLoading: true,
      });
    case AT.GET_CHARACTER_LIST_SUCCESS:
      return ({
        ...state,
        elements: action.payload.list,
        isLoading: false,
      });
    case AT.GET_CHARACTER_LIST_FAILED:
      return ({
        ...state,
        isLoading: false,
        error: action.payload.error,
      });
    case AT.ADD_CHARACTER:
      return ({
        ...state,
        elements: [
          ...state.elements,
          action.payload.character,
        ]
      });
    case AT.REMOVE_CHARACTER:
      return ({
        ...state,
        elements: [...state.elements].filter(item => item.name !== action.payload.name),
      });
    case AT.FILTER_CHARACTER_LIST:
      const key = action.payload.searchKey;
      const text = action.payload.searchText;

      if (!text || !text.length || !key) {
        return ({
          ...state,
        });
      }
      if (key === 'all') {
        return ({
          ...state,
          elements: [...state.elements].filter(
            item => checkValueInObject(item, text)
          )
        });
      }
      return ({
        ...state,
        elements: [...state.elements].filter(
          item => item[key].toLowerCase().indexOf(
            text.toLowerCase()
          ) !== -1
        ),
      });
    default:
      return state;
  }
};

export { charactersReducer };