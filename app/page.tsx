"use client";
import { Room } from "./Room";
import { CollaborativeApp } from "./CollaborativeApp";
import Live from "@/components/Live";
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <Room>
      <main className="h-screen overflow-hidden">
        <Navbar />

        <section className="flex h-full flex-row bg-gray-800">
          <Live />
        </section>
      </main>
    </Room>

  );
}