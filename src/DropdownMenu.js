import React from 'react';
function DropdownMenu() {
    const [selectedOption, setSelectedOption] = React.useState(null);
  
    // Function to handle option selection
    const handleOptionSelect = (option) => {
      setSelectedOption(option);
    };
  
    return (
      <div>
        {/* Display the selected option */}
        <p>Selected Option: {selectedOption}</p>
        
        {/* Dropdown menu */}
        <select value={selectedOption} onChange={(e) => handleOptionSelect(e.target.value)}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    );
  }
  export default DropdownMenu;
