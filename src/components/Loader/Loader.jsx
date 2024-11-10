import ReactLoading from 'react-loading';

export const Loader = () => {
    return(
        <div className='d-flex justify-content-center align-items-center flex-column'>
            <ReactLoading type="spinningBubbles" color="#801d39" />
        </div>
        
    )
}