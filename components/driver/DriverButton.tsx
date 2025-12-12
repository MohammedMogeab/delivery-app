import { ReactNode } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import { cn } from '@/lib/utils';
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

type DriverButtonProps = {
  title: string;
  onPress?: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  textClassName?: string;
};

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-[#22C55E]',
  secondary: 'bg-[#1E293B]',
  outline: 'bg-transparent border border-[#334155]',
  ghost: 'bg-transparent',
};

const TEXT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'text-white',
  secondary: 'text-white',
  outline: 'text-white',
  ghost: 'text-[#94A3B8]',
};

export const DriverButton = ({
  title,
  onPress,
  variant = 'primary',
  disabled,
  leftIcon,
  rightIcon,
  className,
  textClassName,
}: DriverButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      disabled={disabled}
      className={cn(
        'flex-row items-center justify-center rounded-2xl px-5 py-4',
        'transition-opacity',
        VARIANT_CLASSES[variant],
        disabled && 'opacity-50',
        className,
      )}
    >
      {leftIcon ? <View className="mr-2">{leftIcon}</View> : null}
      <Text
        className={cn(
          'text-base font-JakartaSemiBold',
          TEXT_CLASSES[variant],
          textClassName,
        )}
      >
        {title}
      </Text>
      {rightIcon ? <View className="ml-2">{rightIcon}</View> : null}
    </TouchableOpacity>
  );
};

export default DriverButton;
