import React from 'react';
import { FlatList } from 'react-native';
import tablePlayersResponse from '../../../../assets/data/DarwenPlayers.json';
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


