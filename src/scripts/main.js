
import { SVG } from '@svgdotjs/svg.js';

const sad = () => {
  const sadDraw = SVG().addTo('#sad').size(180, 120);  // Changed 'SVG('sad')' to addTo('#sad')
  const frown = sadDraw.path('M 10 60 q 55 0 110 0')
    .fill('none')
    .stroke({ color: '#f06', width: 4, linecap: 'round', linejoin: 'round' });
  
  const eye1 = sadDraw.ellipse(20, 5).fill('#f06').move(10, 10);
  const eye2 = sadDraw.ellipse(20, 5).fill('#f06').move(100, 10);
};

const smile = () => {
  const smileDraw = SVG().addTo('#smile').size(180, 120); // Changed 'SVG('smile')' to addTo('#smile')
  const smile = smileDraw.path('M 10 60 q 55 0 110 0')
    .fill('none')
    .stroke({ color: '#f06', width: 4, linecap: 'round', linejoin: 'round' });
  
  const eye1 = smileDraw.ellipse(20, 5).fill('#f06').move(10, 10);
  const eye2 = smileDraw.ellipse(20, 5).fill('#f06').move(100, 10);
};


sad();
smile();