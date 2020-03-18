import React, {useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Input, Button} from 'galio-framework';

export default function Home({navigation}) {
  const [username, setUsername] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/logo.png')} />
      </View>
      <View style={styles.formContainer}>
        <Input
          style={styles.textField}
          placeholderTextColor={'#000'}
          onChangeText={setUsername}
          value={username}
          placeholder="Entre com o usuário do Github"
        />
        <Button
          onPress={() => {
            navigation.navigate('Profile', {
              username: username,
            });
          }}
          style={styles.button}>
          <Text>Ver perfil</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#24292e',
  },
  image: {
    height: 100,
    width: 100,
  },
  imageContainer: {
    marginBottom: 10,
    padding: 20,
  },
  textField: {
    width: 350,
  },
  formContainer: {
    alignContent: 'space-around',
  },
  button: {
    backgroundColor: '#fff',
    color: '#000',
    width: 350,
  },
});
