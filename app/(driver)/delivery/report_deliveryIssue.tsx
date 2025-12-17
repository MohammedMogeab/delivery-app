import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ChevronLeft, Camera, Upload, Info } from 'lucide-react-native';

import { DriverButton } from '@/components/driver/DriverButton';
import FooterControls from '@/components/driver/FooterControls';

export default function ReportDeliveryIssue() {
  const [reason, setReason] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const colors = {
    background: isDarkMode ? '#0D0D0D' : '#F8FAFC',
    card: isDarkMode ? '#141414' : '#FFFFFF',
    text: isDarkMode ? '#FFFFFF' : '#0F172A',
    muted: isDarkMode ? '#888' : '#64748B',
    border: isDarkMode ? '#222' : '#E5E7EB',
    input: isDarkMode ? '#1E1E1E' : '#F1F5F9',
  };

  const reasons = [
    { id: 'unavailable', label: 'Customer unavailable' },
    { id: 'wrong_address', label: 'Wrong address' },
    { id: 'damaged', label: 'Damaged package' },
    { id: 'other', label: 'Other' },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ChevronLeft color={colors.text} size={24} />
        </TouchableOpacity>

        <Text style={[styles.headerTitle, { color: colors.text }]}>
          Report Delivery Issue
        </Text>

        <View style={styles.tagContainer}>
          <Text style={styles.tagText}>DLV-1043</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Delivery Context */}
        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <Text style={[styles.cardTitle, { color: colors.text }]}>
            Delivery Context
          </Text>

          {[
            ['Customer', 'Ali Saeed'],
            ['Drop-off', 'Al-Qahera, Taiz'],
            ['Status', 'Delivery Attempted'],
            ['Distance from destination', '90 m'],
          ].map(([label, value]) => (
            <View key={label} style={styles.infoRow}>
              <Text style={[styles.infoLabel, { color: colors.muted }]}>
                {label}
              </Text>
              <Text style={[styles.infoValue, { color: colors.text }]}>
                {value}
              </Text>
            </View>
          ))}
        </View>

        {/* Reason */}
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Reason for Failure
        </Text>

        {reasons.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => setReason(item.id)}
            style={[
              styles.radioOption,
              { backgroundColor: colors.card, borderColor: colors.border },
            ]}
          >
            <View style={[styles.radioButton, reason === item.id && styles.radioSelected]}>
              {reason === item.id && <View style={styles.radioInner} />}
            </View>
            <Text style={[styles.radioLabel, { color: colors.text }]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}

        {/* Evidence */}
        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <Text style={[styles.cardTitle, { color: colors.text }]}>
            Evidence <Text style={{ color: colors.muted }}>(Optional)</Text>
          </Text>

          <Text style={[styles.labelSmall, { color: colors.text }]}>
            Upload Photo
          </Text>

          <View style={[styles.uploadBox, { borderColor: colors.border }]}>
            <Camera color={colors.muted} size={32} />

            <View style={styles.uploadButtonsRow}>
              <TouchableOpacity style={styles.uploadBtn}>
                <Camera color="#2ECC71" size={16} />
                <Text style={styles.uploadBtnText}>Take Photo</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.uploadBtn}>
                <Upload color="#2ECC71" size={16} />
                <Text style={styles.uploadBtnText}>Upload</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={[styles.labelSmall, { color: colors.text }]}>
            Notes
          </Text>

          <TextInput
            style={[styles.noteInput, { backgroundColor: colors.input, color: colors.text }]}
            placeholder="Add additional details (optional)"
            placeholderTextColor={colors.muted}
            multiline
          />
        </View>

        {/* Buttons */}
        <DriverButton
          title="Submit Report"
          onPress={() => router.replace('/(driver)/activities/ActiveDelivery2')}
          className="mb-3 rounded-xl "
        />

        <DriverButton
          title="Cancel"
          variant="secondary"
          onPress={() => router.back()}
          className="rounded-xl"
        />

        {/* Info */}
        <View style={styles.infoBox}>
          <Info color="#2ECC71" size={18} />
          <Text style={styles.infoBoxText}>
            Your report will be reviewed by the admin and store owner.
          </Text>
        </View>

        {/* Footer */}
        <FooterControls
          isDarkMode={isDarkMode}
          onToggleTheme={() => setIsDarkMode(prev => !prev)}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: { flex: 1 },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 10,
  },

  tagContainer: {
    backgroundColor: '#1A2E22',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagText: { color: '#2ECC71', fontSize: 12, fontWeight: 'bold' },

  scrollContent: { padding: 16 },

  card: { borderRadius: 12, padding: 16, marginBottom: 20 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 15 },

  infoRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  infoLabel: { fontSize: 14 },
  infoValue: { fontSize: 14, fontWeight: '500' },

  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 12 },

  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#444',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: { borderColor: '#2ECC71' },
  radioInner: { height: 10, width: 10, borderRadius: 5, backgroundColor: '#2ECC71' },
  radioLabel: { fontSize: 14 },

  labelSmall: { fontSize: 13, marginBottom: 8, marginTop: 10 },

  uploadBox: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  uploadButtonsRow: { flexDirection: 'row', marginTop: 15, gap: 10 },

  uploadBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A2E22',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  uploadBtnText: {
    color: '#2ECC71',
    marginLeft: 6,
    fontSize: 13,
    fontWeight: '600',
  },

  noteInput: {
    borderRadius: 8,
    padding: 12,
    height: 80,
    textAlignVertical: 'top',
  },

  infoBox: {
    flexDirection: 'row',
    backgroundColor: '#0A1A11',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#132F1F',
    marginVertical: 20,
  },
  infoBoxText: {
    color: '#2ECC71',
    fontSize: 12,
    marginLeft: 10,
    flex: 1,
  },
});
