import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import TodayContainer from '../containers/Today';
import ProverbContainer from '../containers/Proverb';
import { TouchableOpacity } from 'react-native-gesture-handler';

type CalenderProps = {
  onTouch : () => void;
  path    : string;
  date    : Date;
}

const CalenderComponent: FC<CalenderProps> = ( props : CalenderProps ) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={(event) => props.onTouch()}> 
        <TodayContainer date={props.date} />
        <ProverbContainer path={props.path} date={props.date} />
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

export default CalenderComponent;