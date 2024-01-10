import { create } from "zustand";

interface PlayerStore {
    ids: string[];
    activeId?: string;
    setId: (id: string) => void; 
    setIds: (ids: string[]) => void;
    reset: () => void;
}

//The hook will fill the ids array with the songId of the playlist and will be playing it one after other
const usePlayer = create<PlayerStore>( (set) => ({
    ids: [],
    activeId: undefined,
    setId: (id: string) => set({ activeId: id }),
    setIds: (ids: string[]) => set({ ids: ids }), 
    reset: () => set({ ids: [], activeId: undefined })
}));

export default usePlayer;