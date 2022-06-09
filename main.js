Stroka1 = document.getElementById('input'); //Ввод открытого текста
Stroka2 = document.getElementById('output'); //Шифрограмма
Stroka3 = document.getElementById('prov'); //Проверочная рашифровка
Stroka1.addEventListener('input', Шифер);
function Шифер() 
{
	Stroka2.value = caesar(Stroka1.value); //Строка "Шифограмма" присваивает зашифрованый текс из строки "Ввод открытого текста"
	Stroka3.value = caesar(Stroka2.value, 'Расшифровка'); //Строка "Проверочная рашифровка" присваивает расшифрованный текст из строки "Шифограмма"
}
function caesar(text, regim="Шифровка", key=3) { //Текст, шифрование, ключ шифрование. 
	function calc_pos(pos, module, key, regim) {
		if (regim == "Шифровка") //Если режим стоит "Шифровка"
			current_pos = (pos+key)%module;
		else {
			current_pos = (pos-key)%module;
			if (current_pos%module<0) {
				current_pos += module;
			}
		}
		return current_pos; //Возвращает текущую позицию, и заканчивает функцию.
	}
	
	alf="абвгдежзийклмнопрстуфхцчшщъыьэюяАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ !?.,"; //Символы которые можно использовать в шифрование.
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
