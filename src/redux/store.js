import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './contacts/contacts-reducer';
import filterReducer from './filter/filter-reducer';

const store = configureStore({
  reducer: {
    books: contactsReducer,
    filter: filterReducer,
  },
});

export default store;
