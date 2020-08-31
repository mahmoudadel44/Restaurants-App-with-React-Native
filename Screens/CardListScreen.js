import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import data from '../model/data';
import Card from '../components/Card';

const CardListScreen = () => {
    const navigation = useNavigation()
    const renderItem = ({ item }) => (
        <Card
            itemData={item}
            onPress={() => { navigation.navigate('CardItemDetails', { itemData: item }) }}
        />
    )
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default CardListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
        alignSelf: 'center'
    },
});