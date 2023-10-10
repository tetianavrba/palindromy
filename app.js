console.log('Funguju!');

const textPozpatku = (text) => {
  return text.split('').reverse().join('');
};

// textPozpatku('Ahoj světe') // 'etěvs johA'
// textPozpatku('Kajak') // 'kajaK'
const polozky = document.querySelectorAll('li');
polozky.forEach((polozka) => {
  const text = polozka.textContent.toLocaleLowerCase().replaceAll(' ', '');
  if (text === textPozpatku(text)) {
    polozka.classList.add('palindrom');
  }
});
