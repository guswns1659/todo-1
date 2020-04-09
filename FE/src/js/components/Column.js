import { column } from "../utils/template";
import data from "../data";
import Card from "./Card";
import CardCreator from "./CardCreator";

export default class Column {
	$column = null;
	$columnHeader = null;
	$columnBody = null;
	$cardContainer = null;
	cardCreatorIsShowing = false;

	constructor({ $target, initialData }) {
		this.$target = $target;
		this.initialData = initialData;
		this.columnIndex = initialData.index;

		this.render();
		this.cacheDomElements();
		this.bindeEventListener();

		this.renderCards();

		this.cardCreator = new CardCreator({
			$target: this,
			data: {
				visible: false,
			},
		});
	}

	render() {
		const { columnName, cards } = this.initialData;
		this.$target.insertAdjacentHTML("beforeend", column(columnName, cards.length));
	}

	cacheDomElements() {
		this.$column = [...this.$target.children][this.columnIndex];
		this.$columnHeader = this.$column.querySelector(".column__header");
		this.$columnBody = this.$column.querySelector(".column__body");
		this.$cardContainer = this.$column.querySelector(".card-container");
	}

	bindeEventListener() {
		const addCardButton = this.$columnHeader.querySelector(".add-card");
		addCardButton.addEventListener("click", this.handleCardCreator.bind(this));
	}

	renderCards() {
		const {
			$cardContainer,
			initialData: { cards },
		} = this;
		if (cards.length !== 0) {
			cards.forEach((card) => new Card({ $target: $cardContainer, data: card }));
		}
	}

	handleCardCreator() {
		if (!this.cardCreatorIsShowing) {
			this.cardCreator.toggleDisplay({ visible: true });
			this.cardCreatorIsShowing = true;
		} else {
			this.cardCreator.toggleDisplay({ visible: false });
			this.cardCreatorIsShowing = false;
		}
	}

	createCardObj(value, cardList) {
		return {
			userId: "reese",
			title: value,
			contents: null,
			device: "web",
			row: cardList.length + 1,
		};
	}

	addCard(value) {
		// data 업데이트
		const cardList = data.columns.find((column) => column.index === this.columnIndex).cards;
		const newCardObj = this.createCardObj.call(this, value, cardList);
		cardList.push(newCardObj);

		// 서버에 newCardObj 전송

		// Card DOM 추가
		new Card({ $target: this.$cardContainer, data: newCardObj });
	}
}
