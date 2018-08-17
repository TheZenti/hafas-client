'use strict'

const moment = require('moment-timezone')
moment.locale('de-DE')

const formatTime = (profile, when) => {
	return moment(+when).tz(timezone).format('HHmmss')
}

module.exports = formatTime
