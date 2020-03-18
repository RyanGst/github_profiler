import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Block, Text} from 'galio-framework';

// import { Container } from './styles';

export default function ProfileComponent({user}) {
  return (
    <Block>
      <Block>
        <Image style={styles.image} source={{uri: user.avatar_url}} />
        <Block>
          <Text h3 style={styles.login}>
            {user.login}
          </Text>
          <Text h5 italic bold style={styles.login}>
            {user.bio}
          </Text>
        </Block>
      </Block>
      <Block center style={styles.repoContainer}>
        <Block style={styles.info}>
          <Text p style={styles.details}>
            Followers: {user.followers}
          </Text>
          <Text p style={styles.details}>
            Following: {user.following}
          </Text>
        </Block>
        <Block center>
          <Text h5 italic style={styles.details}>
            Repos: {user.public_repos}
          </Text>
        </Block>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#24292e',
    padding: 20,
  },
  repoContainer: {
    margin: 20,
    width: 375,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    alignSelf: 'center',
  },
  login: {
    color: '#fff',
    alignSelf: 'center',
  },
  details: {
    color: '#000',
    alignSelf: 'center',
    padding: 5,
  },
  info: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
