import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

interface IconSymbolProps {
  name: string;
  size?: number;
  color?: string;
  style?: ViewStyle;
}

export function IconSymbol({ name, size = 24, color = '#000', style }: IconSymbolProps) {
  // Simple fallback icon for missing SF Symbols
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'chevron.left.forwardslash.chevron.right':
        return '</>';
      default:
        return '⚙️';
    }
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.icon, { fontSize: size, color }]}>
        {getIcon(name)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
});
