import React, { useState } from 'react';
import Select from 'react-select';

const MultiSelect = (prop) => {
    let {classname} = prop
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSelectChange = (selectedOptions) => {
      setSelectedOptions(selectedOptions);
    };

    console.log(selectedOptions);
  
    return (
      <Select
        isMulti
        value={selectedOptions}
        onChange={handleSelectChange}
        options={[
          { value: 'apple', label: 'Apple' },
          { value: 'orange', label: 'Orange' },
          { value: 'banana', label: 'Banana' },
        ]}
        className={`${classname} z-10 bg-black`}
        classNamePrefix="react-select"
      />
    );
  };

export default MultiSelect;
