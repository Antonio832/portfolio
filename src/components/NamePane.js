import React, {  useState, useLayoutEffect} from 'react';
import '../styles/Pane.css'
import Modal from './modal'

const NamePane = () => {

    const [isHover, setHoverState] = useState(false)
    const [hoverCount, setHoverCount] = useState(0)

    useLayoutEffect(()=>{
    }, [])

    const mouseEnter = () =>{
        document.getElementById('name').classList.remove('simple')
        document.getElementById('name').classList.add('expanded')
        document.getElementById('hoverMe').classList.add('invisible')
        setHoverCount(hoverCount + 1)
        setHoverState(true)
    }
    
    const mouseLeave = () =>{
        setTimeout(()=>{
            document.getElementById('name').classList.remove('expanded')
            document.getElementById('name').classList.add('simple')
            setHoverState(false)
        }, 2000)
    }

    return (
        <div 
            className={'pane pair namePane'} 
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
        >
            {hoverCount < 1 ? 
                <div id='hoverMe'>
                    Hover me!
                </div> 
            : null}
            <div id='name' className='simple'>
                <div id='a' className='letter'>A{isHover ? 'ntonio' : null}</div>
                <div id='m' className='letter'>M{isHover ? 'edina' : null}</div>
                <div id='v' className='letter'>V{isHover ? 'alenzuela' : null}</div>
            </div>
            {isHover ? 
                <div className='aboutProject'>
                    <Modal isFromNamePane={true} text={'About me'} type="abtMe"/>
                    <Modal isFromNamePane={true} text={'About this project'} type={"abtPro"} />
                </div> : null 
            }
        </div>
    );
};

export default NamePane;