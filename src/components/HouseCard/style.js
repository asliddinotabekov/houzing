import styled from 'styled-components';
import { bath, bed, car, love, resize, ruler } from '../../assets/icons';
// import { ReactComponent as bed } from '../../assets/icons/bed.svg';
// import { ReactComponent as bath } from '../../assets/icons/bath.svg';
// import { ReactComponent as garage } from '../../assets/icons/car.svg';
// import { ReactComponent as ruler } from '../../assets/icons/ruler.svg';
// import { ReactComponent as love } from '../../assets/icons/love.svg';
// import { ReactComponent as resize } from '../../assets/icons/resize.svg';

const Container = styled.div`
width: 100%;
  max-width: 680px;
  min-width: 530px;
  height: 530px;
  &:hover{
    filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  }
  border: 1px solid rgba(230, 233, 236, 1);
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  max-height: 221px;
  min-height: 220px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: ${({ footer }) => (footer ? 'row' : 'column')};
  justify-content: ${({ footer }) => footer && 'space-between'};
  padding-top: 24px;
  padding: 16px 20px;
  background: white;
`;
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
`;

Details.Item = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  align-items: ${({ footer }) => !footer && 'center'};
`;

const Icons = styled.div``;

Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(car)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)``;
Icons.Love = styled(love)`
  width: 27px;
  height: 27px;
  padding: 6px;
  background: ${({ fav }) => fav ? "red" : "#f6f8f9"};
  border-radius: 50%;
  margin-left: 20px;
  cursor: pointer;
  path{
    fill:${({ fav }) => fav && "white"};
  }
  &:active {
    transform: scale(0.9);
  }
`;

const Divider = styled.div`
  background: #e6e9ec;
  height: 1px;
  width: 100%;
`;

export { Container, Img, Content, Details, Icons, Divider };