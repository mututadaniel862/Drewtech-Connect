import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CreativeCard({ creative, onBook }) {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Image source={{ uri: creative.avatar }} style={styles.avatar} />
        <View style={styles.info}>
          <Text style={styles.name}>{creative.name}</Text>
          <Text style={styles.skill}>{creative.skill}</Text>
          <Text style={styles.bio} numberOfLines={2}>{creative.bio}</Text>
        </View>
        <TouchableOpacity style={styles.bookBtn} onPress={onBook}>
          <Text style={styles.bookText}>Book</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.portfolioGrid}>
        {creative.portfolio.map((item, index) => (
          <Image key={item.id} source={{ uri: item.url }} style={styles.portfolioImg} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginVertical: 6,
    borderRadius: 12,
    padding: 12,
    borderWidth: 0.5,
    borderColor: '#dbdbdb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#efefef',
  },
  info: {
    flex: 1,
    gap: 2,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#262626',
  },
  skill: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0095f6',
    textTransform: 'uppercase',
  },
  bio: {
    fontSize: 12,
    color: '#737373',
    lineHeight: 16,
  },
  bookBtn: {
    backgroundColor: '#000',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  bookText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
  },
  portfolioGrid: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 8,
  },
  portfolioImg: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 8,
    backgroundColor: '#efefef',
  },
});
