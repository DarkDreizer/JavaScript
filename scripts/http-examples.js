// Ejemplo con el archivo data.txt

// fetch("../assets/data.txt")
// .then(response => {
//   console.log(response.status);
//   console.log(response.headers.get('Content-Type'));
//   return response.text();
// })
// .then((text) => console.log(text));

// Ejemplo de Get
function get() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      console.log(response.status);
      console.log(response.headers.get('Content-Type'));
      return response.json();
    })
    .then(json => console.log(json));
}

// Ejemplo de POST
function post() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Ejemplo de POST',
      body: 'Este es mi cuerpo',
      userId: 1
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => {
      console.log(response.status);
      console.log(response.headers.get('Content-Type'));
      return response.json();
    })
    .then(json => console.log(json));
}

// Ejemplo de PUT
function put() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'Ejemplo de PUT',
      body: 'Cuerpo de mariposa',
      userId: 1
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => {
      console.log(response.status);
      return response.json();
    })
    .then(json => console.log(json));
}

// Ejemplo de PATCH
function patch() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
      title: 'Ejemplo de PATCH'
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => {
      console.log(response.status);
      return response.json();
    })
    .catch(reason => console.log(reason))
    .then(json => console.log(json));
}

// Ejemplo de DELETE
function fetchDelete(){
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
  })
    .then(response => {
      console.log(response.status);
      return response.json();
    })
    .then(json => console.log(json));
}

  async function exectInOrder() {
    await get();
    await post();
    await put();
    await patch();
    await fetchDelete();
  }

  exectInOrder();