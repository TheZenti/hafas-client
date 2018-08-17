'use strict'

const moment = require('moment-timezone')
moment.locale('de')

const formatTime = (profile, when) => {
	return moment(when, profile.timezone).format('HHmmss')
}

module.exports = formatTime
