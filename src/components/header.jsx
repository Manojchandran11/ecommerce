import { useNavigate } from "react-router-dom"
const Header = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="p-3 bg-primary">
                <h3 style={{color:"white"}}>Techzarinfo</h3>
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-7 col-lg-6 col-xl-5">
                        <button className="btn btn-light me-4" onClick={()=>{
                            navigate("/")
                        }}>Home</button>
                        <button className="btn btn-light me-4" onClick={() => {
                            navigate("/addproduct")
                        }}>Add Product</button>
                        <button className="btn btn-light"
                        onClick={()=>{
                            navigate("/cart")
                        }}>Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header