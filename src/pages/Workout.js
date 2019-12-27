// import React from "react"
// import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
//
// // The number of columns change by resizing the window
// class MyWrapper extends React.Component {
//     render() {
//         return (
//             <ResponsiveMasonry
//                 columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
//             >
//                 <Masonry>
//                     <ChildA />
//                     <ChildB />
//                     {/* Children */}
//                     <ChildY />
//                     <ChildZ />
//                 </Masonry>
//             </ResponsiveMasonry>
//         )
//     }
// }


import React from "react";
import ReactDOM from "react-dom";
import Imagenes from "../components/Imagens";

import "../layouts/masonry.scss";

function App() {
  return (
    <div className="App">
      <Imagenes />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
