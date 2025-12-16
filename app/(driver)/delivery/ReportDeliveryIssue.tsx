import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import DriverButton from '@/components/driver/DriverButton';

const ReasonItem = ({
  label,
  selected,
  onPress,
}: {
  label: string;
  selected: boolean;
  onPress: () => void;
}) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.85}
    className={`flex-row items-center justify-between rounded-2xl px-4 py-4 mb-3 ${
      selected ? 'border border-[#0F766E] bg-[#052F26]/20' : 'border border-[#334155]'
    }`}
  >
    <View className="flex-row items-center">
      <View className={`w-5 h-5 mr-3 rounded-full ${selected ? 'bg-[#10B981]' : 'bg-transparent border border-[#64748B]'}`} />
      <Text className="text-white">{label}</Text>
    </View>
  </TouchableOpacity>
);

export default function ReportDeliveryIssue() {
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [otherText, setOtherText] = useState('');
  const [notes, setNotes] = useState('');

  const reasons = [
    'Customer unavailable',
    'Wrong address',
    'Damaged package',
    'Refused delivery',
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#020617]">
      <ScrollView className="px-4 py-6">
        <View className="flex-row items-center mb-4">
          <TouchableOpacity className="p-2 mr-3 rounded-full bg-[#0F172A]/30">
            <Text className="text-white">←</Text>
          </TouchableOpacity>
          <View className="flex-1">
            <Text className="text-white text-lg font-JakartaSemiBold">Report Delivery Issue</Text>
          </View>
          <View className="px-3 py-1 rounded-full bg-[#064E3B]">
            <Text className="text-xs text-white">DLV-1043</Text>
          </View>
        </View>

        <View className="rounded-lg bg-[#0B1220] p-4 mb-4">
          <Text className="text-white font-JakartaSemiBold mb-3">Delivery Context</Text>
          <View className="flex-row justify-between py-2">
            <Text className="text-sm text-[#94A3B8]">Customer</Text>
            <Text className="text-sm text-white">Ali Saeed</Text>
          </View>
          <View className="flex-row justify-between py-2">
            <Text className="text-sm text-[#94A3B8]">Drop-off</Text>
            <Text className="text-sm text-white">Al-Qahera, Taiz</Text>
          </View>
          <View className="flex-row justify-between py-2">
            <Text className="text-sm text-[#94A3B8]">Status</Text>
            <Text className="text-sm text-white">Delivery Attempted</Text>
          </View>
          <View className="flex-row justify-between py-2">
            <Text className="text-sm text-[#94A3B8]">Distance from destination</Text>
            <Text className="text-sm text-white">90 m</Text>
          </View>
        </View>

        <Text className="text-white font-JakartaSemiBold mb-3">Reason for Failure</Text>

        <View className="mb-4">
          {reasons.map((r) => (
            <ReasonItem
              key={r}
              label={r}
              selected={selectedReason === r}
              onPress={() => setSelectedReason(r)}
            />
          ))}

          <View className="flex-row items-center mb-3">
            <TouchableOpacity onPress={() => setSelectedReason('Other')} className={`w-5 h-5 mr-3 rounded-full ${selectedReason === 'Other' ? 'bg-[#10B981]' : 'bg-transparent border border-[#64748B]'}`} />
            <Text className="text-white mr-3">Other</Text>
            <TextInput
              value={otherText}
              onChangeText={setOtherText}
              placeholder="Other reason"
              placeholderTextColor="#64748B"
              className="flex-1 bg-[#0B1220] border border-[#334155] rounded-2xl px-3 py-2 text-white"
            />
          </View>

          <View className="rounded-lg bg-[#052F26]/20 border border-[#064E3B] p-3 mb-4">
            <Text className="text-sm text-[#9AE6B4]">Your report will be reviewed by the admin and store owner. The order will be marked as Failed Delivery until resolved.</Text>
          </View>

          <View className="flex-row items-center justify-between mb-3">
            <Text className="text-white">EN</Text>
            <Text className="text-white">/ AR</Text>
          </View>
        </View>

        <View className="rounded-lg bg-[#0B1220] p-4 mb-4">
          <Text className="text-white font-JakartaSemiBold mb-3">Evidence (Optional)</Text>
          <Text className="text-sm text-[#94A3B8] mb-3">Upload Photo</Text>

          <View className="rounded-lg border border-dashed border-[#334155] p-4 items-center mb-3">
            <Text className="text-[#94A3B8] mb-3">Photo placeholder</Text>
            <View className="flex-row w-full justify-center">
              <DriverButton title="Take Photo" onPress={() => {}} variant="ghost" className="mr-3" />
              <DriverButton title="Upload" onPress={() => {}} variant="outline" />
            </View>
          </View>

          <Text className="text-sm text-[#94A3B8] mb-2">Notes</Text>
          <TextInput
            value={notes}
            onChangeText={setNotes}
            placeholder="Add additional details (optional)"
            placeholderTextColor="#64748B"
            multiline
            numberOfLines={4}
            className="bg-[#020617] rounded-lg p-3 text-white h-28 border border-[#334155]"
          />
        </View>

        <View className="mb-6">
          <DriverButton title="Submit Report" onPress={() => {}} variant="primary" />
        </View>

        <View className="mb-10">
          <DriverButton title="Cancel" onPress={() => {}} variant="outline" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
