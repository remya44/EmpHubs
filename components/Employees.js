import React from 'react';
import {  SafeAreaView, View, Image, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';

const Employees = props => {
    // console.log("PROPS",props)
    var datas = props.data;
  return(
      <TouchableOpacity onPress={props.press}>
    <View style={styles.item}>
      
     <Image
        style={styles.logo}
        source={{uri :datas.profile_image}}
      />
      <View style={styles.empDet}>
      <Text style={styles.title}>{datas.name.toUpperCase()}</Text>
      <Text style={styles.title}>{datas.company? datas.company.name : ''}</Text>
      </View>
  </View>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  empDet:{
    padding:10,
    alignContent:'center',
    justifyContent:'center'
  },
  item: {
    
    flexDirection:'row',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomWidth:1,
    borderColor:'gray',
  },
  title: {
    fontSize: 12,
    color:'black',
    fontWeight:'bold'
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 70,
    height: 70
  },
});

export default Employees;