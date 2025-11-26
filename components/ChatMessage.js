import { Ionicons } from "@expo/vector-icons";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ChatMessage from "../components/ChatMessage";

// ---------------------------------------------------------
// 👇 PASTE YOUR GEMINI API KEY HERE
// ---------------------------------------------------------
const GEMINI_API_KEY = "AIzaSy..."; // Replace this string with your actual key

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export default function ChatbotScreen() {
  const router = useRouter();
  const [chatMessages, setChatMessages] = useState([
    {
      id: "1",
      text: "Hello! I'm your CookAi assistant powered by Google Gemini. Ask me anything about recipes, cooking tips, or ingredients!",
      isUser: false,
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isSendingMessage, setIsSendingMessage] = useState(false);
  const chatListRef = useRef(null);

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const newUserMessage = {
      id: Date.now().toString(),
      text: userInput.trim(),
      isUser: true,
    };

    setChatMessages((previousMessages) => [
      ...previousMessages,
      newUserMessage,
    ]);
    setUserInput("");
    setIsSendingMessage(true);

    try {
      // Call Gemini API
      const chat = model.startChat({
        history: [],
        generationConfig: {
          maxOutputTokens: 1000,
        },
      });

      const prompt = `You are a helpful cooking assistant. Answer questions about recipes, cooking techniques, and ingredients. Keep responses concise and practical. User question: ${newUserMessage.text}`;

      const result = await chat.sendMessage(prompt);
      const response = await result.response;
      const assistantReply =
        response.text() || "Sorry, I couldn't generate a response.";

      const newAssistantMessage = {
        id: (Date.now() + 1).toString(),
        text: assistantReply,
        isUser: false,
      };

      setChatMessages((previousMessages) => [
        ...previousMessages,
        newAssistantMessage,
      ]);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        text: `Sorry, I couldn't connect to Gemini AI. Please check your API key. Error: ${error.message}`,
        isUser: false,
      };
      setChatMessages((previousMessages) => [
        ...previousMessages,
        errorMessage,
      ]);
    } finally {
      setIsSendingMessage(false);
    }
  };

  useEffect(() => {
    if (chatListRef.current) {
      chatListRef.current.scrollToEnd({ animated: true });
    }
  }, [chatMessages]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#1e293b" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Chef AI</Text>
          <Text style={styles.headerSubtitle}>Powered by Gemini</Text>
        </View>
        <View style={{ width: 40 }} />
      </View>

      {/* Chat Area */}
      <FlatList
        ref={chatListRef}
        data={chatMessages}
        keyExtractor={(message) => message.id}
        renderItem={({ item }) => (
          <ChatMessage message={item.text} isUser={item.isUser} />
        )}
        contentContainerStyle={styles.chatList}
        showsVerticalScrollIndicator={false}
      />

      {/* Input Area */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
        style={styles.inputContainer}
      >
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Ask about a recipe..."
            placeholderTextColor="#94a3b8"
            value={userInput}
            onChangeText={setUserInput}
            multiline
            maxLength={500}
          />
          <TouchableOpacity
            style={[
              styles.sendButton,
              !userInput.trim() && styles.sendButtonDisabled,
            ]}
            onPress={handleSendMessage}
            disabled={!userInput.trim() || isSendingMessage}
          >
            {isSendingMessage ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Ionicons name="send" size={20} color="#fff" />
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  backButton: {
    padding: 8,
  },
  headerTitleContainer: {
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0f172a",
  },
  headerSubtitle: {
    fontSize: 12,
    color: "#64748b",
    fontWeight: "500",
  },
  chatList: {
    paddingVertical: 16,
    paddingBottom: 20,
  },
  inputContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#e2e8f0",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: "#f8fafc",
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#1e293b",
    maxHeight: 100,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f43f5e",
    alignItems: "center",
    justifyContent: "center",
  },
  sendButtonDisabled: {
    backgroundColor: "#cbd5e1",
  },
});