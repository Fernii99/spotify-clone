"use client"

import { BounceLoader } from "react-spinners";
import Box from "@/components/Box";

const Loading = () => {
    return ( 
        
        <Box className="h-full flex items-centerr justify-center">
            <BounceLoader color="#22c55e" size={40}/>
        </Box>

    );
}
 
export default Loading;