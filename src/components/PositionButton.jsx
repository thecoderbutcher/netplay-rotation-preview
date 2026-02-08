import { useRotationMode } from "../../store/useRotationMode";

const PositionButton = ({ positionText }) => {
  const { position, setPosition } = useRotationMode();

  return (
    <button
      className={`px-2 py-1 rounded text-sm hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out cursor-pointer ${position === positionText ? "bg-blue-500 text-white scale-110" : "bg-white text-black"}`}
      onClick={() => setPosition(positionText)}
    >
      {positionText}
    </button>
  );
};

export default PositionButton;
