import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { cn } from '@/lib/utils';

type StatTileProps = {
  icon: keyof typeof Feather.glyphMap;
  value: string;
  label: string;
  className?: string;
};

export const StatTile = ({ icon, value, label, className }: StatTileProps) => {
  return (
    <View
      className={cn(
        'rounded-3xl border border-[#1F2937] bg-[#0F1418] p-4',
        className,
      )}
    >
      <View className="h-10 w-10 items-center justify-center rounded-full bg-[#11181C]">
        <Feather name={icon} size={20} color="#22C55E" />
      </View>
      <Text className="mt-4 text-2xl font-JakartaBold text-white">{value}</Text>
      <Text className="mt-2 text-sm font-JakartaMedium text-[#94A3B8]">
        {label}
      </Text>
    </View>
  );
};

export default StatTile;
