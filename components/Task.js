import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Entypo, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

const Task = ({ task, icon, theme, stamp }) => {
  return (
    <View style={styles.taskContainer}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialCommunityIcons
          name={icon}
          size={26}
          color={theme}
          style={{ marginRight: 10 }}
        />
        <View>
          <Text style={{ fontSize: 18 }}>{task}</Text>
          <Text style={{ color: '#a4a4a4' }}>{stamp}</Text>
        </View>
      </View>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
      }}>
        <MaterialCommunityIcons
          name="pencil"
          size={26}
          color={theme}
        />
        <MaterialCommunityIcons
          name="trash-can"
          size={26}
          color={theme}
        />
      </View>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginVertical: 15,
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

