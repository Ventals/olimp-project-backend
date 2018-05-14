function VNZSelected() {
				
			}
			function backToMap() {
				document.getElementById("dialog").hidden = true;
				document.getElementById("map").hidden = false;
				document.getElementById("title").textContent = "Оберіть ВНЗ";
			}	

			
			function initMap() {
				
				
				var VNZes = [
					{
						name: "«Київський політехнічний інститут імені Ігоря Сікорського»",
						description: "На сьогодні це найбільший університет України за кількістю студентів з широким спектром спеціальностей і спеціалізацій для підготовки фахівців з технічних і гуманітарних наук. В університеті працюють 19 факультетів, 9 навчально-наукових інститутів, декілька науково-дослідних інститутів і наукових центрів. Будівлі інститутів і факультетів КПІ ім. Ігоря Сікорського та університетські гуртожитки розкинулися на площі близько 120 гектарів. Це справжнє місто в місті. Університет має власний Центр культури та мистецтв, сучасний спортивний комплекс, поліклініку. Його науково-технічна бібліотека – одна з кращих у країні. КПІ входить до 4% кращих університетів світу за версією міжнародних рейтингів QS і Webometrics",
						coord: {
							lat: 50.4477765,
							lng: 30.4551764
						},
						cite: "http://kpi.ua/kpi_about",
						imageSrc: "images/kpi.jpg",
						id: 1
					},
					{
						name: "Київський національний університет імені Тараса Шевченка",
						description: "Київський національний університет імені Тараса Шевченка сьогодні - це класичний університет дослідницького типу, провідний сучаснийнауково-навчальний центр України. Підготовка та перепідготовка фахівцівздійснюється за 14 спеціальностями ОКР “Молодший спеціаліст”, 55 напрямамиОКР “Бакалавр”, 49 спеціальностями ОКР “Спеціаліст” та 98 спеціальностями ОКР “МагістрДля проживання студентів створено студентське містечко з комфортабельнимигуртожитками, комп'ютерними клубами, спортивним комплексом, їдальнями, кафе,танцювальними залами. Для оздоровлення університет утримуєсанаторій-профілакторій, оздоровчо-спортивний комплекс на березі річки Дніпро.",
						coord: {
							lat: 50.4419711,
							lng: 30.5109946
						},
						cite: "http://www.univ.kiev.ua/ua/geninf/about/",
						imageSrc: "images/knu.jpg",
						id: 2
					},
					{
						name: "Чернівецький національний університет ім. Юрія Федьковича",
						description: "Чернівецький національний університет імені Юрія Федьковича — один із найстаріших класичних університетів в Україні. Сьогодні в Університеті функціонує 16 факультетів: географічний, економічний,інженерно-технічний, іноземних мов, історії, політології та міжнародних відносин,комп'ютерних наук, образотворчого і декоративно-прикладного мистецтва, педагогіки,психології та соціальної роботи, прикладної математики, фізичний, філологічний,філософсько-теологічний, факультет біології, екології та біотехнологій, факультет фізичної культури та здоров'я людини, хімічний, юридичний і загально-університетська кафедра архітектури та будівництва.Університет має 14 навчальних корпусів, 7 гуртожитків, спорткомплекс, дослідне господарство, ботанічний сад, зоологічний, геологічний та етнографічниймузеї, видавництво «Рута», бібліотеку з книжковим фондом майже 3 млн. примірників.",
						coord: {
							lat: 48.296559,
							lng: 25.9245039
						},
						cite: "http://www.chnu.edu.ua/index.php?page=ua/zaginf/01%20pro_univer",
						imageSrc: "images/cnu.jpg",
						id: 3
					},
					{
						name: "Національний університет «Одеська юридична академія»",
						description: "Один з найкращих ВНЗ юридичного профілю. В університеті  діє магістратура державної служби, аспірантура та докторантура. Всі бажаючі студенти мають можливість з 1 по 5 курс відвідувати лекції з правових дисциплін англійською, німецькою та французькою мовами. НУ «ОЮА» є членом Асоціації європейських університетів і Європейської Асоціації публічного права. Університет приймає участь в реалізації проектів програми TEMPUS, що сприяє поширенню та поглибленню знань з європейської інтеграції, права ЄС та міжнародного права. Щорічно сотні наших студентів, аспірантів і викладачів продовжують навчання або проходять професійне стажування в кращих університетах світу, урядових установах зарубіжних країн.",
						coord: {
							lat: 46.4409899,
							lng: 30.7453268
						},
						cite: "http://onua.edu.ua/index.php?option=com_content&view=article&id=5258&Itemid=996&lang=uk",
						imageSrc: "images/odesa.jpg",
						id: 4
					},
					{
						name: "Державний Університет Телекомунікацій",
						description: "ДУТ є провідним багатопрофільним вищим навчальним закладом освіти в галузі зв'язку та сфері інформатизації. Він має IV рівень акредитації, здійснює підготовку фахівців з вищою освітою з широкого спектру технічних та інших напрямків за освітньо-професійними програмами усіх рівнів, проводить фундаментальні та прикладні наукові дослідження, має розвинену інфраструктуру наукових і навчально-наукових підрозділів і установ, високий рівень кадрового і матеріально-технічного забезпечення. Розширюється міжнародне співробітництво з зарубіжними фірмами та навчальними закладами Європи та країнами СНД. Випускники ДУТ поєднують фундаментальні наукові знання, професійні навички та громадську зрілість і забезпечують галузь професійними фахівцями.",
						coord: {
							lat: 50.4287447,
							lng: 30.476014
						},
						cite: "http://www.dut.edu.ua/ru/",
						imageSrc: "images/dut.jpg",
						id: 5
					},
					{
						name: "Харківський національний університет імені Василя Назаровича Каразіна",
						description: "Харківський національний університет імені Василя Назаровича Каразіна — університет у місті Харків. З 2009 до 2014 року мав статус автономного дослідницького університету[1]. Заснований 17 листопада 1804 року з ініціативи видатного просвітника Василя Каразіна, а урочисто відкритий 29 січня (17) 1805 року. Після Львівського, найстаріший університет України. Згідно з рейтингом провідних університетів світу «Webometrics» 2016 року, Харківський університет займав третю позицію серед університетів України та 1694 місце у світі[2]. З університетом пов'язані навчання та діяльність щонайменше двох нобелівських лауреатів, фізика Лева Ландау та біолога Іллі Мечникова.",
						coord: {
							lat: 50.0061737,
							lng: 36.2272678
						},
						cite: "http://www.univer.kharkov.ua/",
						imageSrc: "images/kharkov.jpg",
						id: 6
					}
				];
				
				
				var center = {
					lat: 49.0275,
					lng: 31.482778
				};
				var map = new google.maps.Map(document.getElementById('map'), {
					zoom: 6.5,
					center,
					minZoom: 6.5,
					maxZoom: 10,
					streetViewControl: false,
					mapTypeControl: false
				});
				var ua = new google.maps.LatLngBounds({
					lat: 53,
					lng: 22
				}, {
					lat: 44,
					lng: 41
				});
				map.addListener("center_changed", function() {
					map.panToBounds(ua);
					map.setZoom(6.5);
				});
				for (var i = 0; i < VNZes.length; i++) {
					let marker = new google.maps.Marker({
						position: VNZes[i].coord,
						map: map,
						title: VNZes[i].name
					});
						marker.VNZName = VNZes[i].name;
						marker.VNZDescription = VNZes[i].description;
						marker.VNZImageSrc = VNZes[i].imageSrc;
						marker.VNZCite = VNZes[i].cite;
						marker.VNZID = VNZes[i].id;
						marker.addListener("click", function() {
			document.getElementById("name").value = this.VNZName;
			document.getElementById("image").setAttribute("src", this.VNZImageSrc);
			document.getElementById("description").value = this.VNZDescription;
			document.getElementById("dialog").hidden = false;
			document.getElementById("VNZCiteButton").href = this.VNZCite;
			document.getElementById("map").hidden = true;
			document.getElementById("title").textContent = "Ви вибрали:";
		});
	}
}