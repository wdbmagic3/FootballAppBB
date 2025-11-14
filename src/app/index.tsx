import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View, Text, TouchableHighlight } from 'react-native';
import { useContext, useState } from 'react';
import FixtureListItem from '../components/FixtureListItem';
import dayjs from 'dayjs';
import { Stack } from 'expo-router';
import { DataContext, FixtureContext } from './_layout';
import { SourceToColours, SourceToString } from '../Constants/DataSources';

export default function HomeScreen() {
  const {fixtureData} = useContext(FixtureContext)
  const dataSource = useContext(DataContext);
  const [pagination, SetPagination] = useState(0);

  const getDate = (date:string) => {
    return dayjs(date, "YYYYMMDD");
  }

  const previousInactive = pagination == 0;

  const nextInactive =  (fixtureData.length - pagination*10) <= 10

  const sortedFixtures = fixtureData.sort((r1, r2) =>
  getDate(r1.date).diff(getDate(r2.date)));

  const matchdayDict = Object.fromEntries(sortedFixtures.map((element, index) => [element.date, index+1]))
  //a
  const orderedFixtures = fixtureData.sort((r1, r2) =>
    getDate(r1.date).diff(getDate(r2.date)));

  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{ 
          title: `${SourceToString(dataSource)}`
        }}
      />
      {!(previousInactive && nextInactive) && <View style={[styles.prevNextContainer, {backgroundColor: SourceToColours(dataSource).primary}]}>
      {previousInactive ? <View style={styles.prevNextItem}/> : <TouchableHighlight style={styles.prevNextItem} onPress={() => {
        if (!previousInactive) {
          SetPagination(pagination-1)
        }
        }}>
          <Text style={styles.prevNextText}>Previous</Text>
        </TouchableHighlight>
        }
      {nextInactive ? <View style={styles.prevNextItem}/> :
        <TouchableHighlight style={styles.prevNextItem} onPress={() => {
          if (!nextInactive) {
            SetPagination(pagination+1)
          }          
        }}>
          <Text style={styles.prevNextText}>Next</Text>
        </TouchableHighlight>
      }
      </View>}
      <FlatList 
        style={styles.container}
        data={orderedFixtures.slice(pagination*10, pagination*10+10)} 
        renderItem={({ item }) => ( 
          <FixtureListItem item={item} round={matchdayDict[item.date]} source={dataSource}/>
        )}
      />      
      <StatusBar style="auto" />
    </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  prevNextContainer: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center'
  },
  prevNextItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: 'white',
    alignSelf: 'stretch',
  },
  prevNextText: {
    color: 'white',
    fontSize: 17,
  }
});