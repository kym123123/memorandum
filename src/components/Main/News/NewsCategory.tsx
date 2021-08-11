import React, { useEffect } from 'react';
import styled from 'styled-components';
import { MdBusinessCenter } from 'react-icons/md';
import { RiMentalHealthLine } from 'react-icons/ri';
import { ImLab } from 'react-icons/im';
import { GiSoccerKick } from 'react-icons/gi';
import { CgSmartphoneChip } from 'react-icons/cg';
import { BiGame } from 'react-icons/bi';
import { CategoryType } from './types';
import NewsCategoryItem from './NewsCategoryItem';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from 'src/modules';
import {
  changeCategoryActionCreator,
  requestCategoryNewsActionCreator,
} from 'src/modules/news';

interface ILeftContainerProps {
  isOpen: boolean;
}

interface INewsCategoryProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean | ((isOpen: boolean) => boolean)) => void;
}

const categoryArr = [
  { icon: <MdBusinessCenter size={'100%'} />, categoryText: 'business' },
  { icon: <BiGame size={'100%'} />, categoryText: 'entertainment' },
  { icon: <RiMentalHealthLine size={'100%'} />, categoryText: 'health' },
  { icon: <ImLab size={'100%'} />, categoryText: 'science' },
  { icon: <GiSoccerKick size={'100%'} />, categoryText: 'sports' },
  { icon: <CgSmartphoneChip size={'100%'} />, categoryText: 'technology' },
] as const;

const NewsCategory = ({ isOpen, setIsOpen }: INewsCategoryProps) => {
  const { category } = useSelector((state: RootStateType) => state.news);
  const dispatch = useDispatch();
  const history = useHistory();
  const changeCategory = (category: CategoryType) => {
    dispatch(changeCategoryActionCreator({ category }));
    setIsOpen(false);
  };

  useEffect(() => {
    history.push(`/news/${category}`);
  }, [category]);

  return (
    <LeftContainer isOpen={isOpen}>
      <NewsCategoryContainer>
        {categoryArr.map((c) => (
          <NewsCategoryItem
            icon={c.icon}
            categoryText={c.categoryText}
            category={category}
            changeCategory={changeCategory}
            key={c.categoryText}
          />
        ))}
      </NewsCategoryContainer>
      <button onChange={() => setIsOpen((isOpen) => !isOpen)}>click</button>
    </LeftContainer>
  );
};

export default NewsCategory;

const LeftContainer = styled.div`
  z-index: 1;
  width: 33.5rem;
  margin: -2.5rem; // 부모 container padding값 상쇄
  height: 100%;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 2.5rem;
  position: absolute;
  transition: 0.4s all;
  transform: ${(props: ILeftContainerProps) =>
    props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
`;

const NewsCategoryContainer = styled.ul`
  padding: 3rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  .category-item {
    cursor: pointer;
    width: 10rem;
    height: 18rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    transition: 0.3s all;
    &:active {
      transform: scale(0.95);
    }
    svg {
      padding: 2rem 1.5rem;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 1.5rem;
      margin-bottom: 1rem;
      background: linear-gradient(
        0deg,
        rgba(255, 151, 231, 0.05) 14%,
        rgba(221, 109, 221, 0.25) 100%
      );
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(3px);
      -webkit-backdrop-filter: blur(3px);
    }
    .category-text {
      font-size: 1.6rem;
    }
  }
  .category-item.active {
    svg {
      background: rgba(223, 7, 223, 0.5);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(3px);
      -webkit-backdrop-filter: blur(3px);
      border-radius: 1.5rem;
    }
  }
`;
