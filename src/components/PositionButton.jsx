import { useRotationMode } from "../../store/useRotationMode";

const PositionButton = ({ positionText }) => {
  const { position, setPosition } = useRotationMode();

  return (
    <button
      className={`px-2 py-1 rounded text-sm  transition-all duration-300 ease-in-out ${position === positionText ? "bg-blue-500 text-white" : "bg-white text-black"}`}
      onClick={() => setPosition(positionText)}
    >
      {positionText}
    </button>
  );
};

export default PositionButton;
