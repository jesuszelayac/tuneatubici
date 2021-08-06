const connection = require('../config/Database');

const contadorVotos = (req, res) => {
    const objVoto = {
        idconcursante: req.body.id_concursante,
        fechaingreso: req.body.date
    }

    var today = new Date();
    var date = `${today.getFullYear()}` + '-' + `0${today.getMonth() + 1}`.slice(-2) + '-' + `0${today.getDate()}`.slice(-2);
    var time = `0${today.getHours()}`.slice(-2) + ":" + `0${today.getMinutes()}`.slice(-2) + ":" + `0${today.getSeconds()}`.slice(-2);
    var dateTime = date + ' ' + time;

    const sqlQuery = `INSERT INTO rhb_votos (id_concursante, fechaingreso) VALUES (${objVoto.idconcursante},'${objVoto.fechaingreso}')`;

    try {
        connection.query(sqlQuery, objClick, error => {
            if (error) {
                return res.json({
                    status: false,
                    content: error
                });
            } else {
                return res.json({
                    status: true
                });
            }
        });
    } catch (error) {
        return res.json(error);
    }
}

module.exports = {
    contadorVotos
}