import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function LogisticsSite() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="h-[80vh] flex flex-col justify-center items-center bg-blue-800 text-white text-center">
        <h1 className="text-4xl sm:text-6xl font-bold">Добро пожаловать в Umala Logistics</h1>
        <p className="mt-4 text-lg max-w-2xl">Международные перевозки: авто, авиа, море, ж/д</p>
      </section>

      {/* Partners */}
      <section className="py-20 bg-white">
        <h2 className="text-3xl font-bold text-center">Наши партнёры</h2>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 px-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md">
              <img src={`https://placehold.co/200x100?text=Partner+${n}`} alt={`Partner ${n}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center">Наши проекты</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6 px-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden">
              <img src={`https://placehold.co/600x300?text=Project+${n}`} alt={`Project ${n}`} />
              <div className="p-5">
                <h3 className="font-semibold text-xl">Проект {n}</h3>
                <p className="text-gray-600 mt-2">Описание проекта {n}, основные маршруты и достижения.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Routes (slider) */}
      <section className="py-20 bg-white">
        <h2 className="text-3xl font-bold text-center">Маршруты по транспорту</h2>
        <div className="mt-10 px-6">
          <Swiper spaceBetween={20} slidesPerView={1}>
            {["Грузовик", "Судно", "Самолёт", "Поезд"].map((v, i) => (
              <SwiperSlide key={i}>
                <div className="bg-gray-100 rounded-2xl shadow-lg overflow-hidden">
                  <img
                    src={`https://placehold.co/800x400?text=${v}`}
                    alt={v}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="p-4">{`Маршрут для ${v}`}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white text-center py-10">
        <p>© {new Date().getFullYear()} Umala Logistics</p>
      </footer>

      {/* Scroll-to-top button */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 px-4 py-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700"
        >
          ↑
        </button>
      )}
    </div>
  );
}
