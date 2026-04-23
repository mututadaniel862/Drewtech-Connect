import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Switch, Platform, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function AdminScreen() {
  const insets = useSafeAreaInsets();
  const [isEvent, setIsEvent] = useState(true);

  return (
    <View style={[
      styles.container,
      { paddingTop: Math.max(insets.top, Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0) }
    ]}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Admin Panel</Text>
        <Text style={styles.headerSub}>Manage Creatives & Events</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.toggleRow}>
          <Text style={styles.label}>Post as: {isEvent ? 'Event Organizer' : 'Creative'}</Text>
          <Switch value={isEvent} onValueChange={setIsEvent} trackColor={{ true: '#000' }} />
        </View>

        <View style={styles.form}>
          <Text style={styles.sectionTitle}>{isEvent ? 'Submit New Event' : 'Create Creative Profile'}</Text>
          
          <Text style={styles.inputLabel}>{isEvent ? 'Event Name' : 'Full Name'}</Text>
          <TextInput style={styles.input} placeholder={isEvent ? "e.g. Harare Youth Fest" : "e.g. DJ Drew"} />

          <Text style={styles.inputLabel}>{isEvent ? 'Location' : 'Skill'}</Text>
          <TextInput style={styles.input} placeholder={isEvent ? "e.g. Highlands, Harare" : "e.g. Photographer"} />

          {isEvent && (
            <>
              <Text style={styles.inputLabel}>Date & Time</Text>
              <TextInput style={styles.input} placeholder="e.g. May 24, 12:00 PM" />
            </>
          )}

          <Text style={styles.inputLabel}>{isEvent ? 'Ticket Info' : 'Bio'}</Text>
          <TextInput 
            style={[styles.input, { height: 80 }]} 
            placeholder={isEvent ? "e.g. $5 Entry" : "Tell us about your work..."} 
            multiline 
          />

          <TouchableOpacity style={styles.uploadBtn}>
            <Ionicons name="cloud-upload-outline" size={24} color="#000" />
            <Text style={styles.uploadText}>{isEvent ? 'Upload Event Poster' : 'Upload Portfolio'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitBtn}>
            <Text style={styles.submitText}>Submit for Approval</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.adminSection}>
          <Text style={styles.sectionTitle}>Pending Approvals (3)</Text>
          <View style={styles.pendingItem}>
            <Text style={styles.pendingName}>Tinashe Photos (Creative)</Text>
            <View style={styles.pendingActions}>
              <TouchableOpacity style={styles.approveBtn}><Text style={styles.btnText}>Approve</Text></TouchableOpacity>
              <TouchableOpacity style={styles.rejectBtn}><Text style={styles.btnText}>Decline</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 20, borderBottomWidth: 0.5, borderBottomColor: '#dbdbdb' },
  headerTitle: { fontSize: 24, fontWeight: '800', color: '#000' },
  headerSub: { fontSize: 14, color: '#8e8e8e', marginTop: 4 },
  scroll: { padding: 20 },
  toggleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, backgroundColor: '#f9f9f9', padding: 12, borderRadius: 12 },
  label: { fontSize: 15, fontWeight: '600' },
  form: { gap: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '700', marginBottom: 8, color: '#000' },
  inputLabel: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: -10 },
  input: { borderBottomWidth: 1, borderBottomColor: '#dbdbdb', paddingVertical: 10, fontSize: 16 },
  uploadBtn: { borderStyle: 'dashed', borderWidth: 1, borderColor: '#dbdbdb', borderRadius: 12, padding: 24, alignItems: 'center', gap: 8, marginTop: 10 },
  uploadText: { fontSize: 14, fontWeight: '600' },
  submitBtn: { backgroundColor: '#000', borderRadius: 12, paddingVertical: 16, alignItems: 'center', marginTop: 20 },
  submitText: { color: '#fff', fontWeight: '700', fontSize: 16 },
  adminSection: { marginTop: 40, borderTopWidth: 1, borderTopColor: '#efefef', paddingTop: 24 },
  pendingItem: { backgroundColor: '#f9f9f9', padding: 16, borderRadius: 12, marginTop: 12 },
  pendingName: { fontWeight: '600', marginBottom: 12 },
  pendingActions: { flexDirection: 'row', gap: 8 },
  approveBtn: { flex: 1, backgroundColor: '#2ecc71', paddingVertical: 8, borderRadius: 6, alignItems: 'center' },
  rejectBtn: { flex: 1, backgroundColor: '#e74c3c', paddingVertical: 8, borderRadius: 6, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: '700', fontSize: 12 },
});
