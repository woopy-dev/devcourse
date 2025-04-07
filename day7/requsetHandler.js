function main(response){
  console.log('main');

  response.writeHead(200, {'Content-Type' : 'text/html'});
  response.write('Main page | WooHyuk');
  response.end();
}

function login(response){
  console.log('login');

  response.writeHead(200, {'Content-Type' : 'text/html'});
  response.write('Login page');
  response.end();
}

let handle = {};

handle['/'] = main;
handle['/login'] = login;

exports.handle = handle;