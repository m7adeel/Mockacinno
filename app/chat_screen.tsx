import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
    FlatList,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const messages = [
    { id: '1', sender: 'me', text: 'Hey, how are you?' },
    { id: '2', sender: 'other', text: 'I am good, thanks! How about you?' },
    { id: '3', sender: 'me', text: 'Doing great! What are you up to?' },
];

export default function ChatScreen() {
    const [message, setMessage] = useState('');
    const [chatMessages, setChatMessages] = useState(messages);

    const sendMessage = () => {
        if (message.trim()) {
            setChatMessages((prevMessages) => [
                ...prevMessages,
                { id: Date.now().toString(), sender: 'me', text: message.trim() },
            ]);
            setMessage('');
        }
    };

    const renderMessageItem = ({ item }) => (
        <View
            className={`px-4 py-2 my-1 rounded-lg max-w-[80%] ${item.sender === 'me' ? 'self-end bg-blue-500' : 'self-start bg-gray-200'
                }`}
        >
            <Text className={item.sender === 'me' ? 'text-white' : 'text-black'}>
                {item.text}
            </Text>
        </View>
    );

    return (
        <SafeAreaView className='flex-1 bg-[#F3F3F3]'>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className="flex-1 bg-gray-50"
            >
                {/* Chat Messages */}
                <FlatList
                    data={chatMessages}
                    keyExtractor={(item) => item.id}
                    renderItem={renderMessageItem}
                    contentContainerStyle={{ padding: 16 }}
                />

                {/* Message Input */}
                <View className="flex-row items-center px-4 py-2 border-t border-gray-200 bg-white">
                    <TextInput
                        value={message}
                        onChangeText={setMessage}
                        placeholder="Type a message"
                        className="flex-1 text-base text-black"
                        placeholderTextColor="#9CA3AF"
                    />
                    <Pressable onPress={sendMessage} className="ml-2">
                        <Ionicons name="send" size={24} color="#2563EB" />
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}