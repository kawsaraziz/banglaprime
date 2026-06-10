import React from 'react';
import { Home, Search, Heart, Clock, LayoutGrid, Play } from 'lucide-react';

const channels = [
  { id: 1, name: 'Ananda TV', category: 'Bangla', live: true },
  { id: 2, name: 'Bangla TV', category: 'Bangla', live: false },
  { id: 3, name: 'T Sports', category: 'Sports', live: false },
];

export default function NahidflixApp() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col md:flex-row">
      {/* Sidebar for Desktop */}
      <nav className="w-20 md:w-64 bg-black border-r border-gray-800 p-4 hidden md:flex flex-col gap-6">
        <h1 className="text-red-600 font-bold text-2xl">NAHIDFLIX</h1>
        <div className="flex flex-col gap-4">
          <NavItem icon={<Home />} label="Home" />
          <NavItem icon={<Heart />} label="Favorites" />
          <NavItem icon={<Clock />} label="Recent" />
          <NavItem icon={<LayoutGrid />} label="All Channels" />
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">
        <header className="flex justify-between items-center mb-8">
          <input className="bg-gray-900 rounded-full py-2 px-6 w-full md:w-96" placeholder="Search 1200+ channels..." />
        </header>

        {/* Video Player Area */}
        <div className="bg-gray-800 h-64 md:h-96 rounded-2xl flex items-center justify-center mb-10">
          <Play size={64} className="text-red-600" />
        </div>

        {/* Channel Grid */}
        <section>
          <h2 className="text-xl font-bold mb-4">Bangla Channels</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {channels.map(ch => (
              <div key={ch.id} className="bg-gray-900 p-4 rounded-xl hover:bg-gray-800 transition">
                <div className="h-24 bg-gray-700 rounded-lg mb-2"></div>
                <p className="font-semibold">{ch.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Nav for Mobile */}
      <div className="md:hidden fixed bottom-0 w-full bg-black border-t border-gray-800 flex justify-around p-4">
        <Home size={24} />
        <Search size={24} />
        <Heart size={24} />
      </div>
    </div>
  );
}

const NavItem = ({ icon, label }) => (
  <div className="flex items-center gap-4 hover:text-red-600 cursor-pointer">{icon} <span>{label}</span></div>
);