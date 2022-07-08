class Car {
	constructor(engine, seats, doors, engineVolume, year) {
		this.engine = engine
		this.seats = seats
		this.doors = doors
		this.engineVolume = engineVolume
		this.year = year
	}
}

class Mercedes extends Car {
	constructor(engine, seats, doors, engineVolume, year) {
		super(engine, seats, doors, engineVolume, year)
	}
	getAllInfoCar() {
		console.log(mercedes)
	}
	signal() {
		console.log('signal')
	}
	stop() {
		console.log('stop')
	}
}
const mercedes = new Mercedes('MercedesE63', 4, 4, 441, 2022)
mercedes.getAllInfoCar()

class Bmw extends Car {
	constructor(engine, seats, doors, engineVolume, year) {
		super(engine, seats, doors, engineVolume, year)
	}
	getAllInfoCar() {
		console.log(bmw)
	}
	signal() {
		console.log('bmwSignal')
	}
	stop() {
		console.log('stop')
	}
}

const bmw = new Bmw('bmwI8', 4, 4, 441, 2022)
bmw.getAllInfoCar()
bmw.signal()
bmw.stop()

class Audi extends Car {
	constructor(engine, seats, doors, engineVolume, year, start) {
		super(engine, seats, doors, engineVolume, year)
		this.#start = start
	}
	#start
	getStart() {
		return this.#start
	}
	getAllInfoCar() {
		console.log(audi)
	}
	signal() {
		console.log('audiSignal')
	}
	stop() {
		console.log('stop')
	}
}

const audi = new Audi('audiR8', 4, 4, 441, 2022, 'start')
audi.getAllInfoCar()
audi.signal()
audi.stop()
console.log(audi.getStart())
