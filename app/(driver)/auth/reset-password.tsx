import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

import { DriverButton } from '@/components/driver/DriverButton';
import { DriverInput } from '@/components/driver/DriverInput';
import { FooterControls } from '@/components/driver/FooterControls';

const ResetPasswordScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#05090C]">
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 32,
        }}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          className="mt-4 w-10 items-center justify-center rounded-full bg-[#11181C] p-3"
        >
          <Feather name="arrow-left" size={18} color="#F8FAFC" />
        </TouchableOpacity>

        <Text className="mt-6 text-center text-2xl font-JakartaBold text-[#F8FAFC]">
          Reset Password
        </Text>

        <View className="mt-6 flex-row items-center justify-center">
          <View className="mr-2 h-2 w-2 rounded-full bg-[#22C55E]" />
          <View className="mr-2 h-2 w-2 rounded-full bg-[#1F2937]" />
          <View className="h-2 w-2 rounded-full bg-[#1F2937]" />
        </View>

        <View className="mt-10 items-center">
          <View className="h-24 w-24 items-center justify-center rounded-full bg-[#11181C]">
            <Feather name="rotate-ccw" size={36} color="#22C55E" />
          </View>
        </View>

        <Text className="mt-8 text-center text-xl font-JakartaBold text-[#F8FAFC]">
          {"Don't worry, we'll help you reset it."}
        </Text>
        <Text className="mt-3 text-center text-sm font-JakartaMedium text-[#94A3B8]">
          {"Enter the phone number or email linked to your account and we will send a verification code."}
        </Text>

        <View className="mt-10" style={{ gap: 20 }}>
          <DriverInput
            placeholder="Enter your phone or email"
            icon="at-sign"
            variant="dark"
            keyboardType="email-address"
          />

          <DriverButton
            title="Send Code"
            onPress={() => router.push('/(driver)/auth/verification-status')}
            className="h-14"
          />
        </View>

        <TouchableOpacity
          onPress={() => router.back()}
          className="mt-8 items-center"
        >
          <Text className="text-sm font-JakartaSemiBold text-[#22C55E]">
            Back to Login
          </Text>
        </TouchableOpacity>

        <FooterControls />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;
