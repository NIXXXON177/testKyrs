const getStatusClass = status => {
	switch (status) {
		case 'пройден':
			return 'status-completed'
		case 'в процессе':
			return 'status-in-progress'
		case 'назначен':
			return 'status-upcoming'
		case 'просрочен':
			return 'status-expired'
		default:
			return ''
	}
}

const getStatusText = status => {
	switch (status) {
		case 'пройден':
			return 'Пройден'
		case 'в процессе':
			return 'В процессе'
		case 'назначен':
			return 'Назначен'
		case 'просрочен':
			return 'Просрочен'
		default:
			return status
	}
}

const formatDate = dateString => {
	const date = new Date(dateString)
	return date.toLocaleDateString('ru-RU')
}
