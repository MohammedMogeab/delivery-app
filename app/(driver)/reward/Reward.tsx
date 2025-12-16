import DriverButton from "@/components/driver/DriverButton";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ProgressBar = ({ progress }: { progress: number }) => (
  <View className="w-full bg-[#07121A] rounded-full h-3 mt-3">
    <View
      className="h-3 rounded-full bg-[#10B981]"
      style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
    />
  </View>
);

const CampaignCard = ({
  title,
  desc,
  reward,
  progress,
  status,
}: {
  title: string;
  desc: string;
  reward: string;
  progress: number;
  status?: string;
}) => (
  <View className="rounded-lg bg-[#0B1220] p-4 mb-4">
    <View className="flex-row justify-between items-start">
      <View>
        <Text className="text-white font-JakartaSemiBold">{title}</Text>
        <Text className="text-sm text-[#94A3B8] mt-1">{desc}</Text>
      </View>
      {status ? (
        <View className="px-3 py-1 rounded-full bg-[#065F46]">
          <Text className="text-xs text-white">{status}</Text>
        </View>
      ) : null}
    </View>

    <ProgressBar progress={progress} />

    <View className="flex-row items-center justify-between mt-3">
      <Text className="text-sm text-[#94A3B8]">
        Reward: <Text className="text-white">{reward}</Text>
      </Text>
      <TouchableOpacity className="px-3 py-2 rounded-2xl bg-[#0F172A]">
        <Text className="text-sm text-[#94A3B8]">View Details</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const Achievement = ({
  label,
  subtitle,
  bg,
}: {
  label: string;
  subtitle?: string;
  bg?: string;
}) => (
  <View className="items-center mr-4">
    <View
      className={`w-14 h-14 rounded-full items-center justify-center ${bg ?? "bg-[#065F46]"}`}
    >
      <Text className="text-white text-xl">🏆</Text>
    </View>
    <Text className="text-sm text-white mt-2 text-center">{label}</Text>
    {subtitle ? (
      <Text className="text-xs text-[#94A3B8]">{subtitle}</Text>
    ) : null}
  </View>
);

export default function Reward() {
  return (
    <SafeAreaView className="flex-1 bg-[#071014]">
      <ScrollView className="px-4 py-6">
        <View className="flex-row items-center mb-4">
          <TouchableOpacity className="p-2 mr-3 rounded-full bg-[#0F172A]/30">
            <Text className="text-white">←</Text>
          </TouchableOpacity>
          <Text className="text-white text-lg font-JakartaSemiBold">
            Rewards & Achievements
          </Text>
        </View>

        <Text className="text-white font-JakartaSemiBold mb-3">
          Current Campaigns
        </Text>

        <CampaignCard
          title="Weekly Delivery Challenge"
          desc="Complete 20 deliveries this week to earn a bonus."
          reward="+5,000 YER"
          progress={70}
          status="Active"
        />

        <CampaignCard
          title="Perfect Rating Bonus"
          desc="Maintain a 4.8+ rating this month."
          reward="+3,000 YER"
          progress={100}
          status="Completed"
        />

        <Text className="text-white font-JakartaSemiBold mb-3">
          Achievements
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-4"
        >
          <Achievement label="100 Deliveries" subtitle="Badge" />
          <Achievement
            label="Fast Deliverer"
            subtitle="Badge"
            bg="bg-[#7C3AED]"
          />
          <Achievement
            label="Top Feedback"
            subtitle="Badge"
            bg="bg-[#2563EB]"
          />
          <Achievement
            label="5-Star Driver"
            subtitle="Badge"
            bg="bg-[#F59E0B]"
          />
        </ScrollView>

        <View className="rounded-lg bg-[#0B1220] p-4 mb-6">
          <Text className="text-white font-JakartaSemiBold mb-3">
            Reward Summary
          </Text>
          <View className="flex-row justify-between py-2">
            <Text className="text-sm text-[#94A3B8]">Total Earned</Text>
            <Text className="text-sm text-[#10B981]">15,400 YER</Text>
          </View>
          <View className="flex-row justify-between py-2">
            <Text className="text-sm text-[#94A3B8]">Active Campaigns</Text>
            <Text className="text-sm text-white">2</Text>
          </View>
          <View className="flex-row justify-between py-2">
            <Text className="text-sm text-[#94A3B8]">Lifetime Badges</Text>
            <Text className="text-sm text-white">6</Text>
          </View>

          <View className="mt-4">
            <DriverButton
              title="View Reward History"
              onPress={() => {}}
              variant="primary"
            />
          </View>
        </View>

        <View className="flex-row items-center justify-between mb-10">
          <Text className="text-white">EN</Text>
          <Text className="text-white">/ AR</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
