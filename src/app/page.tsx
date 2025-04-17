"use client";

import Form from "@/components/Form";
import GeneratedBios from "@/components/GeneratedBios";
import { useState } from "react";

export default function Home() {
  const [generatedBios, setGeneratedBios] = useState<string[]>([]);

  const handleGeneratedBios = (bios: string[]) => {
    setGeneratedBios(bios);
  };

  return (
    <main className="flex flex-col min-h-screen justify-between px-6 py-10 sm:px-20 font-sans bg-white text-gray-900">
      <section className="flex flex-col items-center gap-6">
        <h1 className="text-2xl font-semibold text-center">
          Gere sua nova bio do Instagram!
        </h1>

        <Form handleGeneratedBios={handleGeneratedBios} />

        {!!generatedBios.length && (
          <GeneratedBios generatedBios={generatedBios} />
        )}
      </section>

      <footer className="text-sm text-gray-500 text-center mt-12">
        &copy; 2025 Gerador de Bio para Instagram. Todos os direitos reservados.
      </footer>
    </main>
  );
}
