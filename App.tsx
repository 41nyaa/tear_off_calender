import React, {FC} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import CalenderPicker from './components/CalenderPicker';
import TodayReducer  from './reducer/TodayReducer';
import Calender from './components/Calender';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation, NavigationContainer} from '@react-navigation/native';

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
          <Stack.Screen name="Calender" component={Calender} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;