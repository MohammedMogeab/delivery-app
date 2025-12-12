import { useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

import { icons } from '@/constants';
import { DriverButton } from '@/components/driver/DriverButton';
import { DriverInput } from '@/components/driver/DriverInput';
import { FooterControls } from '@/components/driver/FooterControls';

const CreateAccountScreen = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-[#F4F6F6]">
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 32,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-row items-center justify-between">
          <TouchableOpacity
            onPress={() => router.back()}
            className="mt-4 rounded-full bg-white p-3 shadow-sm"
          >
            <Feather name="arrow-left" size={18} color="#0F172A" />
          </TouchableOpacity>
          <Text className="mt-4 text-lg font-JakartaSemiBold text-[#0F172A]">
            Create Account
          </Text>
          <View className="w-10" />
        </View>

        <View className="mt-8 items-center">
          <View className="mb-5 h-20 w-20 items-center justify-center rounded-full bg-[#22C55E]">
            <Feather name="truck" size={32} color="#FFFFFF" />
          </View>
          <Text className="text-base font-JakartaSemiBold text-[#475569]">
            Join MightyDelivery and start earning.
          </Text>
        </View>

        <View className="mt-8" style={{ gap: 16 }}>
          <DriverInput placeholder="Full Name" icon="user" />
          <DriverInput placeholder="+967" icon="phone" keyboardType="phone-pad" />
          <DriverInput
            placeholder="Email (Optional)"
            icon="mail"
            keyboardType="email-address"
          />
          <DriverInput
            placeholder="Password (min. 8 characters)"
            icon="lock"
            secureTextEntry
            secureToggle
          />
          <DriverInput
            placeholder="Confirm Password"
            icon="lock"
            secureTextEntry
            secureToggle
          />
        </View>

        <TouchableOpacity
          onPress={() => setAgreed((prev) => !prev)}
          className="mt-6 flex-row items-center"
        >
          <View
            className={`mr-3 h-5 w-5 items-center justify-center rounded-md border ${
              agreed ? 'border-[#22C55E] bg-[#22C55E]' : 'border-[#CBD5E1] bg-white'
            }`}
          >
            {agreed ? <Feather name="check" size={14} color="#FFFFFF" /> : null}
          </View>
          <Text className="text-sm font-JakartaMedium text-[#0F172A]">
            I agree to the{' '}
            <Text className="font-JakartaSemiBold text-[#22C55E]">
              Terms
            </Text>{' '}
            &{' '}
            <Text className="font-JakartaSemiBold text-[#22C55E]">
              Privacy Policy
            </Text>
          </Text>
        </TouchableOpacity>

        <DriverButton
          title="Create Account"
          onPress={() => router.push('/(driver)/auth/document-upload')}
          disabled={!agreed}
          className="mt-6 h-14"
        />

        <DriverButton
          title="Sign up with Google"
          variant="outline"
          leftIcon={
            <Image
              source={icons.google}
              style={{ height: 20, width: 20 }}
              resizeMode="contain"
            />
          }
          className="mt-4 h-14 bg-white border-[#E2E8F0]"
          textClassName="text-[#0F172A]"
        />

        <Text className="mt-6 text-center text-sm font-JakartaMedium text-[#475569]">
          Already have an account?{' '}
          <Text
            className="font-JakartaSemiBold text-[#22C55E]"
            onPress={() => router.push('/(driver)/auth/login')}
          >
            Login
          </Text>
        </Text>

        <FooterControls variant="light" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateAccountScreen;
