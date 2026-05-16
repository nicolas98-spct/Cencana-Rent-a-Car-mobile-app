import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { LoginScreen, HomeScreen, CatalogScreen, VehicleDetailScreen, QuoteScreen, PaymentScreen, ConfirmationScreen, HistoryScreen, SupportScreen } from '../screens';
import { Vehicle } from '../types';

export type RootStackParamList = { Login: undefined; Main: undefined; Detail: { vehicle: Vehicle }; Quote: { vehicle: Vehicle }; Payment: { vehicle: Vehicle; total: number; days: number; mode: 'libre'|'controlado' }; Confirmation: { code: string; total: number } };
const Stack = createNativeStackNavigator<RootStackParamList>(); const Tabs = createBottomTabNavigator();

const MainTabs = () => (
  <Tabs.Navigator screenOptions={({route})=>({headerShown:false, tabBarIcon:({color,size})=><Ionicons name={route.name==='Inicio'?'home':'time'} size={size} color={color}/>})}>
    <Tabs.Screen name="Inicio" component={HomeScreen} />
    <Tabs.Screen name="Catálogo" component={CatalogScreen} options={{tabBarIcon:({color,size})=><Ionicons name="car-sport" size={size} color={color}/>}}/>
    <Tabs.Screen name="Historial" component={HistoryScreen} />
    <Tabs.Screen name="Soporte" component={SupportScreen} options={{tabBarIcon:({color,size})=><Ionicons name="headset" size={size} color={color}/>}}/>
  </Tabs.Navigator>
);

export const RootNavigator = () => {
  const [loggedIn,setLoggedIn]=useState(false);
  return <Stack.Navigator screenOptions={{headerShown:false}}>{!loggedIn ? <Stack.Screen name="Login">{(p)=><LoginScreen {...p} onLogin={()=>setLoggedIn(true)}/>}</Stack.Screen>:<><Stack.Screen name="Main" component={MainTabs}/><Stack.Screen name="Detail" component={VehicleDetailScreen}/><Stack.Screen name="Quote" component={QuoteScreen}/><Stack.Screen name="Payment" component={PaymentScreen}/><Stack.Screen name="Confirmation" component={ConfirmationScreen}/></>}</Stack.Navigator>;
};
