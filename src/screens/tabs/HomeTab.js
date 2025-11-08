import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Activity, Brain, User, ChevronRight } from 'lucide-react-native';

const HomeTab = () => {
  const activities = [
    { title: 'Generated exercises for Lower Back', label: 'generation', time: '2 hours ago' },
    { title: 'Assigned 3 exercises to John Doe', label: 'assignment', time: '4 hours ago' },
    { title: 'Generated exercises for Right Shoulder', label: 'generation', time: '1 day ago' },
    { title: 'Updated profile settings', label: 'profile', time: '2 days ago' },
  ];

  const getLabelColor = (label) => {
    const colors = {
      generation: '#DBEAFE',
      assignment: '#DCFCE7',
      profile: '#F3E8FF'
    };
    return colors[label] || '#F3F4F6';
  };

  return (
    <ScrollView 
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      {/* Welcome Card */}
      <View style={styles.welcomeCard}>
        <View style={styles.welcomeContent}>
          <Text style={styles.welcomeTitle}>Welcome to MyoMap</Text>
          <Text style={styles.welcomeDesc}>
            Generate personalized exercises, manage patients, and track progress with our intelligent body mapping system.
          </Text>
        </View>
        <View style={styles.welcomeGraphic}>
          <Activity size={40} color="#6366F1" />
        </View>
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>150+</Text>
          <Text style={styles.statLabel}>Total Exercises</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Body Parts</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statLabel}>Difficulty Levels</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      {[
        { icon: <Activity color="#6366F1" size={20} />, title: 'Start Body Assessment', color: '#EEF2FF' },
        { icon: <Brain color="#10B981" size={20} />, title: 'Browse Exercise Library', color: '#ECFDF5' },
        { icon: <User color="#8B5CF6" size={20} />, title: 'Manage Profile', color: '#F5F3FF' },
      ].map((item, index) => (
        <TouchableOpacity key={index} style={[styles.actionCard, { backgroundColor: item.color }]}>
          <View style={styles.actionContent}>
            <View style={styles.actionHeader}>
              {item.icon}
              <Text style={styles.actionTitle}>{item.title}</Text>
            </View>
            <ChevronRight size={16} color="#6B7280" />
          </View>
        </TouchableOpacity>
      ))}

      {/* Recent Activity */}
      <Text style={styles.sectionTitle}>Recent Activity</Text>
      {activities.map((item, index) => (
        <View key={index} style={styles.activityCard}>
          <Text style={styles.activityTitle}>{item.title}</Text>
          <View style={styles.activityFooter}>
            <View style={[styles.activityLabel, { backgroundColor: getLabelColor(item.label) }]}>
              <Text style={styles.activityLabelText}>{item.label}</Text>
            </View>
            <Text style={styles.activityTime}>{item.time}</Text>
          </View>
        </View>
      ))}

      {/* System Overview */}
      <Text style={styles.sectionTitle}>System Overview</Text>
      <View style={styles.systemCard}>
        {[
          { label: 'AI Exercise Generation', status: 'Active' },
          { label: 'Body Map Accuracy', status: '99.8%' },
          { label: 'Exercise Database', status: 'Updated' },
          { label: 'Patient Assignment System', status: 'Online' },
        ].map((item, index) => (
          <View key={index} style={styles.systemRow}>
            <Text style={styles.systemLabel}>{item.label}</Text>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>{item.status}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Pro Tip */}
      <View style={styles.tipCard}>
        <Text style={styles.tipTitle}>💡 Pro Tip</Text>
        <Text style={styles.tipDesc}>
          Use the body map's front and back views to target specific muscle groups more accurately for better exercise recommendations.
        </Text>
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
  welcomeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2
  },
  welcomeContent: {
    flex: 1,
    marginRight: 16
  },
  welcomeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8
  },
  welcomeDesc: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20
  },
  welcomeGraphic: {
    backgroundColor: '#EEF2FF',
    padding: 12,
    borderRadius: 12
  },
  statsContainer: { 
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24 
  },
  statCard: { 
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
  statNumber: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#1F2937',
    marginBottom: 4
  },
  statLabel: { 
    fontSize: 12, 
    color: '#6B7280',
    textAlign: 'center'
  },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#1F2937', 
    marginBottom: 16,
    marginTop: 8
  },
  actionCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1
  },
  actionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  actionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937'
  },
  activityCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
    marginBottom: 8
  },
  activityFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  activityLabel: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6
  },
  activityLabelText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#374151'
  },
  activityTime: {
    fontSize: 12,
    color: '#9CA3AF'
  },
  systemCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1
  },
  systemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8
  },
  systemLabel: {
    fontSize: 14,
    color: '#374151'
  },
  statusBadge: {
    backgroundColor: '#10B981',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF'
  },
  tipCard: {
    backgroundColor: '#FFFBEB',
    borderLeftWidth: 4,
    borderLeftColor: '#F59E0B',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24
  },
  tipTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#92400E',
    marginBottom: 4
  },
  tipDesc: {
    fontSize: 14,
    color: '#92400E',
    lineHeight: 20
  }
});

export default HomeTab;