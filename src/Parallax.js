const Parallax = (props)=>{
    return(
        <>
        <div className="box-3">
            <div className="image">
                <div className="container">
                <img src={props.image2 } alt="" />
                </div>
            </div>
            <div className="name2">
                <h2>{props.cnt}</h2>
                {props.name2}
            </div>
        </div>
            {/* </div> */}
        </>
    )
}
export default Parallax;