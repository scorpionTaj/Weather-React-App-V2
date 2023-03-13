import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Marrakesh",
    },
    {
      id: 2,
      title: "Agadir",
    },
    {
      id: 3,
      title: "Laayoune",
    },
    {
      id: 4,
      title: "Afourer",
    },
    {
      id: 5,
      title: "Kasba Tadla",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
