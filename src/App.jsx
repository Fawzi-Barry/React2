// App.js
import React from 'react';
import CardList from "./CardList";
import './App.css';

function App() {
  const cardData = [
    {
      image: 'https://i.pinimg.com/736x/46/f3/45/46f345e9d425703bdd35eda55e277508.jpg',
    
      title: 'CVPI',
      description: 'A classic Ford Crown Victoria Police Interceptor, often seen with the NYPD, characterized by its robust design, white body, and iconic NYPD livery.',
    },
    {
      image: 'https://i.pinimg.com/736x/03/ca/07/03ca0708768781a57aeacac519032485.jpg',
      title: 'FPIS',
      description: 'A Ford Police Interceptor sedan (Taurus), designed with modern features and black paint, often used by police departments for speed and durability.',
    },
    {
      image: 'https://hips.hearstapps.com/hmg-prod/images/dhf12534-jpg-1558036254.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
      title: 'FPIU',
      description: 'A Ford Police Interceptor Utility (SUV variant), which is versatile for different terrains, with police decals and emergency lights on top.',
    },
    {
      image: 'https://preview.redd.it/2qa51d8gyh891.jpg?width=1080&crop=smart&auto=webp&s=4528c3392289355204960d96ada23002652f4b2a',
      title: 'Chevrolet Tahoe',
      description: 'A Chevrolet Tahoe, a larger SUV often used for rural or heavy-duty police work, shown here with a police livery and rooftop emergency lights.',
    },
    {
      image: 'https://i.pinimg.com/736x/29/8e/12/298e124ab16ce385b90965b3da58ac4b.jpg',
      title: 'CVPI',
      description: ' An Old Crown Victoria Police Interceptor, with a white and blue color scheme, commonly seen in urban law enforcement due to its reliability and strong build.',
    },
    {
      image: 'https://i.pinimg.com/736x/50/a8/44/50a844537efdb10d65dea99fee3592c3.jpg',
      title: 'Chevrolet Capirce',
      description: 'A Chevrolet Caprice, featuring a black and white police theme, known for its speed and strength, often used in high-speed pursuits.',
    },
    {
      image: 'https://i.pinimg.com/736x/59/55/8e/59558e215968f27ab973f750e6ed8f0d.jpg',
      title: 'Chevrolet Impala',
      description: 'A Chevrolet Impala, here shown in an NYPD paint job, used for regular patrols in cities, with a compact and nimble design.',
    },
    {
      image: 'https://cdn.arstechnica.net/wp-content/uploads/2017/04/Police-Responder-Hybrid-Sedan-7.jpg',
      title: 'Ford Fusion',
      description: 'A Ford Fusion with police decals, suitable for urban patrolling with fuel efficiency and maneuverability.',
    },
    {
      image: 'https://i.pinimg.com/736x/e5/cb/08/e5cb088f85ee040199b3f04066bef109.jpg',
      title: 'Dodge Charger',
      description: 'A Dodge Charger, well-known for its power and speed, often used by police for highway patrol and pursuit tasks.',
    },
    {
      image: 'https://i.pinimg.com/736x/1a/9e/5f/1a9e5f7e29edf388404856f3e5ff9a07.jpg',
      title: 'Ghost Ford Mustang GT',
      description: 'A blacked-out Ford Mustang GT with minimal police markings, often called a “ghost car,” used for undercover operations and blending into regular traffic.',
    },
    {
      image: 'https://i.pinimg.com/736x/56/fd/7b/56fd7ba612f2a0bbad193375883945c9.jpg',
      title: 'Ghost Dodge Challenger Hellcat',
      description: ' A Dodge Challenger Hellcat, also in ghosted livery, ideal for unmarked patrolling and high-speed pursuits due to its powerful engine.',
    },
    {
      image: 'https://i.pinimg.com/736x/d1/3c/5f/d13c5f895e6e8962dd29675d3f3e98cc.jpg',
      title: 'Dodge Durango',
      description: 'A Dodge Durango SUV, equipped with emergency lights and police decals, used for both on-road and off-road law enforcement duties due to its size and utility.',
    },

  ];

  return (
    <div className="App">
      <h1>Favorite Police Cars Collection</h1>
      <CardList data={cardData} />
    </div>
  );
}

export default App;
