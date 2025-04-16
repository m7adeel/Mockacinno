import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const chats = [
  {
    id: '1',
    name: 'Connor Kenway',
    message: 'Hey, check out the new design I...',
    time: '20:54',
    avatar: 'https://i.pravatar.cc/150?img=1',
    unread: 2,
  },
  {
    id: '2',
    name: 'Jon Snow',
    message: 'I’ve been thinking about the desig...',
    time: '16:38',
    avatar: 'https://i.pravatar.cc/150?img=2',
    unread: 0,
  },
  {
    id: '3',
    name: 'Stannis Baratheon',
    message: 'You: I finished the prototype last n...',
    time: '16:02',
    avatar: 'https://i.pravatar.cc/150?img=3',
    unread: 0,
  },
  {
    id: '4',
    name: 'Robb Stark',
    message: 'Can you send the link to your portfo..',
    time: '14:13',
    avatar: 'https://i.pravatar.cc/150?img=4',
    unread: 6,
  },
  {
    id: '5',
    name: 'Daenerys Targaryen',
    message: 'I started the task you gave me.',
    time: '11:32',
    avatar: 'https://i.pravatar.cc/150?img=5',
    unread: 0,
  },
  {
    id: '6',
    name: 'Tyrion Lannister',
    message: 'What do you think of the font?',
    time: 'Mon',
    avatar: 'https://i.pravatar.cc/150?img=6',
    unread: 0,
  },
];

const likes = [
  {
    id: '1',
    name: 'Arya Stark',
    avatar: 'https://i.pravatar.cc/150?img=7',
  },
  {
    id: '2',
    name: 'Brienne of Tarth',
    avatar: 'https://i.pravatar.cc/150?img=8',
  },
];

export default function Chat() {
  const [tab, setTab] = useState<'Chats' | 'Likes'>('Chats');

  const renderChatItem = ({ item }) => (
    <Pressable className="flex-row items-center px-4 py-3 border-b border-gray-200" onPress={() => {
      router.push('/chat_screen');
    }}>
      <Image source={{ uri: item.avatar }} className="w-12 h-12 rounded-full mr-4" />
      <View className="flex-1">
        <Text className="font-semibold text-black">{item.name}</Text>
        <Text className="text-gray-500" numberOfLines={1}>{item.message}</Text>
      </View>
      <View className="items-end">
        <Text className="text-xs text-gray-500 mb-1">{item.time}</Text>
        {item.unread > 0 && (
          <View className="bg-orange-500 rounded-full w-5 h-5 items-center justify-center">
            <Text className="text-white text-xs font-semibold">
              {item.unread}
            </Text>
          </View>
        )}
      </View>
    </Pressable>
  );

  const renderLikeItem = ({ item }) => (
    <View className="flex-row items-center px-4 py-3 border-b border-gray-100">
      <Image source={{ uri: item.avatar }} className="w-12 h-12 rounded-full mr-4" />
      <Text className="text-black font-medium">{item.name}</Text>
    </View>
  );

  return (
    <View className="flex-1 bg-gray-50 pt-12">
      {/* Tab Headers */}
      <View className="flex-row justify-around border-b border-gray-200 mb-4">
        <Pressable onPress={() => setTab('Chats')} className={`pb-2 ${tab === 'Chats' ? 'border-b-2 border-blue-600' : ''}`}>
          <Text className={`text-base font-semibold ${tab === 'Chats' ? 'text-blue-600' : 'text-gray-400'}`}>
            Chats
          </Text>
        </Pressable>
        <Pressable onPress={() => setTab('Likes')} className="relative pb-2">
          <Text className={`text-base font-semibold ${tab === 'Likes' ? 'text-blue-600' : 'text-gray-400'}`}>
            Likes
          </Text>
          <View className="absolute -top-2 -right-3 bg-orange-500 rounded-full w-4 h-4 items-center justify-center">
            <Text className="text-white text-[10px] font-bold">2</Text>
          </View>
        </Pressable>
      </View>

      {/* Search */}
      {tab === 'Chats' && (
        <View className="flex-row items-center mx-4 mb-4 px-4 py-2 bg-white rounded-full shadow-sm">
          <Ionicons name="search" size={20} color="#9CA3AF" />
          <TextInput
            placeholder="Search"
            className="ml-2 flex-1 text-base text-black"
            placeholderTextColor="#9CA3AF"
          />
        </View>
      )}

      {/* Content */}
      <FlatList
        data={tab === 'Chats' ? chats : likes}
        keyExtractor={(item) => item.id}
        renderItem={tab === 'Chats' ? renderChatItem : renderLikeItem}
      />
    </View>
  );
}
