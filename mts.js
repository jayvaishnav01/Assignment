const markdownJson = require('markdown-json');
const settings = {
        name: 'markdown-json',
      	cwd: './',
      	src: '',
        filePattern: '**/*.txt',
        ignore: "*(icon|input)*",
        dist: 'C:/Users/jay/output.json',
        server: false,
        port: 3001
      };
 
markdownJson(settings).then((data) => {
  console.log('data:', data);
}).catch((err) => {
  console.log('error:', err);
})