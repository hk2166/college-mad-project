import { StyleSheet, Text, View } from 'react-native';

export default function ChatMessage({ message, isUser }) {
  return (
    <View style={[
      styles.container, 
      isUser ? styles.userContainer : styles.aiContainer
    ]}>
      <View style={[
        styles.bubble, 
        isUser ? styles.userBubble : styles.aiBubble
      ]}>
        <Text style={[
          styles.text, 
          isUser ? styles.userText : styles.aiText
        ]}>
          {message}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    marginVertical: 4,
    flexDirection: 'row',
  },
  userContainer: {
    justifyContent: 'flex-end',
  },
  aiContainer: {
    justifyContent: 'flex-start',
  },
  bubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 20,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  userBubble: {
    backgroundColor: '#f43f5e',
    borderBottomRightRadius: 4,
  },
  aiBubble: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 4,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
  },
  userText: {
    color: '#fff',
  },
  aiText: {
    color: '#1e293b',
  },
});
