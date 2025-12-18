import { useMemo, useState } from 'react';
import {
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

import {
  driverOrders,
  driverPerformanceSummary,
  driverQuickActions,
  driverStatHighlights,
} from '@/constants/driver';
import { StatTile } from '@/components/driver/StatTile';
import { PerformanceCard } from '@/components/driver/PerformanceCard';
import { DriverButton } from '@/components/driver/DriverButton';

const HomeTab = () => {
  const [online, setOnline] = useState(true);

  const availableOrders = useMemo(() => driverOrders.slice(0, 3), []);

  return (
    <SafeAreaView className="flex-1 bg-[#05090C]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 32 }}
      >
        <View className="mt-2 flex-row items-center justify-between">
          <View>
            <Text className="text-2xl font-JakartaBold text-white">
              Hi, Mohammed 👋
            </Text>
            <Text className="mt-2 text-sm font-JakartaMedium text-[#94A3B8]">
              {"Let's make today successful."}
            </Text>
          </View>

          <TouchableOpacity className="relative h-11 w-11 items-center justify-center rounded-2xl border border-[#1F2937] bg-[#0F1418]">
            <Feather name="bell" size={20} color="#F8FAFC" onPress={()=>router.replace('/delivery/notifications')} />
            <View className="absolute -top-1 -right-1 h-5 w-5 items-center justify-center rounded-full bg-[#F87171]">
              <Text className="text-[10px] font-JakartaBold text-white">2</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="mt-6 flex-row items-center justify-between rounded-3xl border border-[#1F2937] bg-[#0F1418] p-4">
          <View className="flex-row items-center">
            <View className="mr-3 h-10 w-10 items-center justify-center rounded-full bg-[#11181C]">
              <Feather name="power" size={20} color={online ? '#22C55E' : '#94A3B8'} />
            </View>
            <View>
              <Text className="text-sm font-JakartaSemiBold text-white">
                Online
              </Text>
              <Text className="text-xs font-JakartaMedium text-[#94A3B8]">
                Toggle to receive new orders
              </Text>
            </View>
          </View>
          <Switch
            value={online}
            onValueChange={setOnline}
            thumbColor={online ? '#22C55E' : '#1F2937'}
            trackColor={{ false: '#1F2937', true: '#134E32' }}
          />
        </View>

        <View className="mt-6 flex-row flex-wrap justify-between">
          {driverStatHighlights.map((stat) => (
            <StatTile
              key={stat.id}
              icon={stat.icon as keyof typeof Feather.glyphMap}
              value={stat.value}
              label={stat.title}
              className="mb-4 w-[48%]"
            />
          ))}
        </View>

        <View className="mt-8">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-JakartaSemiBold text-white">
              Available Orders Nearby
            </Text>
            <TouchableOpacity onPress={() => router.push('/(driver)/(tabs)/orders')}>
              <Text className="text-sm font-JakartaSemiBold text-[#22C55E]">
                View all
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 16 }}
          >
            {availableOrders.map((order) => (
              <View
                key={order.id}
                className="mr-4 w-64 rounded-3xl border border-[#1F2937] bg-[#0F1418] p-5"
              >
                <Text className="text-sm font-JakartaSemiBold text-[#94A3B8]">
                  ID: {order.id}
                </Text>
                <Text className="mt-2 text-lg font-JakartaBold text-white">
                  {order.pickup.split('–')[0].trim()}
                </Text>
                <Text className="mt-1 text-sm font-JakartaMedium text-[#94A3B8]">
                  Route: {order.pickup} → {order.dropoff}
                </Text>
                <Text className="mt-2 text-xs font-JakartaMedium text-[#94A3B8]">
                  {order.distance}
                </Text>

                <DriverButton
                  title="View"
                  variant="secondary"
                  onPress={() =>
                    router.push({
                      pathname: '/(driver)/orders/order-details',
                      params: { id: order.id },
                    })
                  }
                  className="mt-4 h-12 bg-[#11181C]"
                  textClassName="text-white"
                />
              </View>
            ))}
          </ScrollView>
        </View>

        <View className="mt-4">
          <Text className="text-lg font-JakartaSemiBold text-white">
            Quick Actions
          </Text>
          <View className="mt-4 flex-row flex-wrap justify-between">
            {driverQuickActions.map((action) => (
              <TouchableOpacity
                key={action.id}
                className="mb-4 w-[47%] rounded-3xl border border-[#1F2937] bg-[#0F1418] p-4"
                activeOpacity={0.85}
              >
                <View className="h-12 w-12 items-center justify-center rounded-2xl bg-[#11181C]">
                  <Feather
                    name={action.icon as keyof typeof Feather.glyphMap}
                    size={20}
                    color="#22C55E"
                  />
                </View>
                <Text className="mt-3 text-sm font-JakartaSemiBold text-white">
                  {action.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View className="mt-2">
          <Text className="text-lg font-JakartaSemiBold text-white">
            Performance Summary
          </Text>
          <View className="mt-4">
            {driverPerformanceSummary.map((item) => (
              <PerformanceCard
                key={item.id}
                title={item.title}
                value={item.value}
                goal={item.goal}
                prefix={item.prefix}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeTab;
