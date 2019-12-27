import React, { Component } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: ".my-bg-image-el" };

class Masory extends Component {
  render() {
    return (
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="3">{this.props.children}</Masonry>
      </ResponsiveMasonry>
    );
  }
}
export default Masory;
