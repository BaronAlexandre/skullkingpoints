import React, { useEffect, useRef, useState } from 'react';
import { Modal, View, Text, ScrollView, TouchableOpacity, Animated, TouchableWithoutFeedback } from 'react-native';
import { Player } from '../models/Player';
import { Colors } from '../const/colors';
import { Avatar, Icon } from '@rneui/themed';
import { Styles } from '../styles/index';
import { getPodium } from '../hooks/finish';

type Props = {
  visible: boolean;
  players: Player[];
  onClose: () => void;
};

export default function FinishModal({ visible, players, onClose }: Props) {
  const { podiumOrder, rest } = getPodium(players);

  const podiumColors = [Colors.coffeebean, Colors.goldenBronze, Colors.coffeebeanDark];
  const podiumHeights = [110, 140, 100];

  const [visiblePlayers, setVisiblePlayers] = useState<string[]>([]);
  const fadeAnim = useRef<Animated.Value[]>([]).current;

  useEffect(() => {
  if (!visible) return;

  const allPlayers = [...podiumOrder, ...rest]; // ordre normal pour render
  fadeAnim.splice(0, fadeAnim.length, ...allPlayers.map(() => new Animated.Value(0)));

  setVisiblePlayers([]);

  // Animation dans l'ordre inverse (du dernier au premier)
  for (let i = allPlayers.length - 1; i >= 0; i--) {
    setTimeout(() => {
      setVisiblePlayers(prev => [...prev, i.toString()]);
      Animated.timing(fadeAnim[i], {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, (allPlayers.length - 1 - i) * 500); // délai croissant
  }
}, [visible, players]);

  return (
    <Modal visible={visible} animationType="fade" onRequestClose={onClose} transparent>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={Styles.ModalBackdrop}>
          <TouchableWithoutFeedback>
            <View style={Styles.ModalContainer}>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 50 }}>
                <TouchableOpacity onPress={onClose}>
                  <Icon name="close" color={Colors.pitchBlack} />
                </TouchableOpacity>
              </View>

              <Text style={Styles.ModalTitle}>Résultats</Text>

              <View style={Styles.PodiumRow}>
                {podiumOrder.map((player, index) => (
                  <Animated.View
                    key={player.id}
                    style={{ opacity: fadeAnim[index], alignItems: 'center', position: 'relative' }}
                  >
                    {player.id !== 'empty' && (
                      <>
                        <View
                          style={[
                            Styles.PodiumBlock,
                            { height: podiumHeights[index], backgroundColor: podiumColors[index] },
                          ]}
                        />
                        <Avatar
                          source={player.iconPath}
                          size={40}
                          containerStyle={{ position: 'absolute', bottom: podiumHeights[index], marginBottom: -10 }}
                          imageProps={{ style: { width: 40, height: 40 } }}
                        />
                        <Text style={{ position: 'absolute', bottom: 0, marginBottom: 50, color: Colors.whiteSmoke }}>
                          {index === 0 ? '2e' : index === 1 ? '1er' : '3e'}
                        </Text>
                        <Text style={Styles.PodiumPlayerName}>{player.name}</Text>
                        <Text style={Styles.PodiumPlayerScore}>{player.score}</Text>
                      </>
                    )}
                  </Animated.View>
                ))}
              </View>

              <ScrollView contentContainerStyle={Styles.FinishRestColumn}>
                {rest.map((player, i) => {
                  const j = podiumOrder.length + i;
                  return (
                    <Animated.View key={player.id} style={[Styles.FinishRestRow, { opacity: fadeAnim[j] }]}>
                      <View style={Styles.FinishPlayerInfo}>
                        <Text style={Styles.FinishRestPosition}>{i + 4}e</Text>
                        <Avatar
                          source={player.iconPath}
                          size={32}
                          containerStyle={{ marginRight: 10 }}
                          imageProps={{ style: { width: 32, height: 32 } }}
                        />
                        <Text style={Styles.PodiumPlayerName}>{player.name}</Text>
                      </View>
                      <Text style={Styles.PodiumPlayerScore}>{player.score}</Text>
                    </Animated.View>
                  );
                })}
              </ScrollView>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
