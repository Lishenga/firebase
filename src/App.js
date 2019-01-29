import React, {Component} from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component{
    componentWillMount(){
        const config = {
            apiKey: "AIzaSyBpTxR0VlSti1Lf0EMYuzyyjUXmeBI3sq4",
            authDomain: "manager-75760.firebaseapp.com",
            databaseURL: "https://manager-75760.firebaseio.com",
            projectId: "manager-75760",
            storageBucket: "manager-75760.appspot.com",
            messagingSenderId: "357302746297"
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});


export default App;