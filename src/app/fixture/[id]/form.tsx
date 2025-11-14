import React from 'react';
import { ScrollView, Text, View } from 'react-native';

const MatchdayInfoScreen = () => {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#fff' }}
      contentContainerStyle={{ padding: 16 }}
    >
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 12 }}>
        Matchday Information
      </Text>

      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>Ground:</Text>
        <Text>Multevo Group Anchor Ground</Text>
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>Address:</Text>
        <Text>Anchor Road, Darwen, Lancashire</Text>
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>Postcode:</Text>
        <Text>BB3 0BB</Text>
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>Telephone:</Text>
        <Text>07778191788</Text>
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>Midweek Night:</Text>
        <Text>Wednesday</Text>
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>2025/26 Admission Prices:</Text>
        <Text>£7.00 Adults, £4.00 Concessions, £2.00 Children</Text>
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>Programme Price:</Text>
        <Text>£2.50</Text>
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>Directions:</Text>
        <Text style={{ lineHeight: 22 }}>
        M65 to junction 4. At traffic lights turn left onto A666 (signposted Darwen). After approx 1/2 mile turn left between Anchor Car sales and the Anchor Pub. Bear right and ground is on the left.
        </Text>        
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>Nearest Railway:</Text>
        <Text>Darweny</Text>
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>Nearest Bus Route to Ground:</Text>
          <Text>BLACKBURN Town Centre to BOLTON Bus Route via Ewood ask for Anchor stop, Darwen</Text>
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>Parking Facilities:</Text>
        <Text>Crown Paints Car Park is a large car park which is adjacent to the ground</Text>
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>Ground Facilities:</Text>
        <Text>Male and Female Officials Changing rooms, Home and Away Team Changing rooms, Club House, Café area, Stand, Office, Football Pitch, Turnstiles</Text>
      </View>

      
    </ScrollView>
  );
};

export default MatchdayInfoScreen;
