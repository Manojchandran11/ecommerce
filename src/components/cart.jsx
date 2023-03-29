import { connect } from "react-redux"
import { useDispatch } from "react-redux"
import { DELETE_CART_PRODUCT, CART_PRODUCT_INCREMENT } from "../store/types"
const mapStateToProps = (state) => ({
    reducer: state
})
const Cart = ({ reducer: { cartlist } }) => {
    const dispatch = useDispatch()

    return (
        <>
            {cartlist && cartlist.map((item, i) => {
                return (
                    <div className="d-flex m-2 align-items-center justify-content-center">
                        <img src={item.file} height={150} width={180}
                            className="border-radius-9 me-4"
                            alt={item.name}></img>
                        <h6 className="mt-2 me-4">Rs {item.price}</h6>
                        <h6 className="card-title me-4">{item.name}</h6>
                        <button className="ms-3 btn btn-danger" >-</button>
                        <span className="ms-3">{i + 1}</span>
                        <button className="btn btn-success ms-3"
                            onClick={(e) => {
                                const increment = cartlist && cartlist.filter((data) => {
                                    return data.productid === item.productid
                                })
                                e.preventDefault()
                                dispatch({
                                    type: CART_PRODUCT_INCREMENT,
                                    payload: increment
                                })
                            }}>+</button>
                        <button className="ms-3 btn btn-danger"
                            onClick={(e) => {
                                dispatch({
                                    type: DELETE_CART_PRODUCT,
                                    payload: item.productid
                                })
                            }} >Remove</button>
                    </div>
                )
            })}
        </>
    )
}
export default connect(mapStateToProps)(Cart)