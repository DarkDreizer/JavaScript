const formExample = document.querySelector('#http-form');
const radios = document.querySelectorAll("#http-form input[type='radio'");

formExample.addEventListener('submit', (event) => {
  event.preventDefault();
  const sessionTest = sessionStorage.getItem('test');
  if (!sessionTest) {
    sessionStorage.setItem('test', 'Session Test');
  }
  if (formExample.elements[0].value.length <= 6) {
    let selectedRadio = Array.from(radios).filter(radio => radio.checked);
    const body = {
      checkbox: formExample.elements[2].checked,
      password: formExample.elements[1].value,
      radio: selectedRadio[0].value,
      select: formExample.elements[7].value,
      text: formExample.elements[0].value,
      textarea: formExample.elements[6].value
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .catch(reason => console.log(reason))
    .then(json => {
      formExample.reset();
      console.log(json)
    });
  } else {
    alert('Texto muy grander');
  }
});

const test = localStorage.getItem('test');
if (!test) {
  localStorage.setItem('test', JSON.stringify({
    name: 'Tom',
    age: 12
  }));
}

console.log(JSON.parse(test)); 