import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import FormWrapper from './components/forms-wrapper';
import Content from './components/content';


const App = () => (
  <Provider store={store}>
    <div className="container">
      <header className="pt-2 pb-2">
        <h2 className="text-center">
          Dead characters in "Game of Thrones"
        </h2>
      </header>
      <hr/>
      <FormWrapper />
      <Content />
    </div>
  </Provider>
);

export default App;
