import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function EventCard({ event }) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.eventName}>{event.name}</Text>
          <Text style={styles.location}>{event.location}</Text>
        </View>
        <TouchableOpacity style={styles.featureBadge}>
          <Text style={styles.featureText}>FEATURED</Text>
        </TouchableOpacity>
      </View>

      <Image source={{ uri: event.poster }} style={styles.poster} />

      <View style={styles.footer}>
        <View style={styles.infoRow}>
          <Ionicons name="calendar-outline" size={16} color="#0095f6" />
          <Text style={styles.infoText}>{event.date} • {event.time}</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Ionicons name="ticket-outline" size={16} color="#0095f6" />
          <Text style={styles.infoText}>{event.ticketInfo}</Text>
        </View>

        <TouchableOpacity style={styles.bookBtn}>
          <Text style={styles.bookBtnText}>Get Tickets</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginBottom: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dbdbdb',
  },
  header: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eventName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#262626',
  },
  location: {
    fontSize: 12,
    color: '#8e8e8e',
    marginTop: 2,
  },
  featureBadge: {
    backgroundColor: '#e74c3c',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  featureText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '800',
  },
  poster: {
    width: '100%',
    aspectRatio: 16/9,
  },
  footer: {
    padding: 12,
    gap: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  infoText: {
    fontSize: 13,
    color: '#262626',
  },
  bookBtn: {
    backgroundColor: '#0095f6',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 4,
  },
  bookBtnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
});
