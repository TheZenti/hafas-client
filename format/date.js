'use strict'

const moment = require('moment-timezone')
moment.locale('de')

const formatDate = (profile, when) => {
	return moment(when, profile.timezone).format('YYYYMMDD')
}

module.exports = formatDate
