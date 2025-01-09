const celdas = [];
let RETICULAX = document.getElementById("cellSize").value;
let RETICULAY = RETICULAX;
let ancho; //anchura de la celda
let alto; //altura de la celda
const startbutton = document.getElementById("start");



function preload() {
  for (let i = 0; i < NA; i++) {
    azulejos[i] = loadImage(`azulejos/Tile${i}.png`);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  ancho = width / RETICULAX;
  alto = ancho;
  RETICULAY = Math.floor(height / ancho);

  let opcionesI = [];
  for (let i = 0; i < azulejos.length; i++) {
    opcionesI.push(i);
  }

  for (let i = 0; i < RETICULAX * RETICULAY; i++) {
    celdas[i] = {
      colapsada: false,
      opciones: opcionesI,
    };
  }
  startbutton.addEventListener("click", resetAll);
}

function draw() {
  const celdasConOpciones = celdas.filter((celda) => {
    return celda.opciones.length > 0;
  });

  const celdasDisponibles = celdasConOpciones.filter((celda) => {
    return celda.colapsada == false;
  });

  if (celdasDisponibles.length > 0) {
    celdasDisponibles.sort((a, b) => {
      return a.opciones.length - b.opciones.length;
    });

    const celdasPorColapsar = celdasDisponibles.filter((celda) => {
      return celda.opciones.length == celdasDisponibles[0].opciones.length;
    });

    const celdaSeleccionada = random(celdasPorColapsar);
    celdaSeleccionada.colapsada = true;

    const opciónSeleccionada = random(celdaSeleccionada.opciones);
    celdaSeleccionada.opciones = [opciónSeleccionada];

    // print(celdaSeleccionada);

    for (let x = 0; x < RETICULAX; x++) {
      for (let y = 0; y < RETICULAY; y++) {
        const celdaIndex = x + y * RETICULAX;
        const celdaActual = celdas[celdaIndex];
        if (celdaActual.opciones.length < 1) {
          fill(104, 135, 100);
          rect(x * ancho, y * alto, ancho);
        }

        if (celdaActual.colapsada) {
          const índiceDeAzulejo = celdaActual.opciones[0];
          const reglasActuales = reglas[índiceDeAzulejo];
          print(reglasActuales);

          image(azulejos[índiceDeAzulejo], x * ancho, y * alto, ancho, alto);

          // monitorear entropía UP
          if (y > 0) {
            const índiceUP = x + (y - 1) * RETICULAX;
            const celdaUP = celdas[índiceUP];
            if (!celdaUP.colapsada) {
              cambiarDireccion(celdaUP, reglasActuales["UP"], "DOWN");
            }
          }

          // monitorear entropía RIGHT
          if (x < RETICULAX - 1) {
            const índiceRIGHT = x + 1 + y * RETICULAX;
            const celdaRIGHT = celdas[índiceRIGHT];
            if (!celdaRIGHT.colapsada) {
              cambiarDireccion(celdaRIGHT, reglasActuales["RIGHT"], "LEFT");
            }
          }

          // monitorear entropía DOWN
          if (y < RETICULAY - 1) {
            const índiceDOWN = x + (y + 1) * RETICULAX;
            const celdaDOWN = celdas[índiceDOWN];
            if (!celdaDOWN.colapsada) {
              cambiarDireccion(celdaDOWN, reglasActuales["DOWN"], "UP");
            }
          }

          // monitorear entropía LEFT
          if (x > 0) {
            const índiceLEFT = x - 1 + y * RETICULAX;
            const celdaLEFT = celdas[índiceLEFT];
            if (!celdaLEFT.colapsada) {
              cambiarDireccion(celdaLEFT, reglasActuales["LEFT"], "RIGHT");
            }
          }
        } else {
          // strokeWeight(2);
          // rect(x * ancho, y * alto, ancho, alto);
        }
      }
    }
    // noLoop();
  } else {
  }
}
// print(celdasDisponibles);
// noLoop();

function cambiarDireccion(_celda, _regla, _opuesta) {
  const nuevasOpciones = [];
  for (let i = 0; i < _celda.opciones.length; i++) {
    if (_regla == reglas[_celda.opciones[i]][_opuesta]) {
      const celdaCompatible = _celda.opciones[i];
      nuevasOpciones.push(celdaCompatible);
    }
  }
  _celda.opciones = nuevasOpciones;
  print(nuevasOpciones);
}

function resetAll() {
  let RETICULAX = document.getElementById("cellSize").value;
  ancho = width / RETICULAX;
  alto = ancho;
  RETICULAY = Math.floor(height / ancho);

  background(0, 0, 0);

  let opcionesI = [];
  for (let i = 0; i < azulejos.length; i++) {
    opcionesI.push(i);
  }
  for (let i = 0; i < RETICULAX * RETICULAX; i++) {
    celdas[i] = {
      colapsada: false,
      opciones: opcionesI,
    };
  }
}
