// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useFavourites } from "@/context/favouriteContext";
// import Container from "@/_Components/ui/container";

// export default function Header() {
//   const pathname = usePathname();
//   const { favourites } = useFavourites();

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "Trending", href: "/trending" },
//     { name: "Top Rated", href: "/top-rated" },
//     { name: "Favourites", href: "/favourites" },
//   ];

//   return (
//     <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
//       <Container>
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link href="/" className="text-xl font-bold text-red-500">
//             MovieApp
//           </Link>

//           {/* Navigation */}
//           <nav className="flex items-center gap-6">
//             {navLinks.map((link) => {
//               const isActive = pathname === link.href;

//               return (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className={`text-sm transition-colors ${
//                     isActive
//                       ? "text-red-500 font-semibold"
//                       : "text-gray-300 hover:text-white"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               );
//             })}

//             {/* Favourites Counter */}
//             <Link
//               href="/favourites"
//               className="relative text-gray-300 hover:text-white transition"
//             >
//               ❤️
//               {favourites.length > 0 && (
//                 <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                   {favourites.length}
//                 </span>
//               )}
//             </Link>
//           </nav>
//         </div>
//       </Container>
//     </header>
//   );
// }
