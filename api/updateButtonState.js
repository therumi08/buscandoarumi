// api/updateButtonState.js

module.exports = (req, res) => {
    // Verifica que la solicitud sea POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    // Parsea los datos JSON de la solicitud
    const { state } = req.body;

    // Verifica que el estado sea válido
    if (state !== 'ABIERTO' && state !== 'CERRADO') {
        return res.status(400).json({ error: 'Estado inválido' });
    }

    // Aquí puedes agregar la lógica para guardar el estado en la base de datos o donde desees
    
    // Envía una respuesta exitosa
    res.status(200).json({ message: `Estado del botón actualizado a ${state}` });
};
