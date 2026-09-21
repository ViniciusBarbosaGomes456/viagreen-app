import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NotificationScreen from '../screens/NotificationScreen';
import DashboardScreen from '../screens/DashboardScreen';
import MapScreen from '../screens/MapScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#5E22F3' },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#C7BBFB',
      }}
    >
      <Tab.Screen
        name="Notificação"
        component={NotificationScreen}
        options={{ tabBarIcon: () => <Text style={{ fontSize: 20 }}>🔔</Text> }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ tabBarIcon: () => <Text style={{ fontSize: 20 }}>📊</Text> }}
      />
      <Tab.Screen
        name="Mapa"
        component={MapScreen}
        options={{ tabBarIcon: () => <Text style={{ fontSize: 20 }}>🗺️</Text> }}
      />
    </Tab.Navigator>
  );
}