import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';

type ProverbProps = {
  proverb: string;
};

const ProverbComponent: FC<ProverbProps> = ({ proverb }) => {
  if (proverb === undefined)
    proverb = '';
  return (
    <Text style={styles.text}>{proverb}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "#fff"
  },
});

export default ProverbComponent;