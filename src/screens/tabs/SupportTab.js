import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { MessageCircle, Phone, HelpCircle, Send, Clock, CheckCircle, AlertCircle, Info } from 'lucide-react-native';

const SupportTab = () => {
  const [activeSection, setActiveSection] = useState('Chat/Help Center');
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const sections = ['Chat/Help Center', 'Contact Support', 'FAQs'];

  const supportTickets = [
    {
      id: 'ST-001',
      title: 'Login issues with new account',
      status: 'resolved',
      priority: 'high',
      date: '2024-01-15',
      description: 'Unable to login with newly created account credentials'
    },
    {
      id: 'ST-002',
      title: 'Exercise assignment not saving',
      status: 'in progress',
      priority: 'medium',
      date: '2024-01-14',
      description: 'Assigned exercises are not saving to patient profiles'
    },
    {
      id: 'ST-003',
      title: 'Feature request: Dark mode',
      status: 'completed',
      priority: 'low',
      date: '2024-01-12',
      description: 'Request for dark mode theme option'
    }
  ];

  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'Go to Profile > Settings > Security and click "Reset Password". You will receive an email with instructions.'
    },
    {
      question: 'Can I use MyoMap on multiple devices?',
      answer: 'Yes, your account syncs across all devices. Simply log in with your credentials on any supported device.'
    },
    {
      question: 'How do I export patient data?',
      answer: 'Navigate to the patient profile, click the export button, and choose your preferred format (PDF or CSV).'
    },
    {
      question: 'What are the system requirements?',
      answer: 'MyoMap works on iOS 14+ and Android 10+. For best performance, ensure you have the latest OS version.'
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'resolved':
        return <CheckCircle size={16} color="#10B981" />;
      case 'in progress':
        return <Clock size={16} color="#F59E0B" />;
      case 'completed':
        return <CheckCircle size={16} color="#10B981" />;
      default:
        return <Info size={16} color="#6B7280" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return '#EF4444';
      case 'medium':
        return '#F59E0B';
      case 'low':
        return '#10B981';
      default:
        return '#6B7280';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'resolved':
        return '#10B981';
      case 'in progress':
        return '#F59E0B';
      case 'completed':
        return '#10B981';
      default:
        return '#6B7280';
    }
  };

  const renderChatHelpCenter = () => (
    <View style={styles.sectionContent}>
      <View style={styles.chatContainer}>
        <View style={styles.chatHeader}>
          <Text style={styles.chatTitle}>Quick Help Chat</Text>
          <Text style={styles.chatSubtitle}>Get instant help from our support team</Text>
        </View>

        <View style={styles.chatMessages}>
          <View style={styles.supportMessage}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>ST</Text>
            </View>
            <View style={styles.messageBubble}>
              <Text style={styles.senderName}>Support Team</Text>
              <Text style={styles.messageText}>
                Hi! How can we help you today? We're here to assist with any questions about MyoMap.
              </Text>
              <Text style={styles.messageTime}>10:30 AM</Text>
            </View>
          </View>
        </View>

        <View style={styles.messageInputContainer}>
          <TextInput
            style={styles.messageInput}
            placeholder="Type your question or describe the issue you're experiencing..."
            value={message}
            onChangeText={setMessage}
            multiline
            numberOfLines={3}
          />
          <TouchableOpacity 
            style={[styles.sendButton, !message && styles.sendButtonDisabled]}
            disabled={!message}
          >
            <Send size={20} color={message ? "#FFFFFF" : "#9CA3AF"} />
          </TouchableOpacity>
        </View>

        <View style={styles.responseTime}>
          <Clock size={16} color="#6B7280" />
          <Text style={styles.responseTimeText}>
            Average response time: 5-10 minutes during business hours
          </Text>
        </View>
      </View>

      {/* Recent Support Tickets */}
      <View style={styles.ticketsSection}>
        <Text style={styles.sectionTitle}>Recent Support Tickets</Text>
        <Text style={styles.sectionDescription}>Track your recent support requests</Text>

        <View style={styles.ticketsList}>
          {supportTickets.map((ticket) => (
            <View key={ticket.id} style={styles.ticketCard}>
              <View style={styles.ticketHeader}>
                <View style={styles.ticketInfo}>
                  <Text style={styles.ticketTitle}>{ticket.title}</Text>
                  <Text style={styles.ticketId}>{ticket.id} - {ticket.date}</Text>
                </View>
                <View style={styles.ticketStatus}>
                  {getStatusIcon(ticket.status)}
                  <Text style={[styles.statusText, { color: getStatusColor(ticket.status) }]}>
                    {ticket.status}
                  </Text>
                </View>
              </View>
              <Text style={styles.ticketDescription}>{ticket.description}</Text>
              <View style={styles.ticketFooter}>
                <View style={[styles.priorityBadge, { backgroundColor: getPriorityColor(ticket.status) + '20' }]}>
                  <Text style={[styles.priorityText, { color: getPriorityColor(ticket.status) }]}>
                    {ticket.priority}
                  </Text>
                </View>
                <TouchableOpacity style={styles.viewTicketButton}>
                  <Text style={styles.viewTicketText}>View Ticket</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );

  const renderContactSupport = () => (
    <View style={styles.sectionContent}>
      <Text style={styles.sectionTitle}>Contact Support</Text>
      <Text style={styles.sectionDescription}>
        Get in touch with our support team through multiple channels
      </Text>

      <View style={styles.contactMethods}>
        <TouchableOpacity style={styles.contactCard}>
          <View style={[styles.contactIcon, { backgroundColor: '#EEF2FF' }]}>
            <MessageCircle size={24} color="#6366F1" />
          </View>
          <View style={styles.contactInfo}>
            <Text style={styles.contactTitle}>Live Chat</Text>
            <Text style={styles.contactDescription}>Instant messaging with support team</Text>
            <Text style={styles.contactAvailability}>Available 24/7</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactCard}>
          <View style={[styles.contactIcon, { backgroundColor: '#F0FDF4' }]}>
            <Phone size={24} color="#10B981" />
          </View>
          <View style={styles.contactInfo}>
            <Text style={styles.contactTitle}>Phone Support</Text>
            <Text style={styles.contactDescription}>Speak directly with our team</Text>
            <Text style={styles.contactAvailability}>Mon-Fri, 9AM-6PM EST</Text>
            <Text style={styles.contactDetail}>+1 (555) 123-HELP</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactCard}>
          <View style={[styles.contactIcon, { backgroundColor: '#FFFBEB' }]}>
            <HelpCircle size={24} color="#F59E0B" />
          </View>
          <View style={styles.contactInfo}>
            <Text style={styles.contactTitle}>Email Support</Text>
            <Text style={styles.contactDescription}>Detailed technical assistance</Text>
            <Text style={styles.contactAvailability}>Response within 4 hours</Text>
            <Text style={styles.contactDetail}>support@myomap.com</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.emergencyContact}>
        <View style={styles.emergencyHeader}>
          <AlertCircle size={20} color="#EF4444" />
          <Text style={styles.emergencyTitle}>Emergency Technical Support</Text>
        </View>
        <Text style={styles.emergencyDescription}>
          For critical system outages or urgent technical issues affecting patient care
        </Text>
        <Text style={styles.emergencyPhone}>+1 (555) 123-URGENT</Text>
        <Text style={styles.emergencyHours}>Available 24/7 for emergencies</Text>
      </View>
    </View>
  );

  const renderFAQs = () => (
    <View style={styles.sectionContent}>
      <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
      <Text style={styles.sectionDescription}>
        Find quick answers to common questions about MyoMap
      </Text>

      <View style={styles.faqsList}>
        {faqs.map((faq, index) => (
          <View key={index} style={styles.faqCard}>
            <View style={styles.faqQuestion}>
              <HelpCircle size={20} color="#6366F1" />
              <Text style={styles.faqQuestionText}>{faq.question}</Text>
            </View>
            <Text style={styles.faqAnswer}>{faq.answer}</Text>
          </View>
        ))}
      </View>

      <View style={styles.moreHelp}>
        <Text style={styles.moreHelpTitle}>Still need help?</Text>
        <Text style={styles.moreHelpDescription}>
          Can't find what you're looking for? Our support team is ready to assist you.
        </Text>
        <TouchableOpacity 
          style={styles.contactSupportButton}
          onPress={() => setActiveSection('Contact Support')}
        >
          <Text style={styles.contactSupportText}>Contact Support</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'Chat/Help Center':
        return renderChatHelpCenter();
      case 'Contact Support':
        return renderContactSupport();
      case 'FAQs':
        return renderFAQs();
      default:
        return renderChatHelpCenter();
    }
  };

  const getSectionIcon = (section) => {
    switch (section) {
      case 'Chat/Help Center':
        return <MessageCircle size={18} color={activeSection === section ? '#6366F1' : '#6B7280'} />;
      case 'Contact Support':
        return <Phone size={18} color={activeSection === section ? '#6366F1' : '#6B7280'} />;
      case 'FAQs':
        return <HelpCircle size={18} color={activeSection === section ? '#6366F1' : '#6B7280'} />;
      default:
        return <MessageCircle size={18} color={activeSection === section ? '#6366F1' : '#6B7280'} />;
    }
  };

  return (
    <ScrollView 
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      {/* Support Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Support & Help Center</Text>
        <Text style={styles.subtitle}>
          Get help, contact support, and find answers to frequently asked questions
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
    paddingHorizontal: 16,
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8
  },
  sectionDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 24
  },
  // Chat Help Center Styles
  chatContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2
  },
  chatHeader: {
    marginBottom: 20
  },
  chatTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4
  },
  chatSubtitle: {
    fontSize: 14,
    color: '#6B7280'
  },
  chatMessages: {
    marginBottom: 20
  },
  supportMessage: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: '#6366F1',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14
  },
  messageBubble: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 16,
    borderRadius: 12,
    borderTopLeftRadius: 4
  },
  senderName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4
  },
  messageText: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 8
  },
  messageTime: {
    fontSize: 12,
    color: '#9CA3AF'
  },
  messageInputContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16
  },
  messageInput: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 16,
    fontSize: 14,
    color: '#1F2937',
    textAlignVertical: 'top'
  },
  sendButton: {
    backgroundColor: '#6366F1',
    width: 50,
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sendButtonDisabled: {
    backgroundColor: '#E5E7EB'
  },
  responseTime: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'center'
  },
  responseTimeText: {
    fontSize: 12,
    color: '#6B7280'
  },
  // Tickets Section
  ticketsSection: {
    marginBottom: 24
  },
  ticketsList: {
    gap: 16
  },
  ticketCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1
  },
  ticketHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8
  },
  ticketInfo: {
    flex: 1
  },
  ticketTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4
  },
  ticketId: {
    fontSize: 12,
    color: '#9CA3AF'
  },
  ticketStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500'
  },
  ticketDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 12
  },
  ticketFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  priorityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6
  },
  priorityText: {
    fontSize: 12,
    fontWeight: '500'
  },
  viewTicketButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#EEF2FF',
    borderRadius: 6
  },
  viewTicketText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6366F1'
  },
  // Contact Support Styles
  contactMethods: {
    gap: 16,
    marginBottom: 24
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1
  },
  contactIcon: {
    width: 50,
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16
  },
  contactInfo: {
    flex: 1
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4
  },
  contactDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4
  },
  contactAvailability: {
    fontSize: 12,
    color: '#10B981',
    fontWeight: '500',
    marginBottom: 2
  },
  contactDetail: {
    fontSize: 12,
    color: '#6366F1',
    fontWeight: '500'
  },
  emergencyContact: {
    backgroundColor: '#FEF2F2',
    borderLeftWidth: 4,
    borderLeftColor: '#EF4444',
    borderRadius: 12,
    padding: 16
  },
  emergencyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8
  },
  emergencyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#DC2626'
  },
  emergencyDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 8
  },
  emergencyPhone: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DC2626',
    marginBottom: 4
  },
  emergencyHours: {
    fontSize: 12,
    color: '#6B7280'
  },
  // FAQs Styles
  faqsList: {
    gap: 16,
    marginBottom: 24
  },
  faqCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1
  },
  faqQuestion: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12
  },
  faqQuestionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    flex: 1
  },
  faqAnswer: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginLeft: 32
  },
  moreHelp: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1
  },
  moreHelpTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8
  },
  moreHelpDescription: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 16
  },
  contactSupportButton: {
    backgroundColor: '#6366F1',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12
  },
  contactSupportText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600'
  }
});

export default SupportTab;