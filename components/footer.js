class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>       
        .footer-container {
        display:flex;
        width: 100%;
    justify-content: space-between;
    max-width: 1000px;

        border-bottom: 1px solid var(--white);
    margin-bottom: 30px;
    padding: 50px 10px;
        }

        .site-map-container {
            gap: 10px;
    display: flex
;
    flex-direction: column;
        }
  
        .footer-container a {
        color: var(--white);
        }

                .footer-container a:hover {
        text-decoration: underline;
        }

        .footer-logo {
        width: 100px
        }

.title-footer {
color: var(--gray)
}


.footer-copyright {
    padding-bottom: 30px;
     color: var(--white);
}
        
          .footer {
          flex-direction: column;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color:  var(--black);
          box-shadow: 0px 4px 8px rgba(117, 112, 111, 0.2), 
            0px 2px 4px rgba(0, 0, 0, 0.1);


          } 

                  .contact-footer {
        color: var(--white)
        }


        @media (max-width: 450px) {
        .footer-logo {
        display: none;
        }
        }

        </style>
        <footer class="footer">
          <div class="footer-container"> 
            <div>
              <img src="/components/logo-white.png" class="footer-logo" alt="" />
            </div>
            <div class="site-map-container">
              <div class="title-footer">SITEMAP</div>
              <div><a href="/pages/blog/blog.html">BLOG</a></div>
              <div><a href="/index.html">ABOUT</a></div>
              <div><a href="/pages/services/services.html">SERVICES</a></div>
              <div><a href="/pages/portfolio/portfolio.html">PORTFOLIO</a></div>
            </div>        
            <div class="site-map-container"> 
            <div class="title-footer">
            CONTACT US
            </div>
            <div class="contact-footer">Rua das Artes, 142 - 5º Direito</div>
            <div class="contact-footer">Porto | 4050-456</div>
            <div class="contact-footer">marfelstudio@gmail.com</div>
            </div>
          </div>
          <div class="footer-copyright">
          © All rights reserved 2024
          </div>
        </footer>
      `;
  }
}

customElements.define("footer-component", Footer);
