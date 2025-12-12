import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

const ChatTab = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#05090C]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 32 }}
      >
        <Text className="mt-2 text-2xl font-JakartaBold text-white">Chats</Text>
        <Text className="mt-2 text-sm font-JakartaMedium text-[#94A3B8]">
          Stay connected with customers and support.
        </Text>

        <View className="mt-10 items-center justify-center rounded-3xl border border-dashed border-[#1F2937] bg-[#0F1418] p-10">
          <View className="h-16 w-16 items-center justify-center rounded-full bg-[#11181C]">
            <Feather name="message-circle" size={28} color="#22C55E" />
          </View>
          <Text className="mt-4 text-lg font-JakartaSemiBold text-white">
            No active conversations
          </Text>
          <Text className="mt-2 text-sm font-JakartaMedium text-[#94A3B8] text-center">
            Customer messages and support chats will appear here.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatTab;
