const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://colortools-kphx1f6qt-sotiris64.vercel.app';