const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    puppeteer: {
        executablePath: '/usr/bin/chromium',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    },
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    // هذا التنسيق هو الأفضل للـ Logs في Render لمنع التشوه
    console.log('انسخ الكود التالي واستخدم أي موقع لتحويله إلى باركود:');
    console.log(qr); 
    
    // أو استخدم هذا لعرضه بشكل صغير جداً
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('تم الربط بنجاح!');
});

client.initialize();
