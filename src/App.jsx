import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Card from "./component/Card";
import animals from "./data/animal.js";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="mt-auto">
          <section className="flex flex-col justify-center bg-gradient-to-r from-purple-700 to-purple-400 text-white min-h-full py-37">
            <div className="container mx-auto px-4 text-center py-20">
              <h1 className="text-4xl font-bold mb-4">
                Welcome to Our Website
              </h1>
              <p className="text-2xl mb-8">
                20 animals i like
              </p>
              <button className="bg-white text-black py-3 px-8 rounded-full font-semibold hover:bg-purple-900 transition hover:text-white">
                Views
              </button>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-gray-800">
                  Welcome to Our Website
                  <p className="text-gray-600 text-lg mt-2">
                    20 animals
                  </p>
                </h2>
              </div>

              <div className='flex flex-wrap justify-center gap-14'>
                {animals.map((a) => (
                  <Card 
                  key={a.id}
                  image={a.image}
                  name={a.name}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;