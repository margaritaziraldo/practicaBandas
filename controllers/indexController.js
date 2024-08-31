const bandas = require('../db/index')

let indexController = {
    listadoBandas : function(req, res){
        res.render('bandas', {texto: 'Lista de Bandas', listadoBandas: bandas} );

    },
    detalleBanda: function(req,res){
        let nombreBandaBuscada = req.params.nombre.toLowerCase();
        let detalleBanda = [];

        for (let i = 0; i < bandas.length; i++) {
            let nombreBandaBuscadaSinEspeciales = bandas[i].nombre.toLowerCase().replace(/[\s\.\-\/\'\"]/g, ''); // para sacar los caracteres especiales    

            if (nombreBandaBuscada === nombreBandaBuscadaSinEspeciales) {
                detalleBanda.push(bandas[i]);
            }
        }

        if (detalleBanda.length === 0) {
            return res.send('No encontramos la banda que estabas buscando!');
        } else {
            return res.render('detalles', { texto: 'Detalles de Banda', banda: detalleBanda[0] }); // accede al unico elemento en el array, o sea, la banda buscada.

        }
    },
    mostrarPorGenero: function(req,res){
        let generoBuscado = req.params.genero.toLowerCase();
        let bandasPorGenero = [];

        for (let i = 0; i < bandas.length; i++) {
            if (bandas[i].genero.toLowerCase() === generoBuscado) {
                bandasPorGenero.push(bandas[i]);
            }
        }
    
        if (bandasPorGenero.length === 0) {
            return res.send('No encontramos bandas para el género especificado!');
        } else {
            return res.render('genero', { texto: `Bandas del género ${req.params.genero}`, listadoBandas: bandasPorGenero });
        }
    }
    }


module.exports = indexController;
