// PickupConfirmationScreen.js
import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, StatusBar, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles, colors } from '@/constants/styleActivities';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { DriverButton } from '@/components/driver/DriverButton';
import Section1PickupInfo from '@/components/driver/Section1PickupInfo'; // هذا يبقى منفصلاً


type HeaderProps = {
    orderId: string;
};
const Header = ({ orderId }: HeaderProps) => (
    <View style={headerStyles.headerContainer}>
        <TouchableOpacity style={headerStyles.backButton}>
            <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <View style={headerStyles.titleContainer}>
            <Text style={headerStyles.title}>Pickup Confirmation</Text>
            <Text style={headerStyles.subtitle}>Order ID: {orderId}</Text>
        </View>
    </View>
);


const PickupConfirmationScreen = () => {
    
    const [agreed, setAgreed] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [pickupNote, setPickupNote] = useState('');

    const handleMarkPickedUp = () => {
        if (!isConfirmed) {
            alert('الرجاء تأكيد استلام الطلب أولاً.');
            return;
        }
        // منطق تأكيد الاستلام (مثلاً إرسال البيانات إلى السيرفر)
        console.log('Confirmed Status:', isConfirmed);
        console.log('Pickup Note:', pickupNote);
        alert('Order Marked as Picked Up!');
    };

    const handleCancel = () => {
        alert('Operation Cancelled.');
    };

    return (
        <SafeAreaView style={globalStyles.container}>
            <StatusBar barStyle="light-content" backgroundColor={colors.background} />
            <Header orderId="DLV-1043" />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                
                <Section1PickupInfo
                    storeName="AromaMart – Taiz"
                    address="Jamai Street, near City Mall"
                    distance="150 m"
                    status="Arrived at Pickup Point"
                />

                
                <View style={globalStyles.sectionContainer}>
                    <Text style={globalStyles.sectionHeader}>
                        Section 2 - Proof of Pickup <Text>(Optional)</Text>
                    </Text>

                    {/* Upload Photo Buttons */}
                    <View style={styles.photoUploadContainer}>
                        <TouchableOpacity style={styles.photoButton}>
                            <Ionicons name="camera-outline" size={24} color={colors.primary} />
                            <Text style={styles.photoButtonText}>Take Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.photoButton}>
                            <Ionicons name="image-outline" size={24} color={colors.primary} />
                            <Text style={styles.photoButtonText}>Upload from Gallery</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Store Signature Area */}
                    <Text style={styles.subTitle}>Store Signature</Text>
                    <View style={styles.signatureBox}>
                        <TouchableOpacity style={styles.clearButton}>
                            <Text style={styles.clearText}>Clear</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Notes Input */}
                    <Text style={styles.subTitle}>Notes</Text>
                    <TextInput
                        style={styles.notesInput}
                        placeholder="Add any pickup note (optional)"
                        placeholderTextColor={colors.subText}
                        multiline
                        value={pickupNote}
                        onChangeText={setPickupNote}
                    />
                </View>

                {/* القسم المدمج: Section 3 - Confirmation */}
                <View style={[globalStyles.sectionContainer, styles.lastSection]}>
                    <Text style={globalStyles.sectionHeader}>Section 3 - Confirmation</Text>

                    {/* Confirmation Checkbox */}
                    <View style={styles.checkboxContainer}>
                        
                        <Text style={styles.confirmationText}>
                            I confirm I have collected this order from the store.
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => setAgreed((prev) => !prev)}
                        className="mt-6 flex-row items-center"
                        style={styles.checkboxContainer}
                    >
                        <View
                            className={`mr-3 h-5 w-5 items-center justify-center rounded-md border ${agreed ? 'border-[#22C55E] bg-[#22C55E]' : 'border-[#CBD5E1] bg-white'
                                }`}
                        >
                            {agreed ? <Feather name="check" size={14} color="#FFFFFF" /> : null}
                        </View>
                        <Text className="text-sm font-JakartaMedium text-[#0F172A]">
                            I confirm I have collected this order from
                            the store.
                        </Text>
                    </TouchableOpacity>

                    {/* Info Message */}
                    <View style={styles.infoBox}>
                        <Ionicons name="information-circle-outline" size={20} color={colors.primary} style={{ marginRight: 8 }} />
                        <Text style={styles.infoText}>
                            Once confirmed, the order will move to {'\n'}
                            <Text style={{ fontWeight: 'bold' }}>En Route status</Text>.
                        </Text>
                    </View>
                </View>



                <View className="mt-6">
                    <DriverButton
                        title="Mark as Picked Up"
                        onPress={() => router.replace('/(driver)/activities/ActiveDelivery')}
                        className="h-14"
                    />
                    <DriverButton
                        title="Cancel"
                        variant="outline"
                        onPress={() => router.back()}
                        className="mt-4 h-14 border-[#F87171]"
                        textClassName="text-[#F87171]"
                    />
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};
const headerStyles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 20,
        backgroundColor: colors.background,
    },
    backButton: {
        paddingRight: 15,
    },
    titleContainer: {
        flex: 1,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.text,
    },
    subtitle: {
        fontSize: 14,
        color: colors.subText,
    },
});

const styles = StyleSheet.create({
    scrollContent: {
        paddingBottom: 20, // مساحة أسفل الشاشة
    },
    // --- Section 2 Styles ---
    optionalText: {
        fontSize: 14,
        fontWeight: 'normal',
        color: colors.subText,
    },
    photoUploadContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    photoButton: {
        flex: 1,
        backgroundColor: colors.background,
        borderRadius: 8,
        paddingVertical: 15,
        marginHorizontal: 5,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.primary,
    },
    photoButtonText: {
        color: colors.text,
        marginTop: 5,
        fontSize: 12,
    },
    subTitle: {
        fontSize: 14,
        color: colors.text,
        marginBottom: 5,
        marginTop: 10,
    },
    signatureBox: {
        height: 100,
        backgroundColor: colors.background,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.border,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: 15,
        padding: 5,
    },
    clearButton: {
        paddingHorizontal: 8,
    },
    clearText: {
        color: colors.primary,
        fontSize: 12,
    },
    notesInput: {
        height: 70,
        backgroundColor: colors.background,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.border,
        padding: 10,
        textAlignVertical: 'top',
        color: colors.text,
        fontSize: 14,
    },

    // --- Section 3 Styles ---
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    checkbox: {
        marginRight: 10,
        borderRadius: 4,
        width: 20,
        height: 20,
        backgroundColor: colors.background,
        borderWidth: 1,
        borderColor: colors.subText,
    },
    confirmationText: {
        color: colors.text,
        fontSize: 14,
        flexShrink: 1,
    },
    infoBox: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: `${colors.primary}1A`, // خلفية خفيفة من اللون الأخضر
        padding: 10,
        borderRadius: 8,
    },
    infoText: {
        color: colors.text,
        fontSize: 12,
        lineHeight: 18,
    },
    lastSection: {
        marginBottom: 20, // فصل القسم الأخير عن الأزرار
    },

    // --- Button Styles ---
    buttonContainer: {
        paddingTop: 15,
        paddingHorizontal: 15, // تأكد من وجود حشو إذا كنت خارج ScrollView
        backgroundColor: colors.background,
    },
    pickupButton: {
        backgroundColor: colors.primary,
        borderRadius: 8,
        padding: 15,
        alignItems: 'center',
        marginBottom: 10,
    },
    disabledButton: {
        backgroundColor: '#333333', // لون رمادي عند التعطيل
    },
    buttonText: {
        color: colors.text,
        fontSize: 16,
        fontWeight: 'bold',
    },
    cancelButton: {
        alignItems: 'center',
        padding: 10,
    },
    cancelText: {
        color: colors.danger,
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default PickupConfirmationScreen;