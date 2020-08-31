import React from 'react';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './Screens/MainTabScreen';
import DrawerContent from './Screens/DrawerContent'
import SupportScreen from './Screens/SupportScreen'
import SettingsScreen from './Screens/SettingsScreen'
import BookmarkScreen from './Screens/BookmarkScreen'
const Drawer = createDrawerNavigator();
const app = () => {
  return (
    <NavigationContainer>

      <Drawer.Navigator drawerContent={props=> <DrawerContent {...props}/>}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="Support" component={SupportScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Bookmark" component={BookmarkScreen} />

      </Drawer.Navigator>
    </NavigationContainer>
  )
}
export default app
