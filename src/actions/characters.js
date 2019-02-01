import * as AT from './charactersTypes';

export const getCharacterList = () => ({
  type: AT.GET_CHARACTER_LIST,
});

export const getCharacterListSuccess = list => ({
  type: AT.GET_CHARACTER_LIST_SUCCESS,
  payload: {
    list,
  },
});

export const getCharacterListFailed = error => ({
  type: AT.GET_CHARACTER_LIST_SUCCESS,
  payload: {
    error,
  },
});

export const addCharacter = character => ({
  type: AT.ADD_CHARACTER,
  payload: {
    character,
  }
})

export const removeCharacter = name => ({
  type: AT.REMOVE_CHARACTER,
  payload: {
    name,
  }
})

export const filterCharacterList = (searchText, searchKey) => ({
  type: AT.FILTER_CHARACTER_LIST,
  payload: {
    searchText,
    searchKey,
  }
})

export function getCharacters() {
  return (dispatch) => {
    dispatch(getCharacterList());
    fetch("http://localhost:3000/static/characters.json")
    .then(res => res.json())
    .then(
      data => setTimeout(() => {dispatch(getCharacterListSuccess(data.characters))}, 1000)
    )
  }
}