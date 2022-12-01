const Home = (props) => {
    return (
        <>
         
        
            <div className="box">
                <div>
                    <img src={props.imageurl} alt="" />
                </div>
                <div className="course">
                    {props.name}
                </div>
                <div className="flex border">
                    <div className="icons">
                        {props.icons}
                    </div>
                    <div className="v-btn">
                        <button>
                            {props.btn}
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Home;