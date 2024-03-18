document.addEventListener('DOMContentLoaded', function () {
  const result = document.getElementById('result');
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const buttonText = this.value;

      if (buttonText === '=') {
        try {
          result.value = eval(result.value);
        } catch (error) {
          result.value = 'Error';
        }
      } else if (buttonText === 'C') {
        result.value = '';
      } else if (buttonText === 'DEL') {
        result.value = result.value.slice(0, -1);
      } else {
        result.value += buttonText;
      }
    });
  });
});
