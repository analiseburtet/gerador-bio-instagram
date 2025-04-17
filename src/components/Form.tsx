"use client";

import { useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface FormProps {
  handleGeneratedBios: (bios: string[]) => void;
}

export default function Form({ handleGeneratedBios }: FormProps) {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const professionInputRef = useRef<HTMLInputElement>(null);

  const fetchBios = async () => {
    const response = await fetch("/api/generate-bio", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: nameInputRef.current?.value || "",
        profession: professionInputRef.current?.value || "",
      }),
    });

    if (!response.ok) {
      console.error("Error generating bio");
      return;
    }

    const { bio } = await response.json();

    handleGeneratedBios(bio);
    if (nameInputRef.current) nameInputRef.current.value = "";
    if (professionInputRef.current) professionInputRef.current.value = "";
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        fetchBios();
      }}
    >
      <Input placeholder="Nome" ref={nameInputRef} />
      <Input placeholder="Profissão" ref={professionInputRef} />
      <Button type="submit">Gerar bio</Button>
    </form>
  );
}
