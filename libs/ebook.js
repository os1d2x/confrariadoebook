function onLoad() {
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
	window.plugins.messageBox.prompt({title: 'Título', message: 'Mensagem'}, function(button, value){
	    console.log(button, value)
	});
}