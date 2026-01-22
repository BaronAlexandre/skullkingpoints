import React, { useState } from 'react';
import {
  Modal,
  View,
  ScrollView,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import { Player } from '../models/Player';
import { Icon, Text } from '@rneui/themed';
import { Styles } from '../styles';
import { Colors } from '../const/colors'

type Props = {
  visible: boolean;
  players: Player[];
  onSubmit: (ids: string[]) => void;
  onClose: () => void;
};

export default function BulkDeleteModal({ visible, players, onSubmit, onClose }: Props) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    setSelected(s =>
      s.includes(id) ? s.filter(i => i !== id) : [...s, id]
    );
  };

  const submit = () => {
    onSubmit(selected);
    setSelected([]);
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={Styles.UpdatePlayerBackDrop}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={Styles.UpdatePlayers}>
              <ScrollView style={{ maxHeight: 300 }}>
                {players.map(p => {
                  const isSelected = selected.includes(p.id);
                  return (
                    <View key={p.id} style={Styles.DeletePlayerRow}>
                      <Icon
                        name={isSelected ? 'check-box' : 'check-box-outline-blank'}
                        type="material"
                        color={isSelected ? '#007AFF' : '#999'}
                        onPress={() => toggle(p.id)}
                      />
                      <Text style={Styles.DeletePlayerName}>{p.name}</Text>
                    </View>
                  );
                })}
              </ScrollView>

              <Button title="Supprimer" onPress={submit} color={Colors.coffeebeanDark} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
