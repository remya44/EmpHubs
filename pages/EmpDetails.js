
 import React,  { useEffect, useState } from 'react';
 import type {Node} from 'react';
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
 
 import { useNavigation } from '@react-navigation/native';
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
 
 const EmpDetails = ({ route,navigation }) => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   const [isLoading, setLoading] = useState(true);
   const [data, setData] = useState([]);
   console.log(data);
 
   
   return(
     <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <View style={styles.sectionContainer}>
          <Section title='Employee Datas'>{route.params.name}</Section>
          </View>
          <Text>{route.company.name}</Text>
          <Text>Address: {route.params.street}{route.params.city}{route.params.state}</Text>
          <Text>Phone: {route.params.phone}</Text>
         <View
          >
              
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
 
 export default EmpDetails;
 