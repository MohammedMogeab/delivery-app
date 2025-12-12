import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

import { driverOrders } from '@/constants/driver';
import { OrderCard } from '@/components/driver/OrderCard';

const FILTERS = ['Distance', 'Price', 'Reward', 'Area'] as const;

const OrdersTab = () => {
  const [activeFilter, setActiveFilter] = useState<(typeof FILTERS)[number]>('Distance');

  return (
    <SafeAreaView className="flex-1 bg-[#05090C]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 32 }}
      >
        <View className="mt-2 flex-row items-center justify-between">
          <Text className="text-2xl font-JakartaBold text-white">
            Available Orders
          </Text>
          <TouchableOpacity className="h-11 w-11 items-center justify-center rounded-2xl border border-[#1F2937] bg-[#0F1418]">
            <Feather name="refresh-cw" size={20} color="#F8FAFC" />
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 20 }}
        >
          {FILTERS.map((filter) => {
            const active = activeFilter === filter;
            return (
              <TouchableOpacity
                key={filter}
                onPress={() => setActiveFilter(filter)}
                className="mr-3 rounded-full border border-[#1F2937] px-4 py-2"
                style={{ backgroundColor: active ? '#22C55E' : '#0F1418' }}
              >
                <Text
                  className="text-sm font-JakartaSemiBold"
                  style={{ color: active ? '#0F172A' : '#F8FAFC' }}
                >
                  {filter}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View className="mt-2">
          {driverOrders.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
              onDetails={(selected) =>
                router.push({
                  pathname: '/(driver)/orders/order-details',
                  params: { id: selected.id },
                })
              }
              onAccept={(selected) =>
                router.push({
                  pathname: '/(driver)/orders/order-confirmation',
                  params: { id: selected.id },
                })
              }
            />
          ))}
        </View>

        <Text className="mt-6 text-center text-xs font-JakartaMedium text-[#64748B]">
          Orders are auto-refreshed every 30 seconds.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrdersTab;
