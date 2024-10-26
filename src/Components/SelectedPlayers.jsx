import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUser, faCoffee } from '@fortawesome/free-solid-svg-icons';



function SelectedPlayers({ selectedPlayers, onDeletePlayer }) {
    return (
      <div className="  md:my-10 md:mx-20 ">
        {selectedPlayers.map((player) => (
          <div
            className="flex  items-center justify-between w-full  p-4 border-2 rounded-lg mb-4"
            key={player.playerId}
          >
            <div className="flex items-center gap-4">
              <img
                className="rounded-lg w-[100px] h-[100px]"
                src={player.image}
                alt=""/>

                <div>
                <h2 className="text-lg font-bold">{player.name}</h2>
                <p className="text-gray-400">{player.role}</p>
                <p className="text-gray-400">{player.battingType}</p>
                </div>

            </div>
            <div>
              <button
                onClick={() => onDeletePlayer(player.playerId)}
                className="border-2 p-2  rounded-lg text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
SelectedPlayers.propTypes = {
  selectedPlayers: PropTypes.arrayOf(
    PropTypes.shape({
      playerId: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeletePlayer: PropTypes.func.isRequired,
};

export default SelectedPlayers;
