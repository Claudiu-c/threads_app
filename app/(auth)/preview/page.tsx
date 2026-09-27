import Image from "next/image";
import Link from "next/link";

export default function PreviewPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16 text-white">
      <div className="overflow-hidden rounded-3xl border border-gray-700 bg-dark-2">
        <Image
          src="/assets/threads.png"
          alt="Preview of the Threads App"
          width={1200}
          height={630}
          className="h-auto w-full"
          priority
        />

        <div className="space-y-5 p-8 sm:p-12">
          <p className="text-sm uppercase tracking-widest text-purple-400">
            Social app project
          </p>
          <h1 className="text-3xl font-bold sm:text-5xl">Threads App</h1>
          <p className="max-w-2xl text-gray-300">
            Share posts, join conversations, react to threads, and connect with
            other people.
          </p>

          <Link
            href="/"
            className="inline-block rounded-full bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-500"
          >
            Open the app
          </Link>
        </div>
      </div>
    </main>
  );
}
