import styled from 'styled-components';

const getStyle =({type})=>{
    switch(type){
        case 'dark':
            return{
    background:'transparent',
    border:"1px solid white",
    color:'white',
}
    case 'light' :
        return{
            background:'#fff',
            border:"1px solid #ECEEF1",
            color:'#0D263B',  
        } 
    case 'primary' :
    return{
        background:'#0061DF',
        border:"none",
        color:'white',  
    } 
    default :return{
        background:'#0061DF',
        border:"none",
        color:'white', 
    }
    }
}

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-width:120px;

font-size:${({font})=>font?`${font}px`:'14px'} ;
height: ${({h})=>h?`${h}px`:'44px'};
width: ${({w})=>w?`${w}px`:'130px'};
border-radius:2px;
cursor: pointer;
${getStyle}
&:active{
    opacity:0.7;
}

`;