import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { Activity, MapPin, User, Brain, BarChart3, Settings } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoBox}>
            <Activity color="#000" size={24} />
          </View>
          <View>
            <Text style={styles.appTitle}>MyoMap</Text>
            <Text style={styles.subTitle}>AI-Powered Physical Therapy Assistant</Text>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabs}>
          <TouchableOpacity style={styles.activeTab}>
            <Text style={styles.activeTabText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Body Map</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Exercise Library</Text>
          </TouchableOpacity>
        </View>

        {/* Welcome */}
        <View style={styles.card}>
          <Text style={styles.title}>Welcome to MyoMap</Text>
          <Text style={styles.desc}>
            Generate personalized exercises, manage patients, and track progress with our intelligent body mapping system.
          </Text>
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>150+</Text>
            <Text style={styles.statLabel}>Total Exercises Available</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Body Parts Covered</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Difficulty Levels</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        {[
          { icon: <Activity color="#000" size={20} />, title: 'Start Body Assessment', color: '#E3F2FD' },
          { icon: <Brain color="#000" size={20} />, title: 'Browse Exercise Library', color: '#E8F5E9' },
          { icon: <User color="#000" size={20} />, title: 'Manage Profile', color: '#F3E5F5' },
        ].map((item, index) => (
          <View key={index} style={[styles.actionCard, { backgroundColor: item.color }]}>
            <View style={styles.actionHeader}>
              {item.icon}
              <Text style={styles.actionTitle}>{item.title}</Text>
            </View>
            <Text style={styles.getStarted}>Get Started →</Text>
          </View>
        ))}

        {/* Recent Activity */}
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        {[
          { title: 'Generated exercises for Lower Back', label: 'generation', time: '2 hours ago' },
          { title: 'Assigned 3 exercises to John Doe', label: 'assignment', time: '4 hours ago' },
          { title: 'Generated exercises for Right Shoulder', label: 'generation', time: '1 day ago' },
          { title: 'Updated profile settings', label: 'profile', time: '2 days ago' },
        ].map((item, index) => (
          <View key={index} style={styles.activityCard}>
            <Text style={styles.activityTitle}>{item.title}</Text>
            <View style={styles.activityFooter}>
              <Text style={styles.activityLabel}>{item.label}</Text>
              <Text style={styles.activityTime}>{item.time}</Text>
            </View>
          </View>
        ))}

        {/* System Overview */}
        <Text style={styles.sectionTitle}>System Overview</Text>
        <View style={styles.systemCard}>
          <Text style={styles.systemRow}>AI Exercise Generation <Text style={styles.activeBadge}>Active</Text></Text>
          <Text style={styles.systemRow}>Body Map Accuracy <Text style={styles.activeBadge}>99.8%</Text></Text>
          <Text style={styles.systemRow}>Exercise Database <Text style={styles.activeBadge}>Updated</Text></Text>
          <Text style={styles.systemRow}>Patient Assignment System <Text style={styles.activeBadge}>Online</Text></Text>
        </View>

        {/* Pro Tip */}
        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>💡 Pro Tip</Text>
          <Text style={styles.tipDesc}>
            Use the body map’s front and back views to target specific muscle groups more accurately for better exercise recommendations.
          </Text>
        </View>

        {/* How MyoMap Works */}
        <Text style={styles.sectionTitle}>How MyoMap Works</Text>
        {[
          { icon: <MapPin color="#3B82F6" size={22} />, title: 'Select Body Part', desc: 'Click any body part to focus your treatment' },
          { icon: <Brain color="#22C55E" size={22} />, title: 'Generate Exercises', desc: 'AI creates personalized exercises automatically' },
          { icon: <User color="#A855F7" size={22} />, title: 'Assign to Patient', desc: 'Review and assign exercises with notes' },
        ].map((item, i) => (
          <View key={i} style={styles.workCard}>
            {item.icon}
            <Text style={styles.workTitle}>{item.title}</Text>
            <Text style={styles.workDesc}>{item.desc}</Text>
          </View>
        ))}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { padding: 16 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  logoBox: { backgroundColor: '#E5E7EB', padding: 10, borderRadius: 10, marginRight: 10 },
  appTitle: { fontSize: 20, fontWeight: 'bold', color: '#000' },
  subTitle: { fontSize: 12, color: '#666' },
  tabs: { flexDirection: 'row', marginBottom: 20 },
  tab: { paddingVertical: 6, paddingHorizontal: 14, borderRadius: 20, backgroundColor: '#F3F4F6', marginRight: 8 },
  tabText: { fontSize: 12, color: '#555' },
  activeTab: { paddingVertical: 6, paddingHorizontal: 14, borderRadius: 20, backgroundColor: '#000' },
  activeTabText: { fontSize: 12, color: '#fff' },
  card: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 12, padding: 16, marginBottom: 20 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#000', marginBottom: 6 },
  desc: { fontSize: 12, color: '#555' },
  statsContainer: { gap: 10, marginBottom: 20 },
  statCard: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 12, padding: 14 },
  statNumber: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  statLabel: { fontSize: 12, color: '#555' },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#000', marginBottom: 10, marginTop: 10 },
  actionCard: { borderRadius: 12, padding: 14, marginBottom: 10 },
  actionHeader: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  actionTitle: { fontSize: 14, fontWeight: 'bold', color: '#000' },
  getStarted: { marginTop: 6, fontSize: 12, color: '#000' },
  activityCard: { borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 12, padding: 14, marginBottom: 10 },
  activityTitle: { fontSize: 13, color: '#000' },
  activityFooter: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 },
  activityLabel: { fontSize: 11, color: '#111', backgroundColor: '#F3F4F6', paddingHorizontal: 8, borderRadius: 6 },
  activityTime: { fontSize: 11, color: '#777' },
  systemCard: { borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 12, padding: 14, marginBottom: 10 },
  systemRow: { fontSize: 13, color: '#000', marginBottom: 6 },
  activeBadge: { color: '#fff', backgroundColor: '#000', paddingHorizontal: 6, borderRadius: 6, fontSize: 11 },
  tipCard: { borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 12, padding: 14, marginBottom: 20 },
  tipTitle: { fontWeight: 'bold', fontSize: 14, color: '#000' },
  tipDesc: { fontSize: 12, color: '#555', marginTop: 4 },
  workCard: { borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 12, padding: 16, alignItems: 'center', marginBottom: 10 },
  workTitle: { fontSize: 14, fontWeight: 'bold', color: '#000', marginTop: 6 },
  workDesc: { fontSize: 12, color: '#555', textAlign: 'center', marginTop: 4 },
});
