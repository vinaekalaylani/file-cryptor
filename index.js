require('dotenv').config();

const cors = require('cors');
const express = require('express');
const XlsxPopulate = require('xlsx-populate');

const port = process.env.PORT || 3000;
const origin = process.env.CORS_ORIGIN || "*"
const app = express();
app.use(express.json({ limit: '100mb' })); 
app.use(cors({
    origin: origin,
}));

app.use(express.json());

app.post('/protect-excel', async (req, res) => {
    console.log('📦 File base64 size:', req.body?.fileBase64.length);
    try {
        const { fileBase64, encrypted = '' } = req.body;
        
        if (!fileBase64) {
            return res.status(400).send('Missing "fileBase64" in request body.');
        }
        
        // Convert base64 string to Buffer
        const fileBuffer = Buffer.from(fileBase64, 'base64');
        console.log('📦 File buffer size (bytes):', fileBuffer.length);

        // Load Excel file from buffer
        const workbook = await XlsxPopulate.fromDataAsync(fileBuffer);
        let outBuffer
        if (encrypted !== '') {
            outBuffer = await workbook.outputAsync({ password: encrypted });
        } else {
            outBuffer = await workbook.outputAsync();
        }
        
        res.send(outBuffer);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error processing Excel file');
    }
});

app.listen(port, () => {
    console.log(`Server allow origin ${origin}:${port}`);
});
