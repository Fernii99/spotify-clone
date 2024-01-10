"use client"

import LikedButton from "@/components/LikedButton";
import MediaItem from "@/components/MediaItem";
import useOnPlay from "@/hooks/useOnPlay";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface LikedContentProps {
    songs: Song[];
}

export const revalidate = 0;

const LikedContent: React.FC<LikedContentProps> = ( {songs} ) =>  {

    const router = useRouter();
    const {isLoading, user} = useUser();
    const onPlay = useOnPlay(songs);

    useEffect(() => {
        if(!isLoading && !user) {
            router.replace('/');
        }

    }, [isLoading, user, router])

    if(songs.length === 0) {
        return(
            <div className="
            flex 
            flex-col 
            gap-y-2 
            w-full 
            px-6 
            text-neutral-400"
            >
                You have no liked songs
            </div>
        )
    }

    return( 
        <div className="flex flex-col pag-y-2 2-full p-6">
            {songs.map((song) => (
                <div 
                    key={song.id} 
                    className="flex items-center gap-x-4 w-full"
                >
                    <div className="flex-1">
                        <MediaItem data={song} onClick={(id: string) => onPlay(id)}  />
                    </div>
                    <LikedButton songId={song.id}/>
                </div>
             ))}
        </div>
    )

    
}

export default LikedContent;