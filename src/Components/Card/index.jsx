const Card = ({ product }) => {
    return (
        <div className="bg-white cursor-pointer w-60">
            <figure className="w-60 h-52 relative">
                <img src={product.images[0]} className="w-full h-full rounded-lg object-cover" alt={product.title}/>
                <p className="absolute bottom-0 left-0 m-2 bg-white/60 py-0.5 px-3 rounded-lg text-xs text-black">{product.category.name}</p>
                <div className="absolute top-0 right-0 m-2 bg-white w-6 h-6 rounded-full p-1 flex justify-center items-center font-light text-xl">+</div>
            </figure>
            <p className="py-2 flex justify-between items-center">
                <span className="font-light text-sm">{product.title}</span>
                <span className="font-medium text-lg">${product.price}</span>
            </p>
        </div>
    );
}

export default Card;