import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

const WalletTab = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#05090C]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 32 }}
      >
        <Text className="mt-2 text-2xl font-JakartaBold text-white">Wallet</Text>
        <Text className="mt-2 text-sm font-JakartaMedium text-[#94A3B8]">
          Review your earnings and payouts.
        </Text>

        <View className="mt-6 rounded-3xl border border-[#1F2937] bg-[#0F1418] p-6">
          <View className="flex-row items-center justify-between">
            <Text className="text-sm font-JakartaMedium text-[#94A3B8]">
              Current Balance
            </Text>
            <Feather name="arrow-up-right" size={18} color="#22C55E" />
          </View>
          <Text className="mt-3 text-3xl font-JakartaBold text-white">
            58,450 YER
          </Text>
          <Text className="mt-2 text-xs font-JakartaMedium text-[#22C55E]">
            +2,300 YER today
          </Text>
        </View>

        <View className="mt-6 rounded-3xl border border-[#1F2937] bg-[#0F1418] p-6">
          <Text className="text-lg font-JakartaSemiBold text-white">
            Recent Transactions
          </Text>

          {[1, 2, 3].map((item) => (
            <View
              key={item}
              className="mt-4 flex-row items-center justify-between rounded-2xl bg-[#11181C] p-4"
            >
              <View>
                <Text className="text-sm font-JakartaSemiBold text-white">
                  Delivery Payout
                </Text>
                <Text className="mt-1 text-xs font-JakartaMedium text-[#94A3B8]">
                  Today · Route #{item} completed
                </Text>
              </View>
              <Text className="text-sm font-JakartaSemiBold text-[#22C55E]">
                +950 YER
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WalletTab;
