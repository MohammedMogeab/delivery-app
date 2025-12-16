import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

import { driverOrders } from '@/constants/driver';
import { DriverButton } from '@/components/driver/DriverButton';
import { FooterControls } from '@/components/driver/FooterControls';

const OrderConfirmationScreen = () => {
  const [available, setAvailable] = useState(false);
  const { id } = useLocalSearchParams<{ id?: string }>();
  const order = driverOrders.find((item) => item.id === id) ?? driverOrders[0];

  return (
    <SafeAreaView className="flex-1 bg-[#05090C]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 32 }}
      >
        <View className="mt-4 flex-row items-center justify-between">
          <TouchableOpacity
            onPress={() => router.back()}
            className="h-10 w-10 items-center justify-center rounded-full bg-[#11181C]"
          >
            <Feather name="x" size={18} color="#F8FAFC" />
          </TouchableOpacity>
          <Text className="text-lg font-JakartaSemiBold text-white">
            Confirm Acceptance
          </Text>
          <View className="h-10 w-10" />
        </View>

        <View className="mt-6 rounded-3xl border border-[#1F2937] bg-[#0F1418] p-5">
          <Text className="text-sm font-JakartaMedium text-[#94A3B8]">
            Order Summary
          </Text>

          <View className="mt-4" style={{ gap: 16 }}>
            <View className="flex-row items-center justify-between">
              <Text className="text-xs font-JakartaMedium text-[#94A3B8]">
                Order ID
              </Text>
              <Text className="text-sm font-JakartaSemiBold text-white">
                {order.id}
              </Text>
            </View>
            <View className="flex-row items-center justify-between">
              <Text className="text-xs font-JakartaMedium text-[#94A3B8]">
                Pickup
              </Text>
              <Text className="flex-1 text-right text-sm font-JakartaSemiBold text-white">
                {order.pickup}
              </Text>
            </View>
            <View className="flex-row items-center justify-between">
              <Text className="text-xs font-JakartaMedium text-[#94A3B8]">
                Drop-off
              </Text>
              <Text className="flex-1 text-right text-sm font-JakartaSemiBold text-white">
                {order.dropoff}
              </Text>
            </View>
            <View className="flex-row items-center justify-between">
              <Text className="text-xs font-JakartaMedium text-[#94A3B8]">
                Distance
              </Text>
              <Text className="text-sm font-JakartaSemiBold text-white">
                {order.distance.split('—')[0].trim()}
              </Text>
            </View>
            <View className="flex-row items-center justify-between">
              <Text className="text-xs font-JakartaMedium text-[#94A3B8]">
                Delivery Fee
              </Text>
              <Text className="text-sm font-JakartaSemiBold text-white">
                {order.fee} YER
              </Text>
            </View>
            <View className="flex-row items-center justify-between">
              <Text className="text-xs font-JakartaMedium text-[#94A3B8]">
                Reward
              </Text>
              <Text className="text-sm font-JakartaSemiBold text-[#22C55E]">
                +{order.bonus} YER
              </Text>
            </View>
            <View className="h-[1px] w-full bg-[#1F2937]" />
            <View className="flex-row items-center justify-between">
              <Text className="text-xs font-JakartaSemiBold text-white">
                Estimated Total
              </Text>
              <Text className="text-lg font-JakartaBold text-[#22C55E]">
                {order.total} YER
              </Text>
            </View>
          </View>

          <Text className="mt-5 text-xs font-JakartaMedium text-[#94A3B8]">
            Once you accept, this order will be assigned to you. Cancellation is only
            allowed before pickup.
          </Text>

          <TouchableOpacity
            onPress={() => setAvailable((prev) => !prev)}
            className="mt-5 flex-row items-center"
          >
            <View
              className="mr-3 h-5 w-5 items-center justify-center rounded-md border border-[#22C55E]"
              style={{ backgroundColor: available ? '#22C55E' : 'transparent' }}
            >
              {available ? <Feather name="check" size={14} color="#0F172A" /> : null}
            </View>
            <Text className="text-xs font-JakartaMedium text-[#94A3B8]">
              I am available to complete this delivery.
            </Text>
          </TouchableOpacity>
        </View>

        <DriverButton
          title="Confirm & Accept Order"
          onPress={() => router.replace('/(driver)/activities/PickupConfirmationScreen')}
          className="mt-6 h-14"
          disabled={!available}
        />
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

export default OrderConfirmationScreen;
