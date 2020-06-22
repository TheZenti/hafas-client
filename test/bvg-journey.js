'use strict'

const test = require('tape')

const createClient = require('..')
const rawProfile = require('../p/bvg')
const res = require('./fixtures/bvg-journey.json')
const expected = require('./fixtures/bvg-journey.js')

const client = createClient(rawProfile, 'public-transport/hafas-client:test')
const {profile} = client

const opt = {
	results: null,
	via: null,
	stopovers: true,
	transfers: -1,
	transferTime: 0,
	accessibility: 'none',
	bike: false,
	tickets: true,
	polylines: true,
	remarks: true,
	walkingSpeed: 'normal',
	startWithWalking: true,
	scheduledDays: true,
	departure: '2019-08-18T14:03:50+02:00',
	products: {}
}

test('parses a journey correctly (BVG)', (t) => {
	const common = profile.parseCommon({profile, opt, res})
	const ctx = {profile, opt, common, res}
	const journey = profile.parseJourney(ctx, res.outConL[0])

	t.deepEqual(journey, expected)
	t.end()
})
