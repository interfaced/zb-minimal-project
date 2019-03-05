import AbstractCuteScene from 'zb/layers/abstract-cute-scene';
import {render} from 'generated/cutejs/minimal/home.jst'


export default class extends AbstractCuteScene {
	constructor() {
		super();
	}

	/**
	 * @override
	 */
	_renderTemplate() {
		return render(this._getTemplateData(), this._getTemplateOptions());
	}
}
