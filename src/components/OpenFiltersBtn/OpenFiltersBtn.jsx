import sprite from '../../assets/svgSprite/iconsSprite.svg';
import { Wrapper, Button, SvgIcon, Text } from './OpenFiltersBtn.styled';

const OpenFiltersButton = ({ click }) => {

  

  return (
    <Wrapper>
      <Button onClick={click}>
        <SvgIcon>
          <use xlinkHref={`${sprite}#icon-filter`} width={16} height={16} />
        </SvgIcon>
        <Text>Filters</Text>
      </Button>
    </Wrapper>
  );
};

export default OpenFiltersButton;
