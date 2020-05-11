import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';

type TodayProps = {
  year: number;
  month: number;
  date: number;
  day: number;
};

const TodayComponent: FC<TodayProps> = ({ year, month, date, day }) => {
  const dayStr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return (
    <Text style={styles.text}>{year}/{month}/{date}({dayStr[day]})</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "#fff"
  },
});

export default TodayComponent;