import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Search, Filter, Plus, Clock, Dumbbell } from 'lucide-react-native';

const ExerciseLibraryTab = () => {
  const [activeCategory, setActiveCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All Categories', 'Stretching', 'Strengthening', 'Mobility'];
  
  const exercises = [
    {
      id: 1,
      name: 'Neck Stretch',
      difficulty: 'Easy',
      type: 'Stretching',
      bodyPart: 'Head/Neck',
      description: 'Gentle stretch to relieve neck tension and improve flexibility',
      duration: 'Hold for 30 seconds each side',
      instructions: [
        'Sit or stand with shoulders relaxed',
        'Tilt head to one side',
        'Gently press with hand for deeper stretch',
        'Repeat on other side'
      ],
      equipment: 'None'
    },
    {
      id: 2,
      name: 'Shoulder Cross-Body Stretch',
      difficulty: 'Easy',
      type: 'Stretching',
      bodyPart: 'Shoulder',
      description: 'Stretch for posterior deltoids and shoulder mobility',
      duration: 'Hold for 30 seconds each arm',
      instructions: [
        'Bring arm across chest',
        'Use opposite hand to gently pull',
        'Keep shoulder relaxed',
        'Repeat with other arm'
      ],
      equipment: 'None'
    },
    {
      id: 3,
      name: 'Wall Sits',
      difficulty: 'Medium',
      type: 'Strengthening',
      bodyPart: 'Leg/Thigh',
      description: 'Isometric exercise for quadriceps and glutes',
      duration: '3 sets of 30-60 seconds',
      instructions: [
        'Stand with back against wall',
        'Slide down until thighs parallel to floor',
        'Hold position keeping back flat',
        'Push through heels to return'
      ],
      equipment: 'Wall'
    },
    {
      id: 4,
      name: 'Modified Push-ups',
      difficulty: 'Medium',
      type: 'Strengthening',
      bodyPart: 'Arm/Elbow',
      description: 'Upper body strengthening with knees down',
      duration: '3 sets of 8-12 reps',
      instructions: [
        'Start on hands and knees',
        'Keep body in straight line',
        'Lower chest towards floor',
        'Push back to starting position'
      ],
      equipment: 'Exercise mat'
    }
  ];

  const filteredExercises = exercises.filter(exercise => {
    const matchesCategory = activeCategory === 'All Categories' || exercise.type === activeCategory;
    const matchesSearch = exercise.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         exercise.bodyPart.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         exercise.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <ScrollView 
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Exercise Library</Text>
        <Text style={styles.subtitle}>
          Browse our comprehensive collection of physical therapy exercises organized by category
        </Text>
      </View>

      {/* Search & Filter */}
      <View style={styles.searchSection}>
        <View style={styles.searchContainer}>
          <Search size={20} color="#6B7280" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search exercises, body parts, or keywords..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Filter size={20} color="#6B7280" />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
        contentContainerStyle={styles.categoriesContent}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              activeCategory === category && styles.activeCategoryButton
            ]}
            onPress={() => setActiveCategory(category)}
          >
            <Text style={[
              styles.categoryText,
              activeCategory === category && styles.activeCategoryText
            ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Exercise Count */}
      <Text style={styles.exerciseCount}>
        {filteredExercises.length} exercises found
      </Text>

      {/* Exercises List */}
      <View style={styles.exercisesList}>
        {filteredExercises.map((exercise) => (
          <View key={exercise.id} style={styles.exerciseCard}>
            {/* Exercise Header */}
            <View style={styles.exerciseHeader}>
              <View style={styles.exerciseTitleSection}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <View style={[styles.difficultyBadge, 
                  exercise.difficulty === 'Easy' && styles.difficultyEasy,
                  exercise.difficulty === 'Medium' && styles.difficultyMedium
                ]}>
                  <Text style={styles.difficultyText}>{exercise.difficulty}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.addButton}>
                <Plus size={20} color="#6366F1" />
              </TouchableOpacity>
            </View>

            {/* Exercise Tags */}
            <View style={styles.exerciseTags}>
              <View style={[styles.tag, styles.typeTag]}>
                <Text style={styles.tagText}>{exercise.type}</Text>
              </View>
              <View style={[styles.tag, styles.bodyTag]}>
                <Text style={styles.tagText}>{exercise.bodyPart}</Text>
              </View>
            </View>

            {/* Exercise Description */}
            <Text style={styles.exerciseDescription}>{exercise.description}</Text>

            {/* Exercise Details */}
            <View style={styles.exerciseDetails}>
              <View style={styles.detailItem}>
                <Clock size={16} color="#6B7280" />
                <Text style={styles.detailText}>{exercise.duration}</Text>
              </View>
              {exercise.equipment !== 'None' && (
                <View style={styles.detailItem}>
                  <Dumbbell size={16} color="#6B7280" />
                  <Text style={styles.detailText}>{exercise.equipment}</Text>
                </View>
              )}
            </View>

            {/* Instructions Preview */}
            <View style={styles.instructionsPreview}>
              <Text style={styles.instructionsTitle}>Instructions:</Text>
              <Text style={styles.instructionStep}>{exercise.instructions[0]}</Text>
              {exercise.instructions.length > 1 && (
                <Text style={styles.moreSteps}>
                  +{exercise.instructions.length - 1} more steps...
                </Text>
              )}
            </View>
          </View>
        ))}
      </View>

      {/* CTA */}
      <View style={styles.ctaCard}>
        <Text style={styles.ctaTitle}>Can't find what you're looking for?</Text>
        <Text style={styles.ctaDescription}>
          Use our AI Body Map to generate specific exercises tailored to your patient's needs and injury directly.
        </Text>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Go to Body Map</Text>
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
  searchSection: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#1F2937'
  },
  filterButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1
  },
  categoriesContainer: {
    marginBottom: 20
  },
  categoriesContent: {
    gap: 12
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginRight: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1
  },
  activeCategoryButton: {
    backgroundColor: '#6366F1'
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280'
  },
  activeCategoryText: {
    color: '#FFFFFF'
  },
  exerciseCount: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16
  },
  exercisesList: {
    gap: 16,
    marginBottom: 24
  },
  exerciseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2
  },
  exerciseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12
  },
  exerciseTitleSection: {
    flex: 1
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8
  },
  difficultyBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12
  },
  difficultyEasy: {
    backgroundColor: '#DCFCE7'
  },
  difficultyMedium: {
    backgroundColor: '#FEF3C7'
  },
  difficultyText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1F2937'
  },
  addButton: {
    backgroundColor: '#EEF2FF',
    padding: 8,
    borderRadius: 8
  },
  exerciseTags: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6
  },
  typeTag: {
    backgroundColor: '#EFF6FF'
  },
  bodyTag: {
    backgroundColor: '#F3F4F6'
  },
  tagText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#374151'
  },
  exerciseDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 16
  },
  exerciseDetails: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6
  },
  detailText: {
    fontSize: 14,
    color: '#6B7280'
  },
  instructionsPreview: {
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    paddingTop: 16
  },
  instructionsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8
  },
  instructionStep: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 4
  },
  moreSteps: {
    fontSize: 14,
    color: '#6366F1',
    fontWeight: '500'
  },
  ctaCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2
  },
  ctaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
    textAlign: 'center'
  },
  ctaDescription: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20
  },
  ctaButton: {
    backgroundColor: '#6366F1',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12
  },
  ctaButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600'
  }
});

export default ExerciseLibraryTab;