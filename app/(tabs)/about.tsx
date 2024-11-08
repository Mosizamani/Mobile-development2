import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>just red</Text>
        <Button title="Press me" onPress={() => alert('Button pressed')} />
        <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            onChangeText={text => text}
         />
        <ScrollView style={{height: 100}}></ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default LotsOfStyles;