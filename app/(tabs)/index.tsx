import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { Logo, MoviePoster, Pill, PrimaryButton, SectionTitle, styles as ui } from '@/components/CineGoUI';
import { movies } from '@/data/movies';
import { useColors } from '@/hooks/useColors';
import { router } from 'expo-router';
import { useCineGo } from '@/context/CineGoContext';
import * as Location from 'expo-location';
import { Platform } from 'react-native';

export default function Home() {
  const colors = useColors(); const insets = useSafeAreaInsets(); const { interested } = useCineGo(); const [locationLabel, setLocationLabel] = React.useState('Dubai');
  React.useEffect(() => {
    if (Platform.OS === 'web') return;
    Location.requestForegroundPermissionsAsync().then(async ({ status }) => {
      if (status !== 'granted') return;
      const position = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced });
      const places = await Location.reverseGeocodeAsync({ latitude: position.coords.latitude, longitude: position.coords.longitude });
      const place = places[0];
      if (place?.city) setLocationLabel(place.city);
    }).catch(() => undefined);
  }, []);
  return <ScrollView style={{ backgroundColor: colors.background }} contentContainerStyle={[styles.container, { paddingTop: insets.top + 14, paddingBottom: 118 }]} showsVerticalScrollIndicator={false}>
    <View style={styles.header}><Logo /><Pressable style={[styles.bell, { backgroundColor: colors.secondary }]}><Feather name="bell" size={18} color={colors.foreground} /><View style={[styles.dot, { backgroundColor: colors.primary }]} /></Pressable></View>
    <View style={styles.greeting}><Text style={[styles.eyebrow, { color: colors.primary }]}>FRIDAY NIGHT, DUBAI</Text><Text style={[styles.title, { color: colors.foreground }]}>Find your people.{'\n'}Find your film.</Text><Text style={[styles.sub, { color: colors.mutedForeground }]}>Good movies are better together.</Text></View>
    <View style={[styles.location, { backgroundColor: colors.card, borderColor: colors.border }]}><Feather name="map-pin" size={15} color={colors.primary} /><Text style={[styles.locationText, { color: colors.foreground }]}>Showing cinemas near <Text style={{ fontFamily: 'Inter_700Bold' }}>{locationLabel}</Text></Text><Feather name="chevron-down" size={15} color={colors.mutedForeground} /></View>
    <SectionTitle title="Tonight's picks" action="See all" onPress={() => router.push('/discover')} />
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 14, paddingRight: 18 }}>
      {movies.map(movie => <Pressable key={movie.id} onPress={() => router.push(`/movie/${movie.id}`)} style={({ pressed }) => [styles.movieCard, { backgroundColor: colors.card, borderColor: colors.border, opacity: pressed ? .88 : 1 }]}><MoviePoster source={movie.poster} /><View style={styles.movieMeta}><Text style={[styles.movieTitle, { color: colors.foreground }]} numberOfLines={1}>{movie.title}</Text><Text style={[styles.movieGenre, { color: colors.mutedForeground }]}>{movie.genre}</Text><View style={styles.rating}><Feather name="star" size={13} color={colors.accent} /><Text style={[styles.ratingText, { color: colors.accent }]}>{movie.rating}</Text></View></View></Pressable>)}
    </ScrollView>
    <SectionTitle title="People making plans" action="View map" />
    <View style={[styles.peopleCard, { backgroundColor: colors.card, borderColor: colors.border }]}><View style={[styles.mapOrb, { backgroundColor: colors.secondary }]}><View style={[styles.mapLine, { borderColor: colors.border }]} /><Feather name="map-pin" size={29} color={colors.primary} /><View style={[styles.mapPin2, { backgroundColor: colors.accent }]} /><View style={[styles.mapPin3, { backgroundColor: colors.primary }]} /></View><View style={styles.peopleInfo}><Text style={[styles.peopleNumber, { color: colors.foreground }]}>18 cinephiles</Text><Text style={[styles.peopleText, { color: colors.mutedForeground }]}>nearby are looking for company tonight.</Text><View style={styles.miniAvatars}><Text style={[styles.avatarMore, { color: colors.primary }]}>+12 more</Text></View></View></View>
    <SectionTitle title="Your next plan" action={interested.length ? 'View plans' : undefined} onPress={() => router.push('/plans')} />
    <View style={[styles.planCard, { backgroundColor: colors.primary }]}><View><Text style={[styles.planLabel, { color: colors.primaryForeground }]}>YOU'RE INTERESTED IN</Text><Text style={[styles.planMovie, { color: colors.primaryForeground }]}>The Last Signal</Text><Text style={[styles.planTime, { color: colors.primaryForeground }]}>Today · 6:45 PM · VOX MOE</Text></View><Feather name="arrow-up-right" size={22} color={colors.primaryForeground} /></View>
  </ScrollView>;
}
const styles = StyleSheet.create({ container: { paddingHorizontal: 20 }, header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, bell: { width: 40, height: 40, borderRadius: 13, alignItems: 'center', justifyContent: 'center' }, dot: { position: 'absolute', width: 7, height: 7, borderRadius: 4, top: 8, right: 9 }, greeting: { marginTop: 38, marginBottom: 22 }, eyebrow: { fontFamily: 'Inter_700Bold', fontSize: 11, letterSpacing: 1.4, marginBottom: 10 }, title: { fontFamily: 'Inter_700Bold', fontSize: 31, lineHeight: 35, letterSpacing: -1.1 }, sub: { fontFamily: 'Inter_400Regular', fontSize: 15, marginTop: 9 }, location: { height: 43, borderWidth: 1, borderRadius: 13, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 13, gap: 8, marginBottom: 29 }, locationText: { fontFamily: 'Inter_500Medium', fontSize: 13, flex: 1 }, movieCard: { width: 160, padding: 10, borderRadius: 18, borderWidth: 1 }, movieMeta: { paddingTop: 10, paddingHorizontal: 2 }, movieTitle: { fontFamily: 'Inter_700Bold', fontSize: 14 }, movieGenre: { fontFamily: 'Inter_400Regular', fontSize: 11, marginTop: 4 }, rating: { flexDirection: 'row', gap: 4, alignItems: 'center', marginTop: 8 }, ratingText: { fontFamily: 'Inter_700Bold', fontSize: 12 }, peopleCard: { borderRadius: 18, borderWidth: 1, padding: 13, flexDirection: 'row', gap: 14, marginBottom: 27 }, mapOrb: { width: 132, height: 110, borderRadius: 14, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }, mapLine: { position: 'absolute', width: 190, height: 60, borderRadius: 60, borderWidth: 1, transform: [{ rotate: '-14deg' }] }, mapPin2: { position: 'absolute', width: 8, height: 8, borderRadius: 5, left: 30, top: 27 }, mapPin3: { position: 'absolute', width: 8, height: 8, borderRadius: 5, right: 26, bottom: 25 }, peopleInfo: { flex: 1, justifyContent: 'center' }, peopleNumber: { fontFamily: 'Inter_700Bold', fontSize: 17 }, peopleText: { fontFamily: 'Inter_400Regular', fontSize: 12, lineHeight: 17, marginTop: 5 }, miniAvatars: { marginTop: 10 }, avatarMore: { fontFamily: 'Inter_600SemiBold', fontSize: 12 }, planCard: { borderRadius: 18, padding: 18, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, planLabel: { fontFamily: 'Inter_700Bold', fontSize: 10, letterSpacing: 1.1, opacity: .78 }, planMovie: { fontFamily: 'Inter_700Bold', fontSize: 20, marginTop: 7 }, planTime: { fontFamily: 'Inter_500Medium', fontSize: 12, marginTop: 5, opacity: .82 } });