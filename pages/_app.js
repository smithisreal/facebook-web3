import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../store/index';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';
import { apiMiddleware } from 'redux-api-middleware';

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(...[ReduxThunk, ReduxLogger, apiMiddleware])
);
function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>

  )


}

export default MyApp
