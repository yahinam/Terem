$('form').submit(event => {
	//блокировка дальнейшей отправки данных
    event.preventDefault()
	//сбор данных из формы и их преобразование в JSON
    let data = $('form').serializeArray()
	// вывод данных в HTML
	$('.formData').html(JSON.stringify(data))
	
	// ajax-запрос к серверу методом GET
	$.get('/json.php', data, responce => {
		if(responce) {
			alert('Данные успешно отправлены')
		} else {
			alert('Ошибка! Данные не отправлены')
		}
	})
})