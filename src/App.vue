<template>
  <div id="app">
    <router-view/>
    <footer class="fixed-bottom text-center">
      <div class="container text-left">
            <div class="row">
                <div class="col-sm-2">
                    <h4>Quick Links</h4>
                </div>
                <span class="footer-link">
                    <a href="https://discord.gg/eZqhZah" target="_blank">
                        <i class="fab fa-discord"></i>
                        HITMAN 2 Maps Discord
                    </a>
                </span>
                <span class="footer-link">
                    <a href="https://www.hitmanforum.com/t/interactive-maps-for-hitman-2/27897" target="_blank">
                        <i class="fas fa-comments"></i>
                        hitmanforum.com Discussion
                    </a>
                </span>
                <span class="footer-link">
                    <a href="https://hitmanstat.us" target="_blank" data-toggle="tooltip" title="Made with <3 By Hardware">
                        <i class="fas fa-user-tie"></i>
                        HITMAN&trade; Server Status
                    </a>
                </span>
                <span class="footer-link">
                    <a href="https://status.hitman2maps.com">
                        <i class="fas fa-shield-check"></i>
                        hitman2maps.com Server Status
                    </a>
                </span>
            </div>
            <div class="row">
                <div class="col-sm-2">
                    <h4>Legal</h4>
                </div>
                <span class="footer-link">
                    <a href="/terms-of-use">
                        <i class="fas fa-gavel"></i>
                        Terms of Use
                    </a>
                </span>
                <span class="footer-link">
                    <a href="/privacy-policy">
                        <i class="fas fa-user-secret"></i>
                        Privacy Policy
                    </a>
                </span>
            </div>
            <div class="row text-center">
                <div class="col">
                    <h4>&copy; {{ $currentYear }} hitman2maps.com</h4>
                    <p>HITMAN™, HITMAN™ 2, the HITMAN™ logo, images, and text are the property of IO Interactive.</p>
                </div>
            </div>
        </div>
    </footer>
  </div>
</template>

<style lang="scss">
body {
  background: #ddd;
  padding-bottom: 137px;

  @media (max-width: 767px) {
    padding-bottom: 0;
  }
}
footer {
  padding-top: 1rem;
  padding-bottom: 1rem;
  background: #000;
  color: #6b6c72;

  p {
    margin-bottom: 0;
    color: #fff;
  }

  h4 {
    text-transform: uppercase;
    color: #fff;
    font-size: 1rem;
  }
  
  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      color: #ddd;
      text-decoration: none;
    }
  }

  @media(max-width: 767px) {
    &.fixed-bottom {
      position: inherit;

      .container {
        max-width: inherit;

        .col-xs-12 {
          margin-bottom: 10px;
        }
      }
    }
  }

  .footer-link + .footer-link {
    padding-right: 10px;
    padding-left: 10px;
  }
}
.breadcrumb {
  background: transparent;

  .breadcrumb-item {
    padding-left: 30px;
    padding-right: 30px;
    font-size: 1.5rem;
    text-shadow: 2px 2px 2px #000;
    font-weight: normal;

    a {
      color: #fff;
    }

    &.active {
      color: #fff;
    }

    & + .breadcrumb-item::before {
      //noinspection CssNoGenericFontName
      font-family: "Font Awesome 5 Pro";
      content: "\f054";
      margin-right: 30px;
      color: #fff;
    }
  }
}
</style>