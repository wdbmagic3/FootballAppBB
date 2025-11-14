import { View, Text, Image, StyleSheet, FlatList, Linking, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { useGlobalSearchParams } from 'expo-router';
import dayjs from 'dayjs';
import * as teamInterfaces from '../../../functions/team-interfaces';
import { DataContext, FixtureContext, TeamContext } from '../../_layout';
import { SourceToColours, SourceToString } from '../../../Constants/DataSources';


const FixtureDetails = () => {
  const { id } = useGlobalSearchParams();
  const {teamData} = useContext(TeamContext)
  const {fixtureData} = useContext(FixtureContext)
  const dataSource = useContext(DataContext)


  const teamACFData = teamData.map((element) => ({id: element.id, name: element.title.rendered, acf: element.acf as teamInterfaces.Acf}))
  const fixture = fixtureData.find((element) => element.id.toString() == id);
  
  if (!fixture)
  {
    return <></>;
  }
  const homeTeam = teamACFData.find((element) => element.name == fixture.home_team);
  const awayTeam = teamACFData.find((element) => element.name == fixture.away_team);

  var homeURL: string | undefined = '';
  var awayURL: string | undefined = '';


  if (fixture.home_team_logo_url == 'ashton') {
    homeURL = homeTeam?.acf.image_url;
  }
  else {
    homeURL = fixture.home_team_logo_url;
  }
  if (fixture.away_team_logo_url == 'ashton') {
    awayURL = awayTeam?.acf.image_url;
  }
  else {
    awayURL = fixture.away_team_logo_url;
  }

  const homeScorerList = fixture.home_scorers.split('\r\n');
  const awayScorerList = fixture.away_scorers.split('\r\n');

  const isSponsored = fixture.sponsor_image_url != '' || fixture.sponsor_name != '' || fixture.sponsor_url != '';
  
  var sponsorClick = () => {};


  if (fixture.sponsor_image_url != '') {
      sponsorClick = () => {
      Linking.canOpenURL(fixture.sponsor_url).then(supported => {
        if (supported) {
          Linking.openURL(fixture.sponsor_url);
        }
      })
    }
  }

  return (
    <View style={[styles.page, {backgroundColor: SourceToColours(dataSource).lightPrimary}]}>
      <Text style={{ fontSize: 24}}>
        Fixture Details: {fixture.home_team == SourceToString(dataSource) ? 'Home' : 'Away'}</Text> 
      <Text>{dayjs(fixture.date, 'YYYYMMDD').format('DD-MM-YYYY')}</Text>
      <Text>{fixture.location}</Text>
      {fixture.location_image_url != '' ? <Image 
        source={{ uri: fixture.location_image_url}} 
        style={styles.image}
        resizeMode='contain' /> :
        <Image 
        source={{ uri: homeURL }} 
        style={styles.image}
        resizeMode='contain' />}
      <Text style={[styles.resultsHeader, {backgroundColor: SourceToColours(dataSource).secondary}]}>Matchday Result</Text>
      <View style={[styles.result, {backgroundColor: SourceToColours(dataSource).primary}]}>
        <View style={styles.teams}>
          <Image source={{uri: homeURL}} style={styles.teamLogo}/>
          <Text style={styles.teamNames}>{fixture.home_team}</Text>
          <FlatList 
            data={homeScorerList}
            renderItem={({item}) =>
              <Text style={styles.scorerNames}>{item}</Text>}/>
        </View>
        <View style={styles.centreContainer}>
        { fixture.attendance != '' &&
          <Text style={styles.centreDetails}>ATT: {fixture.attendance}</Text>
        }
        
          <Text style={{ fontSize: 24, color: 'white'}}> 
            {fixture.home_score} - {fixture.away_score}
          </Text>
          <Text style={styles.centreDetails}>HT: {fixture.HT_home_score}-{fixture.HT_away_score}</Text>
          
        </View>
        <View style={styles.teams}>
        <Image source={{uri: awayURL }} style={styles.teamLogo}/>
        <Text style={styles.teamNames}>{fixture.away_team}</Text>
        <FlatList 
          data={awayScorerList}
          renderItem={({item}) =>
            (<Text style={styles.scorerNames}>{item}</Text>)}/>
        </View>
      </View>
      { isSponsored &&
        <TouchableOpacity onPress={sponsorClick} style={styles.sponsorOpacity}>
        <View style={styles.sponsor}>
          <Text style={styles.sponsorHeader}>Sponsored by {fixture.sponsor_name}</Text>
          {fixture.sponsor_image_url != '' &&
          <Image
          source={{ uri: fixture.sponsor_image_url}}
          style={styles.sponsorImage}
          resizeMode='contain'/>
          }
          <Text style={styles.viewMessage}>Tap to View</Text>
        </View>
        </TouchableOpacity>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  sponsorHeader: {
    textAlign: 'center',
    fontSize: 15,
    padding: 3,
    backgroundColor: 'yellow'
  },
  viewMessage: {
    alignSelf: 'center',
    color: 'white',
    marginBottom: 5,
  },
  sponsorImage: {
    width: '80%',
    flexGrow: 1,
    marginVertical: 5,
    //height: 300,
    //backgroundColor: 'yellow',
    alignSelf: 'center'
  },
  sponsorOpacity: {
    flexGrow: 1,
  },
  sponsor: {
    marginTop: 10,
    flexGrow: 1,
    backgroundColor: '#3366FF',
  },
  page: {
    padding: 10,
    backgroundColor: '#CCDDFF',
    flex:1
  },
  resultsHeader: {
    textAlign: 'center',
    fontSize: 20,
    padding: 2,
    marginBottom: 5,
    backgroundColor: 'yellow'
  },
  image: {
    width: '100%',
    marginVertical: 15,
    //height: 300,
    aspectRatio: 16 / 9,
    //backgroundColor: 'yellow',
  },
  result: {
    padding: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'navy',
  },  
  teamLogo: {
    height: 60,
    aspectRatio: 1,
  },
  teams: {
    alignItems: 'center',
    flex: 1
  },
  teamNames: {
    color: 'white',
    fontSize: 18,
  },
  scorerNames: {
    color: 'white',
  },
  centreDetails: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  centreContainer: {
    alignItems: 'center'
  }
})

export default FixtureDetails