import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CategoryCard from "../components/CategoryCard";
import RecipeCard from "../components/RecipeCard";
import { categories, recipes } from "../data/recipes";

export default function HomeScreen() {
  const router = useRouter();

  const renderCategory = ({ item }) => (
    <CategoryCard
      item={item}
      onPress={() =>
        router.push(`/recipes?category=${encodeURIComponent(item.name)}`)
      }
    />
  );

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

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Hey there 👋</Text>
          <Text style={styles.title}>What's cooking?</Text>

          <View style={styles.searchContainer}>
            <Ionicons
              name="search"
              size={20}
              color="#94a3b8"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search recipes..."
              placeholderTextColor="#94a3b8"
              onSubmitEditing={(e) => {
                if (e.nativeEvent.text.trim()) {
                  router.push(
                    `/recipes?search=${encodeURIComponent(
                      e.nativeEvent.text.trim()
                    )}`
                  );
                }
              }}
              returnKeyType="search"
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Browse Categories</Text>
          <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesList}
          />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Trending Now</Text>
            <TouchableOpacity onPress={() => router.push("/recipes")}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={recipes.slice(0, 5)}
            renderItem={renderRecipeCard}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.recipesList}
          />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recently Added</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={[...recipes].reverse()}
            renderItem={renderRecipeCard}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.recipesList}
          />
        </View>

        <View style={styles.bottomSpacing} />
      </ScrollView>
      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push("/chatbot")}
        activeOpacity={0.7}
      >
        <Ionicons name="chatbubble-ellipses" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 35,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 8,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f5f9",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 24,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#1e293b",
    padding: 0,
  },
  greeting: {
    fontSize: 16,
    color: "#64748b",
    marginBottom: 6,
    fontWeight: "500",
    letterSpacing: 0.3,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#0f172a",
    lineHeight: 38,
    letterSpacing: -0.5,
  },
  section: {
    marginTop: 28,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1e293b",
    letterSpacing: -0.3,
  },
  seeAllText: {
    fontSize: 15,
    color: "#f43f5e",
    fontWeight: "600",
    letterSpacing: 0.2,
  },
  categoriesList: {
    paddingLeft: 5,
  },
  recipesList: {
    paddingLeft: 5,
  },
  bottomSpacing: {
    height: 40,
  },
  fab: {
    position: "absolute",
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#f43f5e",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#f43f5e",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
    zIndex: 100,
  },
});
