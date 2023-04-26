import React from 'react';
import '../../styles/modalStyles/modal.css'

function UnderConst() {
    const briks = [
        [1,2,3],
        [1,2,3,1],
        [1,2,3],
        [1,2,3,1],
        [1,2,3],
    ]
    return (
        <div className='underC'>
            <h3 style={{fontSize: '24px', width: 'max-content', marginTop: '7rem'}}>Still under construction 🚧</h3>
            <div className='wall'>
                {briks.map((row)=>{
                    return <div className='row'>
                        {row.map(()=><div className='brik'></div>)}
                    </div>
                }
                )}
            </div>
        </div>
    );
}

export default UnderConst;