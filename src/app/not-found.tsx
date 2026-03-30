import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="relative mb-8">
          <h1 className="text-[150px] md:text-[200px] font-bold text-primary/10 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl animate-float">🕌</div>
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4 font-[family-name:var(--font-heading)]">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-8">
          Looks like this path hasn&apos;t been explored yet. Let&apos;s get you
          back on track to discovering India.
        </p>
        <Link href="/" className="btn-primary">
          Back to Home
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12h18m0 0l-4-4m4 4l-4 4"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
