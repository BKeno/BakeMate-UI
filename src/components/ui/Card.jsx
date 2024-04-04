import PropTypes from 'prop-types';

const Card = ({ title, children }) => {
  return (
    <div className="flex justify-center p-4">
      <div className="card w-full max-w-lg bg-white/50 backdrop-blur-sm shadow-lg rounded border overflow-hidden" style={{ maxHeight: '100vh' }}>
        <div className="p-4">
          <h2 className="card-title text-bakery-brown ">{title}</h2>
        </div>
        <div className="overflow-auto" style={{ maxHeight: 'calc(100vh - 12rem)' }}>
          <div className="text-gray-800 text-sm font-normal p-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;
