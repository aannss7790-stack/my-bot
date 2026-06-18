const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    puppeteer: {
        executablePath: '/usr/bin/chromium',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    },
    authStrategy: new LocalAuth()
        client.on('qr', (qr) => {
    // أضف `, { scale: 1 }` بعد `{ small: true }`
    qrcode.generate(qr, { small: true, scale: 1 });
});

client.on('ready', () => {
    console.log('تم الربط بنجاح!');
});

client.initialize();
