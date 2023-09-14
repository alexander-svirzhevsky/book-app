import onChange from "on-change";
import { AbstractView } from "../../common/view";
import { Cards } from "../../components/cards/cards";
import { Header } from "../../components/header/header";

export class Favorites extends AbstractView {
  constructor(appState) {
    super();
    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHook.bind(this));
    this.setTitle("Favorites");
  }

  appStateHook(path) {
    if (path === "favorites") {
      this.render();
    }
  }

  unmount() {
    onChange.unsubscribe(this.appState);
  }

  render() {
    const main = document.createElement("div");
    main.append(
      new Cards({ list: this.appState.favorites }, this.appState).render()
    );
    this.app.innerHTML = "";
    this.app.append(main);
    this.renderHeader();
  }

  renderHeader() {
    const header = new Header(this.appState).render();
    this.app.prepend(header);
  }
}
