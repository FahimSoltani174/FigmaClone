import CursorSVG from "@/public/assets/CursorSVG";
import { CursorChatProps, CursorMode } from "@/types/type";
import React from "react";





const LiveChat = ({ cursor, cursorState, setCursorState, updateMyPresence }: CursorChatProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateMyPresence({ message: e.target.value });
        setCursorState({
            mode: CursorMode.Chat,
            previousMessage: null,
            message: e.target.value
        });

    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setCursorState({
                mode: CursorMode.Chat,
                previousMessage: cursorState.message,
                message: ''
            })
        } else if (e.key === "Escape") {
            mod: CursorMode.Hidden
        }

    }

    return (
        <div className="absolute top-0 left-0" style={{
            transform: `translateX(${cursor.x}px) translateY(${cursor.y}px)`
        }}>
            {cursorState.mode === CursorMode.Chat && (
                <>
                    <CursorSVG color="#000" />
                    <div className="absolute left-2 top-5 bg-blue-500 px-4 py-2 text-sm leading-relaxed text-white rounded-[20px]"
                        onKeyUp={(e) =>e.stopPropagation()}
                        onKeyDown={(e)=> {if(e.key === "Escape"){
                            updateMyPresence({ message: '' })
                            setCursorState({ mode: CursorMode.Hidden })
                        }}}
                    >
                        {cursorState.previousMessage && (
                            <div>{cursorState.previousMessage}</div>
                        )}
                        <input
                            className="z-10 w-60 border-none bg-transparent text-white placeholder-blue-300 outline-none"
                            autoFocus={true}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            placeholder={cursorState.previousMessage ? '' : 'Type a message...'}
                            value={cursorState.messge}
                            maxLength={50}
                        />
                    </div>
                </>

            )}
        </div>
    )
}


export default LiveChat;