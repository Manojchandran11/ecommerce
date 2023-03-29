import { connect } from "react-redux"
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { CART_DATA } from "../store/types";
const mapStateToProps = (state) => ({
    reducer: state
})
const View = ({ reducer: { productlist } }) => {
    const { productid } = useParams();
    const currentproduct = productlist && productlist.find(
        (cproduct) => cproduct.productid === parseInt(productid)
    );
    console.log(currentproduct, "currentproduct");
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const cart = (e) => {
        e.preventDefault()
        dispatch({
            type: CART_DATA,
            payload: currentproduct
        })
        navigate("/cart")
    }
    return (
        <>
            <div className="card m-2">
                <div className="mt-2">
                    <img src={ currentproduct.file} height={350} width={400}
                        className="border-radius-9"
                        alt={currentproduct.name}></img>
                </div>
                <div className="mcard-body">
                    <h6 className="mt-2">Rs {currentproduct.price}</h6>
                    <h6 className="card-title">{currentproduct.name}</h6>
                    <h6 className="mt-2">Brand: {currentproduct.brand}</h6>
                    <h6 className="mt-2">Category: {currentproduct.category}</h6>
                    <h6 className="mt-2">Description: {currentproduct.description}</h6>
                    <div className="mt-4 mb-3">
                        <button className="btn btn-success">Buy now</button>
                        <button className="ms-3 btn btn-success" onClick={cart}>Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default connect(mapStateToProps)(View)