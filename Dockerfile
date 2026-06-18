# استخدام نسخة لينكس (Debian)
FROM node:20-bookworm-slim

# تثبيت متصفح كروم والمكتبات الأساسية للينكس
RUN apt-get update && apt-get install -y \
    chromium \
    fonts-liberation \
    libnss3 \
    libxss1 \
    libasound2 \
    libatk-bridge2.0-0 \
    libgtk-3-0 \
    --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

# تحديد مسار العمل
WORKDIR /app

# نسخ ملفات المكتبات وتثبيتها
COPY package*.json ./
RUN npm install

# نسخ الكود البرمجي
COPY . .

# أخبر البوت أين يجد كروم (مفتاح الحل)
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

# تشغيل البوت
CMD ["node", "index.js"]
