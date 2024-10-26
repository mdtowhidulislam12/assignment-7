import logo from "./assets/logo.png";
import banner from "./assets/banner-main.png";
import dollar from "./assets/dollar.png";
import footerLogo from "./assets/logo-footer.png";

import "./App.css";
import { useEffect, useState } from "react";
import AllPlayer from "./Components/AllPlayer";
import SelectedPlayers from "./Components/SelectedPlayers";


function App() {
  const [players, setPlayers] = useState([]);
  const [coin, setCoin] = useState(0);
  const [activeSection, setActiveSection] = useState("Available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const freeCoin = (credit = 0) => {
    setCoin((prevCoin) => prevCoin + credit);

  if(credit){
    alert(`You have received ${credit} coins!`)
  }    
  };

  useEffect(() => {
    freeCoin();
  }, []);

  useEffect(() => {
    fetch("/players.json")
      .then((res) => res.json())
      .then((data) =>
        setPlayers(
          data.players.map((player) => ({ ...player, selected: false }))
        )
      );
  }, []);

  const choosePlayer = (playerId, cost) => {
    const numericCost = parseFloat(cost.replace(/[^0-9.-]+/g, ""));

    const playerToAdd = players.find((p) => p.playerId === playerId);

    if (selectedCount >= 6) {
      alert("You can only select up to 6 players.");
      return;
    }

    if (coin < numericCost) {
      alert("Not enough coins to select this player.");
      return;
    }
    setSelectedPlayers((prev) => [...prev, { ...playerToAdd, selected: true }]);
    setPlayers((prev) =>
      prev.map((player) =>
        player.playerId === playerId ? { ...player, selected: true } : player
      )
    );
    setCoin((prevCoin) => prevCoin - numericCost);
  };

  const displayedPlayers =
    activeSection === "Available"
      ? players.filter((player) => !player.selected)
      : players.filter((player) => player.selected);

  const selectedCount = players.filter((player) => player.selected).length;

  const deletePlayer = (playerId) => {
    setSelectedPlayers((prev) => prev.filter((p) => p.playerId !== playerId));
    setPlayers((prev) =>
      prev.map((player) =>
        player.playerId === playerId ? { ...player, selected: false } : player
      )
    );
  };

  return (
    <>
      <header className="md:py-6 md:px-20 p-5">
        <div className="flex justify-between items-center">
          <div>
            <img src={logo} alt="Logo" />
          </div>

          <div className="md:flex justify-between items-center gap-5">
            <ul className="hidden md:flex gap-5">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Fixture</a>
              </li>
              <li>
                <a href="">Team</a>
              </li>
              <li>
                <a href="">Schedules</a>
              </li>
            </ul>
            <div className="flex items-center border-2 rounded-xl py-1 px-2">
              <h2 className="text-lg font-bold">{coin} coin</h2>
              <img className="w-5 ml-2" src={dollar} alt="" />
            </div>
          </div>
        </div>
      </header>

      <div className="bg-[#131313] bgImg md:mx-20 md:p-10 text-white rounded-xl mx-5 p-5">
        <div className="text-center">
          <div className="flex justify-center">
            <img src={banner} alt="" />
          </div>
          <h1 className="text-2xl font-bold my-2">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-gray-400 mb-4">Beyond Boundaries Beyond Limits</p>
          <div className="flex justify-center">
            <div className="p-1 border-2 rounded-xl w-fit">
              <button
                id="Coin"
                onClick={() => freeCoin(5400000)}
                className="btn font-bold"
              >
                Claim Free Credit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center md:my-10 md:mx-20 m-5">
        <h2 className="text-2xl font-bold">
          {activeSection === "Available"
            ? "Available Players"
            : `Selected Players (${selectedCount}/6)`}
        </h2>
        <div className="flex items-center gap-4">
          <button
            className={`font-bold rounded-lg ${
              activeSection === "Available" ? "btn" : ""
            }`}
            onClick={() => setActiveSection("Available")}
          >
            Available
          </button>
          <button
            className={`font-bold rounded-lg ${
              activeSection === "Selected" ? "btn" : ""
            }`}
            onClick={() => setActiveSection("Selected")}
          >
            Selected ({selectedCount})
          </button>
        </div>
      </div>

      <main className="">
        {activeSection === "Available" ? (
          <AllPlayer players={displayedPlayers} onChoosePlayer={choosePlayer} />
        ) : (
          <SelectedPlayers
            selectedPlayers={selectedPlayers}
            onDeletePlayer={deletePlayer}
          />
        )}
      </main>

      <footer className=" mt-80 md:relative md:flex justify-center">
        <div className=" md:w-[87%] md:absolute p-5  z-10 md:bottom-[80%] md:mx-20 md:bg-[#ffffff22]  rounded-lg">
          <div className=" bgImg bg-cover md:py-10 md:px-40 bg-white p-5 rounded-lg">
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Subscribe to our Newsletter</h2>
              <p className="text-center text-gray-600">
                Get the latest updates and news right in your inbox!
              </p>
            </div>

            <div className="mt-4 flex flex-col md:grid grid-cols-3 gap-1  md:text-center">
              <input
                className="p-2 rounded-lg border-2 col-span-2"
                type="email"
                placeholder="Enter your email"
              />
              <button className="bg-gradient-to-r from-red-400 to-orange-300 p-2 rounded-lg font-bold ml-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="bg-slate-950   text-white p-5  md:px-20">
          <div className="flex justify-center py-10 pt-24">
            <img src={footerLogo} alt="" />
          </div>
          <div className="md:grid grid-cols-3 items-start gap-20 pb-4">
            <div>
              <h2 className="text-lg font-bold">About Us</h2>
              <p className="text-gray-400">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-4">Quick Links</h2>

              <ul className="list-disc ml-4 space-y-2">
                <li className="text-gray-400">
                  <a href="">Home</a>
                </li>
                <li className="text-gray-400">
                  <a href="">Services</a>
                </li>
                <li className="text-gray-400">
                  <a href="">About</a>
                </li>
                <li className="text-gray-400">
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">Subscribe</h2>
              <p className="text-gray-400">
                Subscribe to our newsletter for the latest updates.
              </p>

              <div className="flex md:flex flex-col mt-4">
                <input
                  className=" rounded-lg p-2"
                  type="email"
                  placeholder="Enter your mail"
                />
                <button className="bg bg-gradient-to-r from-orange-300 to bg-red-400  p-2 text-black font-bold rounded-lg mt-4">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <p className="text-gray-400 bg-slate-950 text-center py-4 border-t-2 border-gray-400">
        &copy; 2024 CricketBD All Rights Reserved{" "}
      </p>
    </>
  );
}

export default App;
