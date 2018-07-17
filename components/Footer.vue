<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <h3>About us</h3>
          <p>We are energy pioneers, redefining the way retail energy power is bought and sold across the world.</p>
          <p><img src="../assets/img/logoFE.svg" alt="img" class="hidden-xs">
          </p>
        </div>
        <div class="col-md-3 col-sm-4">
          <h3>About</h3>
          <ul>
            <li><a href="https://energypremier.com/about">About</a>
            </li>
            <li><a href="https://energypremier.com/faq">FAQ</a>
            </li>
            <li><a href="http://helpcenter.energypremier.com/help">Help Center</a>
            </li>
            <li><a href="https://energypremier.com/contact">Contact</a>
            </li>
            <li><a href="https://energypremier.com/login">Log in</a>
            </li>
            <li><a href="https://energypremier.com/register">Register</a>
            </li>
            <li><a href="https://energypremier.com/en/terms">Terms and conditions</a>
            </li>
          </ul>
        </div>
        <div class="col-md-5 col-sm-4" id="newsletter">
          <h3>Newsletter</h3>
          <p>
            Join our newsletter to stay informed about offers and news.
          </p>
          <div id="message-newsletter_2">
          </div>
          <form method="post" action="https://energypremier.com/index/assets/newsletter.php" name="newsletter_2" id="newsletter_2">
            <div class="form-group">
              <input name="email_newsletter_2" id="email_newsletter_2" type="email" value="" placeholder="Your email address" class="form-control">
            </div>
            <p>
              <input type="submit" value="Subscribe" class="button" id="submit-newsletter_2">
            </p>
          </form>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-md-6">
          <p>&copy; Energy premier 2018 - All rights reserved</p>
        </div>
        <div class="col-md-6">
          <div id="social_footer">
            <ul>
              <li><a href="https://www.facebook.com/energypremier/" title="Facebook" target="_blank"><i class="icon-facebook"></i></a>
              </li>
              <li><a href="https://www.linkedin.com/company/18219225/" title="LinkedIn" target="_blank"><i class="icon-linkedin"></i></a>
              </li>
              <li><a href="https://twitter.com/EnergyPremierTS?lang=en" title="Twitter" target="_blank"><i class="icon-twitter"></i></a></li>
              <li><a href="https://bitcointalk.org/index.php?action=profile;u=1418545;sa=summary" title="Bitcoin talk" target="_blank"><i class="icon-bitcoin"></i></a></li>
              <li><a href="https://www.reddit.com/user/EnergyPremier/" title="Reddit" target="_blank"><i class="icon-reddit"></i></a></li>
              <li><a href="https://medium.com/@EnergyPremier" title="Medium" target="_blank"><i class="icon-doc-text"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<!--
<style>
  footer{
    background-color:#fff;
    padding:20px 0;
  }
  footer p{
    font-size: 15px !important;
    color: #687782 !important;
  }
  footer h3{
    font-size:16px;
    font-weight:600;
  }
  footer hr{
    margin:30px 0;
  }
  footer a{
    color:#555;
  }
  footer a:hover{
    color:#1bb933;
  }
  footer ul{
    margin:0;
    padding: 0 0 0 0;
    list-style:none;
  }
  footer ul li{
    margin-bottom: 5px;
  }
  footer .btn_1{
    text-transform:none;
    padding:8px 15px;
    background:#555;
  }
  #social_footer{
    float:right;
  }
  #social_footer ul{
    margin:-5px 0 0 0;
    padding:0 0 10px 0;
  }
  #social_footer ul li{
    display:inline-block;
    margin:0 0 10px 5px;
  }
  #social_footer ul li a{
    color:#555;
    text-align:center;
    line-height:34px;
    display:block;
    font-size:16px;
    width:35px;
    height:35px;
    background-color:#f2f2f2;
    -webkit-border-radius:5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  #social_footer ul li a:hover{
    color:#fff;
    background-color:#555;
    -webkit-border-radius:50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }

  a.button:hover, .button:hover {
    color: #fff;
    background-color: #0aa224;
  }

  a.button, .button {
    padding: 10px 30px;
    display: inline-block;
    background-color: #1bb933;
    font-weight: 600;
    color: #fff;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    cursor: pointer;
    border: 0;
    font-size: 14px;
    outline: none;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

</style>
-->
