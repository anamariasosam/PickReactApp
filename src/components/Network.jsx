import React from 'react'

const Network = ({name}) => (
  <article className="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns">
    <h4 className="f5 f4-l fw6">{name.toUpperCase()}</h4>
    <a
      className="f6 db fw6 pv3 black-70 link dim"
      href={`https://${name}.com`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {`${name}.com`}
    </a>
  </article>
)

export default Network;
