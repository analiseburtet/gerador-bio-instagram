import { Card, CardContent } from "@/components/ui/card";

interface Props {
  generatedBios: string[];
}

export default function GeneratedBios({ generatedBios }: Props) {
  return (
    <div className="flex flex-col gap-10 w-full max-w-3xl">
      <div>
        <h2 className="text-xl font-semibold mb-4">Bios Geradas</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {generatedBios.map((bio, index) => (
            <Card key={index}>
              <CardContent className="p-4">{bio}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
