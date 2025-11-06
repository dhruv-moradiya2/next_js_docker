import Link from "next/link";

export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">About Page</h1>
        <p className="text-lg mb-8 text-zinc-600 dark:text-zinc-400 text-center">
          This is the about page of your Next.js application.
        </p>
        <Link 
          href="/"
          className="flex h-12 w-48 items-center justify-center rounded-full bg-blue-600 px-5 text-white transition-colors hover:bg-blue-700"
        >
          Go to Home
        </Link>
      </main>
    </div>
  );
}
