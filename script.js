function check() {
    const n1 = +document.querySelector ('#n1').value;
    const n2 = +document.querySelector ('#n2').value;
    const n3 = +document.querySelector ('#n3').value;

    const result = document.querySelector ('#result');
    
    const media = (n1 + n2 + n3) / 3;

    result.innerHTML = 'Sua média é ' + media;
}