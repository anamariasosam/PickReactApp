import React, {Component} from 'react'
import Masonry from 'react-masonry-component'

const masonryOptions = {
    transitionDuration: 300
}

export default class Gallery extends Component {

  render() {
    return(
      <Masonry
        className="cf w-100"
        elementType={'div'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad
      >
        {this.props.images.map(image => {
          return(
            <div className="fl w-50 w-third-m w-25-ns" key={image.id}>
              <a href={image.download} download>
                <div className="aspect-ratio aspect-ratio--1x1">
                  <img
                    style={{backgroundImage: `url(${image.url})`}}
                    className="db bg-center cover aspect-ratio--object"
                    alt=""
                  />
                </div>
              </a>
            </div>
          )
        })}
      </Masonry>
    )
  }
}
