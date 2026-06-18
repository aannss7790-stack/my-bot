const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    puppeteer: {
        executablePath: '/usr/bin/chromium',
        args: ['--no-sandbox']
    },
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    // هذا التعديل يجعل الباركود صغيراً جداً
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('تم الربط بنجاح!');
});

client.initialize();
