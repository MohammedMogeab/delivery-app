import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

import { DriverInput } from '@/components/driver/DriverInput';
import { DriverButton } from '@/components/driver/DriverButton';
import { FooterControls } from '@/components/driver/FooterControls';

const EditProfileScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#05090C]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 32 }}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          className="mt-4 h-10 w-10 items-center justify-center rounded-full bg-[#11181C]"
        >
          <Feather name="arrow-left" size={18} color="#F8FAFC" />
        </TouchableOpacity>

        <Text className="mt-6 text-2xl font-JakartaBold text-white">
          Edit Profile
        </Text>

        <View className="mt-8 items-center">
          <View className="h-28 w-28 items-center justify-center overflow-hidden rounded-full border-4 border-[#11181C]">
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1614283488798-324f2c1bfa9e?auto=format&fit=facearea&w=256&h=256&q=80',
              }}
              className="h-full w-full"
            />
          </View>

          <View className="mt-4 flex-row items-center">
            <TouchableOpacity className="mr-3 rounded-full border border-[#1F2937] bg-[#11181C] px-5 py-2">
              <Text className="text-sm font-JakartaSemiBold text-white">
                Camera
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="rounded-full border border-[#1F2937] bg-[#11181C] px-5 py-2">
              <Text className="text-sm font-JakartaSemiBold text-white">
                Gallery
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-8" style={{ gap: 16 }}>
          <DriverInput
            label="Full Name"
            placeholder="John Doe"
            icon="user"
            variant="dark"
          />
          <DriverInput
            label="Email Address"
            placeholder="john.doe@email.com"
            icon="mail"
            variant="dark"
            keyboardType="email-address"
          />
          <DriverInput
            label="Phone Number"
            placeholder="+1 234 567 8900"
            icon="phone"
            variant="dark"
            keyboardType="phone-pad"
          />
          <DriverInput
            label="City / Service Area"
            placeholder="New York"
            icon="map-pin"
            variant="dark"
          />
        </View>

        <View className="mt-6 rounded-3xl border border-[#1F2937] bg-[#0F1418] p-4">
          <View className="flex-row items-start">
            <View className="mt-1 h-8 w-8 items-center justify-center rounded-full bg-[#11181C]">
              <Feather name="info" size={16} color="#22C55E" />
            </View>
            <Text className="ml-3 flex-1 text-xs font-JakartaMedium text-[#94A3B8]">
              Changes may take a few minutes to sync with the system.
            </Text>
          </View>
        </View>

        <DriverButton
          title="Save Changes"
          className="mt-6 h-14"
        />
        <DriverButton
          title="Cancel"
          variant="outline"
          className="mt-4 h-14 border-[#1F2937]"
          textClassName="text-white"
          onPress={() => router.back()}
        />

        <FooterControls />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;
