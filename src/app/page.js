import React from 'react';

export default async function Home() {
  const getPeople = async () => {
    const res = await fetch('https://swapi.dev/api/people');
    return res.json();
  }

  const data = await getPeople();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Star Wars</h1>
        <ul className="grid grid-cols-4 gap-4 item-center">
          {data.results.map((person, index) => (
            <li className="w-52 mx-4" key={index}>
              <img src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`} alt={person.name} />
              <div className="p-2 text-sm text-black bg-gray-400">
                {person.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}