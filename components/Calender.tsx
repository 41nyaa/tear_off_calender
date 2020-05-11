import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import TodayContainer from '../containers/Today';
import ProverbContainer from '../containers/Proverb';
import { TodayActionType } from '../actions/Today';
import { TodayState } from '../reducer/TodayReducer';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type CalenderRouteProps = RouteProp<RootStackParamList,'Calender'>;

const Calender: FC = () => {
  const dispatch = useDispatch();
  const date = useSelector((state: TodayState) => new Date(state.date));
  const {path} = useRoute<CalenderRouteProps>().params;

  const touch = (): void => {
    dispatch({ type: TodayActionType.ADD });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={(event) => touch()}>
        <TodayContainer date={date} />
        <ProverbContainer path={path} date={date} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Calender;