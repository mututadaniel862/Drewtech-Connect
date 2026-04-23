import { View, Text, StyleSheet, Platform, StatusBar, FlatList, Image, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { MEDIA_REELS } from '../data/drewtechData';

export default function ReelsScreen() {
  const insets = useSafeAreaInsets();
  
  const renderMedia = ({ item }) => (
    <TouchableOpacity style={styles.mediaCard} activeOpacity={0.9}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumb} />
      <View style={styles.overlay}>
        <Ionicons name="play-circle" size={50} color="rgba(255,255,255,0.8)" />
      </View>
      <View style={styles.mediaInfo}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.type.toUpperCase()}</Text>
        </View>
        <Text style={styles.mediaTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[
      styles.container,
      { paddingTop: Math.max(insets.top, Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0) }
    ]}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Media & Coverage</Text>
      </View>
      <FlatList
        data={MEDIA_REELS}
        keyExtractor={item => item.id}
        renderItem={renderMedia}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  header: { padding: 16, borderBottomWidth: 0.5, borderBottomColor: '#333' },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: '700' },
  list: { padding: 8 },
  mediaCard: {
    marginBottom: 16,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#1a1a1a',
    aspectRatio: 16/9,
  },
  thumb: { width: '100%', height: '100%' },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  mediaInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  badge: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginBottom: 4,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#000',
  },
  mediaTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
