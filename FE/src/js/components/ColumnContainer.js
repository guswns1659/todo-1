import { columnContainer } from "../utils/template";
import Column from "./Column";

export default class ColumnContainer {
	columns = null;

	constructor({ $target, initialData }) {
		this.$target = $target;
		this.data = initialData;

		this.render();
		this.createColumns();
	}

	render() {
		this.$target.insertAdjacentHTML("beforeend", columnContainer());
	}

	createColumns() {
		this.$columnContainer = this.$target.querySelector(".columns");
		this.columns = this.data.map(
			(column) => new Column({ $target: this.$columnContainer, data: column })
		);
	}
}