import {
  View, Text, StyleSheet,
  TouchableOpacity, ScrollView,
  Platform, StatusBar
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={[
      styles.container,
      { paddingTop: Math.max(insets.top, Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0) }
    ]}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.username}>your_username</Text>
          <View style={styles.headerIcons}>
            <Ionicons name="add-circle-outline" size={24} color="#262626" />
            <Ionicons name="menu-outline" size={28} color="#262626" />
          </View>
        </View>
        
        {/* Profile info */}
        <View style={styles.profileSection}>
          <View style={styles.avatarLarge}>
            <Text style={styles.avatarLargeText}>Y</Text>
          </View>
          <View style={styles.statsRow}>
            {[['0', 'Posts'], ['0', 'Followers'], ['0', 'Following']].map(([n, l]) => (
              <View key={l} style={styles.stat}>
                <Text style={styles.statNum}>{n}</Text>
                <Text style={styles.statLabel}>{l}</Text>
              </View>
            ))}
          </View>
        </View>

        <Text style={styles.displayName}>Your Name</Text>
        <Text style={styles.bio}>Your bio goes here ✨</Text>

        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.editBtn}>
            <Text style={styles.editBtnText}>Edit profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.editBtn}>
            <Text style={styles.editBtnText}>Share profile</Text>
          </TouchableOpacity>
        </View>

        {/* Grid placeholder */}
        <View style={styles.gridPlaceholder}>
          <Ionicons name="camera-outline" size={40} color="#dbdbdb" />
          <Text style={styles.gridHint}>No posts yet</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16, paddingVertical: 10,
  },
  username: { fontWeight: '700', fontSize: 18, color: '#262626' },
  headerIcons: { flexDirection: 'row', gap: 14 },
  profileSection: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 16, paddingBottom: 12, gap: 24,
  },
  avatarLarge: {
    width: 80, height: 80, borderRadius: 40,
    backgroundColor: '#0095f6',
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 1, borderColor: '#dbdbdb',
  },
  avatarLargeText: { color: '#fff', fontWeight: '700', fontSize: 28 },
  statsRow: { flex: 1, flexDirection: 'row', justifyContent: 'space-around' },
  stat: { alignItems: 'center', gap: 2 },
  statNum: { fontWeight: '700', fontSize: 16, color: '#262626' },
  statLabel: { fontSize: 12, color: '#262626' },
  displayName: { fontWeight: '600', fontSize: 14, paddingHorizontal: 16, marginBottom: 2 },
  bio: { fontSize: 13, color: '#262626', paddingHorizontal: 16, marginBottom: 12 },
  actionRow: { flexDirection: 'row', gap: 8, paddingHorizontal: 16, marginBottom: 16 },
  editBtn: {
    flex: 1, backgroundColor: '#efefef', borderRadius: 8,
    paddingVertical: 7, alignItems: 'center',
  },
  editBtnText: { fontWeight: '600', fontSize: 13, color: '#262626' },
  gridPlaceholder: {
    height: 300, alignItems: 'center', justifyContent: 'center', gap: 12,
  },
  gridHint: { fontSize: 14, color: '#8e8e8e' },
});
