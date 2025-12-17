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

import { driverServiceAreas } from '@/constants/driver';
import { DriverInput } from '@/components/driver/DriverInput';
import { DriverButton } from '@/components/driver/DriverButton';
import { FooterControls } from '@/components/driver/FooterControls';

const ServiceAreaScreen = () => {
  const [selectedArea, setSelectedArea] = useState(driverServiceAreas[0]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const colors = {
    background: isDarkMode ? '#05090C' : '#F8FAFC',
    card: isDarkMode ? '#0F1418' : '#FFFFFF',
    textPrimary: isDarkMode ? '#F8FAFC' : '#0F172A',
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

        {/* Title & Subtitle */}
        <Text
          style={{
            marginTop: 24,
            fontSize: 24,
            fontWeight: '700',
            color: colors.textPrimary,
          }}
        >
          Select Service Area
        </Text>
        <Text
          style={{
            marginTop: 8,
            fontSize: 14,
            color: colors.textSecondary,
          }}
        >
          Choose the area or city where you want to receive delivery requests.
        </Text>

        {/* Map & Location Buttons */}
        <View
          style={{
            marginTop: 24,
            borderRadius: 24,
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.card,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60',
            }}
            style={{ height: 192, width: '100%' }}
          />
          <View
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity
              style={{
                marginRight: 12,
                height: 40,
                width: 40,
                borderRadius: 20,
                backgroundColor: colors.card,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Feather name="plus" size={18} color={colors.textPrimary} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 40,
                width: 40,
                borderRadius: 20,
                backgroundColor: colors.card,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Feather name="minus" size={18} color={colors.textPrimary} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              marginHorizontal: 16,
              marginTop: 16,
              marginBottom: 16,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 16,
              backgroundColor: colors.green,
              paddingVertical: 12,
            }}
          >
            <Feather name="navigation" size={16} color={colors.textPrimary} />
            <Text
              style={{
                marginLeft: 8,
                fontSize: 14,
                fontWeight: '600',
                color: colors.textPrimary === '#F8FAFC' ? '#0F172A' : '#FFFFFF',
              }}
            >
              Use My Current Location
            </Text>
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View style={{ marginTop: 24 }}>
          <DriverInput
            placeholder="Search city or area"
            icon="search"
            variant={isDarkMode ? 'dark' : 'light'}
          />
        </View>

        {/* Suggested Areas */}
        <Text
          style={{
            marginTop: 24,
            fontSize: 14,
            fontWeight: '600',
            color: colors.textSecondary,
          }}
        >
          Suggested Areas
        </Text>
        <View
          style={{
            marginTop: 12,
            borderRadius: 24,
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.card,
            overflow: 'hidden',
          }}
        >
          {driverServiceAreas.map((area, index) => {
            const active = area === selectedArea;
            return (
              <TouchableOpacity
                key={area}
                onPress={() => setSelectedArea(area)}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: 16,
                  paddingVertical: 16,
                  borderBottomWidth:
                    index === driverServiceAreas.length - 1 ? 0 : 1,
                  borderBottomColor: colors.border,
                  backgroundColor: active ? colors.card : 'transparent',
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '600',
                    color: active ? colors.green : colors.textPrimary,
                  }}
                >
                  {area}
                </Text>
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: colors.green,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: active ? colors.green : 'transparent',
                  }}
                >
                  {active ? (
                    <Feather name="check" size={12} color={colors.card} />
                  ) : null}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Buttons */}
        <DriverButton
          title="Save Area"
          className="mt-6 h-14"
          onPress={() => router.back()}
        />
        <DriverButton
          title="Cancel"
          variant="outline"
          className="mt-4 h-14 border-[#1F2937]"
          textClassName="text-white"
          onPress={() => router.back()}
        />

        <Text
          style={{
            marginTop: 16,
            textAlign: 'center',
            fontSize: 12,
            color: colors.textSecondary,
          }}
        >
          You can change your delivery area anytime from Profile.
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

export default ServiceAreaScreen;
