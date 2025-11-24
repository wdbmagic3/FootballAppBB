import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, View } from 'react-native';
import { IconButton } from "react-native-paper";
import { DataSource, SourceToColours, SourceToShortString } from '../Constants/DataSources';
import { NormaliseFixtureResponse } from '../functions/conversion';
import { AshtonFixtureList, Fixture } from '../functions/fixture-interfaces';
import { getAshtonTeams, getBamberFixtures, getBamberTeams, getFixtures } from '../functions/network';
import { TeamList } from '../functions/team-interfaces';




export const FixtureContext = React.createContext<{fixtureData: Fixture[], setFixtureData: React.Dispatch<React.SetStateAction<Fixture[]>>}>({fixtureData: [], setFixtureData: () => {}});
export const TeamContext = React.createContext<{teamData: TeamList, setTeamData: React.Dispatch<React.SetStateAction<TeamList>>}>({teamData: [], setTeamData: () => {}});
export const DataContext = React.createContext<DataSource>(DataSource.Darwen);



export default function RootLayout() {

  const [loadingFixtures, setLoadingFixtures] = useState(true);
  const [loadingTeams, setLoadingTeams] = useState(true);
  const [loadingGeneral, setLoadingGeneral] = useState(false);
  const [fixtureData, setFixtureData] = useState<Fixture[]>([]);
  const [teamData, setTeamData] = useState<TeamList>([]);
  const [refreshBool, setRefreshBool] = useState(false);
  const [dataSource, setDataSource] = useState(DataSource.BamberBridge);
  const [previouslyLoaded] = useState<{source: DataSource, fixtureData: Fixture[]}[]>([])

  useEffect(() => {
    getFixturesJSON(setFixtureData, setLoadingFixtures, dataSource);
    getAshtonTeamsJSON(setTeamData, setLoadingTeams);
  }, [refreshBool]);
  
  const handleLoading = () => {
    setLoadingGeneral(false);
  }
  useEffect(()=>{
    handleLoading();
    },[loadingGeneral])

  if (loadingFixtures || loadingTeams || loadingGeneral) {
    return (<View style={{flex: 1, justifyContent: "center"}}><ActivityIndicator size="large"/></View>);
  }

  if (!previouslyLoaded.find((value) => {return value.source == dataSource})) {
    previouslyLoaded.push({source: dataSource, fixtureData: fixtureData});
  }

  

  const TeamButton = (props: {source: DataSource}) => {
    const isSelected = dataSource == props.source;
    const defaultSource = DataSource.Darwen;
    const defaultString = SourceToShortString(defaultSource);
    const sourceString = SourceToShortString(props.source);
    const buttonColour = SourceToColours(isSelected ? defaultSource : props.source).button;
    return <Button title={ isSelected ? defaultString : sourceString} color={buttonColour} onPress={()=>{
      const previousData = previouslyLoaded.find((value) => {return value.source == (isSelected ? defaultSource : props.source)});
      if (!previousData) {
        setRefreshBool(!refreshBool);
        setLoadingFixtures(true);
        setLoadingTeams(true);
      }
      else {
        setFixtureData(previousData.fixtureData);
        setLoadingGeneral(true);
      }
      setDataSource(isSelected ? defaultSource : props.source)
    }}/>
  }
  

  return (
    <FixtureContext.Provider value={{ fixtureData: fixtureData, setFixtureData: setFixtureData }}>
    <TeamContext.Provider value= {{ teamData: teamData, setTeamData: setTeamData }}>
    <DataContext.Provider value= { dataSource }>
    <Stack
      screenOptions={({navigation, route}) => ({ 
        headerStyle: { backgroundColor: SourceToColours(dataSource).secondary},
        headerTitleStyle: { color: 'black', fontSize: 18},
        headerRight: () => (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <IconButton icon={'refresh'} onPress={()=> {
              setRefreshBool(!refreshBool);
              setLoadingFixtures(true);
              setLoadingTeams(true);
            }}/>
          {/*<View style={{padding: 5}}>
          <TeamButton source={DataSource.BamberBridge}/>
          <TeamButton source={DataSource.Darwen}/>
          </View> */}
          </View> 
        )
    })}
    >
      <Stack.Screen name="index" options={{ title: "Fixtures" }} />
    </Stack>

    <StatusBar style="dark" />
    </DataContext.Provider>
    </TeamContext.Provider>
    </FixtureContext.Provider>
  );
}

function getFixturesJSON(
  setFixtureData: React.Dispatch<React.SetStateAction<Fixture[]>>, 
  setLoadingFixtures: React.Dispatch<React.SetStateAction<boolean>>,
  source: DataSource
) {
  getFixtures(source).then((json) => {
    setFixtureData(NormaliseFixtureResponse(json, source));
  }).finally(() => {
    setLoadingFixtures(false);
  });
}

function getAshtonTeamsJSON(setTeamData: React.Dispatch<React.SetStateAction<TeamList>>, setLoadingTeams: React.Dispatch<React.SetStateAction<boolean>>) {
  getAshtonTeams().then((json) => {
    setTeamData(json);
  }).finally(() => {
    setLoadingTeams(false);
  });
}

function getBamberFixturesJSON(setFixtureData: React.Dispatch<React.SetStateAction<AshtonFixtureList>>, setLoadingFixtures: React.Dispatch<React.SetStateAction<boolean>>) {
  getBamberFixtures().then((json) => {
    setFixtureData(json);
  }).finally(() => {
    setLoadingFixtures(false);
  });
}

function getBamberTeamsJSON(setTeamData: React.Dispatch<React.SetStateAction<TeamList>>, setLoadingTeams: React.Dispatch<React.SetStateAction<boolean>>) {
  getBamberTeams().then((json) => {
    setTeamData(json);
  }).finally(() => {
    setLoadingTeams(false);
  });
}
