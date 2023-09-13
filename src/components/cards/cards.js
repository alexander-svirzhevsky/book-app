import { DivComponent } from "../../common/div-component";
import { Card } from "../card/card";
import "./cards.css";

export class Cards extends DivComponent {
  constructor(parentState, appState) {
    super();
    this.parentState = parentState;
    this.appState = appState;
  }

  render() {
    this.el.classList.add("cards");
    if (this.parentState.loading) {
      this.el.innerHTML = `
        <div class="cards__loader">Loading...</div>
      `;
    } else {
      this.el.innerHTML = `
        <h1>
          We've found - ${this.parentState.numFound} books
        </h1>
      `;
    }
    for (const card of this.parentState.list) {
      this.el.append(new Card(this.appState, card).render());
    }

    return this.el;
  }
}
