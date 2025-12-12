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

  return (
    <SafeAreaView className="flex-1 bg-[#05090C]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 32 }}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          className="mt-4 h-10 w-10 items-center justify-center rounded-full bg-[#11181C]"
        >
          <Feather name="arrow-left" size={18} color="#F8FAFC" />
        </TouchableOpacity>

        <Text className="mt-6 text-2xl font-JakartaBold text-white">
          Vehicle Information
        </Text>

        <View className="mt-6 items-center">
          <View className="h-20 w-20 items-center justify-center rounded-full bg-[#11181C]">
            <Feather name="truck" size={30} color="#22C55E" />
          </View>
        </View>

        <View className="mt-8" style={{ gap: 16 }}>
          <TouchableOpacity
            onPress={() => setShowPicker((prev) => !prev)}
            className="rounded-2xl border border-[#1F2937] bg-[#0F1418] p-4"
          >
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Feather name="truck" size={18} color="#22C55E" />
                <Text className="ml-3 text-sm font-JakartaSemiBold text-white">
                  Vehicle Type
                </Text>
              </View>
              <Feather name="chevron-down" size={18} color="#94A3B8" />
            </View>
            <Text className="mt-3 text-base font-JakartaMedium text-[#94A3B8]">
              {vehicleType}
            </Text>
          </TouchableOpacity>

          {showPicker ? (
            <View className="rounded-2xl border border-[#1F2937] bg-[#0F1418]">
              {driverVehicleTypes.map((type) => (
                <TouchableOpacity
                  key={type}
                  onPress={() => {
                    setVehicleType(type);
                    setShowPicker(false);
                  }}
                  className="border-b border-[#1F2937] px-4 py-3"
                >
                  <Text
                    className="text-sm font-JakartaSemiBold"
                    style={{ color: type === vehicleType ? '#22C55E' : '#F8FAFC' }}
                  >
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : null}

          <DriverInput
            label="Plate Number"
            placeholder="e.g., 24A-345"
            icon="hash"
            variant="dark"
          />
          <DriverInput
            label="Load Capacity (kg)"
            placeholder="500"
            icon="archive"
            variant="dark"
            keyboardType="numeric"
          />
          <DriverInput
            label="Color"
            placeholder="White"
            icon="droplet"
            variant="dark"
          />

          <View className="rounded-3xl border border-dashed border-[#1F2937] bg-[#0F1418] p-6">
            <View className="items-center justify-center rounded-2xl bg-[#11181C] p-4">
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=400&q=60',
                }}
                className="h-32 w-full rounded-2xl"
              />
            </View>
            <TouchableOpacity className="mt-4 items-center justify-center rounded-2xl border border-[#1F2937] bg-[#11181C] py-3">
              <Text className="text-sm font-JakartaSemiBold text-white">
                Click to upload
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity className="rounded-3xl border border-dashed border-[#1F2937] bg-[#0F1418] p-6">
            <View className="flex-row items-center justify-center">
              <Feather name="upload" size={20} color="#22C55E" />
              <Text className="ml-3 text-sm font-JakartaSemiBold text-white">
                Upload Registration Document
              </Text>
            </View>
            <Text className="mt-2 text-xs font-JakartaMedium text-[#94A3B8] text-center">
              PDF, JPG, PNG
            </Text>
          </TouchableOpacity>
        </View>

        <View className="mt-6 rounded-3xl border border-[#1F2937] bg-[#0F1418] p-4">
          <View className="flex-row items-start">
            <View className="mt-1 h-8 w-8 items-center justify-center rounded-full bg-[#11181C]">
              <Feather name="shield" size={16} color="#22C55E" />
            </View>
            <Text className="ml-3 flex-1 text-xs font-JakartaMedium text-[#94A3B8]">
              Vehicle information helps customers identify your vehicle and is required for
              admin verification to ensure safety and compliance.
            </Text>
          </View>
        </View>

        <DriverButton title="Save Vehicle Info" className="mt-6 h-14" />
        <DriverButton
          title="Cancel"
          variant="outline"
          className="mt-4 h-14 border-[#1F2937]"
          textClassName="text-white"
          onPress={() => router.back()}
        />

        <FooterControls />
      </ScrollView>
    </SafeAreaView>
  );
};

export default VehicleInfoScreen;
