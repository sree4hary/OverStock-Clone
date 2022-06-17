function header() {
    return `
    <div id="header">
    <div id="subHeader1">
        <div style="font: 12px/20px 'Helvetica Neue',Helvetica,Arial,sans-serif; color: #94979b;">Ships To:</div>
        <div></div>
    </div>
    <div id="subHeader2Container">
        <div id="subHeader2">
        <div id="loggedUser"></div>
            <img id="icon" src="/images/header/1.png">
            <input type="text" id="searchBox" placeholder="Search">
            <a href="/login_signUp.html"><img src="/images/header/2.png" id="ac"></a>
            <img src="/images/header/3.png">
            <div id="cart_icon"></div>
        </div>
    </div>
    <div id="navContainer">
        <div class="navbar">
        
        <a href="/furniture.html">Furniture</a>
        <a href="/rugs.html">Rugs</a>
        <a>Decor</a>
        <a>Bedding</a>
        <a>Home Improvement</a>
        <a>Kitchen</a>
        <a>Outdoor</a>
        <a>Lighting</a>
        <a>Kids n baby</a>
        <a>More</a>
        <a>Ideas</a>
        <a>Sales and deals</a>
        </div>
    </div>
</div>`
}

function footer() {
    return `    <div id="footerContainer">
    <div id="footer1">
      <div>
          <h4>MY ACCOUNT</h4>
          <ul>
            <li>Orders and returns</li>
            <li>Email preferences</li>
            <li>Account settings</li>
          </ul>
      </div>
      <div>
          <h4>LET US HELP</h4>
          <ul>
            <li>Contact customer care</li>
            <li>Shipping information</li>
            <li>Return policy</li>
            <li>International policy</li>
            <li>Accessibility</li>
          </ul>
      </div>
      <div>
          <h4>COMPANY INFORMATION</h4>
          <ul>
            <li>About Overstock</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Investor relations</li>
            <li>Sell your policies</li>
            <li>Supply chain transparency</li>
          </ul>
      </div>
      <div>
          <h4>MORE WAYS TO SHOP</h4>
          <ul>
            <li>Tips and ideas</li>
            <li>Deals</li>
            <li>Clearence</li>
            <li>New Arrivals</li>
          </ul>
      </div>
  </div>
    <div id="footer2">
      <div id="footer2List">
          <div id="footer2LftLt">
              <p>© Copyright 2022, Overstock.com®, Inc.</p>
              <p>799 Coliseum Way Midvale, UT 84047 | 1-800-843-2446</p>
          </div>
          <div id="footer2RtLt">
              <div>Privacy Policy</div>
              <div>Terms and conditions</div>
              <div>Promotion terms</div>
              <div>Ships to</div>
          </div>
      </div>
    </div>
  </div>`
}
export {header, footer}