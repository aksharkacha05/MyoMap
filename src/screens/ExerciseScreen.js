// src/screens/ExerciseScreen.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import colors from '../styles/colors';
import typography from '../styles/typography';
import spacing from '../styles/spacing';

const ExerciseScreen = ({ route }) => {
  const { part } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{part} Rehabilitation Exercises</Text>
      <Text style={styles.content}>
        {/* Placeholder for exercise content */}
        1. Exercise Name – step-by-step instructions …{'\n\n'}
        2. Exercise Name – step-by-step instructions …{'\n\n'}
        3. Exercise Name – step-by-step instructions …
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
    padding: spacing.large,
  },
  title: {
    ...typography.header2,
    color: colors.textPrimary,
    marginBottom: spacing.medium,
  },
  content: {
    ...typography.body,
    color: colors.textSecondary,
    lineHeight: 24,
  },
});

export default ExerciseScreen;
