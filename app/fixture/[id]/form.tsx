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
        <Text>Brocstedes Park</Text>
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>Address:</Text>
        <Text>Downall Green, Ashton in Makerfield, Lancashire</Text>
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>Postcode:</Text>
        <Text>WN4 0NR</Text>
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>Telephone:</Text>
        <Text>01942 716360</Text>
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>Midweek Night:</Text>
        <Text>Tuesday</Text>
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>2025/26 Admission Prices:</Text>
        <Text>£6 adults • £4 concessions • Kids free (cash only)</Text>
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>Programme Price:</Text>
        <Text>Electronic programme only</Text>
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>Directions:</Text>
        <Text style={{ lineHeight: 22 }}>
          From South: M6 to junction 25, turn right onto A49, after ½ mile turn
          right into Soughers Lane. At T junction, turn right into Downall Green
          Road, pass over M6 and turn 2nd right into Boothbrow Road, then 2nd
          right into Brocstedes Road.
        </Text>

        <Text style={{ marginTop: 8, lineHeight: 22 }}>
          From North: M6 to junction 24, rejoin northbound M6 to junction 25,
          then follow directions as above.
        </Text>
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>Nearest Railway:</Text>
        <Text>Bryn (1.2 miles)y</Text>
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>Nearest Bus Rout to the Ground:</Text>
        <Text>156/157 St Helens/Bryn route</Text>
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>Parking Facilities:</Text>
        <Text>Parking facilities for approx 100 cars</Text>
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>Ground Facilities:</Text>
        <Text>Licensed Bar. Tea Bar. Ramp into clubhouse. Please note these are by card payment only.</Text>
      </View>

      
    </ScrollView>
  );
};

export default MatchdayInfoScreen;
