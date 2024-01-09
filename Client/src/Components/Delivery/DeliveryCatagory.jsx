import React from 'react'


const DeliveryCatagory = (props) => {
    return (
        <>
            <div className='w-auto h-42 gap-3 flex flex-col items-center'>
                <div className='lg:w-36 lg:h-36 rounded-full w-20 h-20'>
                    <img src={props.img} alt={props.name}
                        className='w-full h-full rounded-full object-cover' />
                </div>
                <div className='flex flex-col items-ceter'>
                    <h6 className='lg:text-base font-medium text-sm'>{props.name}</h6>
                    <p>{props.timing}</p>
                </div>
                
            </div>
        </>
    )
}

export default DeliveryCatagory
