import { View, Text, StyleSheet, TextInput, Platform, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function SearchScreen() {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={[
      styles.container,
      { paddingTop: Math.max(insets.top, Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0) }
    ]}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={16} color="#8e8e8e" />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#8e8e8e"
        />
      </View>
      <View style={styles.center}>
        <Ionicons name="search-outline" size={48} color="#dbdbdb" />
        <Text style={styles.hint}>Search for people & places</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#efefef',
    borderRadius: 10,
    margin: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 8,
  },
  input: { flex: 1, fontSize: 14, color: '#262626' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 },
  hint: { fontSize: 14, color: '#8e8e8e' },
});
