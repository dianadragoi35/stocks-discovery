import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
// import './global.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDiscoverStocks = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3000/api/discover-stocks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      Alert.alert('Success', data.message);
    } catch (error) {
      Alert.alert('Error', 'Failed to connect to server');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>AI Stock Discovery</Text>
        <Text style={styles.subtitle}>Find profitable opportunities with AI-powered analysis</Text>
      </View>
      
      <TouchableOpacity 
        style={[styles.discoverButton, isLoading && styles.disabledButton]}
        onPress={handleDiscoverStocks}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>
          {isLoading ? 'Analyzing Markets...' : 'Discover Profitable Stocks'}
        </Text>
      </TouchableOpacity>
      
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#888888',
    textAlign: 'center',
    lineHeight: 22,
  },
  discoverButton: {
    backgroundColor: '#00ff88',
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 12,
    minWidth: 280,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#00ff88',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  disabledButton: {
    backgroundColor: '#666666',
    shadowColor: '#666666',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
});
