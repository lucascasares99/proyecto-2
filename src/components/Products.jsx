export const Products = ({ products, buyProduct }) => {
    return <div className="row">
        {products.map((element,index) => {
        return <div className= "col-3" key={index}>
        <h1>{element.title}</h1>
        <h3> Precio ${element.price}</h3>
        <img src={element.image} height={200} width={300} alt="" />
        <button onClick={()=>(buyProduct(element))}>comprar</button>
    </div >
})}
</div>
}