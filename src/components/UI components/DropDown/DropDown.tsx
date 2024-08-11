'use client';

import { useState, type FC } from 'react';
import styles from './DropDown.module.scss';
import { Button } from '../Button/Button';

interface DropDownProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
}

export const DropDown: FC<DropDownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>('');

  const toggleDropDown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropDown}>
      <Button
        type="button"
        className={styles.dropDownButton}
        onClick={toggleDropDown}
      >
        {selectedOption || 'Choose a Product'}
        <svg
          width="16"
          height="10"
          viewBox="0 0 20 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${styles.dropDownIcon} ${isOpen ? styles.rotate : ''}`}
        >
          <path
            d="M1 1L10 9.5L19 1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </Button>
      <ul className={`${styles.dropDownMenu} ${isOpen ? styles.open : ''}`}>
        {options.map((option) => (
          <li
            key={option}
            onClick={() => handleOptionClick(option)}
            className={styles.dropDownItem}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};
