'use strict'

const findRemark = require('./find-remark')

const createParseStopover = (profile, opt, data, date) => {
	const {locations, lines, hints, warnings} = data

	const parseStopover = (st) => {
		const res = {
			stop: locations[parseInt(st.locX)] || null,
			arrival: null,
			arrivalDelay: null,
			arrivalPlatform: st.aPlatfR || st.aPlatfS || null,
			departure: null,
			departureDelay: null,
			departurePlatform: st.dPlatfR || st.dPlatfS || null
		}

		// todo: DRY with parseDeparture
		// todo: DRY with parseJourneyLeg
		if (st.aTimeR || st.aTimeS) {
			const arr = profile.parseDateTime(profile, date, st.aTimeR || st.aTimeS)
			res.arrival = arr
		}
		if (st.aTimeR && st.aTimeS) {
			const realtime = profile.parseDateTime(profile, date, st.aTimeR)
			const planned = profile.parseDateTime(profile, date, st.aTimeS)
			res.arrivalDelay = realtime.diff(planned, 'seconds')
		}

		if (st.dTimeR || st.dTimeS) {
			const dep = profile.parseDateTime(profile, date, st.dTimeR || st.dTimeS)
			res.departure = dep
		}
		if (st.dTimeR && st.dTimeS) {
			const realtime = profile.parseDateTime(profile, date, st.dTimeR)
			const planned = profile.parseDateTime(profile, date, st.dTimeS)
			res.departureDelay = realtime.diff(planned, 'seconds')
		}

		if (st.aPlatfR && st.aPlatfS && st.aPlatfR !== st.aPlatfS) {
			res.formerScheduledArrivalPlatform = st.aPlatfS
		}
		if (st.dPlatfR && st.dPlatfS && st.dPlatfR !== st.dPlatfS) {
			res.formerScheduledDeparturePlatform = st.dPlatfS
		}

		// mark stations the train passes without stopping
		if(st.dInS === false && st.aOutS === false) res.passBy = true

		// todo: DRY with parseDeparture
		// todo: DRY with parseJourneyLeg
		if (st.aCncl || st.dCncl) {
			res.cancelled = true
			Object.defineProperty(res, 'canceled', {value: true})
			if (st.aCncl) {
				res.arrival = res.arrivalDelay = null
				if (st.aTimeS) {
					const arr = profile.parseDateTime(profile, date, st.aTimeS)
					res.formerScheduledArrival = arr
				}
			}
			if (st.dCncl) {
				res.departure = res.departureDelay = null
				if (st.dTimeS) {
					const arr = profile.parseDateTime(profile, date, st.dTimeS)
					res.formerScheduledDeparture = arr
				}
			}
		}

		if (opt.remarks && Array.isArray(st.msgL)) {
			res.remarks = []
			for (let ref of st.msgL) {
				const remark = findRemark(hints, warnings, ref)
				if (remark) res.remarks.push(remark)
			}
		}

		return res
	}

	return parseStopover
}

module.exports = createParseStopover
