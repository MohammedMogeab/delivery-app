import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

import { DriverButton } from '@/components/driver/DriverButton';
import { FooterControls } from '@/components/driver/FooterControls';

const VerificationStatusScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const colors = {
    background: isDarkMode ? '#05090C' : '#F8FAFC',
    card: isDarkMode ? '#11181C' : '#FFFFFF',
    textPrimary: isDarkMode ? '#FFFFFF' : '#0F172A',
    textSecondary: isDarkMode ? '#94A3B8' : '#64748B',
    border: isDarkMode ? '#1F2937' : '#CBD5E1',
    yellow: '#FACC15',
    infoGreen: '#22C55E',
    infoAmber: '#FBBF24',
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 32 }}
      >
        {/* Back Button */}
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            marginTop: 16,
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: colors.card,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Feather name="arrow-left" size={18} color={colors.textPrimary} />
        </TouchableOpacity>

        {/* Title */}
        <Text
          style={{
            marginTop: 24,
            textAlign: 'center',
            fontSize: 24,
            fontWeight: '700',
            color: colors.textPrimary,
          }}
        >
          Account Verification Status
        </Text>

        {/* Icon */}
        <View style={{ marginTop: 32, alignItems: 'center' }}>
          <View
            style={{
              height: 96,
              width: 96,
              borderRadius: 48,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.card,
            }}
          >
            <Feather name="clock" size={36} color={colors.infoAmber} />
          </View>
        </View>

        {/* Status */}
        <Text
          style={{
            marginTop: 32,
            textAlign: 'center',
            fontSize: 28,
            fontWeight: '700',
            color: colors.yellow,
          }}
        >
          Pending Review
        </Text>
        <Text
          style={{
            marginTop: 12,
            marginBottom: 15,
            textAlign: 'center',
            fontSize: 14,
            color: colors.textSecondary,
          }}
        >
          Your documents are being reviewed. This usually takes a few hours.
        </Text>

        {/* Info Card */}
        <View
          style={{
            marginTop: 32,
            borderRadius: 24,
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.card,
            padding: 16,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
            <View
              style={{
                marginTop: 4,
                height: 36,
                width: 36,
                borderRadius: 18,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.card,
              }}
            >
              <Feather name="info" size={18} color={colors.infoGreen} />
            </View>
            <Text
              style={{
                marginLeft: 12,
                flex: 1,
                fontSize: 14,
                color: colors.textSecondary,
              }}
            >
              Reviews take up to 24 hours. We will notify you once the process is complete.
            </Text>
          </View>
        </View>

        {/* Refresh Button */}
        <DriverButton
          title="Refresh Status"
          variant="outline"
          className="mt-6 h-14 border-[#1F2937] bg-[#11181C]"
          textClassName="text-white"
        />

        {/* Step Indicator */}
        <View style={{ marginTop: 32, alignItems: 'center' }}>
          <Text style={{ fontSize: 12, color: colors.textSecondary }}>
            Step 3 of 3
          </Text>
        </View>

        {/* Footer with Theme Toggle */}
        <FooterControls
          isDarkMode={isDarkMode}
          onToggleTheme={() => setIsDarkMode((prev) => !prev)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerificationStatusScreen;
