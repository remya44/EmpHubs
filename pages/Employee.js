
 import React,  { useEffect, useState } from 'react';
 import type {Node} from 'react';
 import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   FlatList
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import Employees from '../components/Employees';

 const Section = ({children, title}): Node => {
   
   
   const isDarkMode = useColorScheme() === 'dark';
   return(
     <View style={styles.sectionContainer}>
       <Text style={styles.sectionTitle}>{title}</Text>
     </View>
   );
 };
 
 const Employee = () => {
    const navigation = useNavigation();
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   const [isLoading, setLoading] = useState(true);
   const [data, setData] = useState([]);
   console.log(data);
 
   useEffect(() => {
     fetch('http://www.mocky.io/v2/5d565297300000680030a986')
       .then((response) => response.json())
       .then((json) => setData(json))
       .catch((error) => console.error(error))
       .finally(() => setLoading(false));
   }, []);
   
   return(
     <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <View style={styles.sectionContainer}>
          </View>
         <View
          >
          
           <FlatList
               data={data}
               keyExtractor={({ id }, index) => id}
               renderItem={({ item }) => (
                <Employees data={item} press={()=>navigation.navigate('EmpDetails',{userId:item})}/>
               )}/>
         </View>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
       marginTop:15,
     backgroundColor:'white',
     paddingHorizontal: 24,
     borderBottomColor:'black',
     alignItems:'center',
     justifyContent:'center',
     bottom:10,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: 'bold',
     color:'black'
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default Employee;
 