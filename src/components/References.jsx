import { ROLES } from "../../constants/rotation";
import { colors } from "../../constants/colors";

const References = () => {
  return (
    <div className="grid grid-cols-3 justify-center items-center gap-4 p-2 bg-amber-50 mt-4 rounded-lg shadow-lg">
      {ROLES.map((role) => (
        <div key={role.id} className="flex items-center gap-1">
          <div
            className={`w-6 h-6 text-center text-white font-bold rounded-full ${colors[role.id]}`}
          >
            <span className="text-xs text-shadow-2xs">{role.id}</span>
          </div>
          <span>{role.name}</span>
        </div>
      ))}
      {/* <div className="flex gap-1 items-center">
        <div className="w-6 h-6 text-center text-white font-bold rounded-full bg-gray-300" />
        Zaguero
      </div>
      <div className="flex gap-1 items-center">
        <div className="w-0 h-0 border-l-12 border-l-transparent border-r-12 border-r-transparent border-b-24 border-b-gray-300" />
        Delantero
      </div> */}
    </div>
  );
};

export default References;
