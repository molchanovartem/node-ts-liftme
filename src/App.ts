import Server from './Server';

const port = parseInt(process.env.PORT || '4000');

 new Server().start(port)
  .then(port => console.log(`Running on port ${port}`))
  .catch(error => {
    console.log(error)
  });