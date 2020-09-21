$(document).ready(function() {

	// 	const array ={
	// 	name: "",
	// 	sms: [],
	// 	time: []
	// };
	const MSG_DIV = $(`<div class="div"><div class="name">NICK</div><div class="text">TEXT</div><div class="data">data</div></div>`);
	const MSG_MAX = 10;
	let nick;
	let color;

	//автоскрол и автофокус на инпут
	window.onload = function(){
		$(".message").scrollTop(9999);
		$(".input").focus();
	}
		
	//нажатие ентера на стартовом окне
	$(".input").on("keydown", function(e) {
		if(e.keyCode == 13) {
			saveSetting();
		}
	});

	//нажатие кнопки сохранить
	$(".top .button").click(function() {
		saveSetting();
	});

	function saveSetting() {
		const nickname = $(".input").val();
		$(".sms").focus();
		if(!nickname) {
			alert("Поле пустое");
		}
		else {
			$(".top").hide(1000);
			console.log(nickname);
		}
		color = $(".color").val();
		nick = $(".top .input").val();
	}

	//функция вывода сообщений
	function allSms(){
		// message.html(""); 
		if(!$(".sms").val()) {
			alert("Поле пустое");
		}
		else {
			let text = $(".sms").val();
			let now = new Date();
			let data = now.toLocaleTimeString();
			let div = MSG_DIV.clone();
			div.find(".name").text(nick).css("borderColor",color);
			div.find(".text").text(text);
			div.find(".data").text(data);
			$(".message").append(div);
			$(".sms").val("");
			$(".message").scrollTop(9999);
		}
		if($(".div").length > MSG_MAX){
			$(".div").eq(0).remove();
		}
		$(".message").scrollTop(9999);
	} 

	//нажатие кнопки отправить
	$(".send").click(function() {
		allSms();
	});

	//нажатие ентера в поле ввода смс
	$(".sms").on("keydown", function(e) {
		if(e.keyCode == 13) {
			allSms();
		}
	});

	$(".setting").click( function() {
		$(".top").show(1000);
		console.log("click");
	});

});