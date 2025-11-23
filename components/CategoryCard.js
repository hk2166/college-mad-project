import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CategoryCard({ item, onPress }) {
  const getCategoryColor = (id) => {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'];
    return colors[parseInt(id) - 1] || '#FF6B6B';
  };

  return (
    <TouchableOpacity style={styles.categoryCard} onPress={onPress}>
      <View style={[styles.categoryIcon, { backgroundColor: getCategoryColor(item.id) }]}>
        <Text style={styles.categoryIconText}>🍽️</Text>
      </View>
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categoryCard: {
    alignItems: 'center',
    marginRight: 16,
    marginBottom: 12,
  },
  categoryIcon: {
    width: 80,
    height: 80,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.20,
    shadowRadius: 10,
    elevation: 8,
  },
  categoryIconText: {
    fontSize: 34,
  },
  categoryName: {
    textAlign: 'center',
    fontSize: 14,
    color: '#1e293b',
    fontWeight: '700',
    letterSpacing: 0.2,
  },
});
