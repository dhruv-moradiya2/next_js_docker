import Link from "next/link";

export default function EnvPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">Environment Variables</h1>
        
        <div className="w-full max-w-2xl bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">Public Variables (Client-side)</h2>
          <div className="space-y-2 text-sm font-mono">
            <div className="text-gray-700 dark:text-gray-300">
              <span className="font-bold">APP_NAME:</span> {process.env.NEXT_PUBLIC_APP_NAME}
            </div>
            <div className="text-gray-700 dark:text-gray-300">
              <span className="font-bold">VERSION:</span> {process.env.NEXT_PUBLIC_VERSION}
            </div>
            <div className="text-gray-700 dark:text-gray-300">
              <span className="font-bold">API_URL:</span> {process.env.NEXT_PUBLIC_API_URL}
            </div>
          </div>
        </div>
        <Link 
          href="/"
          className="flex h-12 w-48 items-center justify-center rounded-full bg-blue-600 px-5 text-white transition-colors hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </main>
    </div>
  );
}
