import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { Href, router } from 'expo-router';

import {
  driverProfileActions,
  driverProfileSummary,
} from '@/constants/driver';
import { DriverButton } from '@/components/driver/DriverButton';
import { ProfileActionRow } from '@/components/driver/ProfileActionRow';
import { FooterControls } from '@/components/driver/FooterControls';

const ProfileTab = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const colors = {
    background: isDarkMode ? '#05090C' : '#F8FAFC',
    card: isDarkMode ? '#0F1418' : '#FFFFFF',
    textPrimary: isDarkMode ? '#FFFFFF' : '#0F172A',
    textSecondary: isDarkMode ? '#94A3B8' : '#64748B',
    border: isDarkMode ? '#1F2937' : '#CBD5E1',
    green: '#22C55E',
    greenBg: '#134E32',
    red: '#F87171',
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 32 }}
      >
        {/* Header */}
        <View
          style={{
            marginTop: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: '700',
              color: colors.textPrimary,
            }}
          >
            Profile
          </Text>
          <TouchableOpacity
            onPress={() => router.push('/(driver)/profile/edit-profile')}
            style={{
              height: 44,
              width: 44,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 16,
              borderWidth: 1,
              borderColor: colors.border,
              backgroundColor: colors.card,
            }}
          >
            <Feather name="edit-2" size={18} color={colors.textPrimary} />
          </TouchableOpacity>
        </View>

        {/* Profile Summary Card */}
        <View
          style={{
            marginTop: 24,
            alignItems: 'center',
            borderRadius: 24,
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.card,
            padding: 24,
          }}
        >
          <View
            style={{
              height: 96,
              width: 96,
              borderRadius: 48,
              overflow: 'hidden',
              borderWidth: 4,
              borderColor: isDarkMode ? '#11181C' : '#E5E7EB',
            }}
          >
            <Image
              source={{ uri: driverProfileSummary.avatar }}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
          <Text
            style={{
              marginTop: 16,
              fontSize: 20,
              fontWeight: '700',
              color: colors.textPrimary,
            }}
          >
            {driverProfileSummary.name}
          </Text>
          <Text
            style={{
              marginTop: 4,
              fontSize: 14,
              color: colors.textSecondary,
            }}
          >
            {driverProfileSummary.phone}
          </Text>

          <View
            style={{
              marginTop: 16,
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 24,
              backgroundColor: colors.greenBg,
              paddingHorizontal: 12,
              paddingVertical: 4,
            }}
          >
            <Feather name="check-circle" size={16} color={colors.green} />
            <Text
              style={{
                marginLeft: 8,
                fontSize: 12,
                fontWeight: '600',
                color: '#A7F3D0',
              }}
            >
              Verified
            </Text>
          </View>

          {/* Stats */}
          <View
            style={{
              marginTop: 24,
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: '700', color: colors.textPrimary }}>
                {driverProfileSummary.deliveries}
              </Text>
              <Text style={{ marginTop: 4, fontSize: 12, color: colors.textSecondary }}>
                Deliveries
              </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: '700', color: colors.textPrimary }}>
                {driverProfileSummary.rating}
              </Text>
              <Text style={{ marginTop: 4, fontSize: 12, color: colors.textSecondary }}>
                Rating
              </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: '700', color: colors.textPrimary }}>
                {driverProfileSummary.earnings}
              </Text>
              <Text style={{ marginTop: 4, fontSize: 12, color: colors.textSecondary }}>
                Earnings
              </Text>
            </View>
          </View>
        </View>

        {/* Profile Actions */}
        <View style={{ marginTop: 24 }}>
          {driverProfileActions.map((action) => (
            <ProfileActionRow
              key={action.id}
              label={action.label}
              icon={action.icon as keyof typeof Feather.glyphMap}
              onPress={() => {
                if (action.route) router.push(action.route as Href);
              }}

            />
          ))}
        </View>

        {/* Buttons */}
        <View style={{ marginTop: 24 }}>
          <DriverButton
            title="Edit Profile"
            onPress={() => router.push('/(driver)/profile/edit-profile')}
            className="h-14"
          />
          <DriverButton
            title="Logout"
            variant="outline"
            onPress={() => router.replace('/(driver)/auth/create-account')}
            className="mt-4 h-14 border-[#F87171]"
            textClassName="text-[#F87171]"
          />
        </View>

        {/* Footer Controls */}
        <FooterControls
          isDarkMode={isDarkMode}
          onToggleTheme={() => setIsDarkMode((prev) => !prev)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileTab;
