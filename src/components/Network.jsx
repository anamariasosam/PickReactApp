import React from 'react'

const Network = ({name}) => (
  <article class="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns">
    <h4 class="f5 f4-l fw6">{name.toUpperCase()}</h4>
    <a class="f6 db fw6 pv3 black-70 link dim"  href={`https://${name}.com`}>
      {`${name}.com`}
    </a>
  </article>
)

export default Network;
