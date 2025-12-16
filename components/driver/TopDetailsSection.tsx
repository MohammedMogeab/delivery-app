
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';

import MapView, { Marker, Polyline, Region } from 'react-native-maps';
import { globalStyles, colors } from '@/constants/styleActivities'; // نفترض أن هذا المسار صحيح لملفات الأنماط
import { Ionicons } from '@expo/vector-icons';


export const lightMapStyle = [
    {
        elementType: "geometry",
        stylers: [{ color: "#f5f5f5" }]
    },
    {
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }]
    },
    {
        elementType: "labels.text.fill",
        stylers: [{ color: "#616161" }]
    },
    {
        elementType: "labels.text.stroke",
        stylers: [{ color: "#f5f5f5" }]
    },
    {
        featureType: "administrative.land_parcel",
        stylers: [{ visibility: "off" }]
    },
    {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#eeeeee" }]
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }]
    },
    {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#dadada" }]
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#c9e6ff" }]
    }
];


interface ProgressStepProps {
    label: string;
    isCurrent: boolean;
    isCompleted: boolean;
}


interface TopDetailsSectionProps {
    orderId: string;
    currentStep: number;

    pickupCoords: { latitude: number; longitude: number };
    dropoffCoords: { latitude: number; longitude: number };
    eta: string;
    distance: string;
    pickupName: string;
    dropOffName: string;
    fee: string;
    reward: string;
}

// نمط الخريطة الداكن (لتتناسب مع الواجهة)
/*const darkMapStyle = [
    { "elementType": "geometry", "stylers": [{ "color": "#212121" }] },
    { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
    { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#000000" }] },
    { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#2c2c2c" }] },
    { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#373737" }] },
    // ... يمكنك إضافة المزيد من الأنماط الداكنة هنا ...
];*/



const DeliveryHeader: React.FC = () => (
    <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Active Delivery</Text>
        <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={24} color={colors.text} />
        </TouchableOpacity>
    </View>
);

// --- B. Progress Step Component (داخلية) ---
const ProgressStep: React.FC<ProgressStepProps> = ({
    label,
    isCurrent,
    isCompleted
}) => {
    const circleColor = isCompleted
        ? colors.primary
        : isCurrent
            ? colors.primary
            : colors.subText;

    const labelColor = isCompleted || isCurrent ? colors.text : colors.subText;

    return (
        <View style={styles.stepContainer}>
            <View style={[styles.circle, { borderColor: circleColor, backgroundColor: isCompleted ? colors.primary : 'transparent' }]}>
                {isCompleted && <Ionicons name="checkmark" size={12} color={colors.background} />}
                {!isCompleted && isCurrent && <View style={styles.innerCircle} />}
            </View>
            <Text style={[styles.stepLabel, { color: labelColor }]}>{label}</Text>
        </View>
    );
};


const TopDetailsSection: React.FC<TopDetailsSectionProps> = ({
    orderId,
    currentStep,
    pickupCoords,
    dropoffCoords,
    eta,
    distance,
    pickupName,
    dropOffName,
    fee,
    reward
}) => {
    const steps = ['Pickup', 'En Route', 'Deliver', 'Complete'];

    // حساب المنطقة المركزية للخريطة
    const initialRegion: Region = {
        latitude: (pickupCoords.latitude + dropoffCoords.latitude) / 2,
        longitude: (pickupCoords.longitude + dropoffCoords.longitude) / 2,
        // يمكنك تعديل دلتا لتحديد مستوى التكبير/التصغير
        latitudeDelta: Math.abs(pickupCoords.latitude - dropoffCoords.latitude) * 1.5 || 0.05,
        longitudeDelta: Math.abs(pickupCoords.longitude - dropoffCoords.longitude) * 1.5 || 0.05,
    };

    const routeCoordinates = [pickupCoords, dropoffCoords];

    return (
        <View>
            {/* 1. العنوان */}
            <DeliveryHeader />
            <View style={styles.orderIdContainer}>
                <Text style={styles.orderIdText}>Order ID: {orderId}</Text>
            </View>

            {/* 2. شريط التقدم */}
            <View style={styles.progressRow}>
                {steps.map((step, index) => (
                    <React.Fragment key={step}>
                        <ProgressStep
                            label={step}
                            isCompleted={index < currentStep}
                            isCurrent={index === currentStep}
                        />
                        {index < steps.length - 1 && (
                            <View
                                style={[
                                    styles.connector,
                                    { backgroundColor: index < currentStep ? colors.primary : colors.subText }
                                ]}
                            />
                        )}
                    </React.Fragment>
                ))}
            </View>

            {/* 3. قسم الخريطة التفاعلية (بدلاً من الصورة) */}
            <View style={styles.mapContainer}>
                <MapView

                    initialRegion={initialRegion}
                    style={styles.map}
                    customMapStyle={lightMapStyle}
                    provider="google"
                    scrollEnabled={true}
                    zoomEnabled={true}
                >

                    <Marker coordinate={pickupCoords} title={pickupName} pinColor={colors.primary} />
                    {/* نقطة التسليم */}
                    <Marker coordinate={dropoffCoords} title={dropOffName} pinColor={colors.danger} />
                    {/* المسار بين النقطتين */}
                    <Polyline
                        coordinates={routeCoordinates}
                        strokeColor={colors.primary}
                        strokeWidth={4}
                    />
                </MapView>

                {/* شارة ETA (تبقى فوق الخريطة) */}
                <View style={styles.badgeContainer}>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>ETA: {eta} | {distance}</Text>
                    </View>
                </View>
            </View>

            {/* 4. تفاصيل الطلب */}
            <View style={globalStyles.sectionContainer}>
                {/* Pickup Row */}
                <View style={styles.detailRow}>
                    <Ionicons name="storefront" size={20} color={colors.primary} style={styles.icon} />
                    <View>
                        <Text style={styles.label}>Pickup</Text>
                        <Text style={styles.value}>{pickupName}</Text>
                    </View>
                </View>
                <View style={styles.divider} />

                {/* Drop-off Row */}
                <View style={styles.detailRow}>
                    <Ionicons name="location" size={20} color={colors.danger} style={styles.icon} />
                    <View>
                        <Text style={styles.label}>Drop-off</Text>
                        <Text style={styles.value}>{dropOffName}</Text>
                    </View>
                </View>
                <View style={[styles.divider, styles.feeDivider]} />

                {/* Fee Row */}
                <View style={globalStyles.row}>
                    <Text style={styles.feeLabel}>Fee</Text>
                    <Text style={styles.feeValue}>
                        {fee} YER + <Text style={styles.rewardText}>{reward} YER reward</Text>
                    </Text>
                </View>
            </View>

            {/* 5. تنبيه الحذر */}
            <View style={styles.alertBox}>
                <Ionicons name="information-circle-outline" size={20} color={colors.lightBlue} style={{ marginRight: 8 }} />
                <Text style={styles.alertText}>Handle package carefully – fragile.</Text>
            </View>

        </View>
    );
};

