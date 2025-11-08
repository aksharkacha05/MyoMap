import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Activity } from 'lucide-react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.logoBox}>
        <Activity color="#6366F1" size={24} />
      </View>
      <View>
        <Text style={styles.appTitle}>MyoMap</Text>
        <Text style={styles.subTitle}>AI-Powered Physical Therapy Assistant</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 20,
    paddingBottom: 0
  },
  logoBox: { 
    backgroundColor: '#EEF2FF', 
    padding: 12, 
    borderRadius: 12, 
    marginRight: 12 
  },
  appTitle: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#1F2937' 
  },
  subTitle: { 
    fontSize: 14, 
    color: '#6B7280',
    marginTop: 2
  }
});

export default Header;