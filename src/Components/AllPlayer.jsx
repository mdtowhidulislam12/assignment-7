import PropTypes from 'prop-types';
import flag from '../assets/bd flag.jpg';




function AllPlayer({ players, onChoosePlayer }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5 md:my-10 md:mx-20 md:mb-80">
      {players.map((p) => (
        <div className="p-6 border-2 rounded-lg" key={p.playerId}>
          <img className="rounded-lg w-full h-[200px]" src={p.image} alt={p.name} />
          <h3 className="flex items-center gap-3 text-lg font-bold my-4">
            <img className="w-8 h-8 rounded-full" src={p.image} alt="Flag" /> {p.name}
          </h3>
          <div className="flex items-center justify-between text-gray-500 my-4">
            <div className="flex items-center gap-1">
              <img className="w-5 mr-2" src={flag} alt="Flag" />
              <p>{p.country}</p>
            </div>
            <p>{p.role}</p>
          </div>
          
          <p>Batting: {p.battingType}</p>
          <p>Bowling: {p.bowlingType}</p>
          
          <div className="flex justify-between items-center mt-4">
            <p className="font-bold">Price: {p.biddingPrice.toLocaleString()}</p>
            {p.selected ? (
              <button className='border-2 px-1 rounded-lg bg-gray-300 cursor-not-allowed' disabled>
                Selected
              </button>
            ) : (
              <button onClick={() => onChoosePlayer(p.playerId, p.biddingPrice)} className='border-2 px-1 rounded-lg'>
                Choose Player
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  
}

AllPlayer.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      playerId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      battingType: PropTypes.string.isRequired,
      bowlingType: PropTypes.string.isRequired,
      biddingPrice: PropTypes.number.isRequired,
      selected: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onChoosePlayer: PropTypes.func.isRequired,
};

export default AllPlayer;
