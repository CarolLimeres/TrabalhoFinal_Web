class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
        .header {        
          nav {
            height: 40px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color:  #0a0a23;
          }
  
          ul {
            padding: 0;
            display: flex;
          }
  
          a {
            font-weight: 700;
            margin: 0 25px;
            color: #fff;
            text-decoration: none;
          }
  
          a:hover {
            padding-bottom: 5px;
            box-shadow: inset 0 -2px 0 0 #fff;
          }
        }
        </style>
        <header class="header">
          <nav>
            <ul>
              <li><a href="/index.html">About</a></li>
              <li><a href="/pages/blog/blog.html">Blog</a></li>
              <li><a href="/pages/contact/contact.html">Contact</a></li>
              <li><a href="/pages/services/services.html">Services</a></li>
              <li><a href="/pages/portfolio/portfolio.html">Portfolio</a></li>              
            </ul>
          </nav>
        </header>
      `;
  }
}

customElements.define("header-component", Header);
