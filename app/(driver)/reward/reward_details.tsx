import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import DriverButton from '@/components/driver/DriverButton';
import { useRouter } from 'expo-router';

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <View className="flex-row justify-between items-center py-3 border-b border-[#1F2937]">
    <Text className="text-sm text-[#94A3B8]">{label}</Text>
    <Text className="text-sm text-white">{value}</Text>
  </View>
);

export default function RewardDetails() {
  const progress = 70; // example value
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#071014]">
      <ScrollView className="px-4 py-6">
        <View className="flex-row items-center mb-4">
          <TouchableOpacity className="p-2 mr-3 rounded-full bg-[#0F172A]/30">
            <Text className="text-white">←</Text>
          </TouchableOpacity>
          <Text className="text-white text-lg font-JakartaSemiBold">Reward Details</Text>
        </View>

        <View className="rounded-lg bg-[#0B1220] p-4 mb-4">
          <View className="flex-row items-center justify-between mb-3">
            <View>
              <Text className="text-white font-JakartaSemiBold">Weekly Delivery Challenge</Text>
              <Text className="text-sm text-[#94A3B8] mt-1">Active</Text>
            </View>
            <View className="w-10 h-10 rounded-full bg-[#052F26] items-center justify-center">
              <Text className="text-white">🏆</Text>
            </View>
          </View>

          <Text className="text-white font-JakartaSemiBold mb-3">Campaign Information</Text>
          <InfoRow label="Description" value="Complete 20 deliveries between Oct 28 - Nov 3." />
          <InfoRow label="Start Date" value="Oct 28, 2025" />
          <InfoRow label="End Date" value="Nov 3, 2025" />
          <InfoRow label="Reward Value" value="+5,000 YER" />
          <InfoRow label="Eligible Drivers" value="Active & Verified only" />

          <Text className="text-white font-JakartaSemiBold mt-4">Progress Tracking</Text>
          <View className="flex-row justify-between items-center mt-3 mb-2">
            <Text className="text-sm text-[#94A3B8]">14 of 20 Deliveries Completed</Text>
            <Text className="text-sm text-[#94A3B8]">{progress}%</Text>
          </View>

          <View className="w-full bg-[#07121A] rounded-full h-3">
            <View className="h-3 rounded-full bg-[#10B981]" style={{ width: `${progress}%` }} />
          </View>

          <View className="mt-4">
            <DriverButton
              title="Back to Rewards"
              onPress={() => router.push('/(driver)/reward/reward')}
              variant="outline"
            />
          </View>
        </View>

        <View className="rounded-lg bg-[#0B1220] p-4 mb-4">
          <Text className="text-white font-JakartaSemiBold mb-3">Rules & Conditions</Text>
          <View className="mb-3">
            <Text className="text-sm text-[#94A3B8] mb-2">• Deliveries must be completed within the specified date range.</Text>
            <Text className="text-sm text-[#94A3B8] mb-2">• Failed or canceled orders will not count towards the goal.</Text>
            <Text className="text-sm text-[#94A3B8] mb-2">• Reward is automatically credited to your wallet upon completion.</Text>
            <Text className="text-sm text-[#94A3B8]">• Use of duplicate accounts will lead to disqualification.</Text>
          </View>
        </View>

        <View className="rounded-lg bg-[#0B1220] p-4 mb-10">
          <Text className="text-white font-JakartaSemiBold mb-3">Campaign History</Text>
          <Text className="text-sm text-[#94A3B8]">Completed last week's challenge on Oct 20 — Reward: +5,000 YER ✅</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
