import { connect } from "react-redux"
import { Link } from "react-router-dom";
const mapStateToProps = (state) => ({
    reducer: state
})
const Home = ({ reducer: { productlist } }) => {

    return (
        <>
            <div >
                <ol className="d-flex m-2 align-items-center justify-content-center">
                    {productlist && productlist.map((item) => {
                        return (
                            <>
                            <li>
                                    <img src={item.file} height={150} width={180}></img>
                                    <h5 className="card-title mt-4">{item.name}</h5>
                                    <h5 className="card-title mt-4">Rs {item.price}</h5>
                                    <Link to={`/view/${item.productid}`} className="btn btn-success mt-4">View</Link>

                            </li>
                            </>
                        )

                    })}
                      </ol>
            </div>
        </>
    )
}
export default connect(mapStateToProps)(Home)