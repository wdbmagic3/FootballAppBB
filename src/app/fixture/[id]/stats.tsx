import React from 'react';
import { ScrollView, Text, View } from 'react-native';

const InfoScreen = () => {
  return (
    <ScrollView style={{ flex: 1, padding: 16, backgroundColor: 'white' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
        Welcome to Our Football App
      </Text>

      <Text style={{ fontSize: 16, lineHeight: 24, marginBottom: 16 }}>
        This app provides up-to-date match details, player stats, and live
        league tables. You can view team line-ups, recent form, and follow your
        favourite clubs throughout the season.
      </Text>

      <Text style={{ fontSize: 16, lineHeight: 24, marginBottom: 16 }}>
        Our mission is to make following local football easy and engaging,
        bringing together fans, clubs, and leagues into one easy-to-use
        platform.
      </Text>

      <Text style={{ fontSize: 16, lineHeight: 24, marginBottom: 16 }}>
        Stay tuned for new features including live commentary, player ratings,
        and match highlights. We’re just getting started!
      </Text>
    </ScrollView>
  );
};

export default InfoScreen;
