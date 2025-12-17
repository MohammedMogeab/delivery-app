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

import { driverVehicleTypes } from '@/constants/driver';
import { DriverInput } from '@/components/driver/DriverInput';
import { DriverButton } from '@/components/driver/DriverButton';
import { FooterControls } from '@/components/driver/FooterControls';

const VehicleInfoScreen = () => {
  const [vehicleType, setVehicleType] = useState(driverVehicleTypes[0]);
  const [showPicker, setShowPicker] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const colors = {
    background: isDarkMode ? '#05090C' : '#F8FAFC',
    card: isDarkMode ? '#0F1418' : '#FFFFFF',
    textPrimary: isDarkMode ? '#F8FAFC' : '#0F172A',
    textSecondary: isDarkMode ? '#94A3B8' : '#64748B',
    border: isDarkMode ? '#1F2937' : '#CBD5E1',
    green: '#22C55E',
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

        {/* Title */}
        <Text
          style={{
            marginTop: 24,
            fontSize: 24,
            fontWeight: '700',
            color: colors.textPrimary,
          }}
        >
          Vehicle Information
        </Text>

        {/* Vehicle Icon */}
        <View style={{ marginTop: 24, alignItems: 'center' }}>
          <View
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              backgroundColor: colors.card,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Feather name="truck" size={30} color={colors.green} />
          </View>
        </View>

        {/* Vehicle Type Picker */}
        <View style={{ marginTop: 32, gap: 16 }}>
          <TouchableOpacity
            onPress={() => setShowPicker((prev) => !prev)}
            style={{
              borderRadius: 16,
              borderWidth: 1,
              borderColor: colors.border,
              backgroundColor: colors.card,
              padding: 16,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Feather name="truck" size={18} color={colors.green} />
                <Text
                  style={{
                    marginLeft: 12,
                    fontSize: 14,
                    fontWeight: '600',
                    color: colors.textPrimary,
                  }}
                >
                  Vehicle Type
                </Text>
              </View>
              <Feather name="chevron-down" size={18} color={colors.textSecondary} />
            </View>
            <Text
              style={{
                marginTop: 12,
                fontSize: 16,
                fontWeight: '500',
                color: colors.textSecondary,
              }}
            >
              {vehicleType}
            </Text>
          </TouchableOpacity>

          {showPicker && (
            <View
              style={{
                borderRadius: 16,
                borderWidth: 1,
                borderColor: colors.border,
                backgroundColor: colors.card,
              }}
            >
              {driverVehicleTypes.map((type) => (
                <TouchableOpacity
                  key={type}
                  onPress={() => {
                    setVehicleType(type);
                    setShowPicker(false);
                  }}
                  style={{
                    paddingHorizontal: 16,
                    paddingVertical: 12,
                    borderBottomWidth: type === driverVehicleTypes[driverVehicleTypes.length - 1] ? 0 : 1,
                    borderBottomColor: colors.border,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: type === vehicleType ? colors.green : colors.textPrimary,
                    }}
                  >
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* Inputs */}
          <DriverInput
            label="Plate Number"
            placeholder="e.g., 24A-345"
            icon="hash"
            variant={isDarkMode ? 'dark' : 'light'}
          />
          <DriverInput
            label="Load Capacity (kg)"
            placeholder="500"
            icon="archive"
            variant={isDarkMode ? 'dark' : 'light'}
            keyboardType="numeric"
          />
          <DriverInput
            label="Color"
            placeholder="White"
            icon="droplet"
            variant={isDarkMode ? 'dark' : 'light'}
          />

          {/* Vehicle Image Upload */}
          <View
            style={{
              borderRadius: 24,
              borderWidth: 1,
              borderStyle: 'dashed',
              borderColor: colors.border,
              backgroundColor: colors.card,
              padding: 24,
            }}
          >
            <View
              style={{
                backgroundColor: colors.card,
                borderRadius: 16,
                padding: 16,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=400&q=60',
                }}
                style={{ width: '100%', height: 128, borderRadius: 16 }}
              />
            </View>
            <TouchableOpacity
              style={{
                marginTop: 16,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 16,
                borderWidth: 1,
                borderColor: colors.border,
                backgroundColor: colors.card,
                paddingVertical: 12,
              }}
            >
              <Text style={{ color: colors.textPrimary, fontWeight: '600' }}>
                Click to upload
              </Text>
            </TouchableOpacity>
          </View>

          {/* Registration Document */}
          <TouchableOpacity
            style={{
              marginTop: 16,
              borderRadius: 24,
              borderWidth: 1,
              borderStyle: 'dashed',
              borderColor: colors.border,
              backgroundColor: colors.card,
              padding: 24,
              alignItems: 'center',
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Feather name="upload" size={20} color={colors.green} />
              <Text
                style={{
                  marginLeft: 12,
                  fontSize: 14,
                  fontWeight: '600',
                  color: colors.textPrimary,
                }}
              >
                Upload Registration Document
              </Text>
            </View>
            <Text
              style={{
                marginTop: 8,
                fontSize: 12,
                color: colors.textSecondary,
                textAlign: 'center',
              }}
            >
              PDF, JPG, PNG
            </Text>
          </TouchableOpacity>
        </View>

        {/* Info Box */}
        <View
          style={{
            marginTop: 24,
            borderRadius: 24,
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.card,
            padding: 16,
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              height: 32,
              width: 32,
              borderRadius: 16,
              backgroundColor: colors.background,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Feather name="shield" size={16} color={colors.green} />
          </View>
          <Text
            style={{
              marginLeft: 12,
              flex: 1,
              fontSize: 12,
              color: colors.textSecondary,
            }}
          >
            Vehicle information helps customers identify your vehicle and is required for
            admin verification to ensure safety and compliance.
          </Text>
        </View>

        {/* Buttons */}
        <DriverButton title="Save Vehicle Info" className="mt-6 h-14" />
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

export default VehicleInfoScreen;
