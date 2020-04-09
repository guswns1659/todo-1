import { cardCreator } from "../utils/template";

export default class CardCreator {
	$cardCreator = null;

	constructor({ $target, data }) {
		this.$target = $target;
		this.data = data;
		this.render();
		this.cacheDomElements();
		this.bindeEventListener();
	}

	render() {
		const $columnBody = this.$target.$columnBody;
		$columnBody.insertAdjacentHTML("afterbegin", cardCreator());
	}

	cacheDomElements() {
		this.$cardCreator = this.$target.$column.querySelector(".card-creator");
		this.$textArea = this.$cardCreator.querySelector(".card-textarea");
		this.$addButton = this.$cardCreator.querySelector(".add");
		this.$cancelButton = this.$cardCreator.querySelector(".cancel");
	}

	bindeEventListener() {
		const { $textArea, $addButton, $cancelButton } = this;
		$textArea.addEventListener("input", (e) => this.handleTextArea.call(this, e));
		$cancelButton.addEventListener("click", this.disableCardCreator.bind(this));
	}

	handleTextArea(e) {
		const value = e.target.value;
		const length = value.length;
		length !== 0 ? this.activateAddButton() : this.deactivateAddButton();
		if (length > 500) {
			e.target.value = value.substring(0, 500);
			alert("최대 500자 까지 입력할 수 있습니다.");
		}
	}

	activateAddButton() {
		this.$addButton.removeAttribute("disabled");
	}

	deactivateAddButton() {
		this.$addButton.setAttribute("disabled", true);
	}

	clearTextArea() {
		this.$textArea.value = "";
	}

	disableCardCreator() {
		this.clearTextArea();
		this.deactivateAddButton();
		this.toggleDisplay({ visible: false });
		this.$target.cardCreatorIsShowing = false;
	}

	toggleDisplay(nextData) {
		this.data = nextData;
		const {
			$cardCreator,
			data: { visible },
		} = this;
		visible ? ($cardCreator.style.display = "block") : ($cardCreator.style.display = "none");
	}
}
