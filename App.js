import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const callHistory = [
  { id: '1', name: 'Nezuko', profilePic: 'https://www.shutterstock.com/image-photo/portrait-female-personal-trainer-holding-260nw-2249557387.jpg' },
  { id: '2', name: 'Tanjiro', profilePic: 'https://images.squarespace-cdn.com/content/v1/5ede457a2188e55de5de09a7/1591718388454-L555WHFDDZ0UI5ZCWXEQ/Personal+Trainer+Profile+%28Full+Size%29.jpg' },
  { id: '3', name: 'Inosuke', profilePic: 'https://media.istockphoto.com/id/1040501222/photo/portrait-of-a-personal-trainer-in-the-gym.jpg?s=612x612&w=0&k=20&c=Xdmp8LM2OCBkwtbWELRkYoQlsT9OZECtq--7gE5BPLg=' },
  { id: '4', name: 'Zenitsu', profilePic: 'https://basebangkok.com/app/uploads/2021/12/Matt-WP.jpg' },
  { id: '5', name: 'Rengoku', profilePic: 'https://www.stringssg.com/_next/image?url=https%3A%2F%2Fs3-ap-southeast-1.amazonaws.com%2Fstringssg-assets%2Fprod%2Fuser-assets%2F1000010804image6360&w=3840&q=75' },
  { id: '6', name: 'Mitsuri', profilePic: 'https://t3.ftcdn.net/jpg/06/35/17/52/360_F_635175286_Ve3RnNYKcHmWsHRNNhoWq4c38pLpZapu.jpg' },
];

const CallHistoryItem = ({ name, profilePic }) => (
  <View style={styles.callItemContainer}>
    <Image source={{ uri: profilePic }} style={styles.profilePic} />
    <Text style={styles.callerName}>{name}</Text>
    <Icon name="phone" size={24} color="black" />
  </View>
);

const CallsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingline}>Calls</Text>
      <View style={styles.subtittlecontainer}>
        <Text style={styles.subtittle}>Favorites</Text>
        <View style={styles.addfavoritesContainer}>
          <Icon name="star" size={20} color="black" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.addText}>Add to Favorites</Text>
            <Text style={styles.additionalText}>Recent</Text>
          </View>
        </View>
      </View>
      <FlatList
        data={callHistory}
        renderItem={({ item }) => (
          <CallHistoryItem
            name={item.name}
            profilePic={item.profilePic}
          />
        )}
        keyExtractor={item => item.id}
        style={styles.callHistoryList}
      />
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingline}>Settings</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Calls"
          component={CallsScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="phone" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="cog" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 16,
  },
  headingline: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'black',
  },
  subtittlecontainer: {
    marginTop: 16,
  },
  addfavoritesContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  icon: {
    marginRight: 8,
  },
  textContainer: {
    flexDirection: 'column',
  },
  subtittle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  addText: {
    fontSize: 16,
    color: 'black',
  },
  additionalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 8,
  },
  callHistoryList: {
    marginTop: 16,
    width: '100%'
  },
  callItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  callerName: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
});
