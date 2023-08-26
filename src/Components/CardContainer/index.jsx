const CardContainer = ({ children }) => {
    return (
        <div className='grid lg:grid-cols-4 grid-cols-3 justify-items-center gap-4 w-full max-w-screen-lg pt-5'>
            {children}
        </div>
    );
}

export default CardContainer;