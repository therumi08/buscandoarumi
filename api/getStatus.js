// getStatus.js

// Simulando una base de datos o archivo que contiene el estado
const statusData = {
    estado: 'CERRADO'
};

// Función para obtener el estado actual
const getStatus = (req, res) => {
    res.status(200).json(statusData);
};

module.exports = getStatus;
