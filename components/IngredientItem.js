import { StyleSheet, Text, View } from 'react-native';

export default function IngredientItem({ item }) {
  return (
    <View style={styles.ingredientItem}>
      <View style={styles.ingredientCheck}>
        <Text style={styles.checkIcon}>✓</Text>
      </View>
      <View style={styles.ingredientContent}>
        <Text style={styles.ingredientName}>{item.name}</Text>
        <Text style={styles.ingredientAmount}>{item.amount} {item.unit}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ingredientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 12,
    padding: 16,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  ingredientCheck: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#E8F5E8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  checkIcon: {
    fontSize: 12,
    color: '#27AE60',
    fontWeight: 'bold',
  },
  ingredientContent: {
    flex: 1,
  },
  ingredientName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 2,
    textTransform: 'capitalize',
  },
  ingredientAmount: {
    fontSize: 14,
    color: '#7F8C8D',
    fontWeight: '500',
  },
});
