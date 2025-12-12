import { Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

type ProfileActionRowProps = {
  label: string;
  icon: keyof typeof Feather.glyphMap;
  onPress?: () => void;
  trailingText?: string;
};

export const ProfileActionRow = ({
  label,
  icon,
  onPress,
  trailingText,
}: ProfileActionRowProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="mb-3 flex-row items-center justify-between rounded-2xl border border-[#1F2937] bg-[#0F1418] p-4"
      activeOpacity={0.85}
    >
      <View className="flex-row items-center">
        <View className="mr-3 h-10 w-10 items-center justify-center rounded-2xl bg-[#11181C]">
          <Feather name={icon} size={20} color="#22C55E" />
        </View>
        <Text className="text-sm font-JakartaSemiBold text-white">{label}</Text>
      </View>
      <View className="flex-row items-center">
        {trailingText ? (
          <Text className="mr-3 text-xs font-JakartaMedium text-[#94A3B8]">
            {trailingText}
          </Text>
        ) : null}
        <Feather name="chevron-right" size={18} color="#64748B" />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileActionRow;
