import { View, Text, StyleSheet, TextInput, Platform, StatusBar, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { CREATIVES, EVENTS } from '../data/drewtechData';
import CreativeCard from '../components/CreativeCard';
import EventCard from '../components/EventCard';

const CATEGORIES = ['All', 'Creatives', 'Events', 'Harare', 'Bulawayo', 'Gweru'];

export default function SearchScreen() {
  const insets = useSafeAreaInsets();
  const [activeCat, setActiveCat] = React.useState('All');
  
  const renderDiscoveryItem = ({ item }) => {
    if (item.type === 'creative') return <CreativeCard creative={item.data} onBook={() => alert(`Booking ${item.data.name}`)} />;
    return <EventCard event={item.data} />;
  };

  const discoveryData = [];
  CREATIVES.forEach(c => discoveryData.push({ id: c.id, type: 'creative', data: c }));
  EVENTS.forEach(e => discoveryData.push({ id: e.id, type: 'event', data: e }));

  return (
    <View style={[
      styles.container,
      { paddingTop: Math.max(insets.top, Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0) }
    ]}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={16} color="#8e8e8e" />
        <TextInput
          style={styles.input}
          placeholder="Search creatives, events, or cities..."
          placeholderTextColor="#8e8e8e"
        />
      </View>

      <View style={styles.catWrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.catScroll}>
          {CATEGORIES.map(cat => (
            <TouchableOpacity 
              key={cat} 
              style={[styles.catChip, activeCat === cat && styles.catChipActive]}
              onPress={() => setActiveCat(cat)}
            >
              <Text style={[styles.catText, activeCat === cat && styles.catTextActive]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={discoveryData}
        keyExtractor={(item) => item.id}
        renderItem={renderDiscoveryItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fafafa' },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#efefef',
    borderRadius: 10,
    margin: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
  },
  input: { flex: 1, fontSize: 14, color: '#262626' },
  catWrapper: {
    marginBottom: 10,
  },
  catScroll: {
    paddingHorizontal: 12,
    gap: 8,
  },
  catChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#dbdbdb',
  },
  catChipActive: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  catText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#262626',
  },
  catTextActive: {
    color: '#fff',
  }
});
