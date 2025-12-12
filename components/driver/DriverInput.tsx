import { useState } from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { cn } from '@/lib/utils';

type DriverInputVariant = 'light' | 'dark';

type DriverInputProps = TextInputProps & {
  label?: string;
  icon?: keyof typeof Feather.glyphMap;
  helperText?: string;
  errorText?: string;
  variant?: DriverInputVariant;
  containerClassName?: string;
  secureToggle?: boolean;
};

const VARIANT_CLASSES: Record<DriverInputVariant, string> = {
  light:
    'bg-[#F7FAFC] border border-[#E2E8F0] text-[#0F172A] placeholder:text-[#94A3B8]',
  dark: 'bg-[#11181C] border border-[#1F2937] text-white placeholder:text-[#64748B]',
};

export const DriverInput = ({
  label,
  icon,
  helperText,
  errorText,
  variant = 'light',
  secureTextEntry,
  secureToggle,
  containerClassName,
  className,
  ...rest
}: DriverInputProps) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  const hasError = Boolean(errorText);

  return (
    <View className={cn('w-full', containerClassName)}>
      {label ? (
        <Text
          className={cn(
            'mb-2 text-sm font-JakartaSemiBold',
            variant === 'light' ? 'text-[#0F172A]' : 'text-white',
          )}
        >
          {label}
        </Text>
      ) : null}

      <View
        className={cn(
          'flex-row items-center rounded-2xl px-4',
          'h-[56px]',
          VARIANT_CLASSES[variant],
          hasError && 'border-[#F87171]',
        )}
      >
        {icon ? (
          <Feather
            name={icon}
            size={20}
            color={variant === 'light' ? '#475569' : '#94A3B8'}
            style={{ marginRight: 12 }}
          />
        ) : null}

        <TextInput
          className={cn(
            'flex-1 text-base font-JakartaMedium',
            variant === 'light' ? 'text-[#0F172A]' : 'text-white',
            className,
          )}
          placeholderTextColor={variant === 'light' ? '#94A3B8' : '#64748B'}
          secureTextEntry={isSecure}
          {...rest}
        />

        {secureToggle ? (
          <Feather
            name={isSecure ? 'eye-off' : 'eye'}
            size={20}
            color={variant === 'light' ? '#475569' : '#94A3B8'}
            onPress={() => setIsSecure((prev) => !prev)}
          />
        ) : null}
      </View>

      {helperText && !hasError ? (
        <Text
          className={cn(
            'mt-2 text-xs font-JakartaMedium',
            variant === 'light' ? 'text-[#64748B]' : 'text-[#94A3B8]',
          )}
        >
          {helperText}
        </Text>
      ) : null}

      {hasError ? (
        <Text className="mt-2 text-xs font-JakartaSemiBold text-[#F87171]">
          {errorText}
        </Text>
      ) : null}
    </View>
  );
};

export default DriverInput;
