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
import FooterControls from '@/components/driver/FooterControls';

const Login = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [agreed, setAgreed] = useState(false);

  const variant = isDarkMode ? 'dark' : 'light';

  const colors = {
    background: isDarkMode ? '#0D0D0D' : '#F8FAFC',
    card: isDarkMode ? '#141414' : '#FFFFFF',
    text: isDarkMode ? '#FFFFFF' : '#0F172A',
    muted: isDarkMode ? '#94A3B8' : '#475569',
    border: isDarkMode ? '#1F2937' : '#E2E8F0',
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 32,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between">
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              marginTop: 16,
              padding: 12,
              borderRadius: 999,
              backgroundColor: colors.card,
            }}
          >
            <Feather name="arrow-left" size={18} color={colors.text} />
          </TouchableOpacity>

          <Text
            style={{
              marginTop: 16,
              fontSize: 18,
              fontWeight: '600',
              color: colors.text,
            }}
          >
            LogIn
          </Text>

          <View style={{ width: 40 }} />
        </View>

        {/* Logo */}
        <View className="mt-8 items-center">
          <View className="mb-5 h-20 w-20 items-center justify-center rounded-full bg-[#22C55E]">
            <Feather name="truck" size={32} color="#FFFFFF" />
          </View>

          <Text style={{ color: colors.muted, fontSize: 14 }}>
            Join MightyDelivery and start earning.
          </Text>
        </View>

        {/* Inputs */}
        <View className="mt-8" style={{ gap: 16 }}>
          <DriverInput
            placeholder="Email (Optional)"
            icon="mail"
            keyboardType="email-address"
            variant={variant}
          />

          <DriverInput
            placeholder="Password (min. 8 characters)"
            icon="lock"
            secureTextEntry
            secureToggle
            variant={variant}
          />
        </View>

        {/* Agreement */}
        <TouchableOpacity
          onPress={() => setAgreed((prev) => !prev)}
          className="mt-6 flex-row items-center"
        >
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 6,
              borderWidth: 1,
              borderColor: agreed ? '#22C55E' : colors.border,
              backgroundColor: agreed ? '#22C55E' : 'transparent',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 12,
            }}
          >
            {agreed && <Feather name="check" size={14} color="#FFFFFF" />}
          </View>

          <Text style={{ color: colors.text, fontSize: 13 }}>
            I agree to the{' '}
            <Text style={{ color: '#22C55E', fontWeight: '600' }}>
              Terms
            </Text>{' '}
            &{' '}
            <Text style={{ color: '#22C55E', fontWeight: '600' }}>
              Privacy Policy
            </Text>
          </Text>
        </TouchableOpacity>

        {/* Buttons */}
        <DriverButton
          title="Login"
          onPress={() => router.replace('/home')}
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
          className="mt-4 h-14"
          textClassName={variant === 'light' ? 'text-[#0F172A]' : 'text-white'}
        />

        <Text
          className="mt-6 text-center text-sm"
          style={{ color: colors.muted }}
        >
          Already have an account?{' '}
          <Text
            style={{ color: '#22C55E', fontWeight: '600' }}
            onPress={() => router.push('/auth/login')}
          >
            Login
          </Text>
        </Text>

        {/* Footer */}
        <FooterControls
          isDarkMode={isDarkMode}
          onToggleTheme={() => setIsDarkMode((prev) => !prev)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
