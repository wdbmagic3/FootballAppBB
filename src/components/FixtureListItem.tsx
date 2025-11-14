import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Entypo} from '@expo/vector-icons';
import { Colors } from '../Constants/Colors';
import dayjs from 'dayjs';
import { Link } from 'expo-router';
import { Acf } from '../functions/fixture-interfaces';
import { Fixture } from "../functions/fixture-interfaces";
import { DataSource, SourceToString } from '../Constants/DataSources';

export default function FixtureListItem({ 
  item, 
  round,
  source,
 }: { 
  item: Fixture ;
  round: number;
  source: DataSource;
 }) {
  var opponent = '';
  var homeAwayStr = 'Home';
  var homeAwayBool = item.home_team == SourceToString(source);

  if (homeAwayBool) {
    opponent = item.away_team;
    homeAwayStr = 'Home';
  }
  else {
    opponent = item.home_team;
    homeAwayStr = 'Away';
  }

  return (
    <Link href={`/fixture/${item.id}`} asChild>
    <Pressable style={styles.itemContainer}>
      <View style={styles.datesContainer}>
        <Text style={styles.date}>{dayjs(item.date, 'DDMMYYYY').format('DD')}</Text>
        <Text style={styles.month}>{dayjs(item.date, 'DDMMYYYY').format('MMM')}</Text>
      </View>
      <View style={{flex: 1}}>
      <Text style={styles.round}>Matchday {round}</Text>
        <Text style={(homeAwayBool) ? styles.opponentHome : styles.opponentAway}>{opponent}</Text>
        <Text style={styles.venue}>{homeAwayStr}</Text>
      </View>
      <Entypo name="chevron-right" size={24} color={Colors.primary} />
    </Pressable>
    </Link>
  );
}
    const styles = StyleSheet.create({
          itemContainer: {
          padding: 10,
          margin: 5,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 10,
      
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.0,
      
          elevation: 1,
        },
        datesContainer: {
          padding: 10,
          marginRight: 10,
          borderRightWidth: 1,
          borderColor: 'gainsboro',
          alignItems: 'center',
        },
        date: {
        },
        month: {
          backgroundColor: 'gainsboro',
          paddingVertical: 3,
          paddingHorizontal: 20,
      
          borderRadius: 10,
          overflow: 'hidden',
      
          color: 'dimgray',
          fontWeight: 'bold',
          marginTop: 5,
      
          alignItems: 'center',
        },
        round: {
          color: Colors.primary,
        },
        opponentAway: {
          fontSize: 20,
          marginVertical: 7,
          fontWeight: 'normal',
        },
        opponentHome: {
          fontSize: 20,
          marginVertical: 7,
          fontWeight: 'bold',
        },
        venue: {
          color: 'dimgray',
        },
      });