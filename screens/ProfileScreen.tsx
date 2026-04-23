import React from 'react';
import {
  View, Text, StyleSheet,
  TouchableOpacity, ScrollView,
  Platform, StatusBar, Image
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { CREATIVES } from '../data/drewtechData';

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const creative = CREATIVES[0]; // Example: DJ Drew
  
  return (
    <View style={[
      styles.container,
      { paddingTop: Math.max(insets.top, Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0) }
    ]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.username}>{creative.name.toLowerCase().replace(' ', '_')}</Text>
          <View style={styles.headerIcons}>
            <Ionicons name="notifications-outline" size={24} color="#262626" />
            <Ionicons name="menu-outline" size={28} color="#262626" />
          </View>
        </View>
        
        {/* Profile info */}
        <View style={styles.profileSection}>
          <Image source={{ uri: creative.avatar }} style={styles.avatarLarge} />
          <View style={styles.statsRow}>
            {[['12', 'Posts'], ['1.2k', 'Followers'], ['340', 'Following']].map(([n, l]) => (
              <View key={l} style={styles.stat}>
                <Text style={styles.statNum}>{n}</Text>
                <Text style={styles.statLabel}>{l}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.bioSection}>
          <Text style={styles.displayName}>{creative.name} • {creative.skill}</Text>
          <Text style={styles.bio}>{creative.bio}</Text>
          <Text style={styles.link}>drewtech.connect/booking/{creative.id}</Text>
        </View>

        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.bookBtn}>
            <Text style={styles.bookBtnText}>Book Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.subBtn}>
            <Text style={styles.subBtnText}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.subBtn}>
            <Ionicons name="person-add-outline" size={18} color="#262626" />
          </TouchableOpacity>
        </View>

        {/* Portfolio Tabs */}
        <View style={styles.tabs}>
          <TouchableOpacity style={styles.activeTab}>
            <Ionicons name="grid-outline" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.inactiveTab}>
            <Ionicons name="play-circle-outline" size={22} color="#8e8e8e" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.inactiveTab}>
            <Ionicons name="person-outline" size={22} color="#8e8e8e" />
          </TouchableOpacity>
        </View>

        {/* Portfolio Grid */}
        <View style={styles.grid}>
          {creative.portfolio.concat(creative.portfolio).map((item, index) => (
            <Image 
              key={index} 
              source={{ uri: item.url }} 
              style={styles.gridItem} 
            />
          ))}
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
    paddingHorizontal: 16, paddingVertical: 12, gap: 24,
  },
  avatarLarge: {
    width: 80, height: 80, borderRadius: 40,
    backgroundColor: '#efefef',
    borderWidth: 1, borderColor: '#dbdbdb',
  },
  statsRow: { flex: 1, flexDirection: 'row', justifyContent: 'space-around' },
  stat: { alignItems: 'center', gap: 2 },
  statNum: { fontWeight: '700', fontSize: 16, color: '#262626' },
  statLabel: { fontSize: 12, color: '#262626' },
  bioSection: { paddingHorizontal: 16, marginBottom: 12 },
  displayName: { fontWeight: '700', fontSize: 14, color: '#262626', marginBottom: 2 },
  bio: { fontSize: 13, color: '#262626', lineHeight: 18 },
  link: { color: '#00376b', fontSize: 13, fontWeight: '600', marginTop: 4 },
  actionRow: { flexDirection: 'row', gap: 8, paddingHorizontal: 16, marginBottom: 20 },
  bookBtn: {
    flex: 3, backgroundColor: '#000', borderRadius: 8,
    paddingVertical: 8, alignItems: 'center',
  },
  bookBtnText: { fontWeight: '700', fontSize: 13, color: '#fff' },
  subBtn: {
    flex: 1, backgroundColor: '#efefef', borderRadius: 8,
    paddingVertical: 8, alignItems: 'center', justifyContent: 'center',
  },
  subBtnText: { fontWeight: '600', fontSize: 13, color: '#262626' },
  tabs: {
    flexDirection: 'row', borderTopWidth: 0.5, borderTopColor: '#dbdbdb',
  },
  activeTab: {
    flex: 1, alignItems: 'center', paddingVertical: 12,
    borderBottomWidth: 1.5, borderBottomColor: '#000',
  },
  inactiveTab: {
    flex: 1, alignItems: 'center', paddingVertical: 12,
  },
  grid: {
    flexDirection: 'row', flexWrap: 'wrap',
  },
  gridItem: {
    width: '33.33%', aspectRatio: 1,
    borderWidth: 0.5, borderColor: '#fff',
  },
});
