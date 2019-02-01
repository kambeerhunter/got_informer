import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { charactersReducer } from './characters';

const rootReducer = combineReducers({
  characters: charactersReducer,
  form: formReducer,
});

export default rootReducer;
