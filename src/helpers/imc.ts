export type Level = {
    title: string,
    color: string,
    icon: "down" | "up",
    imc: number[],
    yourImc?: number
}

export const levels:Level[] = [
    { title: "Magreza", color: "#96a3ab", icon: "down", imc: [0, 18.5]},
    { title: "Normal", color: "#0ead69", icon: "up", imc: [18.51, 24.99]},
    { title: "Sobrepeso", color: "#e2b039", icon: "down", imc: [25, 30]},
    { title: "Obesidade", color: "#c3423f", icon: "down", imc: [30.1, 99]}
];

export const calculateImc = (height: number, weight: number) => {
    const imc = weight / (height * height);

    let getLv = levels.filter(value => {
        
        if(imc >= value.imc[0] && imc <= value.imc[1]) {
            value.yourImc = imc;
            return value;
        } 
        
    });

    getLv = JSON.parse(JSON.stringify(getLv));

    resetLevels();

    return getLv[0];


    // for (let i in levels) {

    //     if(imc >= levels[i].imc[0] && imc <= levels[i].imc[1]) {

    //         let copy:Level = {...levels[i]}
    //         copy.yourImc = imc;

    //         return copy;
    //     } 
        
    // }
    // return null;
}

const resetLevels = () => {
    for (let i in levels) {
        levels[i].yourImc = undefined;
    }
}