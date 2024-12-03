class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
        .header {        
          nav {
            height: 60px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
              background-color: #e2e1df;
          box-shadow: 0px 4px 8px rgba(117, 112, 111, 0.2), 
            0px 2px 4px rgba(0, 0, 0, 0.1);
     position: fixed;
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
          justify-content: space-between;
               padding: 0 20px;
    max-width: 1000px;
          }

          .logo-header {
          width: 100px
          }

          .items-header-container {
          display: flex;
          }
  
          a {
          font-weight: 500;
            margin: 0 25px;
            color: var(--gray);
            text-decoration: none;
            transition: ease 0.3s;
          }
  
          a:hover {
            padding-bottom: 3px;
           color: var(--black);
          }

        }

        @media (max-width: 600px) {
  .header .items-header-container {
    display: none;
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
