"use client";

import "./globals.css";
import React from "react";
import Link from "next/link";
import Footer from "@/_Components/layouts/Footer";
import { FavouritesProvider } from "@/context/favouriteContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
        <FavouritesProvider>
          <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <Link href="/" className="text-xl font-bold">
                MovieApp
              </Link>

              <nav>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-gray-900 mr-4"
                >
                  Home
                </Link>
                <Link
                  href="/geners"
                  className="text-gray-600 hover:text-gray-900 mr-4"
                >
                  Geners
                </Link>

                <Link
                  href="/top-rated"
                  className="text-gray-600 hover:text-gray-900 mr-4"
                >
                  Top Rated
                </Link>

                <Link
                  href="/trending"
                  className="text-gray-600 hover:text-gray-900 mr-4"
                >
                  Trending
                </Link>

                <Link
                  href="/search"
                  className="text-gray-600 hover:text-gray-900 mr-4"
                >
                  Search
                </Link>

                <Link
                  href="/favourites"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Favourites
                </Link>
              </nav>
            </div>
          </header>

          <main className="container mx-auto px-4 py-6 flex-grow">
            {children}
          </main>

          <Footer />
        </FavouritesProvider>
      </body>
    </html>
  );
}
