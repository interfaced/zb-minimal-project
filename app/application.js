import BaseApplication from 'generated/base-application'

export default class Application extends BaseApplication {
	constructor() {
		super();
	}

	/**
	 * @override
	 */
	home() {}

	/**
	 * @override
	 */
	onReady() {
		super.onReady();

		window.document.body.innerText = 'Hello, ZombieBox!';
	}
}
