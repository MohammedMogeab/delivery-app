import { Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { cn } from '@/lib/utils';
import { driverOrders } from '@/constants/driver';

type DriverOrder = (typeof driverOrders)[number];

type OrderCardProps = {
  order: DriverOrder;
  onDetails?: (order: DriverOrder) => void;
  onAccept?: (order: DriverOrder) => void;
  className?: string;
};

export const OrderCard = ({
  order,
  onDetails,
  onAccept,
  className,
}: OrderCardProps) => {
  return (
    <View
      className={cn(
        'mb-4 rounded-3xl border border-[#1F2937] bg-[#0F1418] p-5',
        className,
      )}
    >
      <View className="flex-row items-center justify-between">
        <Text className="text-lg font-JakartaBold text-white">{order.id}</Text>
        <Text className="text-lg font-JakartaBold text-[#22C55E]">
          {order.price}
        </Text>
      </View>
      <Text className="mt-1 text-xs font-JakartaSemiBold text-[#22C55E]">
        {order.reward}
      </Text>

      <View className="mt-4">
        <View className="flex-row items-start">
          <Feather name="map-pin" size={16} color="#22C55E" />
          <View className="ml-3 flex-1">
            <Text className="text-sm font-JakartaSemiBold text-white">
              Pickup
            </Text>
            <Text className="text-sm font-JakartaMedium text-[#94A3B8]">
              {order.pickup}
            </Text>
          </View>
        </View>
        <View className="mt-3 flex-row items-start">
          <Feather name="navigation" size={16} color="#38BDF8" />
          <View className="ml-3 flex-1">
            <Text className="text-sm font-JakartaSemiBold text-white">
              Drop-off
            </Text>
            <Text className="text-sm font-JakartaMedium text-[#94A3B8]">
              {order.dropoff}
            </Text>
          </View>
        </View>
      </View>

      <Text className="mt-4 text-xs font-JakartaMedium text-[#94A3B8]">
        {order.distance}
      </Text>

      <View className="mt-5 flex-row justify-between">
        <TouchableOpacity
          onPress={() => onDetails?.(order)}
          className="h-12 flex-1 items-center justify-center rounded-2xl border border-[#1F2937] bg-[#11181C] mr-3"
        >
          <Text className="text-sm font-JakartaSemiBold text-white">Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onAccept?.(order)}
          className="h-12 flex-1 items-center justify-center rounded-2xl bg-[#22C55E]"
        >
          <Text className="text-sm font-JakartaSemiBold text-white">Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderCard;
