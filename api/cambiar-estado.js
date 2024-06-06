import { writeFile, readFile } from 'fs/promises';
import path from 'path';

const filePath = path.resolve('./public/estado.json');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { estado } = req.body;

        if (estado !== 'ABIERTO' && estado !== 'CERRADO') {
            res.status(400).json({ success: false, message: 'Estado inválido' });
            return;
        }

        try {
            await writeFile(filePath, JSON.stringify({ estado }), 'utf8');
            res.status(200).json({ success: true });
        } catch (error) {
            console.error('Error al escribir el archivo:', error);
            res.status(500).json({ success: false, message: 'Error al actualizar el estado' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Método no permitido' });
    }
}
