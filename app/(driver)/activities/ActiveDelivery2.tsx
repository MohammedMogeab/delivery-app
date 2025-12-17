import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// استيراد مكونات الخريطة
import MapView, { Marker } from 'react-native-maps';
// استيراد الأيقونات
import { MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import DriverButton from '@/components/driver/DriverButton';
import { router } from 'expo-router';

const screenHeight = Dimensions.get('window').height;

const ActiveDelivery2 = () => {
    // بيانات تجريبية
    const deliveryData = {
        deliveryId: 'DLV-1043',
        status: 'Active Delivery',
        eta: '10 min',
        distance: '3.8 km',
        customerName: 'Ali Saeed',
        customerPhone: '+967-77-111-2222',
        location: 'Al-Qahera, Taiz',
        packageType: 'Fragile',
        codAmount: '2500 YER',
        // إحداثيات موقع التسليم (كمثال - يمكنك تغييرها لإحداثياتك المطلوبة)
        deliveryCoords: {
            latitude: 13.5658,
            longitude: 44.0208,
        },
        // إحداثيات الموقع الحالي للسائق (افتراضياً في المركز)
        driverCoords: {
            latitude: 13.5700,
            longitude: 44.0150,
        }
    };

    // الإحداثيات الأولية لعرض الخريطة
    const initialRegion = {
        latitude: deliveryData.driverCoords.latitude,
        longitude: deliveryData.driverCoords.longitude,
        latitudeDelta: 0.0122, // لتحديد مستوى التكبير
        longitudeDelta: 0.0071,
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            {/* 1. منطقة الخريطة (MapView) */}
            <View style={styles.mapContainer}>
                <MapView
                    style={styles.map}
                    initialRegion={initialRegion}
                    // تحديد نمط الخريطة الداكن (قد لا يعمل على جميع المنصات/الإصدارات)
                    provider="google"
                    customMapStyle={mapStyleJson} // استخدام نمط JSON لتبدو داكنة
                >
                    {/* نقطة موقع التسليم (Target Pin) */}
                    <Marker
                        coordinate={deliveryData.deliveryCoords}
                        title="موقع التوصيل"
                        description={deliveryData.location}
                    >
                        {/* الأيقونة الخضراء الكبيرة في المنتصف */}
                        <MaterialCommunityIcons name="map-marker-radius" size={30} color="#38C172" />
                    </Marker>

                    {/* نقطة موقع السائق (Driver Pin - اختياري) */}
                    <Marker
                        coordinate={deliveryData.driverCoords}
                        title="موقعي"
                        pinColor="blue" // يمكن استخدام أيقونة مختلفة للسائق
                    />
                </MapView>

                {/* طبقة واجهة المستخدم العلوية فوق الخريطة */}
                <SafeAreaView style={styles.overlayArea} >
                    {/* شريط العنوان العلوي (Header) */}
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.iconButton} onPress={() => router.replace('/(driver)/activities/ActiveDelivery')}>
                            <MaterialIcons name="arrow-back" size={24} color="#fff" />
                            
                        </TouchableOpacity>
                        <View style={styles.headerTextGroup}>
                            <Text style={styles.headerTitle}>{deliveryData.deliveryId}</Text>
                            <Text style={styles.headerSubtitle}>{deliveryData.status}</Text>
                            <TouchableOpacity style={styles.iconButton}>
                                <Ionicons name="ellipsis-vertical" size={24} color="#fff" />
                            </TouchableOpacity>
                        </View>
                        
                    </View>

                    {/* معلومات ETA والمسافة */}
                    <View style={styles.etaContainer}>
                        <Text style={styles.etaText}>ETA: {deliveryData.eta}</Text>
                        <Text style={styles.distanceText}>Distance: {deliveryData.distance}</Text>
                    </View>
                </SafeAreaView>
            </View>

            {/* 2. بطاقة التفاصيل السفلية (Details Card) */}
            <View style={styles.detailsCard}>
                {/* معلومات العميل */}
                <View style={styles.customerInfoRow}>
                    <View>
                        <Text style={styles.customerNameLabel}>CUSTOMER</Text>
                        <Text style={styles.customerValue}>{deliveryData.customerName}</Text>
                        <Text style={styles.customerPhone}>{deliveryData.customerPhone}</Text>
                    </View>
                    <View style={styles.contactButtons}>
                        {/* زر الدردشة */}
                        <TouchableOpacity style={styles.contactButton}>
                            <MaterialIcons name="chat-bubble-outline" size={24} color="#38C172" />
                        </TouchableOpacity>
                        {/* زر الاتصال */}
                        <TouchableOpacity style={styles.contactButton}>
                            <MaterialIcons name="call" size={24} color="#38C172" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.separator} />

                {/* تفاصيل التسليم */}
                
                <Text style={styles.detailsHeader}>DELIVERY DETAILS</Text>

                {/* صف الموقع */}
                <View style={styles.detailRow}>
                    <MaterialIcons name="location-pin" size={20} color="#fff" style={styles.detailIcon} />
                    <Text style={styles.detailLabel}>
                        {deliveryData.location}
                    </Text>
                </View>

                {/* صف نوع الحزمة */}
                <View style={styles.detailRow}>
                    <MaterialIcons name="inventory-2" size={20} color="#fff" style={styles.detailIcon} />
                    <Text style={styles.detailLabel}>Package: { deliveryData.packageType}</Text>
                </View>

                {/* صف الدفع عند الاستلام */}
                <View style={styles.detailRow}>
                    <MaterialIcons name="attach-money" size={20} color="#fff" style={styles.detailIcon} />
                    <Text style={styles.detailLabel}>Cash on Delivery -{deliveryData.codAmount}</Text>
                </View>

                {/* زر "Mark as Arrived" */}
                <DriverButton
                    title="Mark as Arrived"
                    onPress={() => router.replace('/(driver)/activities/ActiveDelivery')}
                    className="mt-4 "
                 />

                <Text style={styles.navigationNote}>Navigation active. Updates every 5 seconds.</Text>
            </View>
        </View>
    );
};

