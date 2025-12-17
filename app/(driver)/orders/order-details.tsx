import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

import { driverOrders } from '@/constants/driver';
import { DriverButton } from '@/components/driver/DriverButton';
import { FooterControls } from '@/components/driver/FooterControls';

const OrderDetailsScreen = () => {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const order = driverOrders.find((item) => item.id === id) ?? driverOrders[0];

  const [isDarkMode, setIsDarkMode] = useState(true);

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
        {/* Back Button */}
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            marginTop: 16,
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: colors.card,
            alignItems: 'center',
            justifyContent: 'center',
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
          Order Details
        </Text>

        {/* Order Card */}
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
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: '700', color: colors.textPrimary }}>
              Order ID {order.id}
            </Text>
            <View
              style={{
                borderRadius: 20,
                backgroundColor: colors.green + '33', // شفاف قليلا
                paddingHorizontal: 8,
                paddingVertical: 2,
              }}
            >
              <Text style={{ color: colors.green, fontSize: 12, fontWeight: '600' }}>
                {order.status === 'available' ? 'Available' : order.status}
              </Text>
            </View>
          </View>
          <Text style={{ marginTop: 4, fontSize: 12, color: colors.textSecondary }}>
            Created {order.createdAt}
          </Text>

          {/* Route */}
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 14, fontWeight: '600', color: colors.textPrimary }}>Route</Text>
            <View
              style={{
                marginTop: 12,
                borderRadius: 16,
                borderWidth: 1,
                borderColor: colors.border,
                backgroundColor: colors.card,
                padding: 16,
              }}
            >
              {/* Pickup */}
              <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                <Feather name="map-pin" size={16} color={colors.green} />
                <View style={{ marginLeft: 12, flex: 1 }}>
                  <Text style={{ fontSize: 14, fontWeight: '600', color: colors.textPrimary }}>
                    Pickup
                  </Text>
                  <Text style={{ marginTop: 4, fontSize: 12, color: colors.textSecondary }}>
                    {order.pickup}
                  </Text>
                </View>
              </View>

              {/* Drop-off */}
              <View style={{ marginTop: 16, flexDirection: 'row', alignItems: 'flex-start' }}>
                <Feather name="navigation" size={16} color="#38BDF8" />
                <View style={{ marginLeft: 12, flex: 1 }}>
                  <Text style={{ fontSize: 14, fontWeight: '600', color: colors.textPrimary }}>
                    Drop-off
                  </Text>
                  <Text style={{ marginTop: 4, fontSize: 12, color: colors.textSecondary }}>
                    {order.dropoff}
                  </Text>
                </View>
              </View>

              {/* Distance & Map */}
              <View style={{ marginTop: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 12, color: colors.textSecondary }}>{order.distance}</Text>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Feather name="map" size={16} color={colors.green} />
                  <Text style={{ marginLeft: 8, fontSize: 12, fontWeight: '600', color: colors.green }}>
                    Map
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Customer Details */}
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 14, fontWeight: '600', color: colors.textPrimary }}>Customer Details</Text>
            <View
              style={{
                marginTop: 12,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 16,
                borderWidth: 1,
                borderColor: colors.border,
                backgroundColor: colors.card,
                padding: 16,
              }}
            >
              <View>
                <Text style={{ fontSize: 14, fontWeight: '600', color: colors.textPrimary }}>
                  {order.customer.name}
                </Text>
                <Text style={{ marginTop: 4, fontSize: 12, color: colors.textSecondary }}>
                  {order.customer.phone}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  backgroundColor: colors.green + '33',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Feather name="phone" size={18} color={colors.green} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Payment Details */}
          <View
            style={{
              marginTop: 20,
              borderRadius: 16,
              borderWidth: 1,
              borderColor: colors.border,
              backgroundColor: colors.card,
              padding: 16,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: '600', color: colors.textPrimary }}>Payment Details</Text>

            <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 12, color: colors.textSecondary }}>Delivery Fee</Text>
              <Text style={{ fontSize: 14, fontWeight: '600', color: colors.textPrimary }}>{order.fee} YER</Text>
            </View>

            <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 12, color: colors.textSecondary }}>Reward Bonus</Text>
              <Text style={{ fontSize: 14, fontWeight: '600', color: colors.green }}>+{order.bonus} YER</Text>
            </View>

            <View style={{ marginTop: 12, height: 1, width: '100%', backgroundColor: colors.border }} />

            <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 12, fontWeight: '600', color: colors.textPrimary }}>Total Earnings</Text>
              <Text style={{ fontSize: 14, fontWeight: '700', color: colors.green }}>{order.total} YER</Text>
            </View>
          </View>

          {/* Additional Info */}
          <View
            style={{
              marginTop: 20,
              borderRadius: 16,
              borderWidth: 1,
              borderColor: colors.border,
              backgroundColor: colors.card,
              padding: 16,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: '600', color: colors.textPrimary }}>Additional Info</Text>
            <Text style={{ marginTop: 8, fontSize: 12, color: colors.textSecondary }}>
              {order.additionalInfo}
            </Text>
          </View>
        </View>

        <Text style={{ marginTop: 16, fontSize: 12, color: colors.textSecondary }}>
          Once accepted, the order will move to your Active Deliveries list.
        </Text>

        {/* Buttons */}
        <DriverButton
          title="Accept Order"
          className="mt-6 h-14"
          onPress={() =>
            router.push({
              pathname: '/(driver)/orders/order-confirmation',
              params: { id: order.id },
            })
          }
        />
        <DriverButton
          title="Back to Orders"
          variant="outline"
          className="mt-4 h-14 border-[#1F2937]"
          textClassName="text-white"
          onPress={() => router.push('/(driver)/(tabs)/orders')}
        />

        {/* Footer & Theme Toggle */}
        <FooterControls
          isDarkMode={isDarkMode}
          onToggleTheme={() => setIsDarkMode((prev) => !prev)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderDetailsScreen;
