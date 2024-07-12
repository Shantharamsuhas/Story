function Apples(props) {
      return (
        <div className="promo-section" style={{ backgroundColor: "green" }}>
            <div>
                <h2 style={{color:"tomato",backgroundColor: "yellow", fontSize:"40px", fontWeight:"bold"}}>These apples are: {props.color}</h2>
                </div>
                <div>
                <h3>There are {props.number} apples.</h3>
            </div>
        </div>
      )
    }
    export default Apples