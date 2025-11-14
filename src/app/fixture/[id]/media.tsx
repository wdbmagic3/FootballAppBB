import React from 'react';
import { ScrollView, Text } from 'react-native';

const InfoScreen = () => {
  return (
    <ScrollView style={{ flex: 1, padding: 16, backgroundColor: 'white' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
        History
      </Text>

      <Text style={{ fontSize: 16, lineHeight: 24, marginBottom: 16 }}>
      Formed in 1870, fully concentrating on Association Football in 1875, Darwen FC would become early pioneers of Professional Football in Northern England.
In October 1878, Darwen became the first club in Lancashire to stage a game under floodlights at our old Barley Bank Ground against a Blackburn and District’ side. This game was a huge success, not only as the club won the game 3-0 but the experiment of staging a game under floodlights was not repeated again in this era of football in the area.
Darwen were the first working class, Northern ‘Mill Town’ club to have any success in the FA Cup, reaching the Quarter Finals of the competition in 1879. Darwen’s run in the tournament would cause controversy by signing two players, Fergus Suter a Jimmy Love who were paid for their services becoming the first two professional footballers in the English Game. Paying players was strictly forbidden at this time and the club were threatened with expulsion from all Football Association compe </Text>

      
    </ScrollView>
  );
};

export default InfoScreen;
