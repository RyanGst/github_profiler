import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import api from '../service/api';
import { Block, Text, Card } from 'galio-framework';
import ProfileComponent from '../components/Profile';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile({ route, navigation }) {
  const { username } = route.params;

  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    async function getRepos() {
      const res = await api.get(`/${username}/repos`);
      if (res.status === 200) {
        await setRepos(res.data);
      }
    }

    async function getData() {
      const response = await api.get(`/${username}`);
      if (response.status === 200) {
        await setUser(response.data);
        getRepos();
      }
    }
    getData();
  }, [username]);

  return (
    <Block style={styles.profileContainer}>
      {user.length === 0 ? <NotFound /> : <ProfileComponent user={user} />}
      {repos.length === 0 ? <NotFound /> : <RepoList repos={repos} />}
    </Block>
  );
}

function Repository({ repo }) {
  return (
    <Card
      style={styles.card}
      flex
      borderless
      title={repo.name}
      caption={repo.description}
      captionColor="#001"
      shadow
    />
  )
}

function RepoList({ repos }) {
  return (
    <SafeAreaView style={styles.reposContainer}>
      <FlatList
        data={repos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Repository repo={item} />}
      />
    </SafeAreaView>
  )
}


function NotFound() {
  return <Text>User not Found</Text>;
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#24292e',
    padding: 20,
  },
  reposContainer: {
    width: 400,
    padding: 15
  }, 
  card: {
    backgroundColor: "#fff", 
    margin: 15
  }
});
