import { useState } from "react";
import { motion } from "framer-motion";
import { rotations } from "../constants/rotation.js";
import { useRotationMode } from "../store/useRotationMode.js";
import ButtonOption from "./components/ModeButton.jsx";
import References from "./components/References.jsx";
import { colors } from "../constants/colors.js";
import PositionButton from "./components/PositionButton.jsx";
import Footer from "./components/Footer.jsx";

export default function VolleyCourt() {
  const [index, setIndex] = useState(0);
  const { mode, position } = useRotationMode();

  const rotationOrder = [0, 5, 4, 3, 2, 1];
  const rotationId = rotationOrder[index];
  const players = rotations[rotationId][mode];

  const handleRotate = () => {
    setIndex((i) => (i + 1) % rotationOrder.length);
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="flex flex-1 flex-col mt-4">
        {/* Cancha */}
        <div className="flex flex-col relative max-w-md w-[400px] h-[600px] bg-[url('./assets/images/court.webp')] bg-cover ">
          {/* Botones zona rival */}
          <h1 className="text-white text-center py-4 text-xl font-bold text-shadow-lg">
            Rotación {rotationId + 1}
          </h1>
          <div className="w-full flex justify-center gap-2">
            <ButtonOption mode="base" text="Base" />
            <ButtonOption mode="saque" text="Saque" />
            <ButtonOption mode="recepcion" text="Recepción" />
            <ButtonOption mode="defensa" text="Defensa" />
            <button
              onClick={handleRotate}
              className="bg-white px-2 py-1 rounded text-sm hover:bg-gray-700 hover:text-white transition-all duration-300 shadow-lg cursor-pointer"
            >
              Rotar
            </button>
          </div>
          <div className="flex gap-2 justify-center py-4">
            <PositionButton positionText="Posición inicial" />
            <PositionButton positionText="Posición final" />
          </div>

          {/* Jugadores */}
          {players.map((player) => {
            const x =
              position === "Posición inicial"
                ? player.initCoord.x
                : player.finalCoord.x;
            const y =
              position === "Posición inicial"
                ? player.initCoord.y
                : player.finalCoord.y;
            return (
              <motion.div
                key={player.pos}
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
                className={`absolute w-10 h-10 rounded-full flex flex-col items-center justify-center text-white font-bold text-sm shadow-lg ${colors[player.id]} border-b border-gray-600`}
                animate={{
                  left: x,
                  top: y,
                }}
              >
                <span className="text-shadow-gray-700 text-shadow-xs">
                  {player.pos}
                </span>
                <span className="text-shadow-gray-700 text-shadow-xs">
                  {player.id}
                </span>
              </motion.div>
            );
          })}
        </div>
        <References />
      </div>
      <Footer />
    </div>
  );
}
