import { FlatList } from 'react-native';
import { Player } from '../models/Player';
import PlayerRow from './PlayerRow';
import React from 'react';

type Props = {
  players: Player[];
  onScoreChange: (id: string, delta: number) => void;
};

export default function PlayerList({ players, onScoreChange }: Props) {
  return (
    <FlatList
      data={players}
      keyExtractor={p => p.id}
      renderItem={({ item }) => (
        <PlayerRow
          name={item.name}
          score={item.score}
          iconPath={item.iconPath}
          onPlus={() => onScoreChange(item.id, 10)}
          onMinus={() => onScoreChange(item.id, -10)}
        />
      )}
    />
  );
}
