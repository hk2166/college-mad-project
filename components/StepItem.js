import { StyleSheet, Text, View } from 'react-native';

export default function StepItem({ item, index }) {
  return (
    <View style={styles.stepItem}>
      <View style={styles.stepNumber}>
        <Text style={styles.stepNumberText}>{index + 1}</Text>
      </View>
      <View style={styles.stepContent}>
        <Text style={styles.stepText}>{item}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stepItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FF6B6B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    marginTop: 2,
  },
  stepNumberText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
  stepContent: {
    flex: 1,
  },
  stepText: {
    fontSize: 16,
    color: '#2C3E50',
    lineHeight: 24,
    fontWeight: '500',
  },
});
