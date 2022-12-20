import React from 'react'
import { Link} from 'react-router-dom'
import '../../Styles/footer.css'

export default function Footer() {
  return (
    <>
      <div className="bottomCard">
              <div className=" bottomCardText"><span>Let’s talk about your project</span>
                  <p>Ready to take it to the next level? Contact us today and find out how our expertise can help
                      your business grow.</p>
              </div><Link className=" cardButton" to="/">Get in touch</Link>
          </div>
      <footer className="footerContainer">
          <div className="footrtInnerContainer">
              <nav className="footerMain">
                  <div className="footerLogo"><Link aria-current="page" className=""
                      to="/"><img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZQAAAA2CAMAAADXuJ/DAAABd1BMVEVHcEzogGrngGnogWvlfmrngGvnf2v////////////ngGr////fv7/ogGrngGvkf2jngGvogGzngWzpfmfpfmz////ngGrofGbogWv////ogGvtfmfpgmnpgGrpf2vnf2n////pgWvngGvmf2rqf27ogGfmhWf////////////pgWrngGrmgGvngGrngGrogGvngGrogWvngGv2gmrpgGvmgGr////////////pgGrlgGrnf2r////hoo7pgWrmgGn////ngGr////////////ogGrogGvof2vqgmrpfmv////////////ngWvmf2rogGvogGv////////ngWrogGv////////////////ngWz////////mgGvpgGz////////////////ogGv////////of2r////////////////////////////////xtaf///////////////////////////////////////////////////////+yICSOAAAAfHRSTlMAYJ9pH6eAmS0DwMIBsJY/2DRICQ/7hRZY9LgGK4lxUAl4wy8iJxpBDhhMrG7o+Mez3M8D0eBu/jdDj/DRCpp1pNV4jSdUypE7EpBd7Ltlo/QTHnzsMiFL21znBjjh1WLj8IxY3+WeUb2BlS+xzA75RmurZ3O5fD3HOoa1CDW/hAAAC1NJREFUeNrtnPtb2r4ex6viFO08OkTG8ILzQlG3r44NcPNMRJwi6IY3EJzgZQoqD+jUOdc//qRpk5a26XXnbM95+Pw0bUxCXnl/LmkYRcmNDgGjHL2vlmaHplxU0/640T6fy+XjoMy9fv36y5dXn5/3/50zZRKBeqLwe/ry70Wz0aDzfzDrwhYYacvUtGlXf78LQPFhKB8+7LwbNi+XVAe2i/tiNmGivcQCxPaZ+4cICyxSKn9ndPoMag8dLF4dsdDcpe5Kp5FZRuUPboUH2lj92bM8PxKbP8sWjCJJJhuhfOCg7Lx6ux8yCaWDbbTTi3rBTHvewsTVSUta1W4Cmn1qrnOgO9I45mEloTvLnF/2oFt4oAUl2OFtGMirt1ughZIeDgrAgqAAJB92XgH7NuuxB4XjckL/JihbvxpaRSLsTdAalMSV2rCxjN4sH01D8Ve8inG8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"
                          alt="logo" /></Link></div>
                  <ul>
                      <li><Link to="/">Our Company</Link></li>
                      <li><Link to="/">Locations</Link></li>
                      <li><Link to="/">Contact</Link></li>
                  </ul>
              </nav>
              <div className="footerBottom">
                  <div className="footerBottomText">
                      <h4>Designo
                          Central Office
                      </h4><span>3886 Wellington Street</span><span>Toronto, Ontario M9C 3J5</span>
                  </div>
                  <div className="footerBottomText">
                      <h4>Contact Us (
                          Central Office
                          )
                      </h4><span className="phone">P:
                          +1 253-863-8967
                      </span><span className="email">M:
                          contact@designo.co
                      </span>
                  </div>
                  <ul className="footer-Social-Icons">
                      <li aria-labelledby="Facebook-label"><span id="Facebook-label" hidden=""></span><a
                          href="https://facebook.com"><img
                              src="https://cdn.sanity.io/images/pc8s19ha/production/e13fd25444fcc5989d8cfb19406384043df21af6-24x24.svg"
                              alt="" aria-hidden="true" /> </a></li>
                      <li aria-labelledby="Youtube-label"><span id="Youtube-label" hidden=""></span><a
                          href="https://youtube.com"><img
                              src="https://cdn.sanity.io/images/pc8s19ha/production/fc611e743f25e7dd950c8ba4483814efda8e16ce-24x24.svg"
                              alt="" aria-hidden="true" /> </a></li>
                      <li aria-labelledby="Twitter-label"><span id="Twitter-label" hidden=""></span><a
                          href="https://twitter.com"><img
                              src="https://cdn.sanity.io/images/pc8s19ha/production/609284dc7e735298a2e4141d06c1845883e02221-24x20.svg"
                              alt="" aria-hidden="true" /> </a></li>
                      <li aria-labelledby="Pinterest-label"><span id="Pinterest-label"
                          hidden=""></span><a
                          href="https://pinterest.com"><img
                              src="https://cdn.sanity.io/images/pc8s19ha/production/5c4434c40d5511e21bd681d557789c3eafc748c8-24x24.svg"
                              alt="" aria-hidden="true" /> </a></li>
                      <li aria-labelledby="Instagram-label"><span id="Instagram-label"
                          hidden=""></span><a
                          href="https://instagram.com"><img
                              src="https://cdn.sanity.io/images/pc8s19ha/production/e9d5ba76ae219718e79301e48574bcf307e71d54-24x24.svg"
                              alt="" aria-hidden="true" /> </a></li>
                  </ul>
              </div>
          </div>
      </footer>
      </>
  )
}
