import React, { useCallback } from "react";
import LiveCursors from "./cursor/LiveCursors";
import { useMyPresence, useOthers } from "@/liveblocks.config";

const Live = () => {
    const others = useOthers();
    const [{ cursor } , updateMyPresence] = useMyPresence() as any;
    const handlePointerMove = useCallback((event:React.PointerEvent)=>{
        event.preventDefault();
        const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
        
        event.preventDefault();
        const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

        updateMyPresence({cursor: {x , y}})

    } , []);

    const handlePointerLeave = useCallback((event:React.PointerEvent)=>{
        event.preventDefault();


        updateMyPresence({cursor: null, message: null})

    } , []);

    const handlePointerDown = useCallback((event:React.PointerEvent)=>{
        const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
        
        event.preventDefault();
        const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

        updateMyPresence({cursor: {x , y}})

    } , []);
    return (
        <div
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            onPointerDown={handlePointerDown}
            className="border-2 border-green-500 h-[100vh] w-full flex justify-center items-center text-center"
        >
            <h1 className="tet-2xl text-white">Live Blocks Figma Clone</h1>
            <LiveCursors others={others} />
        </div>
    )
}


export default Live;