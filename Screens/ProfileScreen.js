import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { MaterialCommunityIcons, FontAwesome, Entypo } from '@expo/vector-icons';
import { Caption, Title, Avatar, Text, TouchableRipple } from 'react-native-paper'
const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Avatar.Image
              source={{
                uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
              }}
              size={80}
            />
            <View style={{ marginLeft: 20 }}>
              <Title style={[styles.title,
              {
                marginTop: 15,
                marginBottom: 5
              }]}>Mahmoud Adell</Title>
              <Caption style={styles.caption}>ma@.com</Caption>
            </View>
          </View>
        </View>

        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <MaterialCommunityIcons name="map-marker-radius" size={24} color="#777777" />
            <Text style={{ marginLeft: 20, marginTop: 2, color: '#777777' }}>Egypt Cairo</Text>
          </View>
          <View style={styles.row}>
            <FontAwesome name="phone" size={24} color="#777777" />
            <Text style={{ marginLeft: 20, marginTop: 2, color: '#777777' }}>+201098337611</Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons name="email-outline" size={24} color="#777777" />
            <Text style={{ marginLeft: 20, marginTop: 2, color: '#777777' }}>mrmahmoudadel1996@gmail.com</Text>
          </View>
        </View>
        <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, { borderRightColor: '#dddddd', borderRightWidth: 1 }]}>
            <Title style={styles.title}>14$</Title>
            <Caption style={styles.caption}>Wallet</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title style={styles.title}>12</Title>
            <Caption style={styles.caption}>orders</Caption>
          </View>
        </View>

        <View style={styles.menuWrapper}>
          <TouchableRipple>
            <View style={styles.menuItem}>
              <MaterialCommunityIcons name="heart-outline" size={24} color="#FF6347" />
              <Text style={styles.menuItemText}>Your Favourites</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple>
            <View style={styles.menuItem}>
              <Entypo name="credit-card" size={24} color="#FF6347" />
              <Text style={styles.menuItemText}>Payment</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple>
            <View style={styles.menuItem}>
              <MaterialCommunityIcons name="share-outline" size={24} color="#FF6347" />
              <Text style={styles.menuItemText}>Tell Your Friends</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple>
            <View style={styles.menuItem}>
              <MaterialCommunityIcons name="account-check-outline" size={24} color="#FF6347" />
              <Text style={styles.menuItemText}>Support</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple>
            <View style={styles.menuItem}>
              <MaterialCommunityIcons name="settings-outline" size={24} color="#FF6347" />
              <Text style={styles.menuItemText}>Settings</Text>
            </View>
          </TouchableRipple>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProfileScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});