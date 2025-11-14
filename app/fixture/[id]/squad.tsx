import { FlatList } from 'react-native';
import React from 'react';
import tablePlayersResponse from '../../../../assets/data/players.json';
import PlayerListItem from '../../../components/PlayerListItem';
const tablePlayers = tablePlayersResponse.data.tablePlayers.response;

const TablePlayers = () => {
  return (
    <FlatList
      data={tablePlayers}
      renderItem={({ item }) => <PlayerListItem item={item} />}
    />
  );
};

export default TablePlayers 


