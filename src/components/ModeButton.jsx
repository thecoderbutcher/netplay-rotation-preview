import { useRotationMode } from "../../store/useRotationMode";

const ButtonOption = ({ mode, text }) => {
  const { active, setActive, setMode } = useRotationMode();

  const handleClick = () => {
    setActive(mode);
    setMode(mode);
  };
  return (
    <button
      onClick={handleClick}
      className={`px-2 py-1 rounded text-sm hover:bg-gray-600 transition-all duration-300 shadow-lg ${active === mode ? "bg-gray-700 scale-110 text-white" : "bg-white"}`}
    >
      {text}
    </button>
  );
};

export default ButtonOption;
