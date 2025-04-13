import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const notifications = [
  {
    id: 1,
    type: 'message',
    name: 'Tyrion',
    message: 'Hello Edward! I would like to ask ...',
    time: '5 mins ago',
    // image: require('./assets/tyrion.jpg'),
    unread: true,
  },
  {
    id: 2,
    type: 'match',
    name: 'Tyrion',
    time: '21 mins ago',
    // image: require('./assets/tyrion.jpg'),
    unread: true,
  },
  {
    id: 3,
    type: 'match',
    name: 'Jon Snow',
    time: '2 hrs ago',
    // image: require('./assets/jon.jpg'),
    unread: false,
  },
  {
    id: 4,
    type: 'match',
    name: 'Arya Stark',
    time: '4 hrs ago',
    // image: require('./assets/arya.jpg'),
    unread: false,
  },
  {
    id: 5,
    type: 'match',
    name: 'Stannis Baratheon',
    time: '3 days ago',
    // image: require('./assets/stannis.jpg'),
    unread: false,
  },
  {
    id: 6,
    type: 'message',
    name: 'Robb',
    message: 'Can you send the link to your po..',
    time: '5 days ago',
    // image: require('./assets/robb.jpg'),
    unread: true,
  },
];

const NotificationScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center px-4 pb-6">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='chevron-back' size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-semibold ml-4">Notifications</Text>
      </View>

      <Text className="px-4 text-gray-600">
        You have <Text className="text-blue-600 font-medium">3 Notifications</Text> today.
      </Text>

      <ScrollView className="mt-4 px-4">
        {notifications.map((item, index) => (
          <View key={item.id}>
            {index === 4 && (
              <Text className="text-lg font-semibold text-black mt-8 mb-2">This Week</Text>
            )}
            <View className="flex-row items-start py-4 border-b border-gray-100">
              <Image source={item.image} className="w-12 h-12 rounded-full mr-4" />
              <View className="flex-1">
                <Text className="text-sm text-black font-semibold">
                  {item.name}{' '}
                  <Text className="text-gray-700 font-normal">
                    {item.type === 'message'
                      ? 'sent a message'
                      : 'is a match!'}
                  </Text>
                </Text>
                {item.type === 'message' && (
                  <Text className="text-gray-500 text-xs mt-1">{item.message}</Text>
                )}
                {item.type === 'match' && (
                  <Text className="text-blue-600 text-xs mt-1">Send a Message</Text>
                )}
              </View>
              <View className="items-end">
                <Text className="text-gray-400 text-xs">{item.time}</Text>
                {item.unread && <View className="w-2 h-2 bg-red-500 rounded-full mt-2" />}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationScreen;
