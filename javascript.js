var kontakt ={
	telefon:"065/4658977",
	adresa:"Bulevar Mihajla Pupina 66, Novi Sad",
	mail:"premiumshoprs@gmail.com",
	ispis: function(){
		return "Telefon: "+this.telefon+" "+"|"+" "+"Adresa: "+this.adresa+" "+"|"+" "+"E-mail: "+this.mail;
	}
};
document.getElementById("p2").innerHTML=kontakt.ispis();
function provera(){
	var i=document.forma.ime.value;
	var p=document.forma.prezime.value;
	var m=document.forma.mejl.value;
	var ps=document.forma.pass.value;
	var ps2=document.forma.pass2.value;
	var mo=document.forma.model.value;
try{
	if(i==""||p==""||m==""||ps==""||ps2==""){
		throw "Morate popuniti sva polja!";
	}
	if(ps.length<8){
		throw "Lozinka mora imati minimalno 8 karaktera!";
	}
	if(ps!==ps2){
	throw "Lozinke koje ste uneli se ne poklapaju!";
	}
	else {
		localStorage.setItem("Ime",i);
		localStorage.setItem("Prezime",p);
		localStorage.setItem("Mejl",m);
		localStorage.setItem("Lozinka",ps);
		localStorage.setItem("Uredjaj",mo);
		var ispis="Hvala Vam "+localStorage.getItem("Ime")+" što ste kupili "+localStorage.getItem("Uredjaj")+"!";
		alert(ispis);
		
	}
}
catch(err){
	alert(err);
}
}

		var json={
			"tekst":[
        {"informacija":"Sajt je osnovan 21.12.2018.godine sa idejom da korisnicima pružimo savremene usluge kupovine mobilnih telefona."}, 
        {"informacija":"Svakodnevnim ažuriranjem sajta mi pružamo informacije o svim modelima i njihovim najpovoljnijim cenama."},
        {"informacija":"Vršimo uslugu dostave na kućnu adresu u roku od 24-48h."},
        {"informacija":"Možete vratiti uređaj u roku od 14 dana ukoliko niste zadovoljni, a mi ćemo vam vratiti novac."},
		{"informacija":"SVI NAŠI TELEFONI SU NOVI I ORIGINALNI!"},
		]
}
document.getElementById("txt").innerHTML=json.tekst[0].informacija+" "+json.tekst[1].informacija+" "+json.tekst[2].informacija+" "+json.tekst[3].informacija+"<br>"+json.tekst[4].informacija;
function animacija1(){
	var element1=document.getElementById("naslov");
	var pozicija=0;
	var val=setInterval(pokret,5);
	function pokret(){
		if(pozicija==300){
			clearInterval(val);
		}
		else{
			pozicija++;
			element1.style.left=pozicija+'px';
		}
	}
}
function animacija2(){
	var element2=document.getElementById("paragraf");
	var pozicija=0;
	var val=setInterval(pokret,5);
	function pokret(){
		if(pozicija==220){
			clearInterval(val);
		}
		else{
			pozicija++;
			element2.style.left=pozicija+'px';
		}
	}
}

