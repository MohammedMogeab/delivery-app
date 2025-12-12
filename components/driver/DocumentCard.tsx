import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { cn } from '@/lib/utils';
import { driverDocumentRequirements } from '@/constants/driver';

type DocumentRequirement = (typeof driverDocumentRequirements)[number];

type DocumentCardProps = {
  item: DocumentRequirement;
};

const statusStyles = (status: string) => {
  if (status.startsWith('Rejected')) {
    return {
      color: '#F87171',
      label: status,
    };
  }

  if (status === 'Uploaded') {
    return {
      color: '#22C55E',
      label: status,
    };
  }

  return {
    color: '#94A3B8',
    label: status,
  };
};

export const DocumentCard = ({ item }: DocumentCardProps) => {
  const hasFile = Boolean(item.filename);
  const { color, label } = statusStyles(item.status);

  return (
    <View className="mb-4 rounded-3xl border border-[#1F2937] bg-[#0F1418] p-4">
      <View className="mb-4 flex-row items-center justify-between">
        <Text className="text-base font-JakartaSemiBold text-white">
          {item.title}
        </Text>
        <Text
          className={cn(
            'text-sm font-JakartaSemiBold',
            item.required ? 'text-[#22C55E]' : 'text-[#94A3B8]',
          )}
        >
          {item.required ? 'Required' : 'Optional'}
        </Text>
      </View>

      {hasFile ? (
        <View className="flex-row items-center">
          {item.image ? (
            <Image
              source={{ uri: item.image }}
              className="h-16 w-16 rounded-2xl"
            />
          ) : (
            <View className="h-16 w-16 items-center justify-center rounded-2xl border border-dashed border-[#1F2937] bg-[#11181C]">
              <Feather name="image" size={24} color="#64748B" />
            </View>
          )}

          <View className="ml-4 flex-1">
            <Text className="text-sm font-JakartaSemiBold text-white">
              {item.filename}
            </Text>
            <Text className="mt-1 text-xs font-JakartaMedium text-[#94A3B8]">
              {item.size}
            </Text>
            <Text
              className="mt-2 text-xs font-JakartaSemiBold"
              style={{ color }}
            >
              {label}
            </Text>
          </View>

          <View className="flex-row items-center">
            <TouchableOpacity className="mr-3 h-10 w-10 items-center justify-center rounded-full bg-[#11181C]">
              <Feather name="refresh-cw" size={18} color="#94A3B8" />
            </TouchableOpacity>
            <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-[#11181C]">
              <Feather name="trash-2" size={18} color="#F87171" />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity className="flex-1 items-center justify-center rounded-3xl border border-dashed border-[#1F2937] bg-[#11181C] py-10">
          <Feather name="upload-cloud" size={32} color="#22C55E" />
          <Text className="mt-3 text-sm font-JakartaSemiBold text-white">
            Upload Document
          </Text>
          <Text className="mt-1 text-xs font-JakartaMedium text-[#94A3B8]">
            JPG, PNG. Max 5MB.
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default DocumentCard;
