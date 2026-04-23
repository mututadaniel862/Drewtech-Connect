import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function StoriesBar({ stories }) {
  const [seenIds, setSeenIds] = useState(
    stories.filter(s => s.seen).map(s => s.id)
  );

  const markSeen = (id) => {
    if (!seenIds.includes(id)) {
      setSeenIds(prev => [...prev, id]);
    }
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {stories.map((story) => {
        const isSeen = seenIds.includes(story.id);
        const isAdd = story.isAdd;

        return (
          <TouchableOpacity
            key={story.id}
            style={styles.item}
            onPress={() => !isAdd && markSeen(story.id)}
            activeOpacity={0.8}
          >
            {isAdd ? (
              <View style={styles.addRing}>
                <View style={[styles.innerCircle, { backgroundColor: '#fff' }]}>
                  <Text style={styles.addText}>+</Text>
                </View>
              </View>
            ) : (
              <LinearGradient
                colors={
                  isSeen
                    ? ['#dbdbdb', '#dbdbdb']
                    : ['#f09433', '#e6683c', '#dc2743', '#cc2366', '#bc1888']
                }
                style={styles.gradientRing}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
              >
                <View style={styles.innerCircle}>
                  <View style={[styles.avatar, { backgroundColor: story.color }]}>
                    <Text style={styles.initials}>{story.initials}</Text>
                  </View>
                </View>
              </LinearGradient>
            )}
            <Text style={styles.username} numberOfLines={1}>
              {story.username}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#dbdbdb',
  },
  content: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    gap: 12,
    flexDirection: 'row',
  },
  item: {
    alignItems: 'center',
    gap: 4,
    marginRight: 4,
  },
  addRing: {
    width: 58,
    height: 58,
    borderRadius: 29,
    borderWidth: 1,
    borderColor: '#dbdbdb',
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientRing: {
    width: 58,
    height: 58,
    borderRadius: 29,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: '100%',
    height: '100%',
    borderRadius: 999,
    borderWidth: 2.5,
    borderColor: '#fff',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  avatar: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  addText: {
    color: '#0095f6',
    fontSize: 24,
    fontWeight: '300',
    lineHeight: 28,
  },
  username: {
    fontSize: 10,
    color: '#262626',
    maxWidth: 60,
    textAlign: 'center',
  },
});
