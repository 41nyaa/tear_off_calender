import React, {FC} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import CalenderPicker from './components/CalenderPicker';
import TodayReducer  from './reducer/TodayReducer';
import CalenderConatiner from './containers/Calender';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';

const store = createStore(TodayReducer);

export type RootStackParamList = {
  CalenderPicker : undefined;
  Calender : {path : string};
}

const Stack = createStackNavigator<RootStackParamList>();

const App : FC = () => {
  return (
      <Provider store={store} >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CalenderPicker">
          <Stack.Screen name="CalenderPicker" component={CalenderPicker} options={{headerShown:false}} />
          <Stack.Screen name="Calender" component={CalenderConatiner} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;