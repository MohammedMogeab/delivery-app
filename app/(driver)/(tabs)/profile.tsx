import { ScrollView, Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { Href, router } from 'expo-router';

import {
  driverProfileActions,
  driverProfileSummary,
} from '@/constants/driver';
import { DriverButton } from '@/components/driver/DriverButton';
import { ProfileActionRow } from '@/components/driver/ProfileActionRow';
import { FooterControls } from '@/components/driver/FooterControls';

const ProfileTab = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#05090C]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 32 }}
      >
        <View className="mt-2 flex-row items-center justify-between">
          <Text className="text-2xl font-JakartaBold text-white">Profile</Text>
          <TouchableOpacity
            onPress={() => router.push('/(driver)/profile/edit-profile')}
            className="h-11 w-11 items-center justify-center rounded-2xl border border-[#1F2937] bg-[#0F1418]"
          >
            <Feather name="edit-2" size={18} color="#F8FAFC" />
          </TouchableOpacity>
        </View>

        <View className="mt-6 items-center rounded-3xl border border-[#1F2937] bg-[#0F1418] p-6">
          <View className="h-24 w-24 items-center justify-center overflow-hidden rounded-full border-4 border-[#11181C]">
            <Image
              source={{ uri: driverProfileSummary.avatar }}
              className="h-full w-full"
            />
          </View>
          <Text className="mt-4 text-xl font-JakartaBold text-white">
            {driverProfileSummary.name}
          </Text>
          <Text className="mt-1 text-sm font-JakartaMedium text-[#94A3B8]">
            {driverProfileSummary.phone}
          </Text>
          <View className="mt-4 flex-row items-center rounded-full bg-[#134E32] px-3 py-1">
            <Feather name="check-circle" size={16} color="#22C55E" />
            <Text className="ml-2 text-xs font-JakartaSemiBold text-[#A7F3D0]">
              Verified
            </Text>
          </View>

          <View className="mt-6 w-full flex-row justify-between">
            <View className="items-center">
              <Text className="text-lg font-JakartaBold text-white">
                {driverProfileSummary.deliveries}
              </Text>
              <Text className="mt-1 text-xs font-JakartaMedium text-[#94A3B8]">
                Deliveries
              </Text>
            </View>
            <View className="items-center">
              <Text className="text-lg font-JakartaBold text-white">
                {driverProfileSummary.rating}
              </Text>
              <Text className="mt-1 text-xs font-JakartaMedium text-[#94A3B8]">
                Rating
              </Text>
            </View>
            <View className="items-center">
              <Text className="text-lg font-JakartaBold text-white">
                {driverProfileSummary.earnings}
              </Text>
              <Text className="mt-1 text-xs font-JakartaMedium text-[#94A3B8]">
                Earnings
              </Text>
            </View>
          </View>
        </View>

        <View className="mt-6">
          {driverProfileActions.map((action) => (
            <ProfileActionRow
              key={action.id}
              label={action.label}
              icon={action.icon as keyof typeof Feather.glyphMap}
              onPress={() => {
                const route = action.route;
                if (route) {
                  router.push(route as Href);
                }
              }}
            />
          ))}
        </View>

        <View className="mt-6">
          <DriverButton
            title="Edit Profile"
            onPress={() => router.push('/(driver)/profile/edit-profile')}
            className="h-14"
          />
          <DriverButton
            title="Logout"
            variant="outline"
            className="mt-4 h-14 border-[#F87171]"
            textClassName="text-[#F87171]"
          />
        </View>

        <FooterControls />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileTab;
