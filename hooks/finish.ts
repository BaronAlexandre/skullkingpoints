import { Player } from '../models/Player';

export function getPodium(players: Player[]) {
  const sorted = [...players].sort((a, b) => b.score - a.score);
  const top3 = sorted.slice(0, 3);
  const rest = sorted.slice(3);

  const podiumOrder = [
    top3[1] || { id: 'empty', name: '', score: 0, iconPath: null },
    top3[0] || { id: 'empty', name: '', score: 0, iconPath: null },
    top3[2] || { id: 'empty', name: '', score: 0, iconPath: null },
  ];

  return { podiumOrder, rest };
}
