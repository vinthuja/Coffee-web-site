function calculate() {
    var cup = parseInt(document.getElementById('cups').value);
    var Uprice = parseInt(document.getElementById('Uprice').value);

    document.getElementById('output').textContent = cup * Uprice;

}