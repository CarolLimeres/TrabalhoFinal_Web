class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>         
          .footer {
            height: 50px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color:  #0a0a23;
            background-color: #e2e1df;
          box-shadow: 0px 4px 8px rgba(117, 112, 111, 0.2), 
            0px 2px 4px rgba(0, 0, 0, 0.1);

            div {
              margin: 0 25px;
               color: var(--gray);
              text-decoration: none;
            }
          } 
        </style>
        <footer class="footer">
          <div> footer</div>
        </footer>
      `;
  }
}

customElements.define("footer-component", Footer);
