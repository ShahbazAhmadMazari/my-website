import fs from 'fs';

const imgBase64 = fs.readFileSync('public/profile.jpg').toString('base64');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <defs>
    <clipPath id="avatarCircle">
      <circle cx="64" cy="64" r="59"/>
    </clipPath>
    <linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>
  </defs>
  <circle cx="64" cy="64" r="63" fill="url(#ring)"/>
  <circle cx="64" cy="64" r="60" fill="#070a13"/>
  <image href="data:image/jpeg;base64,${imgBase64}" x="5" y="5" width="118" height="118" clip-path="url(#avatarCircle)" preserveAspectRatio="xMidYMid slice"/>
</svg>`;

fs.writeFileSync('public/favicon.svg', svg);
console.log('Circular favicon.svg generated successfully.');
