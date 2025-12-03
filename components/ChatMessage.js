import { StyleSheet, Text, View } from "react-native";

export default function ChatMessage({ message, isUser }) {
  return (
    <View style={[styles.container, isUser && styles.userContainer]}>
      <View
        style={[styles.bubble, isUser ? styles.userBubble : styles.botBubble]}
      >
        <Text style={[styles.text, isUser && styles.userText]}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    width: "100%",
  },
  userContainer: {
    alignItems: "flex-end",
  },
  bubble: {
    maxWidth: "85%",
    minWidth: "20%",
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 24,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 6,
  },
  userBubble: {
    backgroundColor: "#f43f5e",
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 24,
    shadowColor: "#f43f5e",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  botBubble: {
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#f1f5f9",
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
    color: "#1e293b",
  },
  userText: {
    color: "#fff",
    fontWeight: "500",
  },
});
