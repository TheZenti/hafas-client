'use strict'

const moment = require('moment-timezone')
moment.locale('de')

const formatDate = (profile, when) => {
	return moment.tz(when, profile.timezone).format('YYYYMMDD')
}

module.exports = formatDate
