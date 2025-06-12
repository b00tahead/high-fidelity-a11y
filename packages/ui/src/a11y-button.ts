import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators";

/**
 * An accessible-by-default button component.
 *
 * @slot - The default slot for the button's content (e.g., text, icon).
 * @cssprop --a11y-button-background-color - The background color of the button.
 * @cssprop --a11y-button-text-color - The text color of the button.
 * @cssprop --a11y-button-padding - The padding of the button.
 * @cssprop --a11y-button-border-radius - The border radius of the button.
 * @cssprop --a11y-button-font-size - The font size of the button.
 * @cssprop --a11y-button-focus-outline-color - The color of the focus outline.
 */
@customElement("a11y-button")
export class A11yButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    .button {
      /* Reset default button styles */
      border: none;
      background: none;
      cursor: pointer;
      font-family: inherit;

      /* Apply custom properties with fallbacks */
      background-color: var(--a11y-button-background-color, #005fcc);
      color: var(--a11y-button-text-color, #ffffff);
      padding: var(--a11y-button-padding, 0.75em 1.5em);
      border-radius: var(--a11y-button-border-radius, 6px);
      font-size: var(--a11y-button-font-size, 1rem);

      /* Smooth transition for hover/focus states */
      transition: background-color 0.2s ease-in-out;
    }

    /* Clear, visible focus state is critical for accessibility */
    .button:focus-visible {
      outline: 3px solid var(--a11y-button-focus-outline-color, #005fcc);
      outline-offset: 2px;
    }

    .button:hover:not([disabled]) {
      background-color: var(--a11y-button-hover-background-color, #004c9e);
    }

    /* Styles for the disabled state */
    .button[disabled] {
      background-color: #a0a0a0;
      color: #e0e0e0;
      cursor: not-allowed;
    }
  `;

  /**
   * Disables the button, preventing user interaction.
   */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  render() {
    return html`
      <button class="button" ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `;
  }
}
