import React, { Component } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import "../layouts/masonry.scss";

class Imagenes extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
    this.loadimg();
  }
  // componentWillUnmount() {}

  loadimg() {
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=iphone&client_id=a322a1eeefcea7de09bd284c21489afcb274af47aed1dbda8a9e197546780f93`
    )
      .then(res => res.json())
      .then(res => this.setState({ items: res.results }));
  }

  render() {
    console.log(this.state.items);
    return (
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {this.state.items.map((e, i) => (
            <div style={{ padding: "7px" }} key={i}>
              <img

                src={e.urls.small}
                style={{
                  width: "100%",
                  display: "block",
                  marginBottom: "5px"
                }}
                alt=""
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    );
  }
}
export default Imagenes;
