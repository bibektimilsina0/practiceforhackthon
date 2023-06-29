import Preview from "./Preview";
import { useState, useEffect } from "react";
import image from '../../image/adventure.jpeg'


function Collection() {
    const [source, setSource] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/api/crypto')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setSource(data)
            })
    }, [])
    return (
        <div className=" h-full mt-0 ">
            <h1>Collection of VR Video</h1>
            <div className="flex flex-col">
                <div className="flex flex-row justify-around ">
                    {
                        source.slice(0, 3).map((product) => {

                            return (
                                <div className="collect m-4 ">
                                    <h1>{product.name}</h1>
                                    <Preview vidsource={product.video} key={product.id} id={product.cid} rid={product.rid} data={product} />
                                  
                                </div>
                            )

                        })
                    }
                </div>
                <div className="  flex flex-row justify-around">
                    {
                        source.slice(3, 6).map((product) => {

                            return (
                                <div className="collect m-4  ">
                                          <h1>{product.name}</h1>
                                    <Preview vidsource={product.video} key={product.id} id={product.cid} rid={product.rid} data={product}  />
                                   
                                </div>
                            )

                        })
                    }
                </div>

            </div>
        

        </div>
    )
}
export default Collection;