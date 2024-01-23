/* 
 Crea un reloj que te indique las horas: un for que cuenta horas con un for en su interior que cuenta minutos. 
 Un console.log te puede mostrar que para cada vuelta del primer loop, el de dentro da 60. 
 ¿Sabrías crear una alarma que te imprima "¡Despierta!" a las 7:15?
*/

// wakeup timer
let wakeupHora = 7
let wakeupMin = 15

// choose (12 o 24)
let timeFormat = 24

function reloj() {


    // for 12h time format

    if (timeFormat === 12) {
        for (let h = 1; h < timeFormat; h++) { // hour cycle
            for (let m = 0; m < 60; m++) {
                if (m <= 9) {
                    console.log("Time: " + h + ":0" + m + " PM/AM")
                }
                else {
                    console.log("Time: " + h + ":" + m + " PM/AM")
                }

                if (wakeupHora == h && wakeupMin == m) {
                    console.log("\nWake up now! Despierte!\n")
                }

                // this part to print extra line with 12-00
                if (h == 11 && m == 59 && wakeupHora != 12 && wakeupMin != 0) {
                    console.log("Time: 12:00 PM/AM")
                }

                // need this part to avoid bug when wakeup time is 12-00
                if (h == 11 && m == 59 && wakeupHora == 12 && wakeupMin == 0) {
                    console.log("Time: 12:00 PM/AM\n\nWake up now! Despierte!\n")
                } 
            }
        } 
    }


    // for 24h time format
    else if (timeFormat === 24) {
        for (let h = 0; h < timeFormat; h++) {
            for (let m = 0; m < 60; m++) {
                if (m <= 9) {
                    console.log("Time: " + h + ":0" + m)
                }
                else if (m > 9) {
                    console.log("Time: " + h + ":" + m)
                }
                if (wakeupHora == h && wakeupMin == m) {
                    console.log("\nWake up now! Despierte!\n")
                }
            }
        }
    }
    else {
        console.log("ERROR: Your hour format is unsupported for this script of clock.\nSupported only 12h & 24h formats.")
    }
}

reloj()
