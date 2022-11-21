
export default function customImageLoader({ src, width, quality }) {
  const isProd = process.env.NODE_ENV === 'production';
  const imageBasePath = isProd ? '/temp' : '';

  return `${imageBasePath}/${src}`;
}
