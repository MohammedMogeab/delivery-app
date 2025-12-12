import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

import { driverOrders } from '@/constants/driver';
import { DriverButton } from '@/components/driver/DriverButton';
import { FooterControls } from '@/components/driver/FooterControls';

const OrderDetailsScreen = () => {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const order = driverOrders.find((item) => item.id === id) ?? driverOrders[0];

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
          Order Details
        </Text>

        <View className="mt-6 rounded-3xl border border-[#1F2937] bg-[#0F1418] p-5">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-JakartaBold text-white">
              Order ID {order.id}
            </Text>
            <View className="rounded-full bg-[#134E32] px-3 py-1">
              <Text className="text-xs font-JakartaSemiBold text-[#A7F3D0]">
                {order.status === 'available' ? 'Available' : order.status}
              </Text>
            </View>
          </View>
          <Text className="mt-1 text-xs font-JakartaMedium text-[#94A3B8]">
            Created {order.createdAt}
          </Text>

          <View className="mt-5">
            <Text className="text-sm font-JakartaSemiBold text-white">Route</Text>
            <View className="mt-3 rounded-2xl border border-[#1F2937] bg-[#11181C] p-4">
              <View className="flex-row items-start">
                <Feather name="map-pin" size={16} color="#22C55E" />
                <View className="ml-3 flex-1">
                  <Text className="text-sm font-JakartaSemiBold text-white">
                    Pickup
                  </Text>
                  <Text className="mt-1 text-xs font-JakartaMedium text-[#94A3B8]">
                    {order.pickup}
                  </Text>
                </View>
              </View>

              <View className="mt-4 flex-row items-start">
                <Feather name="navigation" size={16} color="#38BDF8" />
                <View className="ml-3 flex-1">
                  <Text className="text-sm font-JakartaSemiBold text-white">
                    Drop-off
                  </Text>
                  <Text className="mt-1 text-xs font-JakartaMedium text-[#94A3B8]">
                    {order.dropoff}
                  </Text>
                </View>
              </View>

              <View className="mt-4 flex-row items-center justify-between">
                <Text className="text-xs font-JakartaMedium text-[#94A3B8]">
                  {order.distance}
                </Text>
                <TouchableOpacity className="flex-row items-center">
                  <Feather name="map" size={16} color="#22C55E" />
                  <Text className="ml-2 text-xs font-JakartaSemiBold text-[#22C55E]">
                    Map
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View className="mt-5">
            <Text className="text-sm font-JakartaSemiBold text-white">
              Customer Details
            </Text>
            <View className="mt-3 flex-row items-center justify-between rounded-2xl border border-[#1F2937] bg-[#11181C] p-4">
              <View>
                <Text className="text-sm font-JakartaSemiBold text-white">
                  {order.customer.name}
                </Text>
                <Text className="mt-1 text-xs font-JakartaMedium text-[#94A3B8]">
                  {order.customer.phone}
                </Text>
              </View>
              <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-[#134E32]">
                <Feather name="phone" size={18} color="#22C55E" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="mt-5 rounded-2xl border border-[#1F2937] bg-[#11181C] p-4">
            <Text className="text-sm font-JakartaSemiBold text-white">
              Payment Details
            </Text>

            <View className="mt-4 flex-row items-center justify-between">
              <Text className="text-xs font-JakartaMedium text-[#94A3B8]">
                Delivery Fee
              </Text>
              <Text className="text-sm font-JakartaSemiBold text-white">
                {order.fee} YER
              </Text>
            </View>
            <View className="mt-2 flex-row items-center justify-between">
              <Text className="text-xs font-JakartaMedium text-[#94A3B8]">
                Reward Bonus
              </Text>
              <Text className="text-sm font-JakartaSemiBold text-[#22C55E]">
                +{order.bonus} YER
              </Text>
            </View>
            <View className="mt-3 h-[1px] w-full bg-[#1F2937]" />
            <View className="mt-3 flex-row items-center justify-between">
              <Text className="text-xs font-JakartaSemiBold text-white">
                Total Earnings
              </Text>
              <Text className="text-sm font-JakartaBold text-[#22C55E]">
                {order.total} YER
              </Text>
            </View>
            <View className="mt-3 flex-row items-center">
              <Feather name="dollar-sign" size={16} color="#22C55E" />
              <Text className="ml-2 text-xs font-JakartaMedium text-[#94A3B8]">
                {order.paymentMethod}
              </Text>
            </View>
          </View>

          <View className="mt-5 rounded-2xl border border-[#1F2937] bg-[#11181C] p-4">
            <Text className="text-sm font-JakartaSemiBold text-white">
              Additional Info
            </Text>
            <Text className="mt-2 text-xs font-JakartaMedium text-[#94A3B8]">
              {order.additionalInfo}
            </Text>
          </View>
        </View>

        <Text className="mt-6 text-xs font-JakartaMedium text-[#94A3B8]">
          Once accepted, the order will move to your Active Deliveries list.
        </Text>

        <DriverButton
          title="Accept Order"
          className="mt-6 h-14"
          onPress={() =>
            router.push({
              pathname: '/(driver)/orders/order-confirmation',
              params: { id: order.id },
            })
          }
        />
        <DriverButton
          title="Back to Orders"
          variant="outline"
          className="mt-4 h-14 border-[#1F2937]"
          textClassName="text-white"
          onPress={() => router.push('/(driver)/(tabs)/orders')}
        />

        <FooterControls />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderDetailsScreen;
