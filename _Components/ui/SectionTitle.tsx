export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-red-500">
      {title}
      <span className="block h-1 w-24 mt-2 bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 rounded-full" />
    </h2>
  );
}