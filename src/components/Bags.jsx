// function Bags() { 
//     return ( 
//       <h1>This is .</h1> 
//     ) 
//   } 

// export default Bags;
import Apples from "./Apples";
import Pears from "./Pears"

function Bags(props) {
    const bag = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 0"
        // color: purple,
        // background-color: yellow
    }
    return (
        <div style={bag}>
            {props.children}
        </div>
    )
}
export default Bags