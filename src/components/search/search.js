import { DivComponent } from "../../common/div-component";
import "./search.css";

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  render() {
    this.el.classList.add("search");
    this.el.innerHTML = `
      <div class="search__wrapper">
        <input
            type="text"
            class="search__input"
            value="${this.state.searchQuery ?? ""}"
            placeholder="Find book"
          />
        <img src="/static/svg/search.svg" alt="search icon" />
      </div>
      <button arial-label="Find">
        <img src="/static/svg/search-input.svg" alt="search icon" />
      </button>
    `;
    return this.el;
  }
}
