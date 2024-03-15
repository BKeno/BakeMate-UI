// Card component with semi-transparent background and a bit of a blur
const Card = ({ title, children }) => {
  return (
    <div className="flex justify-center p-4">
      <div className="card w-full bg-white/50 backdrop-blur-sm shadow-lg rounded border">
        <div className="card-body">
          <h2 className="card-title text-bakery-brown">{title}</h2>
          <div className="text-gray-800 text-sm font-normal">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
