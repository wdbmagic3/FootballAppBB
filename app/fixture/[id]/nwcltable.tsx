import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import LeagueTableListItem from '../../../components/LeagueTableListItem';
import { Acf } from '../../../functions/team-interfaces';
import { DataContext, TeamContext } from '../../_layout';
import { SourceToColours } from '../../../Constants/DataSources';

const TableStandings = () => {
  const {teamData} = useContext(TeamContext)
  const dataSource = useContext(DataContext)

  const filteredTeamData = teamData.filter((element) => element.class_list.includes('competition-nwcl-first-div-north'))

  const acfData = filteredTeamData.map((element) => ({id: element.id, name: element.title.rendered, acf: element.acf as Acf}))
  acfData.sort((r1, r2) => {
    // First sort by points (descending)
    if (r2.acf.points !== r1.acf.points) {
      return r2.acf.points - r1.acf.points;
    }
  
    // If points are equal, sort by goal difference (descending)
    if (r2.acf.goal_difference !== r1.acf.goal_difference) {
      return r2.acf.goal_difference - r1.acf.goal_difference;
    }
  
    // Optional: if still equal, sort alphabetically by team name
    return r1.name.localeCompare(r2.name);
  });
  
  return (
    <>
    <View style={[styles.headerRow, {backgroundColor: SourceToColours(dataSource).secondary}]}>
            <Text style={styles.hcposition}></Text>
            <Text style={styles.hcteam}>Team</Text>
            <Text style={styles.hcplayed}>Pld</Text>
            <Text style={styles.hcgd}>GD</Text>
            <Text style={styles.hcpoints}>Pts</Text>
          </View>
    <FlatList
      data={acfData}
      renderItem={({ item, index }) => <LeagueTableListItem item={item} position={index + 1} />}
    />
    {/* 👇 Add this footer */}
    <Text style={styles.updatedText}>Last updated: Wednesday 5 November 2025</Text>
    </>
  );
};

export default TableStandings

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
    fontSize: 12,    
    width: 180,
  },
  played: {
    width:40,
    textAlign: 'center',
  },
  gd: {
    width:40,
    textAlign: 'center',
  },
  points: {
    width:40,
    textAlign: 'center',
  },
  updatedText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 12,
    color: '#000000',
    fontStyle: 'italic',
  },
});

