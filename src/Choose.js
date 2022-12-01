const Choose = (props) => {
    return (
        <>
            {/* <div className="bg"> */}
            {/* <div className="container"> */}
            <div className="box-1">
                <div className="icon-box">
                    <img src={props.image} alt="" />
                </div>
                <div className="name">
                    <h5>{props.name1}</h5>
                </div>
                <div className="para">
                    {props.para}
                </div>
            </div>
            {/* </div> */}
            {/* </div> */}
        </>
    )
}
export default Choose;