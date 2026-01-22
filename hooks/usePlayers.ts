import { useState } from 'react';
import { Player } from '../models/Player';
import { defaultPlayers } from '../const/defaultplayers'

export function usePlayers() {
    const [players, setPlayers] = useState<Player[]>(defaultPlayers);

    const addPlayersBulk = (names: string[]) => {
        const newPlayers = names
            .filter(n => n.trim())
            .map(name => new Player(Math.random().toString(36).substring(2, 10), name.trim(), 0));


        setPlayers(p => [...p, ...newPlayers]);
    };

    const deletePlayersBulk = (ids: string[]) => {
        setPlayers(p => p.filter(pl => !ids.includes(pl.id)));
    };

    const updateScore = (id: string, delta: number) => {
        setPlayers(p =>
            p.map(pl =>
                pl.id === id ? { ...pl, score: pl.score + delta } : pl
            )
        );
    };

    const sortByScore = () => {
        setPlayers(prev => [...prev].sort((a, b) => b.score - a.score));
    };

    return {
        players,
        addPlayersBulk,
        deletePlayersBulk,
        updateScore,
        sortByScore
    };
}
