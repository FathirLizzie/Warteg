let jenis_makanan = document.querySelector('.jenis_makanan');
const hargaMakanan = document.getElementById('.hargaMakanan');

const jumlahMakanan = document.querySelector('.jumlahMakanan');

//Harga Makanan :
const hargaMakananList = {
	'Ayam Bakar': 10000,
	'Orek Tempe': 5000,
	'Telur Balado': 8000,
	'Ayam Goreng': 10000,
	'Sate Ayam': 10000,
    'Sayur Lodeh': 5000,
	'Sayur Asam': 4000,
	'Gorengan': 2000,
	'Usus Goreng': 3000
};

let makanan = [];

jenis_makanan.addEventListener('change', function() {
	const harga = hargaMakananList[this.value];
	//makanan.push(hargaMakananList[this.value])

	if (harga) {
		hargaMakanan.innerHTML = '<h5>Rp. ' + harga + '</h5>';
	}else{  
		hargaMakanan.innerHTML = '<h5>Rp. </h5>';
	}

	//hitungTotalHarga();
});

//Hasil
const hasil = document.querySelector('#total');

const tambah = document.querySelector('input[type="option"]'); 
tambah.addEventListener('click'), function() {
	//Kalau makanan dipilih
	let hargaAyamBakar = 10000;
	if (hargaAyamBakar === true){
		hargaAyamBakar *= jumlahMakanan.value;
		hasil.value = hargaAyamBakar;
	}

	let hargaOrekTempe = 5000;
	if (hargaOrekTempe === true){
		hargaOrekTempe *= jumlahMakanan.value;
		hasil.value = hargaOrekTempe;
	}

	let hargaTelurBalado = 8000;
	if (hargaTelurBalado === true){
		hargaTelurBalado *= jumlahMakanan.value;
		hasil.value = hargaTelurBalado;
	}

	let hargaAyamGoreng = 10000;
	if (hargaAyamGoreng === true){
		hargaAyamGoreng *= jumlahMakanan.value;
		hasil.value = hargaAyamGoreng;
	}

	let hargaSateAyam = 10000;
	if (hargaSateAyam === true){
		hargaSateAyam *= jumlahMakanan.value;
		hasil.value = hargaSateAyam;
	}

	let hargaSayurLodeh = 5000;
	if (hargaSayurLodeh === true){
		hargaSayurLodeh *= jumlahMakanan.value;
		hasil.value = hargaSayurLodeh;
	}

	let hargaSayurAsam = 4000;
	if (hargaSayurAsam === true){
		hargaSayurAsam *= jumlahMakanan.value;
		hasil.value = hargaSayurAsam;
	}

	let hargaGorengan = 2000;
	if (hargaGorengan === true){
		hargaGorengan *= jumlahMakanan.value;
		hasil.value = hargaGorengan;
	}

	let hargaUsusGoreng = 3000;
	if (hargaUsusGoreng === true){
		hargaUsusGoreng *= jumlahMakanan.value;
		hasil.value = hargaUsusGoreng;
	}
}

console.log(makanan)

//function hitungTotalHarga(){
	//const hargaMakananValue = hargaMakanan.innerHTML.replace('Rp. ');
	//const jumlahMakananValue = parseInt(jumlahMakanan.value);
	//let totalHarga = document.getElementById("totalHarga")

	//const total = (hargaMakananValue * jumlahMakananValue);
	//const totalPajak = total * 0.1;
	//const totalAkhir = total * totalPajak;

	//totalHarga.innerHTML = 'Total Harga : Rp. ' + total;
	//pajak.innerHTML = 'Pajak(10%) : Rp. ' + totalPajak;
	//document.getElementById('totalAkhir').innerHTML = 'Total Akhir : Rp. ' + totalAkhir;
//}

window.addEventListener('load', function() {
	hargaMakanan.innerHTML = '<h5>Rp. 0</h5>';
});