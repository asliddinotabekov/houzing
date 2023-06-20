import styled,{css} from 'styled-components';
import { bath, bed, car, ruler, resize,love,share,file_dow , abet,
  window,
  wifi,
  wash,
  tv,
  bassen,
  xamom,
  freezer,
  zontik,
  mikro,
  kir,
  lawn,
  gym,
  qozon,
  kansaner,fen, start
}  from '../../assets/icons'

// ==============Block = ========//

export const Container = styled.div`
  display: flex;
  padding: var(--padding);
  width: 100%;
  max-width: 1440px;
  margin: auto;
  justify-content: space-between;

  `;
  export const Container1 = styled.div`
  height: 450px;
  width: 100%;
  padding: 25px 130px 25px 130px;
  display: grid;
  grid-template-columns: auto auto auto ;
  gap: 20px;

`;
export const Children = styled.img`
 
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
  padding-top: 50px;
  color: #fff;
  font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 44px;
background-size: cover;
`;

export const ImageContainer = styled.div`
  display: flex;
  padding: var(--padding);
  width: 100%;
  max-width: 1440px;
  margin: auto;
  margin-bottom: 24px;
  margin-top: 24px;
`;
export const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-left: 20px;
`;


ImageContainer.Main = styled.img`
  width: 100%;
  max-width: 580px;
  max-height: 400px;
`;
ImageContainer.Subimg = styled.img`
  position: relative;
  width: 100%;
  max-width: 280px;
  max-height: 190px;
`;

  export const YInfo = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  
  
  /* Color/2 */
  
  color: #0D263B;
  
  `;

export const SectionLeft = styled.div`
 width: 100%;
 max-width: 880px;
 padding-top: 24px;
  `;

export const SectionRight = styled.div`
  width: 100%;
  max-width: 280px;
  height: fit-content;
  /* margin-top: 24px; */
  background: #FFFFFF;

/* border */

border: 1px solid #E6E9EC;
border-radius: 3px;
padding: 24px;

`;


export const Details = styled.div`
  display: flex;
  justify-content: space-between;
`;

Details.Item = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  align-items: ${({ footer }) => !footer && 'center'};
`;

export const Description = styled.div`
position: relative;
`;
export const Blur = styled.div`
position: absolute;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, white 100%);
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
`;
export const Blurs = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: bold;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  /* identical to box height, or 122% */

  letter-spacing: -0.02em;

  color: #ffffff;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
`;
Blurs.Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 280px;
  max-height: 190px;
`;


export const More = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
padding-top: 25px;
padding-bottom: 16px;
/* identical to box height, or 143% */

text-decoration-line: underline;

/* Color / 1 */

color: #0061DF;
`;

export const Download = styled.div`
  font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.01em;
text-decoration-line: underline;
text-transform: uppercase;
color: #0061DF;
padding: 0 50px 0 24px;
`;



// ==============Constanta = ========//
 
const for_icon = css`
/* background: #F6F8F9; */
border-radius: 15px                                                                                                                                   ;
padding: 11px;
width: 35px;
height: 35px;
`
const p_t =css`
padding:0 8px 0 24px;

`

// ==============Icons = ========//

export const Icons = styled.div`
  width: 35px;
  height: 35px;
  background-color: #F6F8F9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  margin-right: 15px;
`;  

const def =css`
    width: 16px;
    height: 16px;
    align-items: center;
`

Icons.Kansaner =styled(kansaner)`
${def}
`
Icons.Abet =styled(abet)`
${def}
`

Icons.Window =styled(window)`
${def}
`

Icons.Wifi =styled(wifi)`
${def}
`
Icons.Wash =styled(wash)`
${def}
`
Icons.Bassen =styled(bassen)`
${def}
`
Icons.Tv =styled(tv)`
${def}
`
Icons.Freezer =styled(freezer)`
${def}
`
Icons.Mikro =styled(mikro)`
${def}
`
Icons.Lawn =styled(lawn)`
${def}
`
Icons.Gym =styled(gym)`
${def}
`
Icons.Kir =styled(kir)`
${def}
`
Icons.Zontik =styled(zontik)`
${def}
`
Icons.Qozon =styled(qozon)`
${def}
`
Icons.Fen =styled(fen)`
${def}
`
Icons.Xamom =styled(xamom)`
${def}
`

Icons.Share = styled(share)`
${for_icon}
`
Icons.Love = styled(love)`
    ${for_icon}
`

Icons.Bed = styled(bed)`
`;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(car)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)``;



Icons.File = styled(file_dow)`
    width: 20px;
  height: 16px;`


Icons.Yulduz = styled(start)`
     width: 20px;
  height: 16px;`