import { StyleSheet, Text, View, Image } from 'react-native';

import data from '../../assets/data/sample.json';
import { Acf } from '../functions/team-interfaces';
const tableStandings = data.data.tableStandings.response;

type LeagueTableListItemProps = {
    item: (typeof tableStandings)[0];
};

type AcfTeamItem = {
  id: number;
  name: string;
  acf: Acf;
}

export default function LeagueTableListItem({ item, position }: {item: AcfTeamItem, position: number}) {
    
    const RenderItem = ({ item, position }: { item :AcfTeamItem, position: number}) => (
        <View style={styles.row}>
          <Text style={styles.position}>{position}</Text>
          <Image source={{ uri: item.acf.image_url }} style={styles.logoImage} />
          <Text style={styles.team}>{item.name}</Text>
          <Text style={styles.played}>{item.acf.played}</Text>
          <Text style={styles.gd}>{item.acf.goal_difference}</Text>
          <Text style={styles.points}>{item.acf.points}</Text>
        </View>
      );

      return (
        <View style={styles.container}>
          
          <RenderItem item={item} position={position}/>
        </View>
      );    
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#fff',
    },
    headerRow: {
      flexDirection: 'row',
      backgroundColor: 'yellow',
      marginBottom: 8,
    },
    row: {
      flexDirection: 'row',
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc'
    },
    headerCell: {
      flex: 1,
      fontWeight: 'bold',
      fontSize: 12,
      textAlign: 'center'
    },
    cell: {
      flex: 1,
      fontSize: 12,
      textAlign: 'center',
      width: 40,
    },
    hcposition: {
      width:40,
    },
    hcteam: {
      flex: 1,
    },
    hcplayed: {
      width:40,
    },
    hcgd: {
      width:40,
    },
    hcpoints: {
      width:40,
    },
    position: {
      width:40,
    },
    team: {
      flex: 1,
      fontSize: 14,    
      marginTop: 2,
    },
    played: {
      width:40,
      fontSize: 14, 
      textAlign: 'center',
      marginTop: 2,
    },
    gd: {
      width:40,
      fontSize: 14, 
      textAlign: 'center',
      marginTop: 2,
    },
    points: {
      width:40,
      fontSize: 14, 
      textAlign: 'center',
      marginTop: 2,
    },
    logoImage: {
      height: 30,
      aspectRatio: 1,
      marginRight: 10,
  },
  });