import React, { useState } from 'react';
import {
  Modal,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import { Styles } from '../styles';
import { Colors } from '../const/colors'

type Props = {
  visible: boolean;
  onSubmit: (names: string[]) => void;
  onClose: () => void;
};

export default function BulkAddModal({ visible, onSubmit, onClose }: Props) {
  const [value, setValue] = useState('');

  const submit = () => {
    const names = value
      .split('\n')
      .map(n => n.trim())
      .filter(Boolean);
    onSubmit(names);
    setValue('');
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={Styles.UpdatePlayerBackDrop}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={Styles.UpdatePlayers}>
              <TextInput
                multiline
                placeholder="Un nom par ligne"
                value={value}
                onChangeText={setValue}
                style={Styles.UpdatePlayerInput}
              />
              <Button title="Ajouter" onPress={submit} color={Colors.coffeebeanDark} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

