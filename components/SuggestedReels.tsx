import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface Reel {
  id: string;
  color: string;
  username?: string;
}

interface SuggestedReelsProps {
  reels: Reel[];
}

export default function SuggestedReels({ reels }: SuggestedReelsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Suggested reels</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.row}
      >
        {reels.map((reel) => (
          <TouchableOpacity
            key={reel.id}
            style={[styles.thumb, { backgroundColor: reel.color }]}
            activeOpacity={0.85}
          >
            {reel.username ? (
              <View style={styles.overlay}>
                <Text style={styles.reelUser}>{reel.username}</Text>
              </View>
            ) : null}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#dbdbdb',
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#262626',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    gap: 4,
  },
  thumb: {
    width: 110,
    height: 155,
    borderRadius: 6,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  overlay: {
    padding: 6,
  },
  reelUser: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
});
