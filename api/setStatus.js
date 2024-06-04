const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Método no permitido' });
        return;
    }

    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const { estado } = JSON.parse(body);
        const filePath = path.join(__dirname, '..', 'status.json');
        fs.writeFile(filePath, JSON.stringify({ estado }), 'utf8', err => {
            if (err) {
                res.status(500).json({ error: 'Error al escribir el archivo' });
                return;
            }
            res.status(200).json({ success: true });
        });
    });
};
