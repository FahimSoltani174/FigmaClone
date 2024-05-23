"use client";
import { Room } from "./Room";
import { CollaborativeApp } from "./CollaborativeApp";
import Live from "@/components/Live";

export default function Page() {
  return (
    <Room>
      <div className="bg-gray-500">
        <Live />
      </div>
    </Room>

  );
}