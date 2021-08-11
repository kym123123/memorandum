import { CategoryType } from './types';

interface NewsCategoryItemProps {
  icon: React.ReactElement;
  categoryText: CategoryType;
  category: CategoryType;
  changeCategory: (category: CategoryType) => void;
}

const NewsCategoryItem = ({
  icon,
  categoryText,
  category,
  changeCategory,
}: NewsCategoryItemProps) => (
  <li
    onClick={() => changeCategory(categoryText)}
    className={
      categoryText === category ? 'category-item active' : 'category-item'
    }
  >
    {<>{icon}</>}
    <span className="category-text">{categoryText}</span>
  </li>
);

export default NewsCategoryItem;
