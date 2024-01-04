// Fungsi untuk menghitung luas segitiga
function calculateArea() {
    // Mengambil nilai sisi dari input form
    var sideA = parseFloat(document.getElementById('areaSideA').value);
    var height = parseFloat(document.getElementById('areaHeight').value);

    // Validasi input
    if (isNaN(sideA) || isNaN(height)) {
        alert('Please enter valid numerical values for all sides.');
        return;
    }

    // Melakukan perhitungan luas segitiga
    var area = 0.5 * sideA * height;

    // Menampilkan hasil luas segitiga
    document.getElementById('areaResult').innerHTML = '<p>Luas Segitiga: ' + area.toFixed(2) + '</p>';
}



// Fungsi untuk menghitung keliling segitiga
function calculatePerimeter() {
    // Mengambil nilai sisi dari input form
    var sideA = parseFloat(document.getElementById('perimeterSideA').value);
    var sideB = parseFloat(document.getElementById('perimeterSideB').value);
    var sideC = parseFloat(document.getElementById('perimeterSideC').value);

    // Validasi input
    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        alert('Please enter valid numerical values for all sides.');
        return;
    }

    // Melakukan perhitungan keliling segitiga
    var perimeter = sideA + sideB + sideC;

    // Menampilkan hasil keliling segitiga
    document.getElementById('perimeterResult').innerHTML = '<p>Keliling Segitiga: ' + perimeter.toFixed(2) + '</p>';
}
