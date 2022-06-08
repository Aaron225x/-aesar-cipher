Stroka1 = document.getElementById('input');
Stroka2 = document.getElementById('output');
Stroka3 = document.getElementById('prov');
Stroka1.addEventListener('input', Шифер); 
function Шифер() 
{
	Stroka2.value = caesar(Stroka1.value);
	Stroka3.value = caesar(Stroka2.value, 'Расшифровка');
}
function caesar(text, regim="shifr", key=3) {
	function calc_pos(pos, module, key, regim) {
		if (regim == "shifr")
			current_pos = (pos+key)%module;
		else {
			current_pos = (pos-key)%module;
			if (current_pos%module<0) {
				current_pos += module;
			}
		}
		return current_pos;
	}
	
	alf="абвгдежзийклмнопрстуфхцчшщъыьэюяАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ !?.,";
	if (key<=0)
		return text;
	module =alf.length
	shifrtext="";
	for (symbol of text) {
		pos = alf.indexOf(symbol);
		if (pos == -1){
			alert("Удалите запрещенный символ!");
			break;
		}
		shifr_sym = alf[calc_pos(pos, module, key, regim)];
		shifrtext += shifr_sym;
	}
	return shifrtext;	
}