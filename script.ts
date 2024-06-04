let interMIami: number  = 13
let fcDallas: number = 11

function jugar(equipo1: number, equipo2: number):void{
    if(equipo1 > equipo2){
        console.log("Gana inter Miami")
    }if(equipo1 == equipo2){
        console.log("Empatan")
    }if(equipo1 < equipo2){
        console.log("Gana Dallas")
    }
}

jugar(interMIami, fcDallas)