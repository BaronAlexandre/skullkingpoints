import { StyleSheet } from "react-native";
import { Colors } from '../const/colors';

export const Styles = StyleSheet.create({
  // Container principal
  view: {
    flex: 1,
    backgroundColor: Colors.whiteSmoke,
  },

  // =========================
  // Player List Row
  // =========================
  PlayerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginVertical: 4,
    marginHorizontal: 4,
    borderRadius: 8,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  PlayerRowName: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: Colors.whiteSmoke,
  },
  PlayerRowScore: {
    width: 40,
    textAlign: 'center',
    fontSize: 16,
    marginRight: 10,
    color: Colors.whiteSmoke,
  },

  // =========================
  // Buttons
  // =========================
  SortButton: {
    marginTop: 50,
    marginBottom: 20,
    marginRight: 5,
    marginLeft: 'auto',
    backgroundColor: Colors.goldenBronze,
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // =========================
  // Modals génériques
  // =========================
  ModalContainer: {
    flex: 1,
    backgroundColor: Colors.whiteSmoke,
    padding: 20,
  },
  ModalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 50,
    textAlign: 'center',
  },
  ModalContent: {
    backgroundColor: Colors.whiteSmoke,
    padding: 20,
    borderRadius: 12,
    width: '80%',
    maxHeight: '70%',
  },
  ModalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModalInput: {
    minHeight: 100,
    borderColor: Colors.whiteSmoke,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 12,
    textAlignVertical: 'top',
  },
  UpdatePlayerBackDrop:{
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  UpdatePlayers:{
    backgroundColor: Colors.whiteSmoke,
    padding: 20,
    borderRadius: 12,
    width: '80%',
    maxHeight: '70%',
  },
  UpdatePlayerInput:{
    minHeight: 100,
    borderColor: Colors.whiteSmoke,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 12,
    textAlignVertical: 'top',
  },

  // =========================
  // Delete Player Modal
  // =========================
  DeletePlayerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  DeletePlayerName: {
    marginLeft: 10,
    fontSize: 16,
  },

  // =========================
  // Finish Modal - Podium
  // =========================
  PodiumRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  PodiumItem: {
    alignItems: 'center',
    width: 100,
    position: 'relative',
  },
  PodiumBlock: {
    width: 60,
    borderRadius: 4,
  },
  PodiumPosition: {
    marginTop: 4,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  PodiumPlayerName: {
    marginTop: 2,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  PodiumPlayerScore: {
    fontSize: 14,
    textAlign: 'center',
  },

  // =========================
  // Finish Modal - Autres joueurs
  // =========================
  FinishRestColumn: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  FinishRestRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginVertical: 5,
    padding: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  FinishRestPosition: {
    fontWeight: 'bold',
    marginRight: 8,
    fontSize: 16,
  },
  FinishPlayerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
