import { XMarkIcon } from '@heroicons/react/24/outline';

const OrderCard = ({ product, deleteProduct }) => {

    let renderIcon;

    if(deleteProduct) {
        renderIcon = (<div className='cursor-pointer' onClick={() => deleteProduct(product.id)}>
        <XMarkIcon className='h-6 w-6 text-black'/></div>);
    }

    return (
        <div className='flex justify-between items-center mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={product.image} alt={product.name}/>
                </figure>
                <p className='text-sm font-light'>{product.name}</p>
            </div>
            <div className='flex justify-between items-center gap-2'>
                <p className='text-lg font-medium'>${product.price}</p>
                {renderIcon}
            </div>
        </div>
    );
}

export default OrderCard;