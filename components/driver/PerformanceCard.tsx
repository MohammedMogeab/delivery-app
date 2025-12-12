import { Text, View } from 'react-native';

type PerformanceCardProps = {
  title: string;
  value: number;
  goal: number;
  prefix?: string;
};

export const PerformanceCard = ({
  title,
  value,
  goal,
  prefix,
}: PerformanceCardProps) => {
  const progress = Math.min(value / goal, 1);
  const formattedValue = `${prefix ?? ''}${value}`;
  const formattedGoal = `${prefix ?? ''}${goal}`;

  return (
    <View className="mb-4 rounded-3xl border border-[#1F2937] bg-[#0F1418] p-5">
      <Text className="text-sm font-JakartaMedium text-[#94A3B8]">{title}</Text>
      <View className="mt-3 flex-row items-baseline justify-between">
        <Text className="text-2xl font-JakartaBold text-white">
          {formattedValue}
        </Text>
        <Text className="text-xs font-JakartaMedium text-[#64748B]">
          Target {formattedGoal}
        </Text>
      </View>
      <View className="mt-4 h-2.5 w-full rounded-full bg-[#1F2937]">
        <View
          className="h-full rounded-full bg-[#22C55E]"
          style={{ width: `${progress * 100}%` }}
        />
      </View>
    </View>
  );
};

export default PerformanceCard;
