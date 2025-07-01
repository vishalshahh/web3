export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground gap-4">
      <h1 className="text-4xl font-bold">Tailwind is working 🎉</h1>
      <button className="rounded-md bg-slate-500 px-4 py-2 text-white font-semibold shadow-md hover:bg-slate-600 transition">
        Click me
      </button>
    </main>
  );
}
