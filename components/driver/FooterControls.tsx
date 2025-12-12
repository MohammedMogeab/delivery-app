import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { cn } from '@/lib/utils';

type FooterControlsProps = {
  variant?: 'light' | 'dark';
};

const LANGUAGES = ['EN', 'AR'] as const;

export const FooterControls = ({ variant = 'dark' }: FooterControlsProps) => {
  const [language, setLanguage] = useState<(typeof LANGUAGES)[number]>('EN');
  const [isDarkMode, setIsDarkMode] = useState(variant === 'dark');

  const textPrimary = variant === 'light' ? '#0F172A' : '#F8FAFC';
  const pillBg = variant === 'light' ? '#E2E8F0' : '#1F2937';
  const pillActive = '#22C55E';
  const pillInactive = 'transparent';

  return (
    <View className="mt-8 flex-row items-center justify-between">
      <View className="flex-row items-center rounded-full bg-opacity-10 px-4 py-2">
        <Feather
          name="globe"
          size={18}
          color={variant === 'light' ? '#0F172A' : '#E2E8F0'}
        />
      </View>

      <View
        className="flex-row items-center rounded-full p-1"
        style={{ backgroundColor: pillBg }}
      >
        {LANGUAGES.map((item) => {
          const active = language === item;
          return (
            <Pressable
              key={item}
              onPress={() => setLanguage(item)}
              className="rounded-full px-3 py-1"
              style={{ backgroundColor: active ? pillActive : pillInactive }}
            >
              <Text
                className="text-sm font-JakartaSemiBold"
                style={{ color: active ? '#FFFFFF' : textPrimary }}
              >
                {item}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <Pressable
        onPress={() => setIsDarkMode((prev) => !prev)}
        className={cn(
          'flex-row items-center rounded-full px-4 py-2',
          variant === 'light' ? 'bg-[#E2E8F0]' : 'bg-[#1F2937]',
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
