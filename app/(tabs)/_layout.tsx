import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Ionicons } from '@expo/vector-icons'

export default function Layout() {
    return (
        <SafeAreaView className='flex-1 bg-white'>
            <Tabs screenOptions={{
                headerShown: false
            }}>
                <Tabs.Screen name="index" options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} />,
                }} />
                <Tabs.Screen name="chat" options={{
                    tabBarLabel: 'Messages',
                    tabBarIcon: ({ color }) => <Ionicons name="chatbubble-outline" size={24} color={color} />,
                }} />
                <Tabs.Screen name="profile" options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={24} color={color} />,
                }} />
                <Tabs.Screen name="settings" options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color }) => <Ionicons name="settings-outline" size={24} color={color} />,
                }} />
            </Tabs>
        </SafeAreaView>
    )
}