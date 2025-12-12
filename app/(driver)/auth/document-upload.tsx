import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

import { driverDocumentRequirements } from '@/constants/driver';
import { DocumentCard } from '@/components/driver/DocumentCard';
import { DriverButton } from '@/components/driver/DriverButton';
import { FooterControls } from '@/components/driver/FooterControls';

const DocumentUploadScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#05090C]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 32,
        }}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          className="mt-4 h-10 w-10 items-center justify-center rounded-full bg-[#11181C]"
        >
          <Feather name="arrow-left" size={18} color="#F8FAFC" />
        </TouchableOpacity>

        <Text className="mt-6 text-2xl font-JakartaBold text-[#F8FAFC]">
          Upload Documents
        </Text>
        <Text className="mt-3 text-sm font-JakartaMedium text-[#94A3B8]">
          Please upload clear, un-cropped images of the following documents. Ensure
          all four corners are visible and the text is readable.
        </Text>

        <View className="mt-8">
          {driverDocumentRequirements.map((doc) => (
            <DocumentCard key={doc.id} item={doc} />
          ))}
        </View>

        <View className="mt-4 rounded-3xl border border-[#1F2937] bg-[#0F1418] p-4">
          <View className="flex-row items-start">
            <View className="mt-1 h-9 w-9 items-center justify-center rounded-full bg-[#11181C]">
              <Feather name="info" size={18} color="#22C55E" />
            </View>
            <Text className="ml-3 flex-1 text-sm font-JakartaMedium text-[#94A3B8]">
              {"Your documents will be reviewed within 24-48 hours. We'll notify you once your account is active."}
            </Text>
          </View>
        </View>

        <DriverButton
          title="Submit for Review"
          onPress={() => router.push('/(driver)/auth/verification-status')}
          className="mt-6 h-14"
        />

        <TouchableOpacity className="mt-4 items-center">
          <Text className="text-sm font-JakartaSemiBold text-[#94A3B8]">
            Skip for now
          </Text>
        </TouchableOpacity>

        <View className="mt-8 items-center">
          <Text className="text-xs font-JakartaMedium text-[#64748B]">
            Step 2 of 3
          </Text>
        </View>

        <FooterControls />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DocumentUploadScreen;