// --- نمط الخريطة الداكن (Dark Map Style) ---
// هذا النمط يعطي الخريطة مظهراً داكناً متناسقاً مع واجهة المستخدم.
const mapStyleJson = [
    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
    },
    {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
    },
    {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
    },
    {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
    },
    {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
    },
    {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
    },
    {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
    },
    {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
    },
    {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
    },
    {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
    },
    {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
    },
    {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
    },
    {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
    },
];


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        opacity: 0.8,
    },
    // --- 1. تصميم منطقة الخريطة ---
    mapContainer: {
        height: '100%',
        width: '100%',
        
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%',
        marginTop: '10%'
    },
    overlayArea: {
        // هذه المنطقة لتغطية الخريطة بعناصر الـ UI مثل العنوان والـ ETA
        ...StyleSheet.absoluteFillObject,
        paddingTop: StatusBar.currentHeight,
        // paddingHorizontal: 15,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        // paddingHorizontal: 15,
        // paddingVertical: 10,
        
    },
    iconButton: {
        padding: 5,
    },
    headerTextGroup: {
        flexDirection: 'row',

        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        marginLeft: 10,
        
       

    },
    headerTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    headerSubtitle: {
        color: '#fff',
        fontSize: 14,
        marginLeft: 10,
    },
    etaContainer: {
        position: 'absolute',
        backgroundColor: '#000',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 19,
        marginTop: 15,

        top: 60, // تحت شريط العنوان
        right: 15,
        alignItems: 'flex-end',
    },
    etaText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    distanceText: {
        color: '#fff',
        fontSize: 16,
    },
    // --- 2. تصميم بطاقة التفاصيل السفلية ---
    detailsCard: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#1a231bff', // لون البطاقة
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingTop: 15,
        paddingBottom: 30,
        
    },
    customerInfoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 15,
    },
    customerNameLabel: {
        color: '#999',
        fontSize: 12,
        marginBottom: 2,

    },
    customerValue: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    customerPhone: {
        color: '#fff',
        fontSize: 16,
    },
    contactButtons: {
        flexDirection: 'row',
    },
    contactButton: {
        backgroundColor: '#53a26aa1',
        borderRadius: 50,
        padding: 12,
        marginLeft: 10,
        borderWidth: 1,
    },
    separator: {
        height: 1,
        backgroundColor: '#6c6c6cff',
        marginVertical: 15,
        opacity: 0.7,
        
    },
    detailsHeader: {
        color: '#999',
        fontSize: 12,
        marginBottom: 10,
        opacity: 0.7,
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    detailIcon: {
        marginRight: 10,
        opacity: 0.7,
    },
    detailLabel: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '500',
    },
    // زر الوصول
    arrivalButton: {
        backgroundColor: '#38C172',
        borderRadius: 8,
        paddingVertical: 15,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    arrivalButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    navigationNote: {
        color: '#999',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 10,
    },
});

export default ActiveDelivery2;