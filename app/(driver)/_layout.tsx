import { Stack } from 'expo-router';

const DriverLayout = () => {
  return (
    <Stack
      screenOptions={{
        
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Stack.Screen name="auth/create-account" />
      <Stack.Screen name="auth/login" />
      <Stack.Screen name="auth/reset-password" />
      <Stack.Screen name="auth/document-upload" />
      <Stack.Screen name="auth/verification-status" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="profile/edit-profile" />
      <Stack.Screen name="profile/vehicle-info" />
      <Stack.Screen name="profile/service-area" />
      <Stack.Screen name="orders/order-details" />
      <Stack.Screen name="orders/order-confirmation" />
    </Stack>
  );
};

export default DriverLayout;
