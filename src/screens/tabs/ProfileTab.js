import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { User, FileText, Settings, Edit3, Mail, Phone, Award, Calendar, Briefcase, MapPin } from 'lucide-react-native';

const ProfileTab = () => {
  const [activeSection, setActiveSection] = useState('Personal Info');
  const [isEditing, setIsEditing] = useState(false);

  const profileData = {
    personalInfo: {
      firstName: 'Dr. Sarah',
      lastName: 'Johnson',
      email: 'sarah.johnson@clinic.com',
      phone: '+1 (555) 123-4567',
      licenseNumber: 'PT-12345-CA',
      yearsOfExperience: '8',
      specialization: 'Orthopedic Physical Therapy',
      clinic: 'Advanced Physical Therapy Center',
      location: 'San Francisco, CA'
    },
    medicalNotes: [
      {
        id: 1,
        title: 'Patient Progress Notes',
        date: '2024-01-15',
        content: 'Patient showing significant improvement in range of motion. Continue with current exercise regimen.'
      },
      {
        id: 2,
        title: 'Treatment Plan Update',
        date: '2024-01-10',
        content: 'Adjusted exercise intensity based on patient feedback and progress assessment.'
      }
    ],
    settings: {
      notifications: true,
      darkMode: false,
      autoSave: true,
      language: 'English'
    }
  };

  const sections = ['Personal Info', 'Medical Notes', 'Settings'];

  const renderPersonalInfo = () => (
    <View style={styles.sectionContent}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <TouchableOpacity 
          style={styles.editButton}
          onPress={() => setIsEditing(!isEditing)}
        >
          <Edit3 size={16} color="#6366F1" />
          <Text style={styles.editButtonText}>
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoGrid}>
        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>First Name</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={profileData.personalInfo.firstName}
                placeholder="First Name"
              />
            ) : (
              <Text style={styles.infoValue}>{profileData.personalInfo.firstName}</Text>
            )}
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Last Name</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={profileData.personalInfo.lastName}
                placeholder="Last Name"
              />
            ) : (
              <Text style={styles.infoValue}>{profileData.personalInfo.lastName}</Text>
            )}
          </View>
        </View>

        <View style={styles.infoItem}>
          <View style={styles.infoHeader}>
            <Mail size={16} color="#6B7280" />
            <Text style={styles.infoLabel}>Email</Text>
          </View>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={profileData.personalInfo.email}
              placeholder="Email"
              keyboardType="email-address"
            />
          ) : (
            <Text style={styles.infoValue}>{profileData.personalInfo.email}</Text>
          )}
        </View>

        <View style={styles.infoItem}>
          <View style={styles.infoHeader}>
            <Phone size={16} color="#6B7280" />
            <Text style={styles.infoLabel}>Phone</Text>
          </View>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={profileData.personalInfo.phone}
              placeholder="Phone"
              keyboardType="phone-pad"
            />
          ) : (
            <Text style={styles.infoValue}>{profileData.personalInfo.phone}</Text>
          )}
        </View>

        <View style={styles.infoItem}>
          <View style={styles.infoHeader}>
            <Award size={16} color="#6B7280" />
            <Text style={styles.infoLabel}>License Number</Text>
          </View>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={profileData.personalInfo.licenseNumber}
              placeholder="License Number"
            />
          ) : (
            <Text style={styles.infoValue}>{profileData.personalInfo.licenseNumber}</Text>
          )}
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <View style={styles.infoHeader}>
              <Calendar size={16} color="#6B7280" />
              <Text style={styles.infoLabel}>Years of Experience</Text>
            </View>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={profileData.personalInfo.yearsOfExperience}
                placeholder="Years"
                keyboardType="numeric"
              />
            ) : (
              <Text style={styles.infoValue}>{profileData.personalInfo.yearsOfExperience} years</Text>
            )}
          </View>
        </View>

        <View style={styles.infoItem}>
          <View style={styles.infoHeader}>
            <Briefcase size={16} color="#6B7280" />
            <Text style={styles.infoLabel}>Specialization</Text>
          </View>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={profileData.personalInfo.specialization}
              placeholder="Specialization"
            />
          ) : (
            <Text style={styles.infoValue}>{profileData.personalInfo.specialization}</Text>
          )}
        </View>

        <View style={styles.infoItem}>
          <View style={styles.infoHeader}>
            <MapPin size={16} color="#6B7280" />
            <Text style={styles.infoLabel}>Clinic/Practice</Text>
          </View>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={profileData.personalInfo.clinic}
              placeholder="Clinic Name"
            />
          ) : (
            <Text style={styles.infoValue}>{profileData.personalInfo.clinic}</Text>
          )}
        </View>
      </View>

      {!isEditing && (
        <View style={styles.profileStats}>
          <Text style={styles.statsTitle}>Profile Summary</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>150+</Text>
              <Text style={styles.statLabel}>Patients Treated</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>98%</Text>
              <Text style={styles.statLabel}>Success Rate</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>4.9</Text>
              <Text style={styles.statLabel}>Rating</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );

  const renderMedicalNotes = () => (
    <View style={styles.sectionContent}>
      <Text style={styles.sectionTitle}>Medical Notes & Documentation</Text>
      <Text style={styles.sectionDescription}>
        Manage your patient notes, treatment plans, and clinical documentation.
      </Text>

      <View style={styles.notesList}>
        {profileData.medicalNotes.map((note) => (
          <TouchableOpacity key={note.id} style={styles.noteCard}>
            <View style={styles.noteHeader}>
              <Text style={styles.noteTitle}>{note.title}</Text>
              <Text style={styles.noteDate}>{note.date}</Text>
            </View>
            <Text style={styles.noteContent}>{note.content}</Text>
            <View style={styles.noteActions}>
              <TouchableOpacity style={styles.noteAction}>
                <Text style={styles.noteActionText}>View</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.noteAction}>
                <Text style={styles.noteActionText}>Edit</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.addNoteButton}>
        <Text style={styles.addNoteText}>+ Add New Note</Text>
      </TouchableOpacity>
    </View>
  );

  const renderSettings = () => (
    <View style={styles.sectionContent}>
      <Text style={styles.sectionTitle}>Application Settings</Text>
      <Text style={styles.sectionDescription}>
        Customize your MyoMap experience and application preferences.
      </Text>

      <View style={styles.settingsList}>
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingTitle}>Push Notifications</Text>
            <Text style={styles.settingDescription}>Receive alerts for new exercises and updates</Text>
          </View>
          <TouchableOpacity style={[styles.toggle, profileData.settings.notifications && styles.toggleActive]}>
            <View style={[styles.toggleCircle, profileData.settings.notifications && styles.toggleCircleActive]} />
          </TouchableOpacity>
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingTitle}>Dark Mode</Text>
            <Text style={styles.settingDescription}>Switch to dark theme</Text>
          </View>
          <TouchableOpacity style={[styles.toggle, profileData.settings.darkMode && styles.toggleActive]}>
            <View style={[styles.toggleCircle, profileData.settings.darkMode && styles.toggleCircleActive]} />
          </TouchableOpacity>
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingTitle}>Auto-save Progress</Text>
            <Text style={styles.settingDescription}>Automatically save patient progress</Text>
          </View>
          <TouchableOpacity style={[styles.toggle, profileData.settings.autoSave && styles.toggleActive]}>
            <View style={[styles.toggleCircle, profileData.settings.autoSave && styles.toggleCircleActive]} />
          </TouchableOpacity>
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingTitle}>Language</Text>
            <Text style={styles.settingDescription}>Application language</Text>
          </View>
          <Text style={styles.languageText}>{profileData.settings.language}</Text>
        </View>
      </View>

      <View style={styles.settingsActions}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Reset to Default</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Save Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'Personal Info':
        return renderPersonalInfo();
      case 'Medical Notes':
        return renderMedicalNotes();
      case 'Settings':
        return renderSettings();
      default:
        return renderPersonalInfo();
    }
  };

  const getSectionIcon = (section) => {
    switch (section) {
      case 'Personal Info':
        return <User size={18} color={activeSection === section ? '#6366F1' : '#6B7280'} />;
      case 'Medical Notes':
        return <FileText size={18} color={activeSection === section ? '#6366F1' : '#6B7280'} />;
      case 'Settings':
        return <Settings size={18} color={activeSection === section ? '#6366F1' : '#6B7280'} />;
      default:
        return <User size={18} color={activeSection === section ? '#6366F1' : '#6B7280'} />;
    }
  };

  return (
    <ScrollView 
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      {/* Profile Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Profile Management</Text>
        <Text style={styles.subtitle}>
          Manage your personal information, medical notes, and application settings
        </Text>
      </View>

      {/* Section Tabs */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.sectionsContainer}
        contentContainerStyle={styles.sectionsContent}
      >
        {sections.map((section) => (
          <TouchableOpacity
            key={section}
            style={[
              styles.sectionTab,
              activeSection === section && styles.activeSectionTab
            ]}
            onPress={() => setActiveSection(section)}
          >
            {getSectionIcon(section)}
            <Text style={[
              styles.sectionTabText,
              activeSection === section && styles.activeSectionTabText
            ]}>
              {section}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Section Content */}
      {renderSectionContent()}
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
  sectionsContainer: {
    marginBottom: 24
  },
  sectionsContent: {
    gap: 12
  },
  sectionTab: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginRight: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1
  },
  activeSectionTab: {
    backgroundColor: '#6366F1'
  },
  sectionTabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280'
  },
  activeSectionTabText: {
    color: '#FFFFFF'
  },
  sectionContent: {
    flex: 1
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937'
  },
  sectionDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 24
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6366F1'
  },
  infoGrid: {
    gap: 20
  },
  infoRow: {
    flexDirection: 'row',
    gap: 16
  },
  infoItem: {
    flex: 1
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280'
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    backgroundColor: '#F8FAFC',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB'
  },
  input: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#6366F1'
  },
  profileStats: {
    marginTop: 32,
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB'
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 16
  },
  statItem: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
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
    color: '#6366F1',
    marginBottom: 4
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center'
  },
  notesList: {
    gap: 16,
    marginBottom: 24
  },
  noteCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1
  },
  noteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    flex: 1
  },
  noteDate: {
    fontSize: 12,
    color: '#9CA3AF'
  },
  noteContent: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 12
  },
  noteActions: {
    flexDirection: 'row',
    gap: 12
  },
  noteAction: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#F3F4F6',
    borderRadius: 6
  },
  noteActionText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#374151'
  },
  addNoteButton: {
    backgroundColor: '#6366F1',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center'
  },
  addNoteText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600'
  },
  settingsList: {
    gap: 16,
    marginBottom: 24
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1
  },
  settingInfo: {
    flex: 1
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4
  },
  settingDescription: {
    fontSize: 14,
    color: '#6B7280'
  },
  toggle: {
    width: 50,
    height: 28,
    backgroundColor: '#E5E7EB',
    borderRadius: 14,
    padding: 2,
    justifyContent: 'center'
  },
  toggleActive: {
    backgroundColor: '#6366F1'
  },
  toggleCircle: {
    width: 24,
    height: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2
  },
  toggleCircleActive: {
    transform: [{ translateX: 22 }]
  },
  languageText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6366F1'
  },
  settingsActions: {
    flexDirection: 'row',
    gap: 12
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#6366F1',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center'
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600'
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center'
  },
  secondaryButtonText: {
    color: '#374151',
    fontSize: 16,
    fontWeight: '600'
  }
});

export default ProfileTab;