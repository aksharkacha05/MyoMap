import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import { User, FileText, Settings, Edit3, Mail, Phone, Award, Calendar, Briefcase, MapPin, Shield, Bell, Moon, Save, Globe } from 'lucide-react-native';

const ProfileTab = () => {
  const [activeSection, setActiveSection] = useState('Personal Info');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
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
        content: 'Patient showing significant improvement in range of motion. Continue with current exercise regimen.',
        type: 'progress'
      },
      {
        id: 2,
        title: 'Treatment Plan Update',
        date: '2024-01-10',
        content: 'Adjusted exercise intensity based on patient feedback and progress assessment.',
        type: 'treatment'
      },
      {
        id: 3,
        title: 'Initial Assessment',
        date: '2024-01-08',
        content: 'Completed initial evaluation and established baseline measurements.',
        type: 'assessment'
      }
    ],
    settings: {
      notifications: true,
      darkMode: false,
      autoSave: true,
      language: 'English',
      dataSync: true,
      biometric: false
    }
  });

  const sections = [
    { name: 'Personal Info', icon: User, color: '#6366F1' },
    { name: 'Medical Notes', icon: FileText, color: '#10B981' },
    { name: 'Settings', icon: Settings, color: '#8B5CF6' }
  ];

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  const toggleSetting = (setting) => {
    setProfileData(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        [setting]: !prev.settings[setting]
      }
    }));
  };

  const ProfileHeader = () => (
    <View style={styles.profileHeader}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>SJ</Text>
        </View>
        <View style={styles.verifiedBadge}>
          <Shield size={16} color="#FFFFFF" />
        </View>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.profileName}>Dr. Sarah Johnson</Text>
        <Text style={styles.profileTitle}>Physical Therapist</Text>
        <Text style={styles.profileSubtitle}>PT-12345-CA • 8 years experience</Text>
      </View>
      <TouchableOpacity 
        style={styles.editProfileButton}
        onPress={() => setIsEditing(!isEditing)}
      >
        <Edit3 size={18} color="#6366F1" />
      </TouchableOpacity>
    </View>
  );

  const renderPersonalInfo = () => (
    <View style={styles.sectionContent}>
      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionTitle}>Professional Profile</Text>
          <Text style={styles.sectionSubtitle}>Manage your personal and professional information</Text>
        </View>
        {isEditing && (
          <TouchableOpacity style={styles.saveButton} onPress={() => setIsEditing(false)}>
            <Save size={16} color="#FFFFFF" />
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.infoGrid}>
        {/* Personal Details Card */}
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Personal Details</Text>
          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>First Name</Text>
              {isEditing ? (
                <TextInput
                  style={styles.input}
                  value={profileData.personalInfo.firstName}
                  onChangeText={(value) => handleInputChange('firstName', value)}
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
                  onChangeText={(value) => handleInputChange('lastName', value)}
                  placeholder="Last Name"
                />
              ) : (
                <Text style={styles.infoValue}>{profileData.personalInfo.lastName}</Text>
              )}
            </View>
          </View>

          <View style={styles.infoItem}>
            <View style={styles.infoHeader}>
              <Mail size={18} color="#6B7280" />
              <Text style={styles.infoLabel}>Email Address</Text>
            </View>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={profileData.personalInfo.email}
                onChangeText={(value) => handleInputChange('email', value)}
                placeholder="Email"
                keyboardType="email-address"
              />
            ) : (
              <Text style={styles.infoValue}>{profileData.personalInfo.email}</Text>
            )}
          </View>

          <View style={styles.infoItem}>
            <View style={styles.infoHeader}>
              <Phone size={18} color="#6B7280" />
              <Text style={styles.infoLabel}>Phone Number</Text>
            </View>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={profileData.personalInfo.phone}
                onChangeText={(value) => handleInputChange('phone', value)}
                placeholder="Phone"
                keyboardType="phone-pad"
              />
            ) : (
              <Text style={styles.infoValue}>{profileData.personalInfo.phone}</Text>
            )}
          </View>
        </View>

        {/* Professional Details Card */}
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Professional Details</Text>
          <View style={styles.infoItem}>
            <View style={styles.infoHeader}>
              <Award size={18} color="#6B7280" />
              <Text style={styles.infoLabel}>License Number</Text>
            </View>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={profileData.personalInfo.licenseNumber}
                onChangeText={(value) => handleInputChange('licenseNumber', value)}
                placeholder="License Number"
              />
            ) : (
              <Text style={styles.infoValue}>{profileData.personalInfo.licenseNumber}</Text>
            )}
          </View>

          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <View style={styles.infoHeader}>
                <Calendar size={18} color="#6B7280" />
                <Text style={styles.infoLabel}>Experience</Text>
              </View>
              {isEditing ? (
                <TextInput
                  style={styles.input}
                  value={profileData.personalInfo.yearsOfExperience}
                  onChangeText={(value) => handleInputChange('yearsOfExperience', value)}
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
              <Briefcase size={18} color="#6B7280" />
              <Text style={styles.infoLabel}>Specialization</Text>
            </View>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={profileData.personalInfo.specialization}
                onChangeText={(value) => handleInputChange('specialization', value)}
                placeholder="Specialization"
              />
            ) : (
              <Text style={styles.infoValue}>{profileData.personalInfo.specialization}</Text>
            )}
          </View>

          <View style={styles.infoItem}>
            <View style={styles.infoHeader}>
              <MapPin size={18} color="#6B7280" />
              <Text style={styles.infoLabel}>Clinic/Practice</Text>
            </View>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={profileData.personalInfo.clinic}
                onChangeText={(value) => handleInputChange('clinic', value)}
                placeholder="Clinic Name"
              />
            ) : (
              <Text style={styles.infoValue}>{profileData.personalInfo.clinic}</Text>
            )}
          </View>
        </View>
      </View>

      {!isEditing && (
        <View style={styles.statsSection}>
          <Text style={styles.statsTitle}>Practice Overview</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>150+</Text>
              <Text style={styles.statLabel}>Patients</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>98%</Text>
              <Text style={styles.statLabel}>Success Rate</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>4.9</Text>
              <Text style={styles.statLabel}>Rating</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Active Cases</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );

  const renderMedicalNotes = () => (
    <View style={styles.sectionContent}>
      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionTitle}>Clinical Documentation</Text>
          <Text style={styles.sectionSubtitle}>Manage your patient notes and treatment plans</Text>
        </View>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>+ New Note</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.notesGrid}>
        {profileData.medicalNotes.map((note) => (
          <View key={note.id} style={styles.noteCard}>
            <View style={styles.noteHeader}>
              <View style={[styles.noteType, styles[`${note.type}Type`]]}>
                <Text style={styles.noteTypeText}>
                  {note.type === 'progress' ? 'Progress' : note.type === 'treatment' ? 'Treatment' : 'Assessment'}
                </Text>
              </View>
              <Text style={styles.noteDate}>{note.date}</Text>
            </View>
            <Text style={styles.noteTitle}>{note.title}</Text>
            <Text style={styles.noteContent}>{note.content}</Text>
            <View style={styles.noteActions}>
              <TouchableOpacity style={styles.noteAction}>
                <Text style={styles.noteActionText}>View Details</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.noteActionEdit}>
                <Text style={styles.noteActionEditText}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.notesStats}>
        <View style={styles.noteStat}>
          <Text style={styles.noteStatNumber}>{profileData.medicalNotes.length}</Text>
          <Text style={styles.noteStatLabel}>Total Notes</Text>
        </View>
        <View style={styles.noteStat}>
          <Text style={styles.noteStatNumber}>3</Text>
          <Text style={styles.noteStatLabel}>This Month</Text>
        </View>
        <View style={styles.noteStat}>
          <Text style={styles.noteStatNumber}>24</Text>
          <Text style={styles.noteStatLabel}>This Year</Text>
        </View>
      </View>
    </View>
  );

  const renderSettings = () => (
    <View style={styles.sectionContent}>
      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionTitle}>Application Settings</Text>
          <Text style={styles.sectionSubtitle}>Customize your MyoMap experience</Text>
        </View>
      </View>

      <View style={styles.settingsGrid}>
        <View style={styles.settingGroup}>
          <Text style={styles.settingGroupTitle}>Preferences</Text>
          <View style={styles.settingList}>
            <View style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <View style={styles.settingIcon}>
                  <Bell size={20} color="#6366F1" />
                </View>
                <View>
                  <Text style={styles.settingTitle}>Push Notifications</Text>
                  <Text style={styles.settingDescription}>Receive alerts and updates</Text>
                </View>
              </View>
              <TouchableOpacity 
                style={[styles.toggle, profileData.settings.notifications && styles.toggleActive]}
                onPress={() => toggleSetting('notifications')}
              >
                <View style={[styles.toggleCircle, profileData.settings.notifications && styles.toggleCircleActive]} />
              </TouchableOpacity>
            </View>

            <View style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <View style={styles.settingIcon}>
                  <Moon size={20} color="#8B5CF6" />
                </View>
                <View>
                  <Text style={styles.settingTitle}>Dark Mode</Text>
                  <Text style={styles.settingDescription}>Switch to dark theme</Text>
                </View>
              </View>
              <TouchableOpacity 
                style={[styles.toggle, profileData.settings.darkMode && styles.toggleActive]}
                onPress={() => toggleSetting('darkMode')}
              >
                <View style={[styles.toggleCircle, profileData.settings.darkMode && styles.toggleCircleActive]} />
              </TouchableOpacity>
            </View>

            <View style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <View style={styles.settingIcon}>
                  <Save size={20} color="#10B981" />
                </View>
                <View>
                  <Text style={styles.settingTitle}>Auto-save</Text>
                  <Text style={styles.settingDescription}>Automatically save progress</Text>
                </View>
              </View>
              <TouchableOpacity 
                style={[styles.toggle, profileData.settings.autoSave && styles.toggleActive]}
                onPress={() => toggleSetting('autoSave')}
              >
                <View style={[styles.toggleCircle, profileData.settings.autoSave && styles.toggleCircleActive]} />
              </TouchableOpacity>
            </View>

            <View style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <View style={styles.settingIcon}>
                  <Globe size={20} color="#F59E0B" />
                </View>
                <View>
                  <Text style={styles.settingTitle}>Language</Text>
                  <Text style={styles.settingDescription}>Application language</Text>
                </View>
              </View>
              <Text style={styles.languageText}>{profileData.settings.language}</Text>
            </View>
          </View>
        </View>

        <View style={styles.settingGroup}>
          <Text style={styles.settingGroupTitle}>Security</Text>
          <View style={styles.settingList}>
            <View style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <View style={styles.settingIcon}>
                  <Shield size={20} color="#EF4444" />
                </View>
                <View>
                  <Text style={styles.settingTitle}>Biometric Login</Text>
                  <Text style={styles.settingDescription}>Use fingerprint or face ID</Text>
                </View>
              </View>
              <TouchableOpacity 
                style={[styles.toggle, profileData.settings.biometric && styles.toggleActive]}
                onPress={() => toggleSetting('biometric')}
              >
                <View style={[styles.toggleCircle, profileData.settings.biometric && styles.toggleCircleActive]} />
              </TouchableOpacity>
            </View>

            <View style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <View style={styles.settingIcon}>
                  <Save size={20} color="#6366F1" />
                </View>
                <View>
                  <Text style={styles.settingTitle}>Cloud Sync</Text>
                  <Text style={styles.settingDescription}>Sync data across devices</Text>
                </View>
              </View>
              <TouchableOpacity 
                style={[styles.toggle, profileData.settings.dataSync && styles.toggleActive]}
                onPress={() => toggleSetting('dataSync')}
              >
                <View style={[styles.toggleCircle, profileData.settings.dataSync && styles.toggleCircleActive]} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.settingsActions}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Reset to Default</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primaryButton}>
          <Save size={18} color="#FFFFFF" />
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

  return (
    <View style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Profile Header */}
        <ProfileHeader />

        {/* Section Tabs */}
        <View style={styles.sectionsContainer}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.sectionsContent}
          >
            {sections.map((section) => {
              const IconComponent = section.icon;
              const isActive = activeSection === section.name;
              return (
                <TouchableOpacity
                  key={section.name}
                  style={[
                    styles.sectionTab,
                    isActive && [styles.activeSectionTab, { borderColor: section.color }]
                  ]}
                  onPress={() => setActiveSection(section.name)}
                >
                  <IconComponent 
                    size={20} 
                    color={isActive ? section.color : '#6B7280'} 
                  />
                  <Text style={[
                    styles.sectionTabText,
                    isActive && [styles.activeSectionTabText, { color: section.color }]
                  ]}>
                    {section.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* Section Content */}
        {renderSectionContent()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC'
  },
  content: {
    paddingBottom: 40
  },
  profileHeader: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    paddingTop: 32,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6'
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 16
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#6366F1',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4
  },
  avatarText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#10B981',
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF'
  },
  profileInfo: {
    flex: 1
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4
  },
  profileTitle: {
    fontSize: 16,
    color: '#6366F1',
    fontWeight: '600',
    marginBottom: 2
  },
  profileSubtitle: {
    fontSize: 14,
    color: '#6B7280'
  },
  editProfileButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sectionsContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6'
  },
  sectionsContent: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 8
  },
  sectionTab: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    marginRight: 8,
    borderWidth: 2,
    borderColor: 'transparent'
  },
  activeSectionTab: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2
  },
  sectionTabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280'
  },
  activeSectionTabText: {
    fontWeight: '700'
  },
  sectionContent: {
    padding: 20,
    gap: 24
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#6B7280'
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#6366F1',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600'
  },
  infoGrid: {
    gap: 20
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16
  },
  infoRow: {
    flexDirection: 'row',
    gap: 16
  },
  infoItem: {
    flex: 1,
    marginBottom: 16
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '600',
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
    borderWidth: 2,
    borderColor: '#6366F1'
  },
  statsSection: {
    marginTop: 8
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 12
  },
  statCard: {
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
  notesGrid: {
    gap: 16
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
    alignItems: 'center',
    marginBottom: 8
  },
  noteType: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6
  },
  progressType: {
    backgroundColor: '#DBEAFE'
  },
  treatmentType: {
    backgroundColor: '#DCFCE7'
  },
  assessmentType: {
    backgroundColor: '#FEF3C7'
  },
  noteTypeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1F2937'
  },
  noteDate: {
    fontSize: 12,
    color: '#9CA3AF'
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8
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
  noteActionEdit: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#EEF2FF',
    borderRadius: 6
  },
  noteActionEditText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6366F1'
  },
  notesStats: {
    flexDirection: 'row',
    gap: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1
  },
  noteStat: {
    flex: 1,
    alignItems: 'center'
  },
  noteStatNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6366F1',
    marginBottom: 4
  },
  noteStatLabel: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center'
  },
  settingsGrid: {
    gap: 20
  },
  settingGroup: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2
  },
  settingGroupTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16
  },
  settingList: {
    gap: 16
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1
  },
  settingIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#F8FAFC',
    alignItems: 'center',
    justifyContent: 'center'
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 2
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#6366F1',
    padding: 16,
    borderRadius: 12
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