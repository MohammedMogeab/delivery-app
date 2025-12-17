import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

import { DriverInput } from '@/components/driver/DriverInput';
import { DriverButton } from '@/components/driver/DriverButton';
import { FooterControls } from '@/components/driver/FooterControls';

const EditProfileScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const colors = {
    background: isDarkMode ? '#05090C' : '#F8FAFC',
    card: isDarkMode ? '#0F1418' : '#FFFFFF',
    textPrimary: isDarkMode ? '#FFFFFF' : '#0F172A',
    textSecondary: isDarkMode ? '#94A3B8' : '#64748B',
    border: isDarkMode ? '#1F2937' : '#CBD5E1',
    green: '#22C55E',
    greenBg: '#134E32',
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 32 }}
      >
        {/* Header */}
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            marginTop: 16,
            height: 40,
            width: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            backgroundColor: colors.card,
            borderWidth: 1,
            borderColor: colors.border,
          }}
        >
          <Feather name="arrow-left" size={18} color={colors.textPrimary} />
        </TouchableOpacity>

        <Text
          style={{
            marginTop: 24,
            fontSize: 24,
            fontWeight: '700',
            color: colors.textPrimary,
          }}
        >
          Edit Profile
        </Text>

        {/* Avatar */}
        <View style={{ marginTop: 32, alignItems: 'center' }}>
          <View
            style={{
              height: 112,
              width: 112,
              borderRadius: 56,
              overflow: 'hidden',
              borderWidth: 4,
              borderColor: isDarkMode ? '#11181C' : '#E5E7EB',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1614283488798-324f2c1bfa9e?auto=format&fit=facearea&w=256&h=256&q=80',
              }}
              style={{ height: '100%', width: '100%' }}
            />
          </View>

          <View style={{ flexDirection: 'row', marginTop: 16 }}>
            <TouchableOpacity
              style={{
                marginRight: 12,
                borderRadius: 24,
                borderWidth: 1,
                borderColor: colors.border,
                backgroundColor: colors.card,
                paddingVertical: 8,
                paddingHorizontal: 20,
              }}
            >
              <Text style={{ color: colors.textPrimary, fontWeight: '600' }}>
                Camera
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderRadius: 24,
                borderWidth: 1,
                borderColor: colors.border,
                backgroundColor: colors.card,
                paddingVertical: 8,
                paddingHorizontal: 20,
              }}
            >
              <Text style={{ color: colors.textPrimary, fontWeight: '600' }}>
                Gallery
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Inputs */}
        <View style={{ marginTop: 32, gap: 16 }}>
          <DriverInput
            label="Full Name"
            placeholder="John Doe"
            icon="user"
            variant={isDarkMode ? 'dark' : 'light'}
          />
          <DriverInput
            label="Email Address"
            placeholder="john.doe@email.com"
            icon="mail"
            variant={isDarkMode ? 'dark' : 'light'}
            keyboardType="email-address"
          />
          <DriverInput
            label="Phone Number"
            placeholder="+1 234 567 8900"
            icon="phone"
            variant={isDarkMode ? 'dark' : 'light'}
            keyboardType="phone-pad"
          />
          <DriverInput
            label="City / Service Area"
            placeholder="New York"
            icon="map-pin"
            variant={isDarkMode ? 'dark' : 'light'}
          />
        </View>

        {/* Info Card */}
        <View
          style={{
            marginTop: 24,
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
                height: 32,
                width: 32,
                borderRadius: 16,
                backgroundColor: colors.card,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Feather name="info" size={16} color={colors.green} />
            </View>
            <Text
              style={{
                marginLeft: 12,
                fontSize: 12,
                color: colors.textSecondary,
                flex: 1,
              }}
            >
              Changes may take a few minutes to sync with the system.
            </Text>
          </View>
        </View>

        {/* Buttons */}
        <DriverButton title="Save Changes" className="mt-6 h-14" />
        <DriverButton
          title="Cancel"
          variant="outline"
          className="mt-4 h-14 border-[#1F2937]"
          textClassName="text-white"
          onPress={() => router.back()}
        />

        {/* Footer */}
        <FooterControls
          isDarkMode={isDarkMode}
          onToggleTheme={() => setIsDarkMode((prev) => !prev)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;
