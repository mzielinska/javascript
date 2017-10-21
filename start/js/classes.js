class Osoba {
    constructor(imie, nazwisko){
        this.imie = imie;
        this.nazwisko = nazwisko;
    }
    wyswietlInfo() {
        console.log("Imie: " +this.imie + ","+ "Nazwisko: "+ this.nazwisko);
    }
}
var krystian = new Osoba('Krystian', 'Dziopa');
var magda = new Osoba('Magda', "Zielinska");

krystian.wyswietlInfo();
magda.wyswietlInfo();