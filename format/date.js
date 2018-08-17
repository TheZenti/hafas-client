'use strict'

const moment = require('moment-timezone')
moment.locale('de-DE')

const formatDate = (profile, when) => {
	return moment(+when).tz(timezone).format('YYYYMMDD')
}

module.exports = formatDate
