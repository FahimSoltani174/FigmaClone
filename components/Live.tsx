import React from "react";
import LiveCursors from "./cursor/LiveCursors";
import { useOthers } from "@/liveblocks.config";

const Live = () => {
    const others = useOthers();
    return (
        <div>
            <LiveCursors ohters={others} />
        </div>
    )
}


export default Live;