import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EmpDetails from '../pages/EmpDetails';
import Employee from '../pages/Employee';
const Stack = createStackNavigator();


const EmployeeCon = props => (
    <Employee/>
  );

  
const EmpDetailsCon = props => (
    <EmpDetails/>
  );
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Employee"
          component={EmployeeCon}
        />
        <Stack.Screen name="EmpDetails" component={EmpDetailsCon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;