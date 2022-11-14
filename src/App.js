import React from 'react';
import { Provider } from 'react-redux';
import { store } from "./Redux/Store";
import Main from "./components/Main/Main"
// import { persistStore } from "redux-persist"
import { Grid } from '@mui/material';

// let persistor = persistStore(store)


function App() {

  return (
    <Grid container>
      <Provider store={store}>
          <Main />
      </Provider>
    </Grid>
  );

}

export default App;
