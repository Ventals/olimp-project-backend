<<?php 
	require __DIR__ . '/../scripts/connect_DB.php';
	


 ?>

<!DOCTYPE HTML>
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="stylecab.css">
		<script type="text/javascript" src="js/jquery-3.3.1.slim.js"></script>
		<script type="text/javascript" src = "js/cabinetScript.js"> </script>
		<meta charset = "utf-8">
		<title></title>
	</head>
	<body>
		

		<ul class="out">
									
			</ul>
			<ul class="form">
				<li>
					<img src="images/comp.png">	
					<h2>Комп'ютер</h2>
					На комп'ютері ви зможете побачити карту квесту...
				</li>
				<li>
					<img src="images/nout.png">
					<h2>Ноутбук</h2>
					На ноутбуці ви знайдете...
				</li>
				<li>
					<img src="images/board.jpg">
					<h2>Дошка</h2>
					Дошка показує вам...
				</li>
				<li>
					<img src="images/bag.png">
					<h2>Портфель</h2>
					Портфель потрібен для того щоб...
				</li>
				<li>
					<img src="images/zno.png">
					<h2>Збірник ЗНО</h2>
					В збірнику тестів ЗНО ви зможете підготуватись до здачі...
				</li>
			</ul>
			<ul class="compscreen">
				<ul class="next" id="next1">Наступна професія</ul>
				<ul class="next" id="next2">Наступна професія</ul>
				<ul class="next" id="next3">Наступна професія</ul>
				<ul class="slider">
					<li class="prof1">
						<img src="images/prof1.jpg">
						<p>
							Юрист - це фахівець в галузі права. Він знає закони і правові норми, вміє їх використовувати і здатний навчати їх основам інших. Це експерт в області юриспруденції, який може займати будь-яку правову посаду, від адвоката до судді. Для цього необхідно отримати вищу юридичну освіту.
						</p>
						<ul class="menu">
						<ul class="choose" id="choose1">
							Обрати професію
						</ul>
					</ul>
					</li>
					<li class="prof2">
						<img src="images/prof2.jpg">
						<p>
							Програміст - це фахівець, який займається розробкою програмного забезпечення для персональних, вбудованих, промислових і інших різновидів комп'ютерів, тобто програмуванням. Прикладний - це фахівець, який здійснює розробку і налагодження програм для вирішення різних завдань.
						</p>
						<ul class="menu">
						<ul class="choose" id="choose2">
							Обрати професію
						</ul>
					</ul>
					</li>
					<li class="prof3">
						<img src="images/prof3.jpg" class="bigimg">
						<p>
							Механік - кваліфікований робітник, який має професійну освіту і зайнятий обслуговуванням, ремонтом технічних засобів (необов'язково пов'язаних з механізмами), наприклад: автомеханік, авіамеханік, електромеханік, радіомеханік, механік по ремонту побутової техніки і т. Д.
						</p>
						<ul class="menu">
						<ul class="choose" id="choose3">
							Обрати професію
						</ul>
					</ul>
					</li>
				</ul>
			

			</ul>
			<div class="noutscreen">
				<p id = "title"> Оберіть ВНЗ </p>
				<div id = "map"> </div>
				<div hidden id = "dialog">
					<p> <output id = "name"> </output> </p> 
					<img id = "image">
					<p> <output id = "description"> </output> </p>
					<button onclick = "VNZSelected()"> Обрати цей ВНЗ </button>
					<button onclick = "backToMap()"> Повенутися до мапи </button>
				</div>
				<script
					src = "js/MapInCabinetScript.js"> </script>
				<script async defer
					src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDhB6Pq1U-G2R70VstNVDnESvSCePbjQd0&callback=initMap"> </script>
			</div>


			<div class="help">
			Підказка
		</div>
		<div class = "room">
			<div>
			<p class = "title"> Кімната </p>
			<a href="StartPageRaedy.html">
			<div class="logo">
		</div>
	</a>
	<a href="StartPageRaedy.html">
		<div class="exit">

		</div>
	</a>
		</div>
			<div class="board" id = "table">

		</div>

			<div class="comp" id = "computer">
		</div>

			<div class="laptop" id = "laptop">
		</div>

			<div class="zno" id = "ZNO">
		</div>

			<div class="bag" id = "briefcase">
		</div>

		</div>
		<a class="link" href = "calculator.html">
			Розрахунок конкурсного балу
			</a>
	</body>
</html>