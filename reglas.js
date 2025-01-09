const azulejos = [];
const reglas = [
  { UP: 0, RIGHT: 2, DOWN: 4, LEFT: 0 }, //0
  { UP: 0, RIGHT: 0, DOWN: 5, LEFT: 2 }, //1
  { UP: 0, RIGHT: 2, DOWN: 6, LEFT: 2 }, //2//
  { UP: 0, RIGHT: 0, DOWN: 3, LEFT: 2 }, //3
  { UP: 4, RIGHT: 6, DOWN: 4, LEFT: 0 }, //4
  { UP: 5, RIGHT: 0, DOWN: 5, LEFT: 6 }, //5
  { UP: 6, RIGHT: 3, DOWN: 0, LEFT: 3 }, //6//
  { UP: 3, RIGHT: 0, DOWN: 0, LEFT: 3 }, //7
  { UP: 4, RIGHT: 4, DOWN: 0, LEFT: 0 }, //8
  { UP: 5, RIGHT: 0, DOWN: 0, LEFT: 4 }, //9
  { UP: 0, RIGHT: 1, DOWN: 5, LEFT: 2 }, //10
  { UP: 0, RIGHT: 1, DOWN: 0, LEFT: 1 }, //11
  { UP: 0, RIGHT: 0, DOWN: 0, LEFT: 1 }, //12
  { UP: 6, RIGHT: 3, DOWN: 0, LEFT: 3 }, //13
  { UP: 0, RIGHT: 0, DOWN: 0, LEFT: 0 }, //14
];
const NA = reglas.length; //número de azulejos