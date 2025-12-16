// styles.js (أو styles.ts)
import { StyleSheet } from 'react-native';

export const colors = {
    background: '#0B0F14', // خلفية داكنة جداً
    cardBackground: '#121826', // خلفية الأقسام الداخلية
    text: '#FFFFFF',
    subText: '#94A3B8',
    primary: '#22C55E', // الأخضر الأساسي
    danger: '#F44336', // الأحمر للإلغاء
    greenBadge: '#2E7D32', // لون البطاقة الخضراء
    greenBadgeText: '#C8E6C9',
    border: '#1E293B',
    lightBlue: '#60A5FA',
    stepInactive: '#334155',
};

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 15,
    },
    sectionContainer: {
        backgroundColor: colors.cardBackground,
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: colors.border,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    label: {
        fontSize: 14,
        color: colors.subText,
    },
    value: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.text,
    },
});