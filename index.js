/* Graus, minutos e segundos (GMS)
     º = grau
     ' = minutos
     " = segundos

     1º = 60'
     1' = 60"
*/

/* Graus decimais (GD)
    Valores positivos: Latitude = NORTE/NORTH (cima) | Longitude: LESTE/EAST (esquerda)
    Valores negativos: Latitude = SUL/SOUTH (baixo) | Longitude: OESTE/WEST (direita)
*/

const showDMSByDD = dd => {
    dd = dd.split(' ');

    const latitude = convert(dd[0]);
    const longitude = convert(dd[1]);

    const obj = {latitude, longitude};

    function convert(coord) {
        const dms = {
            degrees: 0,
            min: 0,
            sec: 0
        };

        let dg = coord.toString();
        dg = dg.replace('-', '');
        dg = dg.split('.');
        
        dms.degrees = dg[0];

        let mi = (('0.' + parseFloat(dg[1])) * 60).toString();
        mi = mi.split('.');

        dms.min = mi[0];

        let se = (('0.' + parseFloat(mi[1])) * 60).toFixed(1).toString();

        dms.sec = se;

        return dms;
    }

    return obj;
};

const showDDByDMS = dms => {
    dms = dms.split(/ /);

    const latitude = convert(dms[0]);
    const longitude = convert(dms[1]);

    const obj = {latitude, longitude};
    
    function convert(coord) {
        let number = coord.split(/º|°|'|"/);
        
        if (number[3] === 'S' || number[3] === 'W') {
            number[0] = '-' + number[0];
        }

        let rest = ((number[1] / 60) + (number[2] / 3600)).toString();
        rest = rest.split('.');
        rest = rest[1];

        return `${number[0]}.${rest}`;
    }
    
    return obj;
};

// console.log(showDMSByDD(`29.761833, -95.351722`));
console.log(showDDByDMS(`29°45'42.6"N 95°21'6.2"W`));
