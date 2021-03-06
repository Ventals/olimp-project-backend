jQuery('document').ready(function(){
	var documents;
	var progres;
	if(localStorage.getItem('pers_progres') > 0){
		progres = localStorage.getItem('pers_progres');
	} else {
		progres = 0;
		documents = 0;
		localStorage.setItem('docs', documents);
	}
	if(progres == 0){
	jQuery('.mesform').css("margin-left", "25%");
	jQuery('.mesform').html("<h2>Ласкаво просимо до нашого квесту!</h2> <br \/> Перш за все рекомендуємо вам ознайомитись з <h3>підказкою</h3>Вона розкаже вам про призначення всіх елементів кабінету. Коли будете готові, натисніть на <h3>комп'ютер</h3>Він розпочинає перший етап квесту.");
	jQuery('.out1').css("margin-left", "74%");
	}

	jQuery('.out').on('click', function(){
		jQuery('.form').css("margin-left", "-500%");
		jQuery(this).css("margin-left", "-500%");
		jQuery('.compscreen').css("margin-left", "-500%");
		jQuery('.noutscreen').css("margin-left", "-500%");
		jQuery('.znoscreen').css("margin-left", "-500%");
		jQuery('.bagscreen').css("margin-left", "-500%");

		jQuery('.board').css("transform", "scale(1, 1)");
		jQuery('.board').css("z-index", "40");	
		jQuery('.board').css("margin-top", "9%");
		jQuery('.board').css("font-size", "1vw");
	});

	jQuery('.out1').on('click', function(){
		jQuery('.mesform').css("margin-left", "-500%");
		jQuery(this).css("margin-left", "-500%");
	});

	jQuery('.help').on('click', function(){
		jQuery('.form').css("margin-left", "20%");
		jQuery('.out').css("margin-left", "80%");
	});
	jQuery('.bag').on('click', function(){
		if(progres >= 3){
		jQuery('.bagscreen').css("margin-left", "20%");
		jQuery('.out').css("margin-left", "49%");
		jQuery('.out').css("margin-top", "1%");
	} else {
		if(progres < 3){
			jQuery('.mesform').css("margin-left", "25%");
			jQuery('.mesform').html("<h2>Етап недоступний!</h2> <br \/> Зараз цей етап недоступний, пройдіть попередні етапи.");
			jQuery('.out1').css("margin-left", "74%");
		}
	}
	});
	jQuery('.board').on('click', function(){
		jQuery(this).css("transform", "scale(3, 3)");
		jQuery(this).css("z-index", "70");	
		jQuery(this).css("margin-top", "20%");
		jQuery(this).css("font-size", "0.6vw");
		jQuery('.out').css("margin-top", "1%");
		jQuery('.out').css("margin-left", "95%");
	});
	jQuery('.laptop').on('click', function(){
		if(progres == 1){
		progres = 2;
		localStorage.setItem('pers_progres', progres);
		jQuery('.noutscreen').css("margin-left", "15%");
		jQuery('.out').css("margin-left", "83%");
		jQuery('.out').css("margin-top", "1%");
	}  else {
		jQuery('.mesform').css("margin-left", "25%");
		jQuery('.mesform').html("<h2>Почати заново?</h2> <br \/> Ви вже пройшли цей етап, якщо бажаєте повернутись, натисніть кнопку <h3>Назад</h3> і ваш прогрес обнулиться, кожний клік по кнопці повертає на один етап.");
		jQuery('.out1').css("margin-left", "74%");
		if(progres < 1){
			jQuery('.mesform').css("margin-left", "25%");
			jQuery('.mesform').html("<h2>Етап недоступний!</h2> <br \/> Зараз цей етап недоступний, пройдіть попередні етапи.");
			jQuery('.out1').css("margin-left", "74%");
		}
	}
	});

	jQuery('.comp').on('click', function(){
		if(progres == 0){
		progres = 1;
		localStorage.setItem('pers_progres', progres);
		jQuery('.compscreen').css("margin-left", "15%");
		jQuery('.out').css("margin-left", "83%");
		jQuery('.out').css("margin-top", "1%");
		jQuery('.mesform').css("margin-left", "25%");
		jQuery('.mesform').html("<h2>Перший етап</h2> <br \/> Зараз ви маєте обрати собі майбутню професію, будьте уважними!");
		jQuery('.out1').css("margin-left", "74%");
	} else {
		jQuery('.mesform').css("margin-left", "25%");
		jQuery('.mesform').html("<h2>Почати заново?</h2> <br \/> Ви вже пройшли цей етап, якщо бажаєте повернутись, натисніть кнопку <h3>Назад</h3> і ваш прогрес обнулиться, кожний клік по кнопці повертає на один етап.");
		jQuery('.out1').css("margin-left", "74%");
	}
	});

	jQuery('.zno').on('click', function(){
		if(progres == 2){
		localStorage.setItem('pers_progres', progres);
		jQuery('.znoscreen').css("margin-left", "15%");
		jQuery('.out').css("margin-left", "83%");
		jQuery('.out').css("margin-top", "1%");
		jQuery('.mesform').css("margin-left", "25%");
		jQuery('.mesform').html("<h2>Іспити ЗНО</h2> <br \/> Натисніть на відповідну книжку, щоб розпочати тестування, коли ви пройдете всі потрібні екзамени, натисніть на <h4>Розрахунок конкурсного балу</h4> для того щоб підрахувати ваш бал для вступу в навчальний заклад. Потрібні екзамени для вашої професії вказані на дошці.");
		jQuery('.out1').css("margin-left", "74%");
	}  else {
		if(progres < 2){
			jQuery('.mesform').css("margin-left", "25%");
			jQuery('.mesform').html("<h2>Етап недоступний!</h2> <br \/> Зараз цей етап недоступний, пройдіть попередні етапи.");
			jQuery('.out1').css("margin-left", "74%");
		}
	}
	});
	jQuery('#next1').on('click', function(){
		jQuery(this).css("margin-left", "-500%");
		jQuery('#next2').css("margin-left", "39%");
		jQuery('.prof1').css("margin-top", "-500%");
		jQuery('.prof1').css("opacity", "0");
		jQuery('.prof1').css("transform", "scale(0.1, 0.1)");
		jQuery('.prof2').css("margin-top", "0");
		jQuery('.prof2').css("opacity", "1");
		jQuery('.prof2').css("transform", "scale(1, 1)");
	});

	jQuery('#next2').on('click', function(){
		jQuery(this).css("margin-left", "-500%");
		jQuery('#next3').css("margin-left", "39%");
		jQuery('.prof2').css("margin-top", "-500%");
		jQuery('.prof2').css("opacity", "0");
		jQuery('.prof2').css("transform", "scale(0.1, 0.1)");
		jQuery('.prof3').css("margin-top", "0");
		jQuery('.prof3').css("opacity", "1");
		jQuery('.prof3').css("transform", "scale(1, 1)");
	});

	jQuery('#next3').on('click', function(){
		jQuery(this).css("margin-left", "-500%");
		jQuery('#next1').css("margin-left", "39%");
		jQuery('.prof3').css("margin-top", "-500%");
		jQuery('.prof3').css("opacity", "0");
		jQuery('.prof3').css("transform", "scale(0.1, 0.1)");
		jQuery('.prof1').css("margin-top", "0");
		jQuery('.prof1').css("opacity", "1");
		jQuery('.prof1').css("transform", "scale(1, 1)");
	});

	jQuery('.next').hover(function(){
		jQuery(this).css("cursor", "pointer");
		jQuery(this).css("background-color", "#00CED1");
	},
	function(){
		jQuery(this).css("background-color", "#66CDAA");
	});

	if(localStorage.getItem('docs') == 4 && progres == 3){
		jQuery('#quest1').html("<s>Квест-1. Збір документів</s> (завершено)");
		progres = 4;
		localStorage.setItem('pers_progres', progres);
		jQuery('.mom').css("margin-left", "40%");
		jQuery('.talk').css("margin-left", "50%");
		jQuery('.mom').css("transition-delay", "1s");
		jQuery('.talk').html("Що ж залишилось тільки зібрати документи... Ого ти вже все зробив? Молодець!");
		jQuery('.talk').on('click', function(){
			jQuery(this).css("margin-left", "-500%");
			jQuery('.dad').css("margin-left", "50%");
			jQuery('.talk1').css("margin-left", "40%");
			jQuery('.talk1').css("transition-delay", "2s");
			jQuery('.talk1').html("Можна йти поступати, ми пишаємось тобою, ти все зробив дуже добре. Удачі тобі!");
			jQuery('.talk1').css("opacity", "1");
		});
		jQuery('.talk1').on('click', function(){
			jQuery('#tovnz').css("margin-left", "68%");
		});
	}

	var choise;
	if(choise != ""){
		choise = localStorage.getItem('prof');
	} else {
		choise = "";
	}
	jQuery('.prof').html(choise);
	if(localStorage.getItem('bal') != 0 && localStorage.getItem('docs') == 0){
		jQuery('.cbal').html("Ваш конкурсний бал: " + localStorage.getItem('bal'));
		progres = 3;
		localStorage.setItem('pers_progres', progres);
}
	if(progres == 3){
		jQuery('.mesform').css("margin-left", "25%");
		jQuery('.mesform').html("<h2>Четвертий етап</h2> <br \/> Вітаємо, ви готові до вступу! Ви обрали ВНЗ та професію, здали ЗНО і розрахували свій конкурсний бал. Залишилось зібрати потрібні документи, для цього натисніть на <h3>Портфель</h3> й оберіть потрібний квест.");
		jQuery('.out1').css("margin-left", "74%");
	}
	var flag1 = "";
	jQuery('#choose1').on('click', function(){
		choise = "Ти збираєшся стати юристом" + "\nЗНО для здачі:" + "\nІсторія України, Українська мова, Англійська мова або Математика";
		localStorage.setItem('prof', choise);
		var flag1 = "1";
		jQuery('.prof').html(choise);
		jQuery('.out').css("margin-left", "-500%");
		jQuery('.compscreen').css("margin-left", "-500%");
		if(flag1 == "1"){
		jQuery('.mom').css("margin-left", "10%");
		jQuery('.talk').css("margin-left", "80%");
		jQuery('.mom').css("transition-delay", "3s");
		jQuery('.talk').html("Привіт, я бачу ти вже обрав собі професію, молодець, тато щось хотів тобі сказати <br\/> (натисніть щоб продовжити)");
		jQuery('.talk').on('click', function(){
		jQuery(this).css("margin-left", "-500%");
		jQuery('.mom').css("margin-left", "-500%");
		jQuery('.mom').css("transition-delay", "1s");
		jQuery('.dad').css("margin-left", "50%");
		jQuery('.talk1').css("margin-left", "40%");
		jQuery('.talk1').css("transition-delay", "2s");
		jQuery('.talk1').html("Так, я бачу ти вже визначився, добре, але це ще не все, ти маєш обрати ВНЗ, у якому будеш навчатись, подивись на своєму ноутбуці.");
		jQuery('.talk1').css("opacity", "1");
	});
	jQuery('.talk1').on('click', function(){
		jQuery(this).css("margin-left", "-500%");
		jQuery('.dad').css("margin-left", "-500%");
		jQuery('.mesform').css("margin-left", "25%");
		jQuery('.mesform').html("<h2>Другий етап</h2> <br \/> Зараз ви маєте зайти до свого ноутбуку і обрати ВНЗ, у якому будете навчатись, на карті України, ВНЗ відібрані за вашою професією, удачі.");
		jQuery('.out1').css("margin-left", "74%");
	});
	} 
	});
	jQuery('#choose2').on('click', function(){
		choise = "Ти збираєшся стати IT-фахівцем" + "\nЗНО для здачі:" + "\nМатематика, Українська мова, Англійська мова або Фізика";;
		localStorage.setItem('prof', choise);
		var flag1 = "1";
		jQuery('.prof').html(choise);
		jQuery('.out').css("margin-left", "-500%");
		jQuery('.compscreen').css("margin-left", "-500%");
		if(flag1 == "1"){
		jQuery('.mom').css("margin-left", "10%");
		jQuery('.talk').css("margin-left", "80%");
		jQuery('.talk').html("Привіт, я бачу ти вже обрав собі професію, молодець, тато щось хотів тобі сказати <br\/> (натисніть щоб продовжити)");
		jQuery('.talk').on('click', function(){
		jQuery(this).css("margin-left", "-500%");
		jQuery('.mom').css("margin-left", "-500%");
		jQuery('.mom').css("transition-delay", "1s");
		jQuery('.dad').css("margin-left", "50%");
		jQuery('.talk1').css("margin-left", "40%");
		jQuery('.talk1').css("transition-delay", "2s");
		jQuery('.talk1').html("Так, я бачу ти вже визначився, добре, але це ще не все, ти маєш обрати ВНЗ, у якому будеш навчатись, подивись на своєму ноутбуці.");
		jQuery('.talk1').css("opacity", "1");
	});
	jQuery('.talk1').on('click', function(){
		jQuery(this).css("margin-left", "-500%");
		jQuery('.dad').css("margin-left", "-500%");
		jQuery('.mesform').css("margin-left", "25%");
		jQuery('.mesform').html("<h2>Другий етап</h2> <br \/> Зараз ви маєте зайти до свого ноутбуку і обрати ВНЗ, у якому будете навчатись, на карті України, скористайтесь сайтами ВНЗ щоб упевнитись в наявності потрібного вам факультету, удачі.");
		jQuery('.out1').css("margin-left", "74%");
	});
	} 
	});
	jQuery('#choose3').on('click', function(){
		choise = "Ти збираєшся стати інженером" + "\nЗНО для здачі:" + "\nМатематика, Українська мова, Англійська мова або Фізика";;
		localStorage.setItem('prof', choise);
		var flag1 = "1";
		jQuery('.prof').html(choise);
		jQuery('.out').css("margin-left", "-500%");
		jQuery('.compscreen').css("margin-left", "-500%");
		if(flag1 == "1"){
		jQuery('.mom').css("margin-left", "10%");
		jQuery('.talk').css("margin-left", "80%");
		jQuery('.talk').html("Привіт, я бачу ти вже обрав собі професію, молодець, тато щось хотів тобі сказати <br\/> (натисніть щоб продовжити)");
		jQuery('.talk').on('click', function(){
		jQuery(this).css("margin-left", "-500%");
		jQuery('.mom').css("margin-left", "-500%");
		jQuery('.mom').css("transition-delay", "1s");
		jQuery('.dad').css("margin-left", "50%");
		jQuery('.talk1').css("margin-left", "40%");
		jQuery('.talk1').css("transition-delay", "2s");
		jQuery('.talk1').html("Так, я бачу ти вже визначився, добре, але це ще не все, ти маєш обрати ВНЗ, у якому будеш навчатись, подивись на своєму ноутбуці.");
		jQuery('.talk1').css("opacity", "1");
	});
	jQuery('.talk1').on('click', function(){
		jQuery(this).css("margin-left", "-500%");
		jQuery('.dad').css("margin-left", "-500%");
		jQuery('.mesform').css("margin-left", "25%");
		jQuery('.mesform').html("<h2>Другий етап</h2> <br \/> Зараз ви маєте зайти до свого ноутбуку і обрати ВНЗ, у якому будете навчатись, на карті України, скористайтеся сайтами ВНЗ щоб упевнитись в наявності потрібного вам факультету, удачі.");
		jQuery('.out1').css("margin-left", "74%");
	});
	} 
	});
	var flag2 = "";
	var vnz;
	if(localStorage.getItem('nz') != ""){
		vnz = localStorage.getItem('nz');
		jQuery('.vnz').html("Ви обрали " + vnz);
	} else {
		vnz = "";
		jQuery('.vnz').html("");
	}
	jQuery('#choiseadd').on('click', function(){
		flag2 = "1";
		jQuery('.noutscreen').css("margin-left", "-500%");
		jQuery('.out').css("margin-left", "-500%");
		jQuery('.mesform').css("margin-left", "25%");
		jQuery('.mesform').html("<h2>Третій етап</h2> <br \/> Ви обрали заклад, у якому будете навчатись, час переходити до наступного етапу, здачі екзаменів.");
		jQuery('.out1').css("margin-left", "74%");
		vnz = jQuery('#name').html();
		localStorage.setItem('nz', vnz);
		jQuery('.vnz').html("Ви обрали " + vnz);
		if(flag2 == "1"){
		jQuery('.mom').css("margin-left", "40%");
		jQuery('.talk').css("margin-left", "50%");
		jQuery('.mom').css("transition-delay", "3s");
		jQuery('.talk').html("Прийшов час здавати ЗНО, повірити не можу, 11 років промайнули мов одна мить, удачі!");
		jQuery('.talk').on('click', function(){
			jQuery(this).css("margin-left", "-500%");
			jQuery('.mom').css("margin-left", "-500%");
			jQuery('.mom').css("transition-delay", "0s");
			jQuery('.dad').css("margin-left", "-500%");
			jQuery('.mesform').css("margin-left", "25%");
			jQuery('.mesform').html("<h2>ЗНО</h2> <br \/> Для того, щоб здати ЗНО відкрийте збірник тестів у себе на полиці.");
			jQuery('.out1').css("margin-left", "74%");
		});
	}
	});
	if(progres == 5){
		jQuery('.mom').css("margin-left", "40%");
		jQuery('.talk').css("margin-left", "50%");
		jQuery('.mom').css("transition-delay", "1s");
		jQuery('.talk').html("О, ти вже тут, повірити не можу, тобі все вдалося, ти вже такий самостійний!");
		jQuery('.talk').on('click', function(){
			jQuery(this).css("margin-left", "-500%");
			jQuery('.dad').css("margin-left", "50%");
			jQuery('.talk1').css("margin-left", "40%");
			jQuery('.talk1').css("transition-delay", "2s");
			jQuery('.talk1').html("Так, ти тепер спеціаліст в галузі\n" + localStorage.getItem('spec') + " Ми пишаємось тобою, я впевнений у тебе все вийде і ти досягнеш великих успіхів!");
			jQuery('.talk1').css("opacity", "1");
		});
		jQuery('.talk1').on('click', function(){
			jQuery('.mesform').css("margin-left", "25%");
			jQuery('.mesform').html("<h2>Кінець!</h2> <br \/> <b>Ви поступили до:</b> " + vnz + "<br \/> <b>Ваша спеціальність:</b> " + localStorage.getItem('spec') + "<br \/> <b>Ваш конкурсний бал:</b> " + localStorage.getItem('bal') + "<br \/> <br \/> Ви зробили все як треба, і у вас є великі шанси поступити туди, куди ви бажаєте.");
			jQuery('.mesform').css("height", "30vw");
			jQuery('.mesform').css("z-index", "80");
			jQuery('.renew').css("margin-left", "50%");
		});
	}
	    jQuery('.renew').on('click', function(){
	    	if(progres == 5){
	    	progres = 0;
	    	localStorage.setItem('pers_progres', progres);
	    	choise = "";
	    	localStorage.setItem('prof', choise);
	    	vnz = "";
	    	localStorage.setItem('nz', vnz);
	    	res = 0;
	    	localStorage.setItem('bal', res);
	    	documents = 0;
			localStorage.setItem('docs', documents);
		}
	    });
		jQuery('#back').on('click', function(){
		if(progres == 4){
			documents = 0;
			localStorage.setItem('docs', documents);
		}
		if(progres == 3){
			var res = 0;
			localStorage.setItem('bal', res);
			jQuery('.cbal').html("");
		}
		if(progres == 2){
			vnz = "";
			localStorage.setItem('nz', vnz);
			jQuery('.vnz').html(vnz);
		}
		if(progres == 1){
			choise = "";
			localStorage.setItem('prof', choise);
			jQuery('.prof').html(choise);
		}
		if(localStorage.getItem('pers_progres') >= 0){
		progres = progres - 1;
		localStorage.setItem('pers_progres', progres);
	}
	});
});
