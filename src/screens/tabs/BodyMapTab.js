import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Target, MapPin, Brain, Users, Move, Dumbbell } from 'lucide-react-native';

const BodyMapTab = () => {
  const bodyParts = [
    { name: 'Head & Neck', icon: '👤', color: '#EFF6FF' },
    { name: 'Shoulders', icon: '💪', color: '#F0FDF4' },
    { name: 'Upper Back', icon: '🔄', color: '#FFFBEB' },
    { name: 'Lower Back', icon: '🦵', color: '#FEF2F2' },
    { name: 'Arms', icon: '👋', color: '#F5F3FF' },
    { name: 'Hands & Wrists', icon: '✋', color: '#ECFDF5' },
    { name: 'Hips', icon: '🦴', color: '#FFFBEB' },
    { name: 'Legs', icon: '🦵', color: '#EFF6FF' },
    { name: 'Knees', icon: '🦿', color: '#F0FDF4' },
    { name: 'Ankles & Feet', icon: '👣', color: '#FEF2F2' },
  ];

  const workflowSteps = [
    {
      step: '1',
      title: 'Select Body Part',
      description: 'Click on the interactive body map to focus your treatment area',
      icon: <MapPin color="#3B82F6" size={20} />
    },
    {
      step: '2',
      title: 'Generate Exercises',
      description: 'AI creates personalized exercises based on the selected body part',
      icon: <Brain color="#10B981" size={20} />
    },
    {
      step: '3',
      title: 'Assign to Patient',
      description: 'Review and assign the best exercises to your patient with notes',
      icon: <Users color="#8B5CF6" size={20} />
    },
  ];

  return (
    <ScrollView 
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      {/* Body Map Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Body Map</Text>
        <Text style={styles.subtitle}>
          Select a body part to generate exercises!
        </Text>
      </View>

      {/* Body Map Visualization */}
      <View style={styles.bodyMapContainer}>
        <View style={styles.bodyMapPlaceholder}>
          <Text style={styles.bodyMapPlaceholderText}>
            🏃‍♂️ Body Map Visualization
          </Text>
          <Text style={styles.bodyMapInstructions}>
            Tap on any body part to select it
          </Text>
        </View>
        
        {/* Body Parts Grid */}
        <View style={styles.bodyPartsGrid}>
          {bodyParts.map((part, index) => (
            <TouchableOpacity key={index} style={[styles.bodyPartCard, { backgroundColor: part.color }]}>
              <Text style={styles.bodyPartIcon}>{part.icon}</Text>
              <Text style={styles.bodyPartName}>{part.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Selected Body Part Info */}
      <View style={styles.selectedPartCard}>
        <View style={styles.selectedPartHeader}>
          <Target size={20} color="#6366F1" />
          <Text style={styles.selectedPartTitle}>Selected Body Part</Text>
        </View>
        <Text style={styles.selectedPartText}>
          Tap on a body part above to select and generate exercises
        </Text>
      </View>

      {/* How Body Map Works */}
      <Text style={styles.sectionTitle}>How Body Map Works</Text>
      <View style={styles.howItWorksCard}>
        {workflowSteps.map((item, index) => (
          <View key={index} style={styles.workStep}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>{item.step}</Text>
            </View>
            <View style={styles.stepContent}>
              <View style={styles.stepHeader}>
                {item.icon}
                <Text style={styles.stepTitle}>{item.title}</Text>
              </View>
              <Text style={styles.stepDescription}>{item.description}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.actionsGrid}>
        <TouchableOpacity style={styles.actionCard}>
          <Move size={24} color="#6366F1" />
          <Text style={styles.actionText}>Generate Stretches</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionCard}>
          <Dumbbell size={24} color="#10B981" />
          <Text style={styles.actionText}>Strength Exercises</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionCard}>
          <Brain size={24} color="#8B5CF6" />
          <Text style={styles.actionText}>AI Recommendations</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingTop: 0,
    paddingBottom: 40
  },
  header: {
    marginBottom: 24
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 22
  },
  bodyMapContainer: {
    marginBottom: 24
  },
  bodyMapPlaceholder: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2
  },
  bodyMapPlaceholderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8
  },
  bodyMapInstructions: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center'
  },
  bodyPartsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between'
  },
  bodyPartCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1
  },
  bodyPartIcon: {
    fontSize: 24,
    marginBottom: 8
  },
  bodyPartName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center'
  },
  selectedPartCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1
  },
  selectedPartHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8
  },
  selectedPartTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937'
  },
  selectedPartText: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20
  },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#1F2937', 
    marginBottom: 16
  },
  howItWorksCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1
  },
  workStep: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20
  },
  stepNumber: {
    backgroundColor: '#6366F1',
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    marginTop: 2
  },
  stepNumberText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold'
  },
  stepContent: {
    flex: 1
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937'
  },
  stepDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginLeft: 28
  },
  actionsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24
  },
  actionCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1
  },
  actionText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1F2937',
    marginTop: 8,
    textAlign: 'center'
  }
});

export default BodyMapTab;