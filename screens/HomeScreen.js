import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar as RNStatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import StoriesBar from '../components/StoriesBar';
import PostCard from '../components/PostCard';
import SuggestedReels from '../components/SuggestedReels';
import { STORIES, POSTS, SUGGESTED_REELS } from '../data/mockData';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  
  // Build feed items: stories first, then interleave reels after post 1
  const feedItems = [];

  POSTS.forEach((post, index) => {
    feedItems.push({ type: 'post', data: post, id: post.id });
    if (index === 0) {
      feedItems.push({ type: 'reels', data: SUGGESTED_REELS, id: 'reels' });
    }
  });

  const renderItem = ({ item }) => {
    if (item.type === 'post') {
      return <PostCard post={item.data} />;
    }
    if (item.type === 'reels') {
      return <SuggestedReels reels={item.data} />;
    }
    return null;
  };

  const ListHeader = () => (
    <StoriesBar stories={STORIES} />
  );

  return (
    <View style={[
      styles.container, 
      { 
        paddingTop: Math.max(insets.top, Platform.OS === 'android' ? RNStatusBar.currentHeight || 0 : 0) 
      }
    ]}>
      {/* Top Nav */}
      <View style={styles.topNav}>
        <Text style={styles.logo}>Drewtech Connect</Text>
        <View style={styles.navIcons}>
          <TouchableOpacity style={styles.notifWrap} activeOpacity={0.7}>
            <Ionicons name="heart-outline" size={26} color="#262626" />
            <View style={styles.notifDot} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <Ionicons name="chatbubble-outline" size={26} color="#262626" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Feed */}
      <FlatList
        data={feedItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={ListHeader}
        showsVerticalScrollIndicator={false}
        style={styles.feed}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  topNav: {
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#dbdbdb',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  logo: {
    fontSize: 26,
    fontWeight: '700',
    color: '#262626',
    fontStyle: 'italic',
    fontFamily: 'serif',
  },
  navIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  notifWrap: {
    position: 'relative',
  },
  notifDot: {
    position: 'absolute',
    top: -1,
    right: -1,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#e74c3c',
    borderWidth: 1.5,
    borderColor: '#fff',
  },
  feed: {
    flex: 1,
  },
});
