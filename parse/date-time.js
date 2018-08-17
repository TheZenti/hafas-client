'use strict'

const moment = require('moment-timezone')

moment.locale('de-DE')

const parseDateTime = (profile, date, time) => {
	const pDate = [date.substr(-8, 4), date.substr(-4, 2), date.substr(-2, 2)]
	if (!pDate[0] || !pDate[1] || !pDate[2]) {
		throw new Error('invalid date format: ' + date)
	}

	const pTime = [time.substr(-6, 2), time.substr(-4, 2), time.substr(-2, 2)]
	if (!pTime[0] || !pTime[1] || !pTime[2]) {
		throw new Error('invalid time format: ' + time)
	}

	const offset = time.length > 6 ? parseInt(time.slice(0, -6)) : 0

	const dt = moment(pDate.join('-') + 'T' + pTime.join(':'), 'Europe/Berlin')
	return offset > 0 ? dt.add(`${offset}d`) : dt
}

module.exports = parseDateTime
