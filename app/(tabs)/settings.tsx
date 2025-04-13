import { View, Text, Switch, Pressable, Share, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';

export default function SettingsScreen() {
  const [visibility, setVisibility] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const inviteCode = "9200223398";

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Join me with this invite code: ${inviteCode}`,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <ScrollView className="flex-1 bg-gray-50 px-6 pt-14">
      <Text className="text-center font-bold text-lg text-black mb-8">Settings</Text>

      {/* ACCOUNT SECTION */}
      <Text className="text-xs text-gray-400 font-semibold mb-2">ACCOUNT</Text>
      <View className="bg-white border-b border-gray-200">
        <View className="flex-row justify-between items-center py-4">
          <Text className="text-black text-base">Account Visibility</Text>
          <Switch
            value={visibility}
            onValueChange={setVisibility}
            trackColor={{ false: '#E5E7EB', true: '#C7D2FE' }}
            thumbColor={visibility ? '#3B82F6' : '#9CA3AF'}
          />
        </View>
        <View className="flex-row justify-between items-center py-4">
          <Text className="text-black text-base">Notifications</Text>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: '#E5E7EB', true: '#C7D2FE' }}
            thumbColor={notifications ? '#3B82F6' : '#9CA3AF'}
          />
        </View>
        <Pressable className="py-4">
          <Text className="text-black text-base">Change Password</Text>
        </Pressable>
      </View>

      {/* INVITE CODE */}
      <Text className="text-xs text-gray-400 font-semibold mt-6 mb-2">INVITE CODE</Text>
      <View className="bg-white flex-row justify-between items-center py-4 border-b border-gray-200">
        <Text className="text-black text-base">{inviteCode}</Text>
        <Pressable onPress={handleShare}>
          <Feather name="share" size={18} color="black" />
        </Pressable>
      </View>

      {/* LEGAL SECTION */}
      <Text className="text-xs text-gray-400 font-semibold mt-6 mb-2">LEGAL</Text>
      <View className="bg-white border-b border-gray-200">
        <Pressable className="py-4">
          <Text className="text-black text-base">Privacy Policy</Text>
        </Pressable>
        <Pressable className="py-4">
          <Text className="text-black text-base">Terms of Service</Text>
        </Pressable>
        <Pressable className="py-4">
          <Text className="text-black text-base">Licenses</Text>
        </Pressable>
      </View>

      {/* LOGOUT */}
      <Pressable className="bg-white py-4 border-b border-gray-200">
        <Text className="text-black text-base">Logout</Text>
      </Pressable>

      {/* VERSION */}
      <View className="items-center py-8">
        <Text className="text-3xl mb-1">☕</Text>
        <Text className="text-black font-semibold">MOCKACCINO</Text>
        <Text className="text-gray-500">Version 1.1.2</Text>
      </View>

      {/* DEACTIVATE */}
      <Pressable className="bg-white py-4 border-t border-gray-200 items-center">
        <Text className="text-red-500 text-base">Deactivate Account</Text>
      </Pressable>
    </ScrollView>
  );
}
