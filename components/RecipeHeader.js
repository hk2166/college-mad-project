import { StyleSheet, Text, View } from 'react-native';

export default function RecipeHeader({ recipe }) {
  return (
    <View style={styles.recipeHeader}>
      <Text style={styles.recipeTitle}>{recipe.title}</Text>
      <View style={styles.metaContainer}>
        <View style={styles.metaItem}>
          <Text style={styles.metaIcon}>👥</Text>
          <Text style={styles.metaText}>{recipe.serves}</Text>
          <Text style={styles.metaLabel}>Servings</Text>
        </View>
        <View style={styles.metaItem}>
          <Text style={styles.metaIcon}>⏱️</Text>
          <Text style={styles.metaText}>{recipe.prep_time_min}m</Text>
          <Text style={styles.metaLabel}>Prep</Text>
        </View>
        <View style={styles.metaItem}>
          <Text style={styles.metaIcon}>🔥</Text>
          <Text style={styles.metaText}>{recipe.cook_time_min}m</Text>
          <Text style={styles.metaLabel}>Cook</Text>
        </View>
        <View style={styles.metaItem}>
          <Text style={styles.metaIcon}>⭐</Text>
          <Text style={styles.metaText}>4.8</Text>
          <Text style={styles.metaLabel}>Rating</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  recipeHeader: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  recipeTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#2C3E50',
    marginBottom: 20,
    lineHeight: 38,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F8F9FA',
    borderRadius: 15,
    padding: 15,
  },
  metaItem: {
    alignItems: 'center',
    flex: 1,
  },
  metaIcon: {
    fontSize: 20,
    marginBottom: 5,
  },
  metaText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 2,
  },
  metaLabel: {
    fontSize: 12,
    color: '#7F8C8D',
    fontWeight: '500',
  },
});
