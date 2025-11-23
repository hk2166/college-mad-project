import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TabContainer({ activeTab, onTabChange }) {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity 
        style={[styles.tab, activeTab === 'ingredients' && styles.activeTab]}
        onPress={() => onTabChange('ingredients')}
      >
        <Text style={[styles.tabText, activeTab === 'ingredients' && styles.activeTabText]}>
          Ingredients
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.tab, activeTab === 'instructions' && styles.activeTab]}
        onPress={() => onTabChange('instructions')}
      >
        <Text style={[styles.tabText, activeTab === 'instructions' && styles.activeTabText]}>
          Instructions
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#F8F9FA',
    borderRadius: 15,
    padding: 5,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 12,
  },
  activeTab: {
    backgroundColor: '#FF6B6B',
    shadowColor: '#FF6B6B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#7F8C8D',
  },
  activeTabText: {
    color: '#fff',
  },
});
