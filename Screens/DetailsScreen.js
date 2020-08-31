import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Entypo, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import Task from '../components/Task'
const colors = {
  themeColor: "#4263ec",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#2b49c3"
}

const tasks = [
  {
    task: 'Morning walk',
    icon: 'hiking',
    theme: '#008b8b',
    stamp: 'Today 8pm'
  },
  {
    task: 'Meet With Hr',
    icon: 'account-tie',
    theme: '#37003c',
    stamp: 'Monday 8pm'
  },
  {
    task: 'Shopping With Family',
    icon: 'cart',
    theme: '#fed132',
    stamp: 'Sunday 8pm'
  },
  {
    task: 'Time for gym',
    icon: 'weight',
    theme: '#008b8b',
    stamp: 'Saturday 8pm'
  }
]


const DetailsSCreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
      <View style={{ backgroundColor: colors.themeColor }}>
        <View style={{ padding: 16, flexDirection: "row", justifyContent: 'space-between' }}>
          <Entypo name="text" size={24} color={colors.white} />
          <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons name="bell-outline" size={24} color={colors.white} />
            <AntDesign name="user" size={24} color={colors.white} />
          </View>
        </View>

        <View style={{ padding: 16 }}>
          <Text style={{ color: colors.white, fontSize: 20 }}>Hello Mahmoud</Text>
        </View>

        <View style={styles.searchContainer}>
          <MaterialCommunityIcons name="magnify" size={24} color={colors.white} />
          <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons name="microphone" size={24} color={colors.white} />
            <MaterialCommunityIcons name="tune" size={24} color={colors.white} />

          </View>
        </View>
      </View>

      <View style={styles.tasksContainer}>
        <Text style={styles.tasksText}>Tasks</Text>
        <MaterialCommunityIcons name="plus" size={24} color={colors.themeColor} />
      </View>

      <ScrollView
        style={styles.cardsContainer}
      >
        {tasks.map(task => <Task
          key={task.task}
          task={task.task}
          icon={task.icon}
          theme={task.theme}
          stamp={task.stamp}
        />)}
      </ScrollView>
    </View>
  );
}

export default DetailsSCreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: colors.tint
  },
  tasksContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    backgroundColor: colors.background,
    alignItems: 'center'
  },
  tasksText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  cardsContainer: {
    backgroundColor: colors.background
  }
});