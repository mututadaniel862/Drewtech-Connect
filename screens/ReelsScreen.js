import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function ReelsScreen() {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={[
      styles.container,
      { paddingTop: Math.max(insets.top, Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0) }
    ]}>
      <View style={styles.center}>
        <Ionicons name="film-outline" size={48} color="#dbdbdb" />
        <Text style={styles.hint}>Reels coming soon</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 },
  hint: { fontSize: 14, color: '#8e8e8e' },
});