// ************************
// الأنماط المعدلة (تم تحديث قسم الخريطة)
// ************************
const styles = StyleSheet.create({
    // ... (الأنماط الأخرى مثل Header, Progress, Details لم تتغير)
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 48,
        paddingBottom: 12,
        backgroundColor: colors.background,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: colors.text,
    },
    backButton: { paddingRight: 10 },
    orderIdContainer: { paddingHorizontal: 15, paddingTop: 5, paddingBottom: 10 },
    orderIdText: { fontSize: 14, color: colors.subText },
    progressRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    stepContainer: {
        alignItems: 'center',
        width: 64,
},
    circle: {
        width: 22,
        height: 22,
        borderRadius: 11,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 6,
    },
    innerCircle: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: colors.primary,
    },
    stepLabel: {
        fontSize: 11,
        fontWeight: '600', },
    connector: {
        flex: 1,
        height: 2,
        marginHorizontal: 6,
        backgroundColor: colors.stepInactive,
        marginTop: -18, },

    // Map Styles (المحدثة)
    mapContainer: {
        height: 190,
        width: '95%',
        marginHorizontal: 16,
        marginBottom: 20,
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: colors.cardBackground, // ضروري لتطبيق BorderRadius على الخريطة
    },
    map: {
        ...StyleSheet.absoluteFillObject, // لجعل الخريطة تملأ الحاوية
    },
    // حاوية شارة ETA (لتحديد موقعها فوق الخريطة)
    badgeContainer: {
        position: 'absolute',
        bottom: 12,
        left: 0,
        right: 0,
        alignItems: 'center', // للتأكد من أنها تظهر فوق الخريطة
    },
    badge: {
        backgroundColor: '#1F2937',
        borderRadius: 999,
        paddingHorizontal: 18,
        paddingVertical: 8,
    },
    badgeText: {
        color: '#E5E7EB',
        fontSize: 13,
        fontWeight: '600',
    },

    // Details Styles
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
    },
    icon: { marginRight: 10, width: 25 },
    label: { fontSize: 12, color: colors.subText },
    value: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.text,
        marginTop: 2,
    },
    divider: {
        height: 1,
        backgroundColor: colors.border,
        marginLeft: 34,
    },
    feeDivider: { marginTop: 10, marginBottom: 15, marginLeft: 0 },
    feeLabel: { fontSize: 14, color: colors.subText },
    feeValue: { fontSize: 14, fontWeight: '600', color: colors.text },
    rewardText: { color: colors.primary, fontWeight: 'bold' },

    // Alert Box Style
    alertBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0B3B6E',
        borderRadius: 14,
        padding: 14,
        marginHorizontal: 16,
        marginBottom: 24,
    },
    alertText: {
        color: '#BFDBFE',
        fontSize: 13,
        fontWeight: '600',
},
});

export default TopDetailsSection;