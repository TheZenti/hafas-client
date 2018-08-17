'use strict'

// todo: https://gist.github.com/anonymous/d3323a5d2d6e159ed42b12afd0380434#file-haf_products-properties-L1-L95
module.exports = [
	{
		id: 'nationalExp',
		mode: 'train',
		bitmasks: [1],
		name: 'InterCityExpress',
		short: 'ICE',
		default: true
	},
	{
		id: 'national',
		mode: 'train',
		bitmasks: [2],
		name: 'InterCity & EuroCity',
		short: 'IC/EC',
		default: true
	},
	{
		id: 'regionalExp',
		mode: 'train',
		bitmasks: [4],
		name: 'RegionalExpress & InterRegio',
		short: 'RE/IR',
		default: false
	},
	{
		id: 'regional',
		mode: 'train',
		bitmasks: [8],
		name: 'Regio',
		short: 'RB',
		default: false
	},
	{
		id: 'suburban',
		mode: 'train',
		bitmasks: [16],
		name: 'S-Bahn',
		short: 'S',
		default: false
	},
	{
		id: 'bus',
		mode: 'bus',
		bitmasks: [32],
		name: 'Bus',
		short: 'B',
		default: false
	},
	{
		id: 'ferry',
		mode: 'watercraft',
		bitmasks: [64],
		name: 'Ferry',
		short: 'F',
		default: false
	},
	{
		id: 'subway',
		mode: 'train',
		bitmasks: [128],
		name: 'U-Bahn',
		short: 'U',
		default: false
	},
	{
		id: 'tram',
		mode: 'train',
		bitmasks: [256],
		name: 'Tram',
		short: 'T',
		default: false
	},
	{
		id: 'taxi',
		mode: 'taxi',
		bitmasks: [512],
		name: 'Group Taxi',
		short: 'Taxi',
		default: false
	}
]
