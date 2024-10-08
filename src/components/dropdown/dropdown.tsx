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
    <div
      ref={ref}
      className='w-20 pb-0 relative border-none rounded-md bg-secondary'
    >
      <div
        onClick={() => setOpen(!open)}
        className={
          'flex items-center justify-between gap-2 hover:cursor-pointer font-semibold pl-4 pr-2 py-2 w-20'
        }
      >
        <p
          className={`${
            selectedItem ? 'opacity-100' : 'opacity-70'
          } text-light lining-nums`}
        >
          {selectedItem}
        </p>

        <DropdownIcon
          className={`${open && 'rotate-180'} text-md text-light`}
        />
      </div>

      <div
        className={`${
          open ? 'block' : 'hidden'
        } absolute bg-secondary rounded-md z-10 hover:cursor-pointer mt-[-14rem] left-0 w-20`}
      >
        {items?.map((item) => (
          <div
            key={item}
            onClick={() => handleSelect(item)}
            className={`${
              selectedItem === item
                ? 'bg-light text-primary bg-opacity-70'
                : 'hover:bg-light hover:bg-opacity-40 hover:text-primary hover:cursor-pointer'
            } pl-4 py-1.5 px-2 first:rounded-t-md last:rounded-b-md font-semibold lining-nums w-20`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
