import BaseApplication from 'generated/base-application'
import HomeScene from './home';

export default class Application extends BaseApplication {
	constructor() {
		super();
	}

	/**
	 * @override
	 */
	onReady() {
		super.onReady();

		/**
		 * @type {HomeScene}
		 * @private
		 */
		this._homeScene = new HomeScene();

		this.addScene(this._homeScene, 'home')
	}

	/**
	 * @override
	 */
	onStart() {
		this.home();
	}

	/**
	 * @override
	 */
	home() {
		return this.getSceneOpener()
			.open(this._homeScene);
	}
}
