import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

import { driverDocumentRequirements } from '@/constants/driver';
import { DocumentCard } from '@/components/driver/DocumentCard';
import { DriverButton } from '@/components/driver/DriverButton';
import { FooterControls } from '@/components/driver/FooterControls';

const DocumentUploadScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const colors = {
    background: isDarkMode ? '#05090C' : '#F8FAFC',
    card: isDarkMode ? '#0F1418' : '#FFFFFF',
    textPrimary: isDarkMode ? '#F8FAFC' : '#0F172A',
    textSecondary: isDarkMode ? '#94A3B8' : '#64748B',
    border: isDarkMode ? '#1F2937' : '#CBD5E1',
    green: '#22C55E',
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 32 }}
      >
        {/* Header */}
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            marginTop: 16,
            height: 40,
            width: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            backgroundColor: colors.card,
            borderWidth: 1,
            borderColor: colors.border,
          }}
        >
          <Feather name="arrow-left" size={18} color={colors.textPrimary} />
        </TouchableOpacity>

        {/* Title */}
        <Text
          style={{
            marginTop: 24,
            fontSize: 24,
            fontWeight: '700',
            color: colors.textPrimary,
          }}
        >
          Upload Documents
        </Text>
        <Text
          style={{
            marginTop: 8,
            fontSize: 14,
            color: colors.textSecondary,
          }}
        >
          Please upload clear, un-cropped images of the following documents. Ensure
          all four corners are visible and the text is readable.
        </Text>

        {/* Document Cards */}
        <View style={{ marginTop: 24 }}>
          {driverDocumentRequirements.map((doc) => (
            <DocumentCard key={doc.id} item={doc} />
          ))}
        </View>

        {/* Info Box */}
        <View
          style={{
            marginTop: 16,
            borderRadius: 24,
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.card,
            padding: 16,
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              height: 36,
              width: 36,
              borderRadius: 18,
              backgroundColor: colors.background,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Feather name="info" size={18} color={colors.green} />
          </View>
          <Text
            style={{
              marginLeft: 12,
              flex: 1,
              fontSize: 12,
              color: colors.textSecondary,
            }}
          >
            Your documents will be reviewed within 24-48 hours. We'll notify you once
            your account is active.
          </Text>
        </View>

        {/* Buttons */}
        <DriverButton
          title="Submit for Review"
          onPress={() => router.push('/(driver)/auth/verification-status')}
          className="mt-6 h-14"
        />

        <TouchableOpacity
          style={{ marginTop: 16, alignItems: 'center' }}
          onPress={() => router.back()}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: colors.textSecondary,
            }}
          >
            Skip for now
          </Text>
        </TouchableOpacity>

        <View style={{ marginTop: 32, alignItems: 'center' }}>
          <Text
            style={{
              fontSize: 12,
              color: colors.textSecondary,
            }}
          >
            Step 2 of 3
          </Text>
        </View>

        {/* Footer */}
        <FooterControls
          isDarkMode={isDarkMode}
          onToggleTheme={() => setIsDarkMode((prev) => !prev)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DocumentUploadScreen;
