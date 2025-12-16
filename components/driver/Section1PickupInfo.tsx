// Section1PickupInfo.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles, colors } from '@/constants/styleActivities';
import { Ionicons } from '@expo/vector-icons'; // استخدام أيقونات Expo




type Section1PickupInfoProps = {
    storeName: string;
    address: string;
    distance: string;
    status: string;
};
const Section1PickupInfo = ({ storeName, address, distance, status }: Section1PickupInfoProps) => {
    return (
        <View style={globalStyles.sectionContainer}>
            <Text style={globalStyles.sectionHeader}>Section 1 - Pickup Info</Text>

            {/* Store Name */}
            <View style={globalStyles.row}>
                <Text style={globalStyles.label}>Store Name</Text>
                <Text style={globalStyles.value}>{storeName}</Text>
            </View>

            {/* Address */}
            <View style={globalStyles.row}>
                <Text style={globalStyles.label}>Address</Text>
                <Text style={globalStyles.value}>{address}</Text>
            </View>

            {/* Distance */}
            <View style={globalStyles.row}>
                <Text style={globalStyles.label}>Distance</Text>
                <Text style={globalStyles.value}>{distance}</Text>
            </View>

            {/* Status Badge */}
            <View className="mt-4 flex-row items-center rounded-full bg-[#134E32] px-3 py-1">
                <Text style={styles.statusText}>{status}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    statusBadge: {
        backgroundColor: colors.greenBadge,
        borderRadius: 20,
        paddingVertical: 4,
        paddingHorizontal: 10,
        alignSelf: 'flex-start',
        marginTop: 10,
    },
    statusText: {
        color: colors.greenBadgeText,
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default Section1PickupInfo;