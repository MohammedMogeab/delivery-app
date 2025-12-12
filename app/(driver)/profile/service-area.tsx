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
          Select Service Area
        </Text>
        <Text className="mt-2 text-sm font-JakartaMedium text-[#94A3B8]">
          Choose the area or city where you want to receive delivery requests.
        </Text>

        <View className="mt-6 overflow-hidden rounded-3xl border border-[#1F2937] bg-[#0F1418]">
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60',
            }}
            className="h-48 w-full"
          />
          <View className="absolute right-4 top-4 flex-row">
            <TouchableOpacity className="mr-3 h-10 w-10 items-center justify-center rounded-full bg-[#11181C]">
              <Feather name="plus" size={18} color="#F8FAFC" />
            </TouchableOpacity>
            <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-[#11181C]">
              <Feather name="minus" size={18} color="#F8FAFC" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity className="mx-4 mb-4 mt-4 flex-row items-center justify-center rounded-2xl bg-[#22C55E] py-3">
            <Feather name="navigation" size={16} color="#0F172A" />
            <Text className="ml-2 text-sm font-JakartaSemiBold text-[#0F172A]">
              Use My Current Location
            </Text>
          </TouchableOpacity>
        </View>

        <View className="mt-6">
          <DriverInput
            placeholder="Search city or area"
            icon="search"
            variant="dark"
          />
        </View>

        <Text className="mt-6 text-sm font-JakartaSemiBold text-[#94A3B8]">
          Suggested Areas
        </Text>
        <View className="mt-3 rounded-3xl border border-[#1F2937] bg-[#0F1418]">
          {driverServiceAreas.map((area, index) => {
            const active = area === selectedArea;
            return (
              <TouchableOpacity
                key={area}
                onPress={() => setSelectedArea(area)}
                className="flex-row items-center justify-between px-4 py-4"
                style={{
                  borderBottomWidth: index === driverServiceAreas.length - 1 ? 0 : 1,
                  borderBottomColor: '#1F2937',
                  backgroundColor: active ? '#11181C' : 'transparent',
                }}
              >
                <Text
                  className="text-sm font-JakartaSemiBold"
                  style={{ color: active ? '#22C55E' : '#F8FAFC' }}
                >
                  {area}
                </Text>
                <View
                  className="h-5 w-5 items-center justify-center rounded-full border border-[#22C55E]"
                  style={{ backgroundColor: active ? '#22C55E' : 'transparent' }}
                >
                  {active ? <Feather name="check" size={12} color="#0F172A" /> : null}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

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

        <Text className="mt-4 text-center text-xs font-JakartaMedium text-[#64748B]">
          You can change your delivery area anytime from Profile.
        </Text>

        <FooterControls />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ServiceAreaScreen;
