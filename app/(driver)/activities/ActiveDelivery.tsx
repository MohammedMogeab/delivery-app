// // ActiveDeliveryScreen.js
// import React from 'react';
// import { ScrollView, View, Text, StatusBar } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { globalStyles, colors } from '@/constants/styleActivities';
// import TopDetailsSection from '@/components/driver/TopDetailsSection';
// import DriverButton from '@/components/driver/DriverButton';
// import { Ionicons } from '@expo/vector-icons';
// import { router } from 'expo-router';

// const ActiveDelivery = () => {
//     const pickupLocation = { latitude: 13.585, longitude: 44.015 }; 
//     const dropoffLocation = { latitude: 13.570, longitude: 44.025 };
//     const handleStartNavigation = () => {
//         alert('Starting Navigation...');
//         // منطق فتح تطبيق الخرائط
//     };

//     const handleCallCustomer = () => {
//         alert('Calling Customer...');
//         // منطق فتح تطبيق الاتصال
//     };

//     return (
//         <SafeAreaView style={globalStyles.container}>
//             <StatusBar barStyle="light-content" backgroundColor={colors.background} />

//             <ScrollView showsVerticalScrollIndicator={false}>

//                 {/* المكون المدمج (الأجزاء العلوية) */}
//                 <TopDetailsSection
//                     orderId="DLV-1043"
//                     currentStep={1} // En Route

//                     pickupCoords={pickupLocation}
//                     dropoffCoords={dropoffLocation}
//                     eta="12 min"
//                     distance="4.8 km"

//                     pickupName="AromaMart – Taiz"
//                     dropOffName="Al-Qahera, Taiz"
//                     fee="2500"
//                     reward="300"
//                 />

//                 <View className="p-4 bg-[#121212]">
                    
//                     <DriverButton
//                         title="Start Navigation"
//                         onPress={() => router.replace('/(driver)/activities/ActiveDelivery2')}
//                         variant="primary" // يستخدم اللون الأخضر #22C55E من VARIANT_CLASSES
//                         className="mb-3 rounded-xl" // تعديل شكل الحواف ليتوافق مع التصميم
//                         rightIcon={<Ionicons name="navigate-outline" size={20} color="white" />}
//                     />

//                     {/* 2. الزر الداكن: Call Customer (الشكل: secondary أو يمكنك استخدام outline أو تعديل secondary) */}
//                     <DriverButton
//                         title="Call Customer"

                        
//                         // نستخدم secondary لتعطي اللون الداكن bg-[#1E293B]
//                         variant="secondary"
//                         className="rounded-xl"
//                         rightIcon={<Ionicons name="call-outline" size={16} color="white" />}
//                     />

                    
//                 </View>
//                 {/* رسالة التحديث السفلية */}
//                 <Text className="text-center text-[#94A3B8] text-xs mt-4">
//                     Order updates automatically every 15 seconds.
//                 </Text>

//             </ScrollView>
//         </SafeAreaView>
//     );
// };

// export default ActiveDelivery;