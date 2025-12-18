// screens/HomeScreen.tsx
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const notifications = [
    {
        id: '1',
        type: 'order',
        title: 'New Order Assigned',
        message: 'Order #12345 has been assigned to you.',
        time: '2h ago',
    },
    {
        id: '2',
        type: 'reward',
        title: 'Weekly Bonus Achieved',
        message: "You've earned a $25 bonus.",
        time: '8h ago',
    },
    {
        id: '3',
        type: 'payout',
        title: 'Payout Processed',
        message: 'Your payout of $250.75 has been sent.',
        time: 'Yesterday',
    },
    {
        id: '4',
        type: 'system',
        title: 'App Update Required',
        message: 'A new version of the app is available.',
        time: 'Yesterday',
    },
];

const getIcon = (type: string) => {
    switch (type) {
        case 'order': return <Feather name="truck" size={20} color="#22C55E" />;
        case 'reward': return <Feather name="gift" size={20} color="#F97316" />;
        case 'payout': return <Feather name="credit-card" size={20} color="#22C55E" />;
        case 'system': return <Feather name="settings" size={20} color="#64748B" />;
        default: return null;
    }
};

const tabs = ['All', 'Orders', 'Rewards', 'System'];

const Notifications = () => {
    const [activeTab, setActiveTab] = useState('All');

    const filteredNotifications = notifications.filter((item) => {
        if (activeTab === 'All') return true;
        if (activeTab === 'Orders') return item.type === 'order';
        if (activeTab === 'Rewards') return item.type === 'reward';
        if (activeTab === 'System') return item.type === 'system' || item.type === 'payout';
        return true;
    });

    const groupByDay = (list: typeof notifications) => {
        const today: typeof notifications = [];
        const yesterday: typeof notifications = [];
        list.forEach((item) => {
            if (item.time.includes('h ago')) today.push(item);
            else yesterday.push(item);
        });
        return { today, yesterday };
    };

    const { today, yesterday } = groupByDay(filteredNotifications);

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, backgroundColor: '#05090C', padding: 20 }}>
            {/* Header */}
                <View style={styles.header}>
                    <Feather name="arrow-left" size={24} color="white" onPress={()=>router.back()}/>
                    <Text style={styles.headerTitle}>Notifications</Text>
                    <Ionicons name="checkmark-done" size={24} color="white" />
                </View>

            {/* Tabs */}
            <View style={{ flexDirection: 'row',backgroundColor: '#618662ff',borderRadius:30 }}>
                {tabs.map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        onPress={() => setActiveTab(tab)}
                        style={{
                            
                            borderRadius: 10,
                            
                            backgroundColor: activeTab === tab ? '#22C55E' : '#618862ff',
                            margin: 10,
                            paddingVertical: 8,
                            padding:8,
                        }}
                    >
                        <Text style={{
                            color: activeTab === tab ? '#0F172A' : '#94A3B8',
                            fontWeight: '600',
                        }}>
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Notifications List */}
            {today.length > 0 && (
                <>
                    <Text style={{ color: '#94A3B8', fontWeight: '700', marginBottom: 10 }}>Today</Text>
                    {today.map((item) => (
                        <View key={item.id} style={{
                            backgroundColor: '#548b6fff',
                            //opacity: 0.3,
                            borderRadius: 16,
                            padding: 16,
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 12,
                        }}>
                            <View style={{
                                width: 40,
                                height: 40,
                                borderRadius: 12,
                                backgroundColor: '#b86a32ff',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: 12,
                            }}>
                                {getIcon(item.type)}
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontWeight: '700', color: '#F8FAFC', marginBottom: 4 }}>
                                    {item.title}
                                </Text>
                                <Text style={{ color: '#94A3B8', fontSize: 13 }}>{item.message}</Text>
                            </View>
                            <Text style={{ color: '#94A3B8', fontSize: 12 }}>{item.time}</Text>
                        </View>
                    ))}
                </>
            )}

            {yesterday.length > 0 && (
                <>
                    <Text style={{ color: '#94A3B8', fontWeight: '700', marginBottom: 10 }}>Yesterday</Text>
                    {yesterday.map((item) => (
                        <View key={item.id} style={{
                            backgroundColor: '#548b6fff',
                            borderRadius: 16,
                            padding: 16,
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 12,
                        }}>
                            <View style={{
                                width: 40,
                                height: 40,
                                borderRadius: 12,
                                backgroundColor: '#11181C',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: 12,
                            }}>
                                {getIcon(item.type)}
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontWeight: '700', color: '#F8FAFC', marginBottom: 4 }}>
                                    {item.title}
                                </Text>
                                <Text style={{ color: '#209763ff', fontSize: 13 }}>{item.message}</Text>
                            </View>
                            <Text style={{ color: '#94A3B8', fontSize: 12 }}>{item.time}</Text>
                        </View>
                    ))}
                </>
            )}

            <Text style={{ color: '#22C55E', textAlign: 'center', marginTop: 20,marginBottom:30, fontSize: 15 }}>
                Notification Settings
            </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Notifications;
const styles = StyleSheet.create({
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 25 },
    headerTitle: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});