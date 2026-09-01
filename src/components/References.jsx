import { ROLES } from "../../constants/rotation";
import { colors } from "../../constants/colors";
import { IoTriangle } from "react-icons/io5";
import { FaCircle } from "react-icons/fa6";
const References = () => {
  return (
    <div className="grid grid-cols-3 justify-center items-center gap-4 p-2 bg-gray-100 mt-4 rounded-lg shadow-lg">
      {ROLES.map((role) => (
        <div key={role.id} className="flex items-center gap-1">
          <div className="relative">
            <FaCircle className={`${colors[role.id]} text-[20px]`} />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xs text-shadow-2xs">
              {role.id}
            </span>
          </div>
          <span>{role.name}</span>
        </div>
      ))}
      <div className="flex gap-1 items-center">
        <FaCircle className="text-xl text-gray-300" />
        Zaguero
      </div>
      <div className="flex gap-1 items-center">
        <IoTriangle className="text-xl text-gray-300" />
        Delantero
      </div>
    </div>
  );
};

export default References;
