import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import DriverButton from '@/components/driver/DriverButton';

const Row = ({ label, value }: { label: string; value: string }) => (
  <View className="flex-row justify-between py-2">
    <Text className="text-sm text-[#94A3B8]">{label}</Text>
    <Text className="text-sm text-white">{value}</Text>
  </View>
);

const Stars = ({ value }: { value: number }) => {
  const stars = Array.from({ length: 5 }).map((_, i) => (
    <Text key={i} className={`${i < value ? 'text-[#FBBF24]' : 'text-[#475569]'} text-xl mr-1`}>
      ★
    </Text>
  ));
  return <View className="flex-row">{stars}</View>;
};

export default function DeliverySummary() {
  const [customerRating, setCustomerRating] = useState(5);
  const [storeRating, setStoreRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-[#071014]">
      <ScrollView className="px-4 py-6">
        <View className="flex-row items-center mb-4">
          <TouchableOpacity className="p-2 mr-3 rounded-full bg-[#0F172A]/30">
            <Text className="text-white">←</Text>
          </TouchableOpacity>
          <View>
            <Text className="text-white text-lg font-JakartaSemiBold">Delivery Summary</Text>
            <Text className="text-[#94A3B8] text-sm">Order ID: DLV-1043</Text>
          </View>
          <View className="ml-auto px-3 py-1 rounded-full bg-[#064E3B]">
            <Text className="text-xs text-white">Completed ✓</Text>
          </View>
        </View>

        <View className="rounded-lg bg-[#0B1220] p-4 mb-4">
          <Text className="text-white font-JakartaSemiBold mb-3">Delivery Overview</Text>
          <Row label="Pickup" value="AromaMart - Taiz" />
          <Row label="Drop-off" value="Al-Qahera, Taiz" />
          <Row label="Total Distance" value="4.8 km" />
          <Row label="Duration" value="27 min" />
          <Row label="Time Completed" value="4:02 PM" />
        </View>

        <View className="rounded-lg bg-[#0B1220] p-4 mb-4">
          <Text className="text-white font-JakartaSemiBold mb-3">Earnings Summary</Text>
          <Row label="Base Fee" value="2500 YER" />
          <Row label="Reward Bonus" value="+300 YER" />
          <View className="flex-row justify-between items-center py-2">
            <Text className="text-sm text-[#94A3B8]">Total Earnings</Text>
            <Text className="text-lg text-[#10B981] font-JakartaSemiBold">2800 YER</Text>
          </View>
          <Row label="Payment Type" value="Cash on Delivery" />
          <View className="mt-3">
            <DriverButton title="Payment Received" onPress={() => {}} variant="secondary" />
          </View>
        </View>

        <View className="rounded-lg bg-[#0B1220] p-4 mb-4">
          <Text className="text-white font-JakartaSemiBold mb-3">Delivery Performance</Text>
          <View className="flex-row items-center mb-3">
            <Stars value={customerRating} />
            <Text className="text-sm text-[#94A3B8] ml-3">Customer Rating</Text>
          </View>
          <Text className="text-[#94A3B8] italic mb-3">"Driver was polite and on time."</Text>

          <Text className="text-white font-JakartaSemiBold mb-3">Rate Store Experience (optional)</Text>
          <View className="flex-row mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <TouchableOpacity key={i} onPress={() => setStoreRating(i + 1)} className="mr-2">
                <Text className={`${i < storeRating ? 'text-[#10B981]' : 'text-[#475569]'} text-2xl`}>★</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TextInput
            value={feedback}
            onChangeText={setFeedback}
            placeholder="Add comments..."
            placeholderTextColor="#64748B"
            multiline
            numberOfLines={4}
            className="bg-[#020617] rounded-lg p-3 text-white h-28 border border-[#334155] mb-4"
          />

          <DriverButton title="Submit Feedback" onPress={() => {}} variant="outline" />
        </View>

        <View className="mb-6">
          <DriverButton title="Back to Dashboard" onPress={() => {}} variant="primary" />
        </View>

        <View className="mb-20">
          <DriverButton title="View Order History" onPress={() => {}} variant="ghost" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
