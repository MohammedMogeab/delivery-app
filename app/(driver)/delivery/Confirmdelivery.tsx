import React, { useRef, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import DriverButton from "@/components/driver/DriverButton";

const Box = ({ children }: { children?: React.ReactNode }) => (
  <View className="rounded-lg bg-[#0B1220] p-4">{children}</View>
);

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <View className="flex-row justify-between items-center py-2">
    <Text className="text-sm text-[#94A3B8]">{label}</Text>
    <Text className="text-sm text-white">{value}</Text>
  </View>
);

export default function Confirmdelivery() {
  const [activeProofTab, setActiveProofTab] = useState<
    "otp" | "signature" | "photo"
  >("otp");
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputs = useRef<(TextInput | null)[]>([]);
  const [notes, setNotes] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleOtpChange = (text: string, idx: number) => {
    const sanitized = text.replace(/[^0-9]/g, "");
    if (!sanitized) return;
    const newOtp = [...otp];
    newOtp[idx] = sanitized.charAt(sanitized.length - 1);
    setOtp(newOtp);
    const next = idx + 1;
    if (next < 6) inputs.current[next]?.focus();
  };

  const handleOtpKeyPress = (e: any, idx: number) => {
    if (e.nativeEvent.key === "Backspace" && otp[idx] === "") {
      const prev = idx - 1;
      if (prev >= 0) inputs.current[prev]?.focus();
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#020617]">
      <ScrollView className="px-4 py-6">
        <View className="flex-row items-center mb-4">
          <TouchableOpacity className="p-2 mr-3 rounded-full bg-[#0F172A]/30">
            <Text className="text-white">←</Text>
          </TouchableOpacity>
          <View>
            <Text className="text-white text-lg font-JakartaSemiBold">
              Confirm Delivery
            </Text>
            <Text className="text-[#94A3B8] text-sm">Order ID: DLV-1043</Text>
          </View>
        </View>

        <Box>
          <Text className="text-white font-JakartaSemiBold mb-3">
            Delivery Details
          </Text>
          <DetailRow label="Customer" value="Ali Saeed" />
          <DetailRow label="Phone" value="+98-77-111-2222" />
          <DetailRow label="Drop-off" value="Al-Qahera, Taiz" />
          <DetailRow label="Payment" value="2500 YER, Cash on Delivery" />
          <View className="flex-row justify-between items-center py-2">
            <Text className="text-sm text-[#94A3B8]">Status</Text>
            <View className="px-3 py-1 rounded-full bg-[#065F46]">
              <Text className="text-xs text-white">At Destination</Text>
            </View>
          </View>
        </Box>

        <View className="mt-4">
          <Text className="text-white font-JakartaSemiBold mb-3">
            Proof of Delivery
          </Text>

          <View className="flex-row bg-[#0B1220] rounded-2xl overflow-hidden mb-3">
            <Pressable
              onPress={() => setActiveProofTab("otp")}
              className={`flex-1 py-3 items-center ${activeProofTab === "otp" ? "bg-[#111827]" : ""}`}
            >
              <Text
                className={`text-sm ${activeProofTab === "otp" ? "text-white" : "text-[#94A3B8]"}`}
              >
                OTP Code
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setActiveProofTab("signature")}
              className={`flex-1 py-3 items-center ${activeProofTab === "signature" ? "bg-[#111827]" : ""}`}
            >
              <Text
                className={`text-sm ${activeProofTab === "signature" ? "text-white" : "text-[#94A3B8]"}`}
              >
                Signature
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setActiveProofTab("photo")}
              className={`flex-1 py-3 items-center ${activeProofTab === "photo" ? "bg-[#111827]" : ""}`}
            >
              <Text
                className={`text-sm ${activeProofTab === "photo" ? "text-white" : "text-[#94A3B8]"}`}
              >
                Photo
              </Text>
            </Pressable>
          </View>

          {activeProofTab === "otp" && (
            <View className="bg-[#0B1220] rounded-2xl p-4">
              <Text className="text-[#94A3B8] mb-3">
                Enter 6-digit delivery code
              </Text>
              <View className="flex-row justify-between mb-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <TextInput
                    key={i}
                    ref={(el) => (inputs.current[i] = el)}
                    value={otp[i]}
                    onChangeText={(t) => handleOtpChange(t, i)}
                    onKeyPress={(e) => handleOtpKeyPress(e, i)}
                    keyboardType="number-pad"
                    maxLength={1}
                    className="w-12 h-12 text-center rounded-lg bg-[#020617] text-white border border-[#334155]"
                  />
                ))}
              </View>
              <DriverButton
                title="Verify OTP"
                onPress={() => {}}
                variant="outline"
              />
            </View>
          )}

          {activeProofTab === "signature" && (
            <View className="bg-[#0B1220] rounded-2xl p-4">
              <Text className="text-[#94A3B8] mb-3">
                Signature capture placeholder
              </Text>
              <View className="h-40 rounded-lg bg-[#020617] border border-[#334155]" />
            </View>
          )}

          {activeProofTab === "photo" && (
            <View className="bg-[#0B1220] rounded-2xl p-4">
              <Text className="text-[#94A3B8] mb-3">
                Take or attach a photo
              </Text>
              <DriverButton
                title="Attach Photo"
                onPress={() => {}}
                variant="ghost"
              />
            </View>
          )}
        </View>

        <View className="mt-4 bg-[#0B1220] rounded-2xl p-4">
          <Text className="text-white font-JakartaSemiBold mb-2">Notes</Text>
          <TextInput
            value={notes}
            onChangeText={setNotes}
            placeholder="Add any remarks (optional)"
            placeholderTextColor="#64748B"
            multiline
            numberOfLines={4}
            className="bg-[#020617] rounded-lg p-3 text-white h-28 border border-[#334155]"
          />

          <View className="flex-row items-center mt-4">
            <TouchableOpacity
              onPress={() => setConfirmed((s) => !s)}
              className={`w-5 h-5 mr-3 rounded ${confirmed ? "bg-[#10B981]" : "bg-transparent border border-[#334155]"}`}
            />
            <Text className="text-[#94A3B8]">
              I confirm the order was delivered to the correct recipient.
            </Text>
          </View>

          <View className="mt-4">
            <DriverButton
              title="Submit Confirmation"
              onPress={() => {}}
              variant="primary"
            />
          </View>

          <View className="mt-3">
            <Text className="text-[#94A3B8] text-sm">
              Once submitted, the order will move to Completed status.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
