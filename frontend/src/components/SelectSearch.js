import React, { useState, useEffect, useCallback, useRef } from 'react';

import './SelectSearch.css';

function SelectSearch({
  listItems,
  placeholder,
  name,
  value,
  handleChange,
  setFilter = (x) => {},
  attrName = 'name',
}) {
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const wrapperRef = useRef(null);
  const [attrNameAux, setAttrNameAux] = useState(attrName.split('.'));
  const [isSelect, setIsSelect] = useState(Boolean(value));
  const [itemSearch, setItemSearch] = useState(value || '');
  const [countItem, setCountItem] = useState(-1);

  const handleKeyList = (e) => {
    if (e.keyCode === 40 && countItem < listItems.length) {
      setCountItem(countItem + 1);
    }
    if (e.keyCode === 38 && countItem > -2) {
      setCountItem(countItem - 1);
    }
  };

  useEffect(() => {
    if (countItem === -1) {
      inputRef.current.focus();
    }
    if (countItem > -1 && countItem < listItems.length) {
      listRef.current.childNodes[countItem].focus();
    }
  }, [countItem]);

  useEffect(() => {
    setFilter(itemSearch);
  }, [itemSearch]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsSelect(true);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  const renderListItems = () => {
    return (
      itemSearch !== '' &&
      listItems &&
      listItems.map((item, _) => {
        const valueItem = attrNameAux.length === 1 ? item[attrName] : item[attrNameAux[0]][attrNameAux[1]];
        return (
          <li
            key={_}
            className={'item-select-search list-group-item'}
            tabIndex={1}
            onKeyDown={(e) => {
              handleKeyList(e);
              if (e.key === 'Enter') {
                setIsSelect(true);
                setItemSearch(valueItem);
                handleChange({ ...e, target: { ...e.target, name: name, value: item } });
              }
            }}
            onClick={(e) => {
              setIsSelect(true);
              setItemSearch(valueItem);
              handleChange({ ...e, target: { ...e.target, name: name, value: item } });
            }}>
            {valueItem}
          </li>
        );
      })
    );
  };

  return (
    <div ref={wrapperRef}>
      <input
        autoComplete='off'
        ref={inputRef}
        type='text'
        className='form-control'
        placeholder={placeholder}
        name='itemSearch'
        value={itemSearch}
        onChange={(e) => {
          setIsSelect(false);
          setItemSearch(e.target.value);
        }}
        onFocus={() => {
          setCountItem(-1);
        }}
        onKeyDown={handleKeyList}
      />
      <ul tabIndex={1} ref={listRef} className='list-select-search list-group'>
        {isSelect ? null : renderListItems()}
      </ul>
    </div>
  );
}

export default SelectSearch;
