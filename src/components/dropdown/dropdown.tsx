import { FC, useEffect, useRef, useState } from 'react';
import { RxChevronDown as DropdownIcon } from 'react-icons/rx';

interface Props {
  onSelect: (item: number | any) => void;
  items: number[];
  selectedItem: number;
}

const Dropdown: FC<Props> = ({ items, onSelect, selectedItem }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleSelect = (item: number) => {
    onSelect(item);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref]);

  return (
    <div ref={ref} className='px-8'>
      <div className={`p-2 rounded-md bg-secondary w-20 hover:opacity-70`}>
        <div
          onClick={() => setOpen(!open)}
          className='flex items-center justify-between hover:cursor-pointer font-semibold pl-3'
        >
          <p className='text-light lining-nums'>{selectedItem}</p>
          <DropdownIcon className={`${open && 'rotate-180'} text-light`} />
        </div>
      </div>

      {open && (
        <div className='absolute mt-1 bg-secondary rounded-md overflow-hidden shadow-md'>
          {items?.map((item) => (
            <div
              key={item}
              onClick={() => handleSelect(item)}
              className={`${
                selectedItem === item
                  ? 'bg-light text-primary bg-opacity-70'
                  : 'hover:bg-light hover:bg-opacity-40 hover:cursor-pointer'
              } py-1.5 px-6 first:rounded-t-md last:rounded-b-md font-semibold w-20 lining-nums`}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
