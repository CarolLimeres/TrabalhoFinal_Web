class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
        .header {        
          nav {
            height: 70px;
            width: 100%;
            display: flex;
            align-items: center;
              background-color: transparent; /* Sem cor de fundo */
    box-shadow: 0px 4px 6px rgba(172, 171, 169, 0.3);
     
          }
  
          ul {
            padding: 0;
            display: flex;
            align-items: center;
          }

          .nav-header-container {
          display: flex;
          width: 100%;
           align-items: center;
           justify-content: center;
           gap: 269px;
          }

          .logo-header {
          width: 100px
          }

          .items-header-container {
          display: flex;
          }
  
          a {
          font-weight: 600;
            margin: 0 25px;
            color: var(--gray);
            text-decoration: none;
          }
  
          a:hover {
            padding-bottom: 3px;
            box-shadow: inset 0 -1.5px 0 0 var(--gray);
          }

        }
        </style>

       <header class="header">
  <nav>
    <div class="nav-header-container">
      <div class="logo-header-container">
        <a href="/index.html">
          <img src="/components/logo.png" class="logo-header" alt="Logo" />
        </a>
      </div>
      <div class="items-header-container">
        <ul>
          <li><a href="/index.html">About</a></li>
          <li><a href="/pages/blog/blog.html">Blog</a></li>
          <li><a href="/pages/contact/contact.html">Contact</a></li>
          <li><a href="/pages/services/services.html">Services</a></li>
          <li><a href="/pages/portfolio/portfolio.html">Portfolio</a></li>
        </ul>
      </div>
    </div>
  </nav>
</header>
      `;
  }
}

customElements.define("header-component", Header);
