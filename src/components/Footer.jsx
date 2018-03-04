import React from 'react'

import Network from './Network'
const Footer = () => (
  <footer className="pa4 pa5-l black-70 bt b--black-10">
    <div className="mb4-l cf">
      <h1 className="fl w-100 pv0 f6 fw6 ttu tracked mb4">Photos provided by</h1>
      <Network name="unsplash" />
      <Network name="pixabay" />
      <Network name="flickr" />
    </div>
    <div className="dt dt--fixed w-100" >
      <div className="dn dtc-ns v-mid">
        <p className="f7 black-70 dib pr3 mb3">
          Copyright © Pick 2018
        </p>
      </div>
      <div className="db dtc-ns black-70 tc tr-ns v-mid">
        <a class="link dim gray dib h2 w2 br-100 mr3 pa2 bg-near-white ba b--black-10" href="https://twitter.com/anamariasosam" target="_blank">
          <svg data-icon="twitter" viewBox="0 0 32 32">
          <title>twitter icon</title>
          <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"></path>
          </svg>
        </a>
        <a class="link dim gray dib br-100 h2 w2 mr3 pa2 bg-near-white ba b--black-10" href="https://github.com/anamariasosam/pick_react_app" target="_blank">
          <svg data-icon="github" viewBox="0 0 32 32">
          <title>github icon</title>
          <path d="M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z"></path>
          </svg>
        </a>
      </div>
    </div>
    <div className="db dn-ns">
      <p className="f7 black-70 mt4 tc">
        Copyright © Pick 2018
      </p>
    </div>
  </footer>
)

export default Footer;
