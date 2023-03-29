import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { PRODUCT_DATA } from "../store/types"
const Addproduct = () => {
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const [productdetails, setProductDetails] = useState({
        name: "",
        description: "",
        brand: "",
        category: "",
        file: "",
        price: null,
        productid:null
    })
    const productid=(min,max)=>{
        return Math.floor(Math.random()*((max-min)+1))+1
    }
    const uploadImage = async (e) => {
        const file = e.target.files[0];
        console.log("file", file);
        const base64 = await convertBase64(file);
             setProductDetails({...productdetails,
          file:base64})
          
      };
      const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      };
    const Submit = (e) => {
        e.preventDefault()
        dispatch({
            type: PRODUCT_DATA,
            payload: {...productdetails, productid:productid(1, 100)}
        })
        navigate("/")
    }
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
                <form onSubmit={Submit}>
                    <div className="form-group">
                        <input type="text"
                            style={{ width: "300px" }}
                            className="form-control"
                            placeholder="Product Name"
                            onChange={(e) => {
                                setProductDetails({
                                    ...productdetails,
                                    name: e.target.value
                                })
                            }} />
                    </div><br />
                    <div className="form-group">
                        <input type="text"
                            style={{ width: "300px" }}
                            className="form-control"
                            placeholder="Brand"
                            onChange={(e) => {
                                setProductDetails({
                                    ...productdetails,
                                    brand: e.target.value
                                })
                            }} />
                    </div><br />
                    <div className="form-group">
                        <select style={{ width: "300px" }}
                            className="form-control"
                            onChange={(e) => {
                                setProductDetails({
                                    ...productdetails,
                                    category: e.target.value
                                })
                            }}
                        >
                            <option value="">---Select Category---</option>
                            <option value="Mobiles">Mobiles</option>
                            <option value="Grocery">Grocery</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Toys">Toys</option>
                        </select>
                    </div><br />
                    
                    <div className="form-group">
                        <textarea type="text"
                            style={{ width: "300px", height: "80px" }}
                            className="form-control"
                            placeholder="Description"
                            onChange={(e) => {
                                setProductDetails({
                                    ...productdetails,
                                    description: e.target.value
                                })
                            }} />
                    </div><br />
                    <div className="form-group">
                        <input type="number"
                            style={{ width: "300px" }}
                            className="form-control"
                            placeholder="Price"
                            onChange={(e) => {
                                setProductDetails({
                                    ...productdetails,
                                    price: e.target.value
                                })
                            }} />
                    </div><br />
                    <div className="form-group">
                        <label for="imageupload"
                         className="btn btn-outline-dark"
                         style={{ width: "300px" }}
                         >Upload Product Image</label>
                        <input type="file"
                            id="imageupload"
                            style={{ width: "300px",display:"none" }}
                            className="form-control"
                            placeholder="Description"
                            accept="image/jpeg"
                            onChange={(e) => {
                                uploadImage(e)
                            }} />
                    </div><br />
                    <button className="btn btn-success form-control"
                        style={{ width: "300px" }}
                    >Add Product</button>
                </form>
            </div>
        </>
    )
}
export default Addproduct