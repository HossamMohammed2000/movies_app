export default function Loader() {
  return (
    <div className="relative w-12 h-12 animate-rotate rounded-full">
      <div className="absolute inset-0 rounded-full border-[5px] border-white animate-prixClipFix" />
      <div className="absolute inset-[6px] rounded-full border-[5px] border-[#FF3D00] animate-prixClipFix animate-rotateReverse" />
    </div>
  );
}
