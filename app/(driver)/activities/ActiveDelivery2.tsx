import { View,Text } from "react-native";
import { DriverButton } from "@/components/driver/DriverButton";
import { router } from "expo-router";
const ActiveDelivery2 = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Active Delivery 2 Screen</Text>
            <DriverButton
                title="Cancel"
                variant="outline"
                onPress={() => router.back()}
                className="mt-4 h-14 border-[#F87171]"
                textClassName="text-[#F87171]"
            />
        </View>
    );
}
export default ActiveDelivery2;