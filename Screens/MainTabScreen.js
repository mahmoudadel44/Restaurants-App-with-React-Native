import React from 'react';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './HomeScreen';
import DetailsSCreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import EditProfileScreen from './EditProfileScreen'
import ExploreScreen from './ExploreScreen'
import CardListScreen from './CardListScreen'
import CardItemDetails from './CardItemDetails'
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator()
const ExploreStack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
  const navigation = useNavigation()
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009837',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={26} color={color} />),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarColor: '#4d88ff',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" size={26} color={color} />),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#4d88ff',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#4d88ff',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="settings" size={26} color={color} />),
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTabScreen
const HomeStackScreen = () => {
  const navigation = useNavigation()
  return (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#009837'
      },
      headerTintColor: '#fff',
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen}
        options={{
          title: "Foods",
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor='#009837'
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <Icon.Button name="ios-search" size={25} backgroundColor='#009837'
              onPress={() => navigation.openDrawer()}
            />
          )
        }}
      />
      <HomeStack.Screen
        component={CardListScreen}
        name="CardListScreen"
        options={() => ({
          title: 'Restaurants',
        })}
      />
      <HomeStack.Screen
        component={CardItemDetails}
        name="CardItemDetails"
        options={() => ({
          title: 'Foods Details',
          headerTitle: false,
          headerTransparent: true
        })}
      />
    </HomeStack.Navigator>
  )
}
const DetailsStackScreen = () => {
  const navigation = useNavigation()
  return (
    <DetailsStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#4d88ff'
      },
      headerTintColor: '#fff',
    }}>
      <DetailsStack.Screen name="Home" component={DetailsSCreen}
        options={{
          title: "Details",
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor='#4d88ff'
              onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          )
        }}
      />
    </DetailsStack.Navigator>
  )
}


const ProfileStackScreen = () => {
  const navigation = useNavigation()
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4d88ff'
        },
        headerTintColor: '#fff',
      }}
    >
      <ProfileStack.Screen
        name="Profile" component={ProfileScreen}
        options={{
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor='#4d88ff'
              onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          ),
          headerRight: () => (
            <MaterialCommunityIcons name="account-edit" size={30} color="#fff"
              style={{ marginRight: 5 }}
              onPress={() => navigation.navigate('EditProfile')}
            />)
        }}
      />

      <ProfileStack.Screen
        name="EditProfile" component={EditProfileScreen}
        options={{
          title: "Edit Profile"
        }}
      />

    </ProfileStack.Navigator>
  )
}


const ExploreStackScreen = () => {
  const navigation = useNavigation()
  return (
    <ExploreStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4d88ff'
        },
        headerTintColor: '#fff',
      }}
    >
      <ExploreStack.Screen
        name="Explore" component={ExploreScreen}

        options={{
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor='#4d88ff'
              onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          )
        }}
      >

      </ExploreStack.Screen>
    </ExploreStack.Navigator>
  )
}