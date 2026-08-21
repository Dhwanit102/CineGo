import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useColors } from '@/hooks/useColors';

export function Logo({ compact = false }: { compact?: boolean }) {
  const colors = useColors();
  return <View style={styles.logoRow}><View style={[styles.logoMark, { backgroundColor: colors.primary }]}><Feather name="film" size={compact ? 15 : 18} color={colors.primaryForeground} /></View>{!compact && <Text style={[styles.logoText, { color: colors.foreground }]}>Cine<Text style={{ color: colors.primary }}>Go</Text></Text>}</View>;
}
export function SectionTitle({ title, action, onPress }: { title: string; action?: string; onPress?: () => void }) {
  const colors = useColors(); return <View style={styles.sectionRow}><Text style={[styles.sectionTitle, { color: colors.foreground }]}>{title}</Text>{action && <Pressable onPress={onPress}><Text style={[styles.action, { color: colors.primary }]}>{action}</Text></Pressable>}</View>;
}
export function Pill({ children, active = false }: { children: React.ReactNode; active?: boolean }) {
  const colors = useColors(); return <View style={[styles.pill, { backgroundColor: active ? colors.primary : colors.secondary }]}><Text style={[styles.pillText, { color: active ? colors.primaryForeground : colors.mutedForeground }]}>{children}</Text></View>;
}
export function MoviePoster({ source, small = false }: { source: number; small?: boolean }) {
  return <Image source={source} style={small ? styles.posterSmall : styles.poster} resizeMode="cover" />;
}
export function Avatar({ name, color }: { name: string; color?: string }) {
  const colors = useColors(); return <View style={[styles.avatar, { backgroundColor: color ?? colors.accent }]}><Text style={[styles.avatarText, { color: color ? colors.primaryForeground : colors.accentForeground }]}>{name.split(' ').map(x => x[0]).join('').slice(0, 2)}</Text></View>;
}
export function PrimaryButton({ label, onPress, icon, compact = false }: { label: string; onPress?: () => void; icon?: keyof typeof Feather.glyphMap; compact?: boolean }) {
  const colors = useColors(); return <Pressable onPress={onPress} style={({ pressed }) => [styles.button, compact && styles.buttonCompact, { backgroundColor: colors.primary, opacity: pressed ? 0.82 : 1 }]}>{icon && <Feather name={icon} size={16} color={colors.primaryForeground} />}{<Text style={[styles.buttonText, { color: colors.primaryForeground }]}>{label}</Text>}</Pressable>;
}
export const styles = StyleSheet.create({
  logoRow: { flexDirection: 'row', alignItems: 'center', gap: 9 }, logoMark: { width: 32, height: 32, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }, logoText: { fontFamily: 'Inter_700Bold', fontSize: 23, letterSpacing: -0.8 }, sectionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 13 }, sectionTitle: { fontFamily: 'Inter_700Bold', fontSize: 19, letterSpacing: -0.3 }, action: { fontFamily: 'Inter_600SemiBold', fontSize: 13 }, pill: { paddingHorizontal: 11, paddingVertical: 7, borderRadius: 20 }, pillText: { fontFamily: 'Inter_600SemiBold', fontSize: 12 }, poster: { width: 136, height: 198, borderRadius: 14 }, posterSmall: { width: 62, height: 86, borderRadius: 10 }, avatar: { width: 38, height: 38, borderRadius: 19, alignItems: 'center', justifyContent: 'center' }, avatarText: { fontFamily: 'Inter_700Bold', fontSize: 12 }, button: { minHeight: 46, paddingHorizontal: 18, borderRadius: 14, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 8 }, buttonCompact: { minHeight: 38, paddingHorizontal: 14, borderRadius: 11 }, buttonText: { fontFamily: 'Inter_700Bold', fontSize: 14 },
});