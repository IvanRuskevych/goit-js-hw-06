// Напиши скрипт управління формою логіна.

// # 1. Обробка відправлення форми form.login-form повинна відбуватися відповідно
//      до події submit.
// # 2. Під час відправлення форми сторінка не повинна перезавантажуватися.
// # 3. Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
//      що всі поля повинні бути заповнені.
// # 4. Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт,
//      де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.
//      Для доступу до елементів форми використовуй властивість elements.
// # 5. Виведи об'єкт із введеними даними в консоль і очисти значення полів форми
//      методом reset.

const formRef = document.querySelector('.login-form');
// console.log('formRef', formRef);

// # 1.
formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  // # 2.
  event.preventDefault();

  // # 3.
  const formData = new FormData(formRef);
  formData.forEach((value) => {
    if (value === '') {
      alert('Потрібно заповнити всі поля форми');
    }
  });

  // # 4.
  const {
    elements: { email, password },
  } = event.currentTarget;
  //   console.log('event.currentTarget', event.currentTarget);
  //   console.log(email.value, password.value);

  const objFormData = {
    email: email.value,
    password: password.value,
  };

  // # 5.
  console.log("Об'єкт отриманих даних: ", objFormData);

  formRef.reset();
}
