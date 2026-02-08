// ===============================
// Archivo: rotationLogic.js
// ===============================

// Roles:
// A = Armador
// O = Opuesto
// C1 = Central 1
// C2 = Central 2
// P1 = Punta 1
// P2 = Punta 2
// L = Líbero (solo zaguero, reemplaza a un central)

// Posiciones oficiales FIVB
// 1: zaguero derecho
// 2: delantero derecho
// 3: delantero centro
// 4: delantero izquierdo
// 5: zaguero izquierdo
// 6: zaguero centro

export const ROLES = [
  { id: "A", name: "Armador" },
  { id: "C1", name: "Central" },
  { id: "C2", name: "Central" },
  { id: "O", name: "Opuesto" },
  { id: "P1", name: "Punta" },
  { id: "P2", name: "Punta" },
  { id: "L", name: "Líbero" },
];

// ===============================
// ROTACIONES SISTEMA 5-1 (según gráfico táctico)
// Cada rotación incluye:
// - base (orden reglamentario)
// - recepcion (ajustes tácticos + líbero)
// - ataque (disposición ofensiva)
// ===============================

export const rotations = [
  // ROTACIÓN 1
  {
    id: 1,
    base: [
      {
        pos: 1,
        id: "A",
        initCoord: { x: "70%", y: "80%" },
        finalCoord: { x: "70%", y: "80%" },
      },
      {
        pos: 2,
        id: "P1",
        initCoord: { x: "70%", y: "55%" },
        finalCoord: { x: "70%", y: "55%" },
      },
      {
        pos: 3,
        id: "C2",
        initCoord: { x: "45%", y: "55%" },
        finalCoord: { x: "45%", y: "55%" },
      },
      {
        pos: 4,
        id: "O",
        initCoord: { x: "20%", y: "55%" },
        finalCoord: { x: "20%", y: "55%" },
      },
      {
        pos: 5,
        id: "P2",
        initCoord: { x: "20%", y: "80%" },
        finalCoord: { x: "20%", y: "80%" },
      },
      {
        pos: 6,
        id: "L",
        initCoord: { x: "45%", y: "80%" },
        finalCoord: { x: "45%", y: "80%" },
      },
    ],
    saque: [
      {
        pos: 1,
        id: "A",
        initCoord: { x: "70%", y: "95%" },
        finalCoord: { x: "70%", y: "70%" },
      },
      {
        pos: 2,
        id: "P1",
        initCoord: { x: "55%", y: "53%" },
        finalCoord: { x: "20%", y: "55%" },
      },
      {
        pos: 3,
        id: "C2",
        initCoord: { x: "45%", y: "53%" },
        finalCoord: { x: "45%", y: "53%" },
      },
      {
        pos: 4,
        id: "O",
        initCoord: { x: "35%", y: "53%" },
        finalCoord: { x: "70%", y: "55%" },
      },
      {
        pos: 5,
        id: "P2",
        initCoord: { x: "35%", y: "80%" },
        finalCoord: { x: "45%", y: "80%" },
      },
      {
        pos: 6,
        id: "L",
        initCoord: { x: "45%", y: "73%" },
        finalCoord: { x: "25%", y: "73%" },
      },
    ],
    recepcion: [
      {
        pos: 1,
        id: "A",
        initCoord: { x: "75%", y: "85%" },
        finalCoord: { x: "70%", y: "80%" },
      },
      {
        pos: 2,
        id: "P1",
        initCoord: { x: "65%", y: "77%" },
        finalCoord: { x: "75%", y: "58%" },
      },
      {
        pos: 3,
        id: "C2",
        initCoord: { x: "45%", y: "53%" },
        finalCoord: { x: "45%", y: "53%" },
      },
      {
        pos: 4,
        id: "O",
        initCoord: { x: "15%", y: "58%" },
        finalCoord: { x: "15%", y: "58%" },
      },
      {
        pos: 5,
        id: "P2",
        initCoord: { x: "25%", y: "80%" },
        finalCoord: { x: "25%", y: "80%" },
      },
      {
        pos: 6,
        id: "L",
        initCoord: { x: "45%", y: "85%" },
        finalCoord: { x: "45%", y: "85%" },
      },
    ],
    defensa: [
      {
        pos: 1,
        id: "A",
        initCoord: { x: "70%", y: "68%" },
        finalCoord: { x: "70%", y: "68%" },
      },
      {
        pos: 2,
        id: "P1",
        initCoord: { x: "25%", y: "60%" },
        finalCoord: { x: "25%", y: "60%" },
      },
      {
        pos: 3,
        id: "C2",
        initCoord: { x: "65%", y: "53%" },
        finalCoord: { x: "65%", y: "53%" },
      },
      {
        pos: 4,
        id: "O",
        initCoord: { x: "75%", y: "53%" },
        finalCoord: { x: "75%", y: "53%" },
      },
      {
        pos: 5,
        id: "P2",
        initCoord: { x: "50%", y: "85%" },
        finalCoord: { x: "50%", y: "85%" },
      },
      {
        pos: 6,
        id: "L",
        initCoord: { x: "30%", y: "80%" },
        finalCoord: { x: "30%", y: "80%" },
      },
    ],
  },

  // ROTACIÓN 2
  {
    id: 2,
    base: [
      {
        pos: 1,
        id: "C1",
        initCoord: { x: "70%", y: "80%" },
        finalCoord: { x: "70%", y: "80%" },
      },
      {
        pos: 2,
        id: "A",
        initCoord: { x: "70%", y: "55%" },
        finalCoord: { x: "70%", y: "55%" },
      },
      {
        pos: 3,
        id: "P1",
        initCoord: { x: "45%", y: "55%" },
        finalCoord: { x: "45%", y: "55%" },
      },
      {
        pos: 4,
        id: "C2",
        initCoord: { x: "20%", y: "55%" },
        finalCoord: { x: "20%", y: "55%" },
      },
      {
        pos: 5,
        id: "O",
        initCoord: { x: "20%", y: "80%" },
        finalCoord: { x: "20%", y: "80%" },
      },
      {
        pos: 6,
        id: "P2",
        initCoord: { x: "45%", y: "80%" },
        finalCoord: { x: "45%", y: "80%" },
      },
    ],
    saque: [
      {
        pos: 1,
        id: "C1",
        initCoord: { x: "70%", y: "95%" },
        finalCoord: { x: "25%", y: "80%" },
      },
      {
        pos: 2,
        id: "A",
        initCoord: { x: "55%", y: "53%" },
        finalCoord: { x: "55%", y: "53%" },
      },
      {
        pos: 3,
        id: "P1",
        initCoord: { x: "45%", y: "53%" },
        finalCoord: { x: "20%", y: "60%" },
      },
      {
        pos: 4,
        id: "C2",
        initCoord: { x: "35%", y: "53%" },
        finalCoord: { x: "45%", y: "53%" },
      },
      {
        pos: 5,
        id: "O",
        initCoord: { x: "30%", y: "78%" },
        finalCoord: { x: "65%", y: "78%" },
      },
      {
        pos: 6,
        id: "P2",
        initCoord: { x: "45%", y: "84%" },
        finalCoord: { x: "45%", y: "84%" },
      },
    ],
    recepcion: [
      {
        pos: 1,
        id: "C1",
        initCoord: { x: "70%", y: "75%" },
        finalCoord: { x: "70%", y: "75%" },
      },
      {
        pos: 2,
        id: "A",
        initCoord: { x: "70%", y: "55%" },
        finalCoord: { x: "70%", y: "55%" },
      },
      {
        pos: 3,
        id: "P1",
        initCoord: { x: "30%", y: "75%" },
        finalCoord: { x: "30%", y: "75%" },
      },
      {
        pos: 4,
        id: "C2",
        initCoord: { x: "20%", y: "55%" },
        finalCoord: { x: "20%", y: "55%" },
      },
      {
        pos: 5,
        id: "O",
        initCoord: { x: "40%", y: "90%" },
        finalCoord: { x: "40%", y: "90%" },
      },
      {
        pos: 6,
        id: "P2",
        initCoord: { x: "50%", y: "80%" },
        finalCoord: { x: "50%", y: "80%" },
      },
    ],
    defensa: [
      {
        pos: 1,
        id: "C1",
        initCoord: { x: "25%", y: "80%" },
        finalCoord: { x: "25%", y: "80%" },
      },
      {
        pos: 2,
        id: "A",
        initCoord: { x: "75%", y: "53%" },
        finalCoord: { x: "75%", y: "53%" },
      },
      {
        pos: 3,
        id: "P1",
        initCoord: { x: "25%", y: "60%" },
        finalCoord: { x: "25%", y: "60%" },
      },
      {
        pos: 4,
        id: "C2",
        initCoord: { x: "65%", y: "53%" },
        finalCoord: { x: "65%", y: "53%" },
      },
      {
        pos: 5,
        id: "O",
        initCoord: { x: "70%", y: "70%" },
        finalCoord: { x: "70%", y: "70%" },
      },
      {
        pos: 6,
        id: "P2",
        initCoord: { x: "50%", y: "85%" },
        finalCoord: { x: "50%", y: "85%" },
      },
    ],
  },
  // ROTACIÓN 3
  {
    id: 3,
    base: [
      {
        pos: 1,
        id: "P2",
        initCoord: { x: "70%", y: "80%" },
        finalCoord: { x: "70%", y: "80%" },
      },
      {
        pos: 2,
        id: "C1",
        initCoord: { x: "70%", y: "55%" },
        finalCoord: { x: "70%", y: "55%" },
      },
      {
        pos: 3,
        id: "A",
        initCoord: { x: "45%", y: "55%" },
        finalCoord: { x: "45%", y: "55%" },
      },
      {
        pos: 4,
        id: "P1",
        initCoord: { x: "20%", y: "55%" },
        finalCoord: { x: "20%", y: "55%" },
      },
      {
        pos: 5,
        id: "C2",
        initCoord: { x: "20%", y: "80%" },
        finalCoord: { x: "20%", y: "80%" },
      },
      {
        pos: 6,
        id: "O",
        initCoord: { x: "45%", y: "80%" },
        finalCoord: { x: "45%", y: "80%" },
      },
    ],
    saque: [
      {
        pos: 1,
        id: "P2",
        initCoord: { x: "70%", y: "95%" },
        finalCoord: { x: "45%", y: "76%" },
      },
      {
        pos: 2,
        id: "C1",
        initCoord: { x: "55%", y: "53%" },
        finalCoord: { x: "70%", y: "53%" },
      },
      {
        pos: 3,
        id: "A",
        initCoord: { x: "45%", y: "53%" },
        finalCoord: { x: "45%", y: "53%" },
      },
      {
        pos: 4,
        id: "P1",
        initCoord: { x: "35%", y: "53%" },
        finalCoord: { x: "20%", y: "53%" },
      },
      {
        pos: 5,
        id: "C2",
        initCoord: { x: "25%", y: "78%" },
        finalCoord: { x: "25%", y: "78%" },
      },
      {
        pos: 6,
        id: "O",
        initCoord: { x: "45%", y: "76%" },
        finalCoord: { x: "65%", y: "76%" },
      },
    ],
    recepcion: [
      {
        pos: 1,
        id: "P2",
        initCoord: { x: "65%", y: "77%" },
        finalCoord: { x: "65%", y: "77%" },
      },
      {
        pos: 2,
        id: "C1",
        initCoord: { x: "75%", y: "60%" },
        finalCoord: { x: "75%", y: "60%" },
      },
      {
        pos: 3,
        id: "A",
        initCoord: { x: "55%", y: "55%" },
        finalCoord: { x: "55%", y: "55%" },
      },
      {
        pos: 4,
        id: "P1",
        initCoord: { x: "20%", y: "74%" },
        finalCoord: { x: "20%", y: "74%" },
      },
      {
        pos: 5,
        id: "C2",
        initCoord: { x: "36%", y: "81%" },
        finalCoord: { x: "36%", y: "81%" },
      },
      {
        pos: 6,
        id: "O",
        initCoord: { x: "50%", y: "90%" },
        finalCoord: { x: "50%", y: "90%" },
      },
    ],
    defensa: [
      {
        pos: 1,
        id: "P2",
        initCoord: { x: "45%", y: "82%" },
        finalCoord: { x: "45%", y: "82%" },
      },
      {
        pos: 2,
        id: "C1",
        initCoord: { x: "30%", y: "53%" },
        finalCoord: { x: "30%", y: "53%" },
      },
      {
        pos: 3,
        id: "A",
        initCoord: { x: "65%", y: "60%" },
        finalCoord: { x: "65%", y: "60%" },
      },
      {
        pos: 4,
        id: "P1",
        initCoord: { x: "20%", y: "53%" },
        finalCoord: { x: "20%", y: "53%" },
      },
      {
        pos: 5,
        id: "C2",
        initCoord: { x: "25%", y: "70%" },
        finalCoord: { x: "25%", y: "70%" },
      },
      {
        pos: 6,
        id: "O",
        initCoord: { x: "65%", y: "76%" },
        finalCoord: { x: "65%", y: "76%" },
      },
    ],
  },

  // ROTACIÓN 4
  {
    id: 4,
    base: [
      {
        pos: 1,
        id: "O",
        initCoord: { x: "70%", y: "80%" },
        finalCoord: { x: "70%", y: "80%" },
      },
      {
        pos: 2,
        id: "P2",
        initCoord: { x: "70%", y: "55%" },
        finalCoord: { x: "70%", y: "55%" },
      },
      {
        pos: 3,
        id: "C1",
        initCoord: { x: "45%", y: "55%" },
        finalCoord: { x: "45%", y: "55%" },
      },
      {
        pos: 4,
        id: "A",
        initCoord: { x: "20%", y: "55%" },
        finalCoord: { x: "20%", y: "55%" },
      },
      {
        pos: 5,
        id: "P1",
        initCoord: { x: "20%", y: "80%" },
        finalCoord: { x: "20%", y: "80%" },
      },
      {
        pos: 6,
        id: "C2",
        initCoord: { x: "45%", y: "80%" },
        finalCoord: { x: "45%", y: "80%" },
      },
    ],
    saque: [
      {
        pos: 1,
        id: "O",
        initCoord: { x: "70%", y: "95%" },
        finalCoord: { x: "70%", y: "75%" },
      },
      {
        pos: 2,
        id: "P2",
        initCoord: { x: "55%", y: "53%" },
        finalCoord: { x: "25%", y: "55%" },
      },
      {
        pos: 3,
        id: "C1",
        initCoord: { x: "45%", y: "53%" },
        finalCoord: { x: "45%", y: "53%" },
      },
      {
        pos: 4,
        id: "A",
        initCoord: { x: "35%", y: "53%" },
        finalCoord: { x: "65%", y: "55%" },
      },
      {
        pos: 5,
        id: "P1",
        initCoord: { x: "35%", y: "81%" },
        finalCoord: { x: "50%", y: "80%" },
      },
      {
        pos: 6,
        id: "C2",
        initCoord: { x: "45%", y: "75%" },
        finalCoord: { x: "30%", y: "75%" },
      },
    ],
    recepcion: [
      {
        pos: 1,
        id: "O",
        initCoord: { x: "75%", y: "90%" },
        finalCoord: { x: "75%", y: "90%" },
      },
      {
        pos: 2,
        id: "P2",
        initCoord: { x: "32%", y: "75%" },
        finalCoord: { x: "32%", y: "75%" },
      },
      {
        pos: 3,
        id: "C1",
        initCoord: { x: "22%", y: "60%" },
        finalCoord: { x: "22%", y: "60%" },
      },
      {
        pos: 4,
        id: "A",
        initCoord: { x: "15%", y: "53%" },
        finalCoord: { x: "15%", y: "53%" },
      },
      {
        pos: 5,
        id: "P1",
        initCoord: { x: "50%", y: "80%" },
        finalCoord: { x: "50%", y: "80%" },
      },
      {
        pos: 6,
        id: "C2",
        initCoord: { x: "65%", y: "74%" },
        finalCoord: { x: "65%", y: "74%" },
      },
    ],
    defensa: [
      {
        pos: 1,
        id: "O",
        initCoord: { x: "65%", y: "74%" },
        finalCoord: { x: "65%", y: "74%" },
      },
      {
        pos: 2,
        id: "P2",
        initCoord: { x: "25%", y: "64%" },
        finalCoord: { x: "25%", y: "64%" },
      },
      {
        pos: 3,
        id: "C1",
        initCoord: { x: "60%", y: "53%" },
        finalCoord: { x: "60%", y: "53%" },
      },
      {
        pos: 4,
        id: "A",
        initCoord: { x: "70%", y: "53%" },
        finalCoord: { x: "70%", y: "53%" },
      },
      {
        pos: 5,
        id: "P1",
        initCoord: { x: "50%", y: "85%" },
        finalCoord: { x: "50%", y: "85%" },
      },
      {
        pos: 6,
        id: "C2",
        initCoord: { x: "32%", y: "78%" },
        finalCoord: { x: "32%", y: "78%" },
      },
    ],
  },

  // ROTACIÓN 5
  {
    id: 5,
    base: [
      {
        pos: 1,
        id: "C2",
        initCoord: { x: "70%", y: "80%" },
        finalCoord: { x: "70%", y: "80%" },
      },
      {
        pos: 2,
        id: "O",
        initCoord: { x: "70%", y: "55%" },
        finalCoord: { x: "70%", y: "55%" },
      },
      {
        pos: 3,
        id: "P2",
        initCoord: { x: "45%", y: "55%" },
        finalCoord: { x: "45%", y: "55%" },
      },
      {
        pos: 4,
        id: "C1",
        initCoord: { x: "20%", y: "55%" },
        finalCoord: { x: "20%", y: "55%" },
      },
      {
        pos: 5,
        id: "A",
        initCoord: { x: "20%", y: "80%" },
        finalCoord: { x: "20%", y: "80%" },
      },
      {
        pos: 6,
        id: "P1",
        initCoord: { x: "45%", y: "80%" },
        finalCoord: { x: "45%", y: "80%" },
      },
    ],
    saque: [
      {
        pos: 1,
        id: "C2",
        initCoord: { x: "70%", y: "80%" },
        finalCoord: { x: "70%", y: "80%" },
      },
      {
        pos: 2,
        id: "O",
        initCoord: { x: "70%", y: "55%" },
        finalCoord: { x: "75%", y: "55%" },
      },
      {
        pos: 3,
        id: "P2",
        initCoord: { x: "45%", y: "55%" },
        finalCoord: { x: "50%", y: "55%" },
      },
      {
        pos: 4,
        id: "C1",
        initCoord: { x: "20%", y: "55%" },
        finalCoord: { x: "20%", y: "55%" },
      },
      {
        pos: 5,
        id: "A",
        initCoord: { x: "20%", y: "80%" },
        finalCoord: { x: "20%", y: "80%" },
      },
      {
        pos: 6,
        id: "P1",
        initCoord: { x: "45%", y: "80%" },
        finalCoord: { x: "45%", y: "80%" },
      },
    ],
    recepcion: [
      {
        pos: 1,
        id: "C2",
        initCoord: { x: "70%", y: "80%" },
        finalCoord: { x: "70%", y: "80%" },
      },
      {
        pos: 2,
        id: "O",
        initCoord: { x: "70%", y: "55%" },
        finalCoord: { x: "75%", y: "55%" },
      },
      {
        pos: 3,
        id: "P2",
        initCoord: { x: "45%", y: "55%" },
        finalCoord: { x: "50%", y: "55%" },
      },
      {
        pos: 4,
        id: "C1",
        initCoord: { x: "20%", y: "55%" },
        finalCoord: { x: "20%", y: "55%" },
      },
      {
        pos: 5,
        id: "A",
        initCoord: { x: "20%", y: "80%" },
        finalCoord: { x: "20%", y: "80%" },
      },
      {
        pos: 6,
        id: "P1",
        initCoord: { x: "45%", y: "80%" },
        finalCoord: { x: "45%", y: "80%" },
      },
    ],
    defensa: [
      {
        pos: 1,
        id: "C2",
        initCoord: { x: "70%", y: "80%" },
        finalCoord: { x: "70%", y: "80%" },
      },
      {
        pos: 2,
        id: "O",
        initCoord: { x: "70%", y: "55%" },
        finalCoord: { x: "75%", y: "55%" },
      },
      {
        pos: 3,
        id: "P2",
        initCoord: { x: "45%", y: "55%" },
        finalCoord: { x: "50%", y: "55%" },
      },
      {
        pos: 4,
        id: "C1",
        initCoord: { x: "20%", y: "55%" },
        finalCoord: { x: "20%", y: "55%" },
      },
      {
        pos: 5,
        id: "A",
        initCoord: { x: "20%", y: "80%" },
        finalCoord: { x: "20%", y: "80%" },
      },
      {
        pos: 6,
        id: "P1",
        initCoord: { x: "45%", y: "80%" },
        finalCoord: { x: "45%", y: "80%" },
      },
    ],
  },

  // ROTACIÓN 6
  {
    id: 6,
    base: [
      {
        pos: 1,
        id: "P1",
        initCoord: { x: "70%", y: "80%" },
        finalCoord: { x: "70%", y: "80%" },
      },
      {
        pos: 2,
        id: "C2",
        initCoord: { x: "70%", y: "55%" },
        finalCoord: { x: "70%", y: "55%" },
      },
      {
        pos: 3,
        id: "O",
        initCoord: { x: "45%", y: "55%" },
        finalCoord: { x: "45%", y: "55%" },
      },
      {
        pos: 4,
        id: "P2",
        initCoord: { x: "20%", y: "55%" },
        finalCoord: { x: "20%", y: "55%" },
      },
      {
        pos: 5,
        id: "C1",
        initCoord: { x: "20%", y: "80%" },
        finalCoord: { x: "20%", y: "80%" },
      },
      {
        pos: 6,
        id: "A",
        initCoord: { x: "45%", y: "80%" },
        finalCoord: { x: "45%", y: "80%" },
      },
    ],
    saque: [
      {
        pos: 1,
        id: "P1",
        initCoord: { x: "70%", y: "80%" },
        finalCoord: { x: "70%", y: "80%" },
      },
      {
        pos: 2,
        id: "C2",
        initCoord: { x: "70%", y: "55%" },
        finalCoord: { x: "75%", y: "55%" },
      },
      {
        pos: 3,
        id: "O",
        initCoord: { x: "45%", y: "55%" },
        finalCoord: { x: "50%", y: "55%" },
      },
      {
        pos: 4,
        id: "P2",
        initCoord: { x: "20%", y: "55%" },
        finalCoord: { x: "20%", y: "55%" },
      },
      {
        pos: 5,
        id: "C1",
        initCoord: { x: "20%", y: "80%" },
        finalCoord: { x: "20%", y: "80%" },
      },
      {
        pos: 6,
        id: "A",
        initCoord: { x: "45%", y: "80%" },
        finalCoord: { x: "45%", y: "80%" },
      },
    ],
    recepcion: [
      {
        pos: 1,
        id: "P1",
        initCoord: { x: "70%", y: "80%" },
        finalCoord: { x: "70%", y: "80%" },
      },
      {
        pos: 2,
        id: "C2",
        initCoord: { x: "70%", y: "55%" },
        finalCoord: { x: "75%", y: "55%" },
      },
      {
        pos: 3,
        id: "O",
        initCoord: { x: "45%", y: "55%" },
        finalCoord: { x: "50%", y: "55%" },
      },
      {
        pos: 4,
        id: "P2",
        initCoord: { x: "20%", y: "55%" },
        finalCoord: { x: "20%", y: "55%" },
      },
      {
        pos: 5,
        id: "C1",
        initCoord: { x: "20%", y: "80%" },
        finalCoord: { x: "20%", y: "80%" },
      },
      {
        pos: 6,
        id: "A",
        initCoord: { x: "45%", y: "80%" },
        finalCoord: { x: "45%", y: "80%" },
      },
    ],
    defensa: [
      {
        pos: 1,
        id: "P1",
        initCoord: { x: "70%", y: "80%" },
        finalCoord: { x: "70%", y: "80%" },
      },
      {
        pos: 2,
        id: "C2",
        initCoord: { x: "70%", y: "55%" },
        finalCoord: { x: "75%", y: "55%" },
      },
      {
        pos: 3,
        id: "O",
        initCoord: { x: "45%", y: "55%" },
        finalCoord: { x: "50%", y: "55%" },
      },
      {
        pos: 4,
        id: "P2",
        initCoord: { x: "20%", y: "55%" },
        finalCoord: { x: "20%", y: "55%" },
      },
      {
        pos: 5,
        id: "C1",
        initCoord: { x: "20%", y: "80%" },
        finalCoord: { x: "20%", y: "80%" },
      },
      {
        pos: 6,
        id: "A",
        initCoord: { x: "45%", y: "80%" },
        finalCoord: { x: "45%", y: "80%" },
      },
    ],
  },
];
