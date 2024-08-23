document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.typing');
    const text = 'Olá! Sejam bem-vindos ao meu portifólio.'; // Text to be typed

    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        } else {
            setTimeout(() => {
                textElement.innerHTML = '';
                index = 0;
                type();
            }, 10000)
        }
    }
    type();
});
