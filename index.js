const daysElement = document.getElementById('days')
const daysLiteral = document.getElementById('daysLiteral')

const hoursElement = document.getElementById('hours')
const hoursLiteral = document.getElementById('hoursLiteral')

const minutesElement = document.getElementById('minutes')
const minutesLiteral = document.getElementById('minutesLiteral')

const secondsElement = document.getElementById('seconds')

setInterval(() => {
	erovnulebi = new Date('07/02/2025').getTime()
	diff = erovnulebi - Date.now()

	dayMilliseconds = 86400000
	hourMilliseconds = 3600000
	minuteMilliseconds = 60000

	daysElement.innerHTML = Math.floor(diff / dayMilliseconds)
	daysLiteral.innerHTML = daysElement.innerHTML == '1' ? 'day' : 'days'
  
	diff %= dayMilliseconds

	hoursElement.innerHTML = Math.floor(diff / hourMilliseconds)
	hoursLiteral.innerHTML = hoursElement.innerHTML == '1' ? 'hour' : 'hours'

	diff %= hourMilliseconds

	minutesElement.innerHTML = Math.floor(diff / minuteMilliseconds)
	minutesLiteral.innerHTML = minutesElement.innerHTML == '1' ? 'minute' : 'minutes'

	diff %= minuteMilliseconds

	secondsElement.innerHTML =
		Math.floor(diff / 1000) + '.' + Math.floor((diff % 1000) / 100)

	secondsElement.innerHTML = secondsElement.innerHTML.padStart(4, '0')

	diff %= 1000
}, 10)
