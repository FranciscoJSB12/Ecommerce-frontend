const CardContainer = ({ children }) => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  justify-items-center gap-4 w-full max-w-screen-lg pt-5'>
            {children}
        </div>
    );
}

export default CardContainer;