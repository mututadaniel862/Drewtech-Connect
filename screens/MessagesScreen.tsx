import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, Platform, StatusBar, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const CHATS = [
  { id: '1', name: 'DJ Drew', message: 'Yo! Can we confirm the set for Saturday?', time: '2m', avatar: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=200', unread: true },
  { id: '2', name: 'Tinashe Vision', message: 'Sent the photos via WeTransfer.', time: '1h', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200', unread: false },
  { id: '3', name: 'Organizers (Harare Youth Fest)', message: 'The stage is ready!', time: '3h', avatar: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=200', unread: true },
];

export default function MessagesScreen({ navigation }: any) {
  const insets = useSafeAreaInsets();

  const renderChatItem = ({ item }: { item: typeof CHATS[0] }) => (
    <TouchableOpacity style={styles.chatItem} activeOpacity={0.7}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.chatInfo}>
        <Text style={[styles.name, item.unread && styles.boldText]}>{item.name}</Text>
        <Text style={[styles.message, item.unread && styles.boldText]} numberOfLines={1}>
          {item.message} • {item.time}
        </Text>
      </View>
      {item.unread && <View style={styles.unreadDot} />}
      <TouchableOpacity>
        <Ionicons name="camera-outline" size={24} color="#8e8e8e" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={[
      styles.container,
      { paddingTop: Math.max(insets.top, Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0) }
    ]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={28} color="#262626" />
        </TouchableOpacity>
        <View style={styles.headerTitleRow}>
          <Text style={styles.headerTitle}>Messages</Text>
          <Ionicons name="chevron-down" size={14} color="#262626" />
        </View>
        <TouchableOpacity>
          <Ionicons name="create-outline" size={26} color="#262626" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search */}
        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color="#8e8e8e" />
          <TextInput placeholder="Search" style={styles.input} />
        </View>

        {/* Categories */}
        <View style={styles.tabs}>
          <Text style={[styles.tab, styles.activeTab]}>Messages</Text>
          <Text style={styles.tab}>Channels</Text>
          <View style={{ flex: 1 }} />
          <Text style={styles.requests}>Requests (2)</Text>
        </View>

        {/* Chat List */}
        <FlatList
          data={CHATS}
          keyExtractor={item => item.id}
          renderItem={renderChatItem}
          scrollEnabled={false}
          contentContainerStyle={styles.list}
        />
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-between', paddingHorizontal: 16,
    height: 56,
  },
  backBtn: { padding: 4 },
  headerTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  headerTitle: { fontSize: 20, fontWeight: '700', color: '#262626' },
  searchBar: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#efefef', margin: 16,
    paddingHorizontal: 12, paddingVertical: 10,
    borderRadius: 12, gap: 8,
  },
  input: { flex: 1, fontSize: 16 },
  tabs: { flexDirection: 'row', paddingHorizontal: 16, marginBottom: 12, alignItems: 'center' },
  tab: { marginRight: 24, fontSize: 15, fontWeight: '600', color: '#8e8e8e' },
  activeTab: { color: '#262626' },
  requests: { color: '#0095f6', fontWeight: '600', fontSize: 14 },
  list: { paddingBottom: 20 },
  chatItem: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 16, paddingVertical: 12, gap: 12,
  },
  avatar: { width: 56, height: 56, borderRadius: 28, backgroundColor: '#efefef' },
  chatInfo: { flex: 1 },
  name: { fontSize: 15, color: '#262626' },
  message: { fontSize: 14, color: '#8e8e8e', marginTop: 2 },
  boldText: { fontWeight: '700', color: '#000' },
  unreadDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#0095f6', marginHorizontal: 8 },
});
