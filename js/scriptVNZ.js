jQuery('document').ready(function(){
	var curfac;
	var desc1, desc2, desc3;
	if(localStorage.getItem('prof') == "Ти збираєшся стати юристом" + "\nЗНО для здачі:" + "\nІсторія України, Українська мова, Англійська мова або Математика"){
		curfac = " факультеті права ";
		desc1 = "Програма спеціальності «Міжнародне право» орієнтована на підготовку висококваліфікованих фахівців, які мають поглиблені знання з міжнародного публічного, приватного та європейського права і належну кваліфікацію для юридичного аналізу міжнародних відносин та ефективної роботи в міжнародному оточенні на засадах оволодіння системою компетентностей. Спеціаліст із міжнародного права здатний виконувати професійні види робіт й обіймати первинні посади в органах державної влади, в організаціях та юридичних фірмах різних видів діяльності.";
		desc2 = "Професія юриста є однією з найпрестижних в Україні та закордоном. За спеціальністю «Право» ти станеш спеціалістом в галузях господарського та адміністративного права, права інтелектуальної власності та інформаційного права. Обравши для себе відповідну спеціалізацію, студенти мають можливість поглиблено вивчати правове регулювання інтелектуальної власності та правові питання у сфері бізнесу. Знання, одержані під час навчання за спеціальністю «Право» дають можливість працювати у будь-якій сфері юридичної діяльності – серед наших випускників є адвокати, нотаріуси, судді, прокурори та багато інших.";
		desc3 = "";
	} else if(localStorage.getItem('prof') == "Ти збираєшся стати IT-фахівцем" + "\nЗНО для здачі:" + "\nМатематика, Українська мова, Англійська мова або Фізика"){
		curfac = " факультеті IT-технологій ";
		desc1 = "Ти будеш вивчати сучасні методології та інструментарій проектування та розроблення програмного забезпечення інформаційних управляючих систем; математичні основи програмування; алгоритми та структури даних; об’єктно – орієнтоване, декларативне, системне, паралельне програмування, програмування на платформі .NET, web-програмування та web-дизайн; технології моделювання програмного забезпечення; системи керування базами даних та багато іншого. Випускники працюють інженерами-програмістами, менеджерами програмних проектів в індустрії розробки програмних систем";
		desc2 = "Студенти цієї спеціальності працюють над створенням і обслуговуванням апаратно-програмних засобів сучасних і перспективних інформаційних технологій, розробленням і застосуванням комп’ютерних систем і компонентів загального та спеціального призначення, створенням та супроводом системного програмного забезпечення. Отримані знання дозволяють випускникам впроваджувати новітні комп’ютерні технології у великих ІТ-компаніях та підприємствах, а також створювати програмне забезпечення комп’ютерних систем та мереж, яке відповідає надсучасним світовим вимогам.";
		desc3 = " У сучасному світі все більше виробництв і послуг спираються на інформаційні технології. Виробництво і постачання енергії, очищення і постачання питної води, керування транспортом, освітлення міст, зв'язку, доступ людей до інформації, охорона здоров'я, оплата товарів і послуг, волевиявлення під час виборів і референдумів, і навіть електронне урядування – все це реалії нашого життя. Випускники спеціальності «Кібербезпека» стоять на сторожі безпеки комп'ютерних систем і саме від них залежить якість нашого життя.";
	} else if(localStorage.getItem('prof') == "Ти збираєшся стати інженером" + "\nЗНО для здачі:" + "\nМатематика, Українська мова, Англійська мова або Фізика"){
		curfac = " факультеті прикладної інженерії ";
		desc1 = "Без ґрунтовної інженерної освіти бути фахівцем у будь-якій сучасній галузі абсолютно неможливо. Одержавши освіту за спеціальністю «прикладна механіка» ти зможеш працювати у будь-якій сфері й керувати надскладними виробничими процесами. Фундаментальні знання в галузі прикладної механіки, інформаційних систем та технологій машинобудування й зварювання на базі сучасних цифрових технологій та комп’ютерної техніки – це спеціальність «Прикладна механіка». Випускники працюють на підприємствах авіабудівної, машинобудівної, зварювальної галузей інженерами-програмістами, консультантами з інженерних питань, науковим співробітниками.";
		desc2 = "Хочеш дізнатись, як виготовляють парові, гідравлічні і газові турбіни, устаткування для атомних і геотермальних електростанцій. Мрієш розбиратись у двигунах внутрішнього згорання, локомобілях, газотурбінних компресори парогенераторах? Обирай спеціальність «Енергетичне машинобудування»! Ми готуємо фахівців з ефективного та екологічно чистого використання паливних ресурсів в енергетиці, промисловості, комунально-побутовому та аграрному секторах економіки. Особливу актуальність спеціальність має у зв'язку зі збільшенням використання альтернативних джерел енергії.";
		desc3 = "Фундаментальні знання у питаннях генерації електричної енергії на об’єктах традиційної та відновлювальної енергетики, керування режимами роботи енергосистем, розподілу електричної енергії та електропостачання, проектування об’єктів електроенергетики, автоматизації промислових підприємств, розробки та впровадження автоматизованих електромеханічних систем – все це про випускників спеціальності «Електроенергетика, електротехніка та електромеханіка».";
	}
	localStorage.setItem('fac', curfac);
	if(localStorage.getItem('pers_progres') == 4){
		jQuery('.mesform1').css("margin-left", "25%");
		jQuery('.mesform1').html("<h2>Вітаємо, ви вступили до університету!</h2> <br \/> Прийшов час ознайомитись із напрямом вашої діяльності і вибрати спеціальність.");
		jQuery('.out2').css("margin-left", "74%");
		progres = 5;
		localStorage.setItem('pers_progres', progres);
	}
	jQuery('.out2').on('click', function(){
		jQuery('.mesform1').css("margin-left", "-500%");
		jQuery(this).css("margin-left", "-500%");
	});
	var flagvnz;
	if(localStorage.getItem('pers_progres') == 5){
		flagvnz = 1;
		jQuery('.profesor').css("margin-left", "40%");
		jQuery('.talk2').css("margin-left", "80%");
		jQuery('.talk2').css("opacity", "1");
		jQuery('.talk2').html("Вітаю тебе, студент! Це " + localStorage.getItem('nz') + " і ти знаходишся на" + curfac + ", я познайомлю тебе зі спеціальностями, на які ти можеш поступити.");
		jQuery('.talk2').on('click', function(){
			if(flagvnz == 1){
			jQuery('.talk2').html("На дошці ти можеш побачити різні спеціальності нашого факультету, натискай і я розповім тобі про них. В цей час на дошці з'являтиметься кнопка Обрати, обирай спеціальність, якщо вона сподобалась тобі.");
			jQuery('.profesor').css("margin-left", "15%");
			jQuery('.profesor').css("margin-top", "12%");
			jQuery('.blackboard').css("margin-left", "55%");
			jQuery('.profesor').css("transition-delay", "0s");
			jQuery('.choosespec').css("opacity", "1");
			if(curfac == " факультеті права "){
			jQuery('#spec1').html("Міжнародне право");
			jQuery('#spec2').html("Право");
			} else if(curfac == " факультеті IT-технологій "){
				jQuery('#spec1').html("Інженерія програмного забезпечення");
				jQuery('#spec2').html("Комп’ютерна інженерія");
				jQuery('#spec3').html("Кібербезпека");
			} else if(curfac == " факультеті прикладної інженерії "){
				jQuery('#spec1').html("Прикладна механіка");
				jQuery('#spec2').html("Енергетичне машинобудування");
				jQuery('#spec3').html("Електроенергетика, електротехніка та електромеханіка");
			}
			}
		});
	}
	jQuery('#spec1').on('click', function(){
		if(flagvnz == 1){
			jQuery('.talk2').html(desc1);
		}
	});
	jQuery('#spec2').on('click', function(){
		if(flagvnz == 1){
			jQuery('.talk2').html(desc2);
		}
	});
	jQuery('#spec3').on('click', function(){
		if(flagvnz == 1){
			jQuery('.talk2').html(desc3);
		}
	});
	var spec;
	jQuery('.choosespec').on('click', function(){
		if(jQuery('.talk2').html() == desc1){
			spec = jQuery('#spec1').html();
			flagvnz = 2;
			jQuery(this).css("opacity", "0");
			jQuery('.spec').css("opacity", "0");
			jQuery('.blackboard').css("margin-left", "32%");
			jQuery('.profesor').css("margin-left", "40%");
			jQuery('.profesor').css("margin-top", "17%");
			jQuery('.talk2').html("Дуже хороший вибір, на цьму ми закінчимо. Приходь завтра і ми розпочнемо твоє навчання.");
		} else if(jQuery('.talk2').html() == desc2){
			spec = jQuery('#spec2').html();
			flagvnz = 2;
			jQuery(this).css("opacity", "0");
			jQuery('.spec').css("opacity", "0");
			jQuery('.blackboard').css("margin-left", "32%");
			jQuery('.profesor').css("margin-left", "40%");
			jQuery('.profesor').css("margin-top", "17%");
			jQuery('.talk2').html("Дуже хороший вибір, на цьму ми закінчимо. Приходь завтра і ми розпочнемо твоє навчання.");
		} else if(jQuery('.talk2').html() == desc3){
			spec = jQuery('#spec3').html();
			flagvnz = 2;
			jQuery(this).css("opacity", "0");
			jQuery('.spec').css("opacity", "0");
			jQuery('.blackboard').css("margin-left", "32%");
			jQuery('.profesor').css("margin-left", "40%");
			jQuery('.profesor').css("margin-top", "17%");
			jQuery('.talk2').html("Дуже хороший вибір, на цьму ми закінчимо. Приходь завтра і ми розпочнемо твоє навчання.");
		} 
		localStorage.setItem('spec', spec);
	});
	jQuery('.talk2').on('click', function(){
		if(flagvnz == 2){
			jQuery('.end').css("margin-left", "64%");
		}
	});
});