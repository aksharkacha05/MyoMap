import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = ['Home', 'Body Map', 'Exercise Library', 'Profile', 'Support'];

  return (
    <View style={styles.tabsContainer}>
      <View style={styles.tabs}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tab,
              activeTab === tab && styles.activeTab
            ]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[
              styles.tabText,
              activeTab === tab && styles.activeTabText
            ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16
  },
  tabs: { 
    flexDirection: 'row', 
    backgroundColor: '#F3F4F6',
    padding: 4,
    borderRadius: 12
  },
  tab: { 
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderRadius: 8,
    alignItems: 'center'
  },
  tabText: { 
    fontSize: 11, 
    fontWeight: '500',
    color: '#6B7280',
    textAlign: 'center'
  },
  activeTab: { 
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2
  },
  activeTabText: { 
    color: '#1F2937',
    fontWeight: '600'
  }
});

export default TabNavigation;