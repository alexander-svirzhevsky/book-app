import { AbstractView } from "../../common/view";

export class MainView extends AbstractView {
  constructor() {
    super();
    this.setTitle("Book searching");
  }

  render() {
    const main = document.createElement("div");
    main.innerHTML = "main page is here";
    this.app.innerHTML = "";
    this.app.append(main);
  }
}
