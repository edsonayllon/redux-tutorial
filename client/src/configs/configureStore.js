import { counterReducer, loggedReducer } from 'reducers';
import { combineReducers, createStore } from 'redux';

const configureStore = async () => {
    const rootReducer = combineReducers({
        counterReducer,
        loggedReducer
    });

    const store = createStore(
        rootReducer, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    store.subscribe(() => console.log(store.getState()));

    console.log("✓ Created Store");

    return { store };
}



export { configureStore };