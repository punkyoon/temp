export const isProd = process.env.NODE_ENV === 'production'

export const imageBasePath = isProd ? '/temp' : '';
