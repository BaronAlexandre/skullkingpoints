import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import { Styles } from './styles';
import { usePlayers } from './hooks/usePlayers';
import { Button } from '@rneui/base';
import { Colors } from './const/colors';
import PlayerList from './components/PlayersList';
import PlayerSpeedDial from './components/PlayerSpeedDial';
import BulkAddModal from './components/AddPlayers';
import BulkDeleteModal from './components/DeletePlayers';
import FinishModal from './components/FinishModel';

export default function App() {
  const { players, addPlayersBulk, deletePlayersBulk, updateScore, sortByScore } = usePlayers();

  const [addVisible, setAddVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [finishVisible, setFinishVisible] = useState(false);

  return (
    <ImageBackground source={require("./assets/bg.png")} style={Styles.view} resizeMode="cover" >
      <Button icon={{name:"sort"}}
        color={Colors.goldenBronze}
        containerStyle={Styles.SortButton}
        onPress={sortByScore}></Button>

      <PlayerList players={players} onScoreChange={updateScore} />

      <PlayerSpeedDial
        onAdd={() => setAddVisible(true)}
        onDelete={() => setDeleteVisible(true)}
        onFinish={() => setFinishVisible(true)}
      />

      <BulkAddModal
        visible={addVisible}
        onSubmit={addPlayersBulk}
        onClose={() => setAddVisible(false)}
      />

      <BulkDeleteModal
        visible={deleteVisible}
        players={players}
        onSubmit={deletePlayersBulk}
        onClose={() => setDeleteVisible(false)}
      />

      <FinishModal
        visible={finishVisible}
        players={players}
        onClose={() => setFinishVisible(false)}
      />

    </ImageBackground>
  );
}
