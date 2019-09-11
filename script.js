
var app = angular.module("resultsheet", []);

// app.filter("", function()
// {
// 	return function()
// 	{
// 	}
// });

app.controller("baseController", function ($scope) {

	/** 
	* 	Adding sortTerm property to the scope object
	*	and binding it for the sake of to 
	*	track the searching (term)
	*/
	$scope.sortTerm = '';

	$scope.students =
		[
			{
				fname: "Ehsanullah",
				lname: "EbrahimKhil",
				fathername: "Yar Mohammad",
				gender: 1,
				total: 1526,

			},
			{
				fname: "Ahmad shah",
				lname: "Miskinyar",
				fathername: "Boman ali",
				gender: 1,
				total: 151,

			},
			{
				fname: "Ahmad Zia",
				lname: "Hazrat Shah",
				fathername: "Yousofi",
				gender: 1,
				total: 1789,

			},
			{
				fname: "Ahmad Zia",
				lname: "Arghandiwal",
				fathername: "Abdul Wakil",
				gender: 1,
				total: 1144,

			},
			{
				fname: "Omolbanin",
				lname: "Hussainzada",
				fathername: "Mohammad Zahir",
				gender: 0,
				total: 0,

			},
			{
				fname: "Amam Reza",
				lname: "Nazari",
				fathername: "Salah Mohammd",
				gender: 1,
				total: 1109,

			},
			{
				fname: "Aemal",
				lname: "Shirzai",
				fathername: "Basir Ahmad",
				gender: 1,
				total: 1662,

			},
			{
				fname: "Basira",
				lname: "Latifi",
				fathername: "Abdul Latif",
				gender: 0,
				total: 897,

			},
			{
				fname: "Bilal",
				lname: "Makhdomzada",
				fathername: "Saifullah",
				gender: 1,
				total: 664,

			},
			{
				fname: "Bihrozullah",
				lname: "",
				fathername: "Nasroudin",
				gender: 1,
				total: 500,

			},

			{
				fname: "Bibi Fatima",
				lname: "Frahmand",
				fathername: "Emadaul Haq",
				gender: 0,
				total: 1593,

			},
			{
				fname: "Taqi",
				lname: "Rafaat",
				fathername: "Zakaria",
				gender: 1,
				total: 993,

			},
			{
				fname: "Tamana",
				lname: "Qasimy",
				fathername: "Hassan Jan",
				gender: 0,
				total: 1146,

			},
			{
				fname: "Hurmatullah",
				lname: "karimi",
				fathername: "AbdulHamid",
				gender: 1,
				total: 1540,

			},
			{
				fname: "Hashmatullah",
				lname: "Hakimi",
				fathername: "Hakim Jan",
				gender: 1,
				total: 1262,

			},
			{
				fname: "Hashmatullah",
				lname: "Asady",
				fathername: "Rahimullah",
				gender: 1,
				total: 1168,

			},
			{
				fname: "Hamidullah",
				lname: "Hamid",
				fathername: "Mohammad Ali",
				gender: 1,
				total: 892,

			},
			{
				fname: "Hamidullah",
				lname: "Faramarz",
				fathername: "Mohammad Kabir Khan",
				gender: 1,
				total: 0,

			},
			{
				fname: "Horia",
				lname: "Bhram",
				fathername: "Ebrahim",
				gender: 0,
				total: 1010,

			},
			{
				fname: "Khatera",
				lname: "",
				fathername: "Abdul Ahad",
				gender: 0,
				total: 534,

			},

			{
				fname: "Khalid",
				lname: "Ibrahimi",
				fathername: "Shamahmood",
				gender: 1,
				total: 1066,

			},
			{
				fname: "Dawood",
				lname: "Faqiryar",
				fathername: "Ebrahim",
				gender: 1,
				total: 1336,

			},
			{
				fname: "Razeq",
				lname: "",
				fathername: "Nisar Ali",
				gender: 1,
				total: 247,

			},
			{
				fname: "Ramin",
				lname: "Faqiri",
				fathername: "Amir Mohammad",
				gender: 1,
				total: 1000,

			},
			{
				fname: "Reza",
				lname: "Muradi",
				fathername: "Mohammad",
				gender: 1,
				total: 1348,

			},
			{
				fname: "Reza",
				lname: "Mohammady",
				fathername: "Mohammad Jan",
				gender: 1,
				total: 1444,

			},
			{
				fname: "Ramazan",
				lname: "Yousufi",
				fathername: "Mohammad Reza",
				gender: 1,
				total: 1196,

			},
			{
				fname: "Rozi Gul",
				lname: "",
				fathername: "Ziarat Gul",
				gender: 1,
				total: 528,

			},
			{
				fname: "Saima",
				lname: "Rahimi",
				fathername: "Merajuden",
				gender: 0,
				total: 1602,

			},
			{
				fname: "Sitara",
				lname: "Haidari",
				fathername: "Hussain Ali",
				gender: 0,
				total: 1404,

			},
			{
				fname: "Sakina",
				lname: "Samimi",
				fathername: "Hassan bakhsh",
				gender: 0,
				total: 995,

			},
			{
				fname: "Sakina",
				lname: "Ahmadi",
				fathername: "Mohammad Baqir",
				gender: 1,
				total: 1556,

			},
			{
				fname: "Sultan Mahmood",
				lname: "Ghafari",
				fathername: "Khwaja Ahmad",
				gender: 1,
				total: 1624,

			},
			{
				fname: "Sayyed Zahid",
				lname: "",
				fathername: "Sayyed Yahya",
				gender: 1,
				total: 0,

			},
			{
				fname: "Sayed Zaid",
				lname: "Jayyed",
				fathername: "Sayed Baqer",
				gender: 1,
				total: 944,

			},
			{
				fname: "Sayed Murtaza",
				lname: "Hossainy",
				fathername: "Sayed Aziz",
				gender: 1,
				total: 1241,

			},
			{
				fname: "Shahgul",
				lname: "Ahmadi",
				fathername: "Ayub",
				gender: 0,
				total: 1291,

			},
			{
				fname: "Shabnam",
				lname: "Rasuli",
				fathername: "Abdul Salam",
				gender: 0,
				total: 683,

			},
			{
				fname: "Shugofa",
				lname: "Akbari",
				fathername: "Mohammad Akbar",
				gender: 0,
				total: 1300,

			},
			{
				fname: "Shamsia",
				lname: "Shafeie",
				fathername: "Khudadad",
				gender: 0,
				total: 1312,

			},
			{
				fname: "saleh",
				lname: "",
				fathername: "Mohammad Ali",
				gender: 1,
				total: 841,

			},
			{
				fname: "saleha",
				lname: "",
				fathername: "Nazir Hussain",
				gender: 1,
				total: 1109,

			},
			{
				fname: "Sediqa",
				lname: "Amiri",
				fathername: "Ali Jan",
				gender: 0,
				total: 1363,

			},
			{
				fname: "Abdul Khalil",
				lname: "Khadimi",
				fathername: "Zamin",
				gender: 1,
				total: 1451,

			},
			{
				fname: "Abdulsattar",
				lname: "Seerat",
				fathername: "Allah Bomani",
				gender: 1,
				total: 944,

			},
			{
				fname: "Abdullah",
				lname: "Mohammadi",
				fathername: "Mohammad Eisa",
				gender: 1,
				total: 1530,

			},
			{
				fname: "Aqeel",
				lname: "Faizi",
				fathername: "Nik Qadam",
				gender: 1,
				total: 1067,

			},
			{
				fname: "Ali Kawa",
				lname: "Karar",
				fathername: "Mohammad Jawid",
				gender: 1,
				total: 1180,

			},
			{
				fname: "Ewaz Ali",
				lname: "",
				fathername: "Eid Mohammad",
				gender: 1,
				total: 1309,

			},
			{
				fname: "Fatimah",
				lname: "Mosawi",
				fathername: "Sayed Mohammad Younas",
				gender: 0,
				total: 1214,

			},
			{
				fname: "Fatima",
				lname: "Anwary",
				fathername: "Hizbullah",
				gender: 0,
				total: 930,

			},
			{
				fname: "Farhat",
				lname: "Rahmani",
				fathername: "Saif Rahman",
				gender: 0,
				total: 1082,

			},
			{
				fname: "Faryar",
				lname: "Jawadi",
				fathername: "Mohammad Zia",
				gender: 0,
				total: 1416,

			},
			{
				fname: "Fawzia",
				lname: "Faizy",
				fathername: "Ali Mohammad",
				gender: 0,
				total: 0,

			},
			{
				fname: "Faiz Mohammad",
				lname: "Ataii",
				fathername: "Eid Mohammad",
				gender: 1,
				total: 1045,

			},
			{
				fname: "Qismat",
				lname: "Malik",
				fathername: "Sayed Malouk",
				gender: 1,
				total: 1023,

			},
			{
				fname: "Lema",
				lname: "Ahmadi",
				fathername: "Gharib Jan",
				gender: 0,
				total: 1379,

			},
			{
				fname: "Mojtaba",
				lname: "Naemi",
				fathername: "Habiblulla",
				gender: 1,
				total: 1266,

			},
			{
				fname: "Mojeeb Rahman",
				lname: "Rhmani",
				fathername: "Mohammad Tahir",
				gender: 1,
				total: 1569,

			},
			{
				fname: "Mahboobullah",
				lname: "",
				fathername: "Fazl Ahmad",
				gender: 1,
				total: 560,

			},
			{
				fname: "Mohammad Ishaq",
				lname: "Amiri",
				fathername: "Mohammad Dawood",
				gender: 1,
				total: 769,

			},
			{
				fname: "Mohammad Ashraf",
				lname: "Omid",
				fathername: "Jalil",
				gender: 1,
				total: 0,

			},
			{
				fname: "Mohammad Asif",
				lname: "Haidari",
				fathername: "Awaz",
				gender: 1,
				total: 980,

			},
			{
				fname: "Mohammad Baqer",
				lname: "Haidari",
				fathername: "Awaz",
				gender: 1,
				total: 711,

			},
			{
				fname: "Mohammad Hussain",
				lname: "Ahmadi",
				fathername: "Ahmad Ali",
				gender: 1,
				total: 1240,

			},
			{
				fname: "Mohammad Zaman",
				lname: "Khalili",
				fathername: "Mohammad Husain",
				gender: 1,
				total: 932,

			},
			{
				fname: "Mohammad Saber",
				lname: "Seerat",
				fathername: "Mohammad Naser",
				gender: 1,
				total: 1223,

			},
			{
				fname: "Mohammad Azim",
				lname: "Sakhizadah",
				fathername: "Ali Ahmad",
				gender: 1,
				total: 1499,

			},
			{
				fname: "Mohammad Murtaza",
				lname: "",
				fathername: "Mohammad Hafiz",
				gender: 1,
				total: 1416,

			},
			{
				fname: "Murtaza",
				lname: "Amini",
				fathername: "Safarali",
				gender: 1,
				total: 1468,

			},
			{
				fname: "Murtaza",
				lname: "Sultani",
				fathername: "Mohammad Anwar",
				gender: 1,
				total: 1791,

			},
			{
				fname: "Murtaza",
				lname: "Rahimi",
				fathername: "Nowroz Ali",
				gender: 1,
				total: 1379,

			},
			{
				fname: "Maryam",
				lname: "Ahmadi",
				fathername: "Rahmatullah",
				gender: 0,
				total: 1007,

			},
			{
				fname: "Masouda",
				lname: "Shams",
				fathername: "Ainudeen",
				gender: 0,
				total: 1254,

			},
			{
				fname: "Momtaz",
				lname: "",
				fathername: "Gul Gamal",
				gender: 1,
				total: 967,

			},
			{
				fname: "Mahdi",
				lname: "",
				fathername: "Mahdi",
				gender: 1,
				total: 1086,

			},
			{
				fname: "Mehreen",
				lname: "Najm",
				fathername: "Sarajudine",
				gender: 0,
				total: 1845,

			},
			{
				fname: "Najibullah",
				lname: "",
				fathername: "Abdulwahid",
				gender: 1,
				total: 754,

			},
			{
				fname: "Nasrin",
				lname: "Azad",
				fathername: "Abdul Hussian",
				gender: 0,
				total: 1130,

			},
			{
				fname: "Nasratullah",
				lname: "",
				fathername: "Haji Hamidullah",
				gender: 1,
				total: 773,

			},
			{
				fname: "Nematullah",
				lname: "Poya",
				fathername: "Mohammad Juma",
				gender: 1,
				total: 0,

			},
			{
				fname: "Noor Mohammad",
				lname: "Haidary",
				fathername: "Mohammad Arif",
				gender: 1,
				total: 604,

			},
			{
				fname: "Naweeda",
				lname: "Hamdel",
				fathername: "Mohammad Arif",
				gender: 0,
				total: 1219,

			},
			{
				fname: "Nahila",
				lname: "Khuram",
				fathername: "Abdul Ahmad",
				gender: 0,
				total: 1266,

			},
			{
				fname: "Waisudin",
				lname: "Sarwari",
				fathername: "Mohammad Aman",
				gender: 1,
				total: 664,

			},
		];
});
