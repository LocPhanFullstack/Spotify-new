'use client';

import useGetSongsById from '@/hooks/useGetSongsById';
import useLoadSongURL from '@/hooks/useLoadSongURL';
import usePlayer from '@/hooks/usePlayer';
import PLayerContent from './PLayerContent';

const Player = () => {
    const player = usePlayer();
    const { song } = useGetSongsById(player.activeId);

    const songURL = useLoadSongURL(song!);

    if (!song || !songURL || !player.activeId) {
        return null;
    }

    return (
        <div className="fixed bottom-0 bg-black w-full py-2 h-[80px] px-4">
            <PLayerContent song={song} songURL={songURL} key={songURL} />
        </div>
    );
};

export default Player;
