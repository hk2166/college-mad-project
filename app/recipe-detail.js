import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import IngredientItem from "../components/IngredientItem";
import StepItem from "../components/StepItem";

import RecipeHeader from "../components/RecipeHeader";
import TabContainer from "../components/TabContainer";

const { height } = Dimensions.get("window");

export default function RecipeDetail() {
  const { recipe } = useLocalSearchParams();
  const router = useRouter();
  const recipeData = JSON.parse(recipe);
  const [activeTab, setActiveTab] = useState("ingredients");

  const renderIngredient = ({ item }) => <IngredientItem item={item} />;

  const renderStep = ({ item, index }) => (
    <StepItem item={item} index={index} />
  );

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: recipeData.image }}
            style={styles.recipeImage}
          />
          <View style={styles.imageOverlay}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.favoriteButton}>
              <Text style={styles.favoriteIcon}>♡</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <RecipeHeader recipe={recipeData} />

          <TabContainer activeTab={activeTab} onTabChange={setActiveTab} />

          {activeTab === "ingredients" ? (
            <View style={styles.section}>
              <FlatList
                data={recipeData.ingredients}
                renderItem={renderIngredient}
                keyExtractor={(item, index) => index.toString()}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
              />
            </View>
          ) : (
            <View style={styles.section}>
              <FlatList
                data={recipeData.steps}
                renderItem={renderStep}
                keyExtractor={(item, index) => index.toString()}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
              />
            </View>
          )}

          {recipeData.notes && (
            <View style={styles.notesContainer}>
              <View style={styles.notesHeader}>
                <Text style={styles.notesIcon}>💡</Text>
                <Text style={styles.notesTitle}>Pro Tips</Text>
              </View>
              <Text style={styles.notesText}>{recipeData.notes}</Text>
            </View>
          )}

          <View style={styles.bottomSpacing} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  imageContainer: {
    position: "relative",
  },
  recipeImage: {
    width: "100%",
    height: height * 0.4,
    backgroundColor: "#f0f0f0",
  },
  imageOverlay: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.9)",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  backIcon: {
    fontSize: 20,
    color: "#2C3E50",
    fontWeight: "bold",
  },
  favoriteButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.9)",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  favoriteIcon: {
    fontSize: 20,
    color: "#FF6B6B",
  },
  contentContainer: {
    backgroundColor: "#fff",
    marginTop: -25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 25,
    minHeight: height * 0.7,
  },
  section: {
    paddingHorizontal: 20,
  },
  notesContainer: {
    margin: 20,
    backgroundColor: "#FFF9F9",
    borderRadius: 15,
    padding: 20,
    borderLeftWidth: 5,
    borderLeftColor: "#FF6B6B",
  },
  notesHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  notesIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  notesTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2C3E50",
  },
  notesText: {
    fontSize: 15,
    color: "#5D6D7E",
    lineHeight: 22,
    fontWeight: "500",
  },
  bottomSpacing: {
    height: 30,
  },
});
