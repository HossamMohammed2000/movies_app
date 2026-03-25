import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-20 text-white">
      <h1 className="text-3xl font-bold mb-4">Movie Not Found 😢</h1>
      <Link href="/" className="text-red-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
}
