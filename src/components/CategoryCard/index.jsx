import { Blur, Container, Content, Img,   } from './style';
import noimg from '../../assets/img/noimg.jpeg';
import ctg1  from '../../assets/img/category.png';

export const CategoryCard = ({onClick,data = {}}) => {
  console.log(data)
  const { name} = data
  return (
    <Container onClick={onClick}>
      <Blur/>
      <Img src={ctg1 ||noimg} />
      <Content>
        {name || "Category name"}
      </Content>
    </Container>
  );
};

export default CategoryCard;

