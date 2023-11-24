import React, { useEffect, useState } from 'react';

type DropDownProps = {
  sports: any;
  isActive: boolean;
  handleDropdown: Function;
  handleSportSelection: Function;
};

const DropDown: React.FC<DropDownProps> = ({
  sports,
  handleSportSelection,
}: DropDownProps): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);

  /**
   * Handle passing the city name
   * back to the parent component
   *
   * @param city  The selected city
   */
  const onClickHandler = (city: string): void => {
    handleSportSelection(city);
  };

  useEffect(() => {
    setIsActive(isActive);
  }, [isActive]);

  return (
    <>
      <div className={isActive ? 'dropdown' : 'dropdown active'}>
        {sports.map(
          (sport: string, index: number): JSX.Element => {
            return (
              <p
                key={index}
              >
                {sport}
              </p>
            );
          }
        )}
      </div>
    </>
  );
};

export default DropDown;
