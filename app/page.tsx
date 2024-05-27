"use client";
import {fabric} from "fabric";
import { Room } from "./Room";
import { CollaborativeApp } from "./CollaborativeApp";
import Live from "@/components/Live";
import Navbar from "@/components/Navbar";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import { useEffect, useRef } from "react";
import { CustomFabricObject } from "@/types/type";
import { handleCanvasMouseDown, handleResize, initializeFabric } from "@/lib/canvas";

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas| null>(null);
  const isDrawing = useRef(false);
  const shapeRef = useRef<fabric.Object | null>(null);
  const selectedShapeRef = useRef<string | null>('rectangle')

  useEffect(()=>{
    const canvas = initializeFabric({canvasRef , fabricRef})

    canvas.on("mouse:down" , (options) =>{
      handleCanvasMouseDown({
        options,
        canvas,
        isDrawing,
        shapeRef,
        selectedShapeRef
      })
    })

    window.addEventListener("resize" , ()=>{
      handleResize({ fabricRef })
    })
  },[])
  return (
    <Room>
      <main className="h-screen overflow-hidden">
        <Navbar />

        <section className="flex h-full flex-row bg-gray-800">
          <LeftSidebar />
          <Live canvasRef ={canvasRef}/>
          <RightSidebar />
        </section>
      </main>
    </Room>

  );
}