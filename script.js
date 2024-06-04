"use strict";
let interMIami = 13;
let fcDallas = 11;
function jugar(equipo1, equipo2) {
    if (equipo1 > equipo2) {
        console.log("Gana inter Miami");
    }
    if (equipo1 == equipo2) {
        console.log("Empatan");
    }
    if (equipo1 < equipo2) {
        console.log("Gana Dallas");
    }
}
jugar(interMIami, fcDallas);
