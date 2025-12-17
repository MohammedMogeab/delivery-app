import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

import { driverOrders } from '@/constants/driver';
import { DriverButton } from '@/components/driver/DriverButton';
import { FooterControls } from '@/components/driver/FooterControls';

const OrderConfirmationScreen = () => {
  const [available, setAvailable] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const { id } = useLocalSearchParams<{ id?: string }>();
  const order = driverOrders.find((item) => item.id === id) ?? driverOrders[0];

  const colors = {
    background: isDarkMode ? '#05090C' : '#F8FAFC',
    card: isDarkMode ? '#11181C' : '#FFFFFF',
    textPrimary: isDarkMode ? '#FFFFFF' : '#0F172A',
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
        <View style={{ marginTop: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              backgroundColor: colors.card,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Feather name="x" size={18} color={colors.textPrimary} />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: '600', color: colors.textPrimary }}>
            Confirm Acceptance
          </Text>
          <View style={{ height: 40, width: 40 }} />
        </View>

        {/* Order Summary Card */}
        <View
          style={{
            marginTop: 24,
            borderRadius: 24,
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.card,
            padding: 20,
          }}
        >
          <Text style={{ fontSize: 12, color: colors.textSecondary }}>Order Summary</Text>

          <View style={{ marginTop: 16, gap: 16 }}>
            {[
              { label: 'Order ID', value: order.id, color: colors.textPrimary },
              { label: 'Pickup', value: order.pickup, color: colors.textPrimary },
              { label: 'Drop-off', value: order.dropoff, color: colors.textPrimary },
              { label: 'Distance', value: order.distance.split('—')[0].trim(), color: colors.textPrimary },
              { label: 'Delivery Fee', value: `${order.fee} YER`, color: colors.textPrimary },
              { label: 'Reward', value: `+${order.bonus} YER`, color: colors.green },
            ].map((item, index) => (
              <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 12, color: colors.textSecondary }}>{item.label}</Text>
                <Text style={{ fontSize: 14, fontWeight: '600', color: item.color }}>{item.value}</Text>
              </View>
            ))}

            <View style={{ height: 1, width: '100%', backgroundColor: colors.border, marginVertical: 12 }} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ fontSize: 12, fontWeight: '600', color: colors.textPrimary }}>Estimated Total</Text>
              <Text style={{ fontSize: 18, fontWeight: '700', color: colors.green }}>{order.total} YER</Text>
            </View>
          </View>

          <Text style={{ marginTop: 16, fontSize: 12, color: colors.textSecondary }}>
            Once you accept, this order will be assigned to you. Cancellation is only allowed before pickup.
          </Text>

          {/* Availability Checkbox */}
          <TouchableOpacity
            onPress={() => setAvailable((prev) => !prev)}
            style={{ marginTop: 16, flexDirection: 'row', alignItems: 'center' }}
          >
            <View
              style={{
                marginRight: 12,
                height: 20,
                width: 20,
                borderRadius: 4,
                borderWidth: 1,
                borderColor: colors.green,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: available ? colors.green : 'transparent',
              }}
            >
              {available && <Feather name="check" size={14} color={isDarkMode ? '#0F172A' : '#FFFFFF'} />}
            </View>
            <Text style={{ fontSize: 12, color: colors.textSecondary }}>
              I am available to complete this delivery.
            </Text>
          </TouchableOpacity>
        </View>

        {/* Action Buttons */}
        <DriverButton
          title="Confirm & Accept Order"
          onPress={() => router.replace('/(driver)/activities/PickupConfirmationScreen')}
          className="mt-6 h-14"
          disabled={!available}
        />
        <DriverButton
          title="Cancel"
          variant="outline"
          className="mt-4 h-14 border-[#1F2937]"
          textClassName="text-white"
          onPress={() => router.back()}
        />

        {/* Footer with Theme Toggle */}
        <FooterControls
          isDarkMode={isDarkMode}
          onToggleTheme={() => setIsDarkMode((prev) => !prev)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderConfirmationScreen;
