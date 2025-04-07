
import React from "react";

export default function Kakatiya() {
  return (
    <div className="bg-[#2c1b14] text-[#f9e4c8] font-serif">
      <header className="bg-[#1a0e08] p-4 flex justify-between items-center border-b-2 border-yellow-400">
        <h1 className="text-3xl text-yellow-400 font-bold">Kakatiya</h1>
        <nav className="flex gap-6">
          <a href="#menu" className="hover:text-yellow-300">Menu</a>
          <a href="#banquet" className="hover:text-yellow-300">Banquet</a>
          <a href="#reserve" className="hover:text-yellow-300">Reserve</a>
          <a href="#contact" className="hover:text-yellow-300">Contact</a>
        </nav>
      </header>

      <section className="relative">
        <img src="/hero-food.jpg" alt="Delicious Indian Cuisine" className="w-full h-[500px] object-cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-yellow-200">
          <h2 className="text-5xl font-bold mb-4">Authentic Indian Cuisine</h2>
          <p className="text-xl">Fine Dining Experience at Kakatiya</p>
        </div>
      </section>

      <section className="p-10 text-center">
        <h2 className="text-3xl text-yellow-300 font-semibold mb-4">About Us</h2>
        <p>
          At Kakatiya, we bring you the essence of India's rich culinary heritage with a fine dining twist.
          Whether it's a family dinner or a grand celebration, experience unforgettable flavors in a regal ambiance.
        </p>
      </section>

      <section id="menu" className="p-10 bg-[#3c2b24]">
        <h2 className="text-3xl text-yellow-300 font-semibold text-center mb-8">Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl text-yellow-200 mb-2">Vegetarian</h3>
            <ul className="list-disc list-inside">
              <li>Paneer Butter Masala</li>
              <li>Vegetable Biryani</li>
              <li>Aloo Gobi</li>
              <li>Palak Paneer</li>
              <li>Dal Tadka</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl text-yellow-200 mb-2">Non-Vegetarian</h3>
            <ul className="list-disc list-inside">
              <li>Butter Chicken</li>
              <li>Chicken Biryani</li>
              <li>Mutton Rogan Josh</li>
              <li>Fish Curry</li>
              <li>Chicken 65</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="banquet" className="p-10 text-center">
        <h2 className="text-3xl text-yellow-300 font-semibold mb-4">Banquet Hall</h2>
        <p>
          Host your special events in style. Our banquet hall is perfect for weddings, birthdays, and any grand celebration.
        </p>
        <img src="/banquet-hall.jpg" alt="Banquet Hall" className="mx-auto mt-6 rounded-lg shadow-lg w-full max-w-4xl" />
      </section>

      <section id="reserve" className="p-10 bg-[#3c2b24] text-center">
        <h2 className="text-3xl text-yellow-300 font-semibold mb-6">Reserve a Table</h2>
        <form className="space-y-4 max-w-xl mx-auto">
          <input type="text" placeholder="Name" className="w-full p-3 rounded bg-[#2c1b14] border border-yellow-400" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded bg-[#2c1b14] border border-yellow-400" />
          <input type="date" className="w-full p-3 rounded bg-[#2c1b14] border border-yellow-400" />
          <input type="time" className="w-full p-3 rounded bg-[#2c1b14] border border-yellow-400" />
          <input type="number" placeholder="Number of Guests" className="w-full p-3 rounded bg-[#2c1b14] border border-yellow-400" />
          <button type="submit" className="bg-yellow-400 text-[#2c1b14] px-6 py-3 font-semibold rounded">Book Now</button>
        </form>
      </section>

      <section id="contact" className="p-10 text-center">
        <h2 className="text-3xl text-yellow-300 font-semibold mb-4">Contact Us</h2>
        <p className="mb-2">Location: Your Current Location (Auto-Fetched)</p>
        <p className="mb-2">Phone: [To be added]</p>
        <p>Email: [To be added]</p>
      </section>

      <footer className="bg-[#1a0e08] p-4 text-center text-sm text-yellow-200">
        © 2025 Kakatiya. All rights reserved.
      </footer>
    </div>
  );
}
