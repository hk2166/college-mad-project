import { ChefHat, Clock, Users } from "lucide-react-native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RecipeCard({
  title,
  cuisine_type,
  cooking_time,
  servings,
  onPress,
  image,
}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.content}>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            {image ? (
              <Image
                source={{ uri: image }}
                style={styles.recipeImage}
                resizeMode="cover"
              />
            ) : (
              <ChefHat color="#fff" size={32} />
            )}
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>

            {cuisine_type && (
              <View style={styles.badgeContainer}>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{cuisine_type}</Text>
                </View>
              </View>
            )}

            <View style={styles.metaContainer}>
              {cooking_time && (
                <View style={styles.metaItem}>
                  <Clock size={14} color="#6b7280" />
                  <Text style={styles.metaText}>{cooking_time} min</Text>
                </View>
              )}
              {servings && (
                <View style={styles.metaItem}>
                  <Users size={14} color="#6b7280" />
                  <Text style={styles.metaText}>{servings} servings</Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  content: {
    padding: 18,
  },
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 16,
  },
  iconContainer: {
    width: 72,
    height: 72,
    borderRadius: 16,
    backgroundColor: "#f43f5e",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    shadowColor: "#f43f5e",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  recipeImage: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    fontSize: 19,
    fontWeight: "800",
    marginBottom: 8,
    color: "#0f172a",
    letterSpacing: -0.3,
  },
  badgeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 12,
  },
  badge: {
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 8,
  },
  badgeText: {
    fontSize: 12,
    color: "#475569",
    fontWeight: "600",
  },
  metaContainer: {
    flexDirection: "row",
    gap: 16,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  metaText: {
    fontSize: 13,
    color: "#64748b",
    fontWeight: "500",
  },
});
