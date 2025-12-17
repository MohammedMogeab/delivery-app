import { Pressable, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { cn } from '@/lib/utils';

const LANGUAGES = ['EN', 'AR'] as const;

type FooterControlsProps = {
  isDarkMode: boolean;
  onToggleTheme: () => void;
};

export const FooterControls = ({
  isDarkMode,
  onToggleTheme,
}: FooterControlsProps) => {
  const variant = isDarkMode ? 'dark' : 'light';

  const textPrimary = variant === 'light' ? '#0F172A' : '#F8FAFC';
  const pillBg = variant === 'light' ? '#E2E8F0' : '#1F2937';
  const pillActive = '#22C55E';

  return (
    <View className="mt-8 flex-row items-center justify-between">

      <View className="flex-row items-center rounded-full px-4 py-2">
        <Feather name="globe" size={18} color={textPrimary} />
      </View>

      <View
        className="flex-row items-center rounded-full p-1"
        style={{ backgroundColor: pillBg }}
      >
        {LANGUAGES.map((item) => (
          <View
            key={item}
            className="rounded-full px-3 py-1"
            style={{ backgroundColor: pillActive }}
          >
            <Text className="text-sm font-JakartaSemiBold text-white">
              {item}
            </Text>
          </View>
        ))}
      </View>

      {/* 🌙 زر تغيير الثيم */}
      <Pressable
        onPress={onToggleTheme}
        className={cn(
          'flex-row items-center rounded-full px-4 py-2',
          variant === 'light' ? 'bg-[#E2E8F0]' : 'bg-[#1F2937]'
        )}
      >
        <Feather
          name={isDarkMode ? 'moon' : 'sun'}
          size={18}
          color={isDarkMode ? '#22C55E' : textPrimary}
        />
      </Pressable>
    </View>
  );
};

export default FooterControls;
