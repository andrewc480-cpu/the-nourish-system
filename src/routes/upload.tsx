import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/upload")({
  head: () => ({
    meta: [
      { title: "Upload — nóurish." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: UploadPage,
});

type Status = { name: string; state: "pending" | "uploading" | "done" | "error"; message?: string };

function UploadPage() {
  const [items, setItems] = useState<Status[]>([]);
  const [busy, setBusy] = useState(false);

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    const initial: Status[] = Array.from(files).map((f) => ({ name: f.name, state: "pending" }));
    setItems(initial);
    setBusy(true);

    const arr = Array.from(files);
    for (let i = 0; i < arr.length; i++) {
      const file = arr[i];
      setItems((prev) => prev.map((it, idx) => (idx === i ? { ...it, state: "uploading" } : it)));
      const { error } = await supabase.storage
        .from("protocols")
        .upload(file.name, file, { upsert: true, contentType: file.type || undefined });
      setItems((prev) =>
        prev.map((it, idx) =>
          idx === i
            ? error
              ? { ...it, state: "error", message: error.message }
              : { ...it, state: "done" }
            : it,
        ),
      );
    }
    setBusy(false);
  }

  return (
    <div className="min-h-screen bg-background px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold text-foreground">Upload to protocols</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Files upload directly to the "protocols" bucket with their original filenames.
        </p>

        <label className="mt-8 flex cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-input bg-card px-6 py-12 text-center transition-colors hover:bg-accent">
          <span className="text-sm font-medium text-foreground">
            {busy ? "Uploading…" : "Choose files"}
          </span>
          <span className="mt-1 text-xs text-muted-foreground">
            You can select multiple files
          </span>
          <input
            type="file"
            multiple
            className="hidden"
            disabled={busy}
            onChange={(e) => handleFiles(e.target.files)}
          />
        </label>

        {items.length > 0 && (
          <ul className="mt-8 space-y-2">
            {items.map((it, idx) => (
              <li
                key={`${it.name}-${idx}`}
                className="flex items-center justify-between rounded-md border border-input bg-card px-4 py-2 text-sm"
              >
                <span className="truncate pr-4 text-foreground">{it.name}</span>
                <span
                  className={
                    it.state === "done"
                      ? "text-green-600"
                      : it.state === "error"
                        ? "text-red-600"
                        : "text-muted-foreground"
                  }
                  title={it.message}
                >
                  {it.state === "done"
                    ? "Uploaded"
                    : it.state === "error"
                      ? `Error: ${it.message ?? "failed"}`
                      : it.state === "uploading"
                        ? "Uploading…"
                        : "Pending"}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
