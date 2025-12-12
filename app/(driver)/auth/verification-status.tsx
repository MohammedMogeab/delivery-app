import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

import { DriverButton } from '@/components/driver/DriverButton';
import { FooterControls } from '@/components/driver/FooterControls';

const VerificationStatusScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#05090C]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 32,
        }}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          className="mt-4 h-10 w-10 items-center justify-center rounded-full bg-[#11181C]"
        >
          <Feather name="arrow-left" size={18} color="#F8FAFC" />
        </TouchableOpacity>

        <Text className="mt-6 text-center text-2xl font-JakartaBold text-[#F8FAFC]">
          Account Verification Status
        </Text>

        <View className="mt-8 items-center">
          <View className="h-24 w-24 items-center justify-center rounded-full bg-[#11181C]">
            <Feather name="clock" size={36} color="#FBBF24" />
          </View>
        </View>

        <Text className="mt-8 text-center text-3xl font-JakartaBold text-[#FACC15]">
          Pending Review
        </Text>
        <Text className="mt-3 text-center text-sm font-JakartaMedium text-[#94A3B8]">
          Your documents are being reviewed. This usually takes a few hours.
        </Text>

        <View className="mt-8 rounded-3xl border border-[#1F2937] bg-[#0F1418] p-4">
          <View className="flex-row items-start">
            <View className="mt-1 h-9 w-9 items-center justify-center rounded-full bg-[#11181C]">
              <Feather name="info" size={18} color="#22C55E" />
            </View>
            <Text className="ml-3 flex-1 text-sm font-JakartaMedium text-[#94A3B8]">
              Reviews take up to 24 hours. We will notify you once the process is
              complete.
            </Text>
          </View>
        </View>

        <DriverButton
          title="Refresh Status"
          variant="outline"
          className="mt-6 h-14 border-[#1F2937] bg-[#11181C]"
          textClassName="text-white"
        />

        <View className="mt-8 items-center">
          <Text className="text-xs font-JakartaMedium text-[#64748B]">
            Step 3 of 3
          </Text>
        </View>

        <FooterControls />
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerificationStatusScreen;
