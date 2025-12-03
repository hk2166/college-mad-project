import { useLocalSearchParams, useRouter } from "expo-router";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import RecipeCard from "../components/RecipeCard";
import { recipes } from "../data/recipes";

export default function RecipesScreen() {
  const router = useRouter();
  const { category, search } = useLocalSearchParams();

  const displayedRecipes = recipes.filter((recipe) => {
    if (category) return recipe.category === category;
    if (search)
      return recipe.title.toLowerCase().includes(search.toLowerCase());
    return true;
  });

  const renderRecipeCard = ({ item }) => (
    <RecipeCard
      title={item.title}
      cuisine_type={item.cuisine_type}
      cooking_time={item.total_time_min}
      servings={item.serves}
      image={item.image}
      onPress={() =>
        router.push(
          `/recipe-detail?recipe=${encodeURIComponent(JSON.stringify(item))}`
        )
      }
    />
  );

  const getPageTitle = () => {
    if (category) return `${category} Recipes`;
    if (search) return `Results for "${search}"`;
    return "All Recipes";
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.header}>
        <Text style={styles.title}>{getPageTitle()}</Text>
      </View>

      <FlatList
        data={displayedRecipes}
        renderItem={renderRecipeCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No recipes found</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2C3E50",
  },
  list: {
    padding: 20,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 16,
    color: "#6b7280",
  },
});
