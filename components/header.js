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
             background-color: rgba(234, 234, 234, 0.7);
             backdrop-filter: blur(10px);
          }
  
          ul {
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: space-around;
          }

          .nav-header-container {
          display: flex;
           align-items: center;
           justify-content: space-between;
          }

          .logo-header {
          width: 100px
          }

          .items-header-container {
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
            <div class="nav-header-container">
            <div class="logo-header-container">
            <li><a href="/index.html"><img src="/components/logo.png" class="logo-header" alt="" /></a></li>
            </div>
            <div class="items-header-container">
              <li><a href="/index.html">About</a></li>
              <li><a href="/pages/blog/blog.html">Blog</a></li>
              <li><a href="/pages/contact/contact.html">Contact</a></li>
              <li><a href="/pages/services/services.html">Services</a></li>
              <li><a href="/pages/portfolio/portfolio.html">Portfolio</a></li> 
              </div>
              </div>
            </ul>
          </nav>
        </header>
      `;
  }
}

customElements.define("header-component", Header);
