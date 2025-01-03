class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
        .header {     
        z-index: 10;
        position: fixed;
        
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
  
      .ul-nav {
      margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            gap: 40px;
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
            color: var(--gray);
            text-decoration: none;
            transition: ease 0.3s;
          }
  
          a:hover {
           color: var(--black);
          }

          .dropdown {
          display: none;
          }

        }

        .dropdown-toggle:focus, .dropdown-toggle:focus-visible {
        box-shadow: none !important;
        }

        @media (max-width: 720px) {

  .header .items-header-container {
    display: none;
  }

  .header .dropdown {
  display: flex;
  justify-content: flex-end;
padding: 0 20px;
  }

  .header .dropdown button {
    background-color: var(--steel);
  border: none;
  }

 .header  .dropdown-toggle:hover {
    background-color: var(--gray);
  }

  .header .dropdown-item:active {
    background-color: var(--white);
    color: var(--black);
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
        <ul class="ul-nav">
          <li><a href="/index.html">About</a></li>
          <li><a href="/pages/portfolio/portfolio.html">Portfolio</a></li>
           <li><a href="/pages/services/services.html">Services</a></li>
          <li><a href="/pages/blog/blog.html">Blog</a></li>
          <li><a href="/pages/contact/contact.html">Contacts</a></li>
        </ul>
      </div>
    </div>
     <!-- BOOTSTRAP - dropdown menu -->
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/index.html"
                      >About</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="/pages/portfolio/portfolio.html">Portfolio</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/pages/services/services.html"
                      >Services</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="/pages/blog/blog.html"
                      >Blog</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="/pages/contact/contact.html"
                      >Contacts</a
                    >
                  </li>
                </ul>
              </div>
            </ul>

  </nav>
</header>
      `;
  }
}

customElements.define("header-component", Header);
