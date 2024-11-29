class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>         
          .footer {
            height: 40px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color:  #0a0a23;
            color: white;

            div {
              font-weight: 700;
              margin: 0 25px;
              color: #fff;
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
