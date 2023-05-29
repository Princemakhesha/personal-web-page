import handlebars from 'vite-plugin-handlebars';

import { defineConfig } from 'vite';


import data from "./data.json" assert {type: 'json'};

export default defineConfig({
  base: '/responsive_webpages/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        bootstrap: 'index-Bootstrap.html',
        materialize: 'index-Materialize.html',
      }
    },
  },
  plugins: [handlebars({
    context: {
      data
    }
  })],
});

// export default defineConfig({
//   // config attributes goes here
// });

// import handlebars from 'vite-plugin-handlebars';

// import data from './data.json' assert {type:'json'};

// const basicContext = {
//         title : "Thizwilondi Prince Makhesha",
//         show : false,
//         photo: "image1.jpeg",
//         fruits : [
//             "apples",
//             "oranges",
//             "bananas"
//         ],
//         isClient : true,
//         fruitSales : [
//             {day : "Monday", apples : 13, oranges : 34},
//             {day : "Tuesday", apples : 17, oranges : 28},
//             {day : "Thursday", apples : 7, oranges : 45},
//         ]
//     };

// export default {
//   plugins: [handlebars({
//     context : basicContext
//   })]
// };

