import { createStore, combineReducers, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { comicsReducer, counterReducer } from '../reducers';

type StoreFactory = () => Store;
export type RootState = ReturnType<typeof root>;

export const sagaMiddleware = createSagaMiddleware();
const root = combineReducers({
  counter: counterReducer,
  comics: comicsReducer,
});

const configure: StoreFactory = () => createStore(root, composeWithDevTools(
  applyMiddleware(sagaMiddleware),
));

export default configure;
