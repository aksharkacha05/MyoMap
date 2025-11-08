import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeTab from './tabs/HomeTab';
import BodyMapTab from './tabs/BodyMapTab';
import ExerciseLibraryTab from './tabs/ExerciseLibraryTab';
import ProfileTab from './tabs/ProfileTab';
import SupportTab from './tabs/SupportTab';
import Header from '../components/Header';
import TabNavigation from '../components/TabNavigation';

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <HomeTab />;
      case 'Body Map':
        return <BodyMapTab />;
      case 'Exercise Library':
        return <ExerciseLibraryTab />;
      case 'Profile':
        return <ProfileTab />;
      case 'Support':
        return <SupportTab />;
      default:
        return <HomeTab />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        {renderContent()}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: '#F8FAFC' 
  },
  container: { 
    flex: 1 
  }
});