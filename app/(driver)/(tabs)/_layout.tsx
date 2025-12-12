import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

const TAB_ICONS: Record<string, keyof typeof Feather.glyphMap> = {
  home: 'home',
  orders: 'shopping-bag',
  chat: 'message-circle',
  wallet: 'credit-card',
  profile: 'user',
};

const TabBarIcon = ({
  focused,
  color,
  name,
}: {
  focused: boolean;
  color: string;
  name: keyof typeof Feather.glyphMap;
}) => {
  return (
    <View
      style={{
        backgroundColor: focused ? '#11181C' : 'transparent',
        paddingVertical: 0,
        paddingHorizontal: 0,
        borderRadius: 0,
      }}
    >
      <Feather name={name} size={20} color={color} />
    </View>
  );
};

const DriverTabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#05090C',
          borderTopColor: '#1F2937',
     
         
          
        },
        tabBarActiveTintColor: '#22C55E',
        tabBarInactiveTintColor: '#94A3B8',
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontFamily: 'JakartaSemiBold',
          fontSize: 12,
          marginTop: 0,
          marginBottom: 4,
        },
      }}
    >
      {Object.entries(TAB_ICONS).map(([name, icon]) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title: name.charAt(0).toUpperCase() + name.slice(1),
            tabBarIcon: ({ focused, color }) => (
              <TabBarIcon name={icon} focused={focused} color={color} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default DriverTabsLayout;
