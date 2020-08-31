import React from 'react';
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper'
import StartRating from '../components/StarRating'
const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.sliderContainer}>
          <Swiper height={200} activeDotColor="#009837">
            <View>
              <Image
                source={require('../assets/banners/food-banner1.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View>
              <Image
                source={require('../assets/banners/food-banner2.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View>
              <Image
                source={require('../assets/banners/food-banner3.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View>
              <Image
                source={require('../assets/banners/food-banner4.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View>
              <Image
                source={require('../assets/banners/food-banner5.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
          </Swiper>
        </View>
        <View style={styles.categoryContainer}>
          <TouchableOpacity style={styles.categoryBtn}
            onPress={() => navigation.navigate('CardListScreen')}
          >
            <View style={[styles.categoryIcon, { backgroundColor: '#009837' }]}>
              <Ionicons name="ios-restaurant" size={35} color="#FF6347" />
            </View>
            <Text style={styles.categoryBtnTxt}>Restaurant</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryBtn}>
            <View style={styles.categoryIcon}>
              <MaterialCommunityIcons name="food-fork-drink" size={35} color="#FF6347" />
            </View>
            <Text style={styles.categoryBtnTxt}>Fastfood</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryBtn}>
            <View style={styles.categoryIcon}>
              <MaterialCommunityIcons name="food" size={35} color="#FF6347" />
            </View>
            <Text style={styles.categoryBtnTxt}>Snacks Corner</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoryContainer}>
          <TouchableOpacity style={styles.categoryBtn}>
            <View style={styles.categoryIcon}>
              <Fontisto name="hotel" size={35} color="#FF6347" />
            </View>
            <Text style={styles.categoryBtnTxt}>Hotels</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryBtn}>
            <View style={styles.categoryIcon}>
              <Ionicons name="md-restaurant" size={35} color="#FF6347" />
            </View>
            <Text style={styles.categoryBtnTxt}>Dineouts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryBtn}>
            <View style={styles.categoryIcon}>
              <MaterialIcons name="expand-more" size={35} color="#FF6347" />
            </View>
            <Text style={styles.categoryBtnTxt}>Show More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardsWrapper}>
          <Text>Recently Viewed</Text>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image
                source={require('../assets/banners/food-banner1.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Amazing Food Places</Text>
              <StartRating ratings={4} reviews={99} />
              <Text style={styles.cardDetails}>Amazing Description for this Amazing PLaces </Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image
                source={require('../assets/banners/food-banner1.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Amazing Food Places</Text>
              <StartRating ratings={4} reviews={99} />
              <Text style={styles.cardDetails}>Amazing Description for this Amazing PLaces </Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image
                source={require('../assets/banners/food-banner1.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Amazing Food Places</Text>
              <StartRating ratings={4} reviews={99} />
              <Text style={styles.cardDetails}>Amazing Description for this Amazing PLaces </Text>
            </View>
          </View>


        </View>

      </ScrollView>
    </View>
  );
}


export default HomeScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},
  sliderImage: {
    height: '100%',
    width: '100%',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#fdeae7' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#de4f35',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});