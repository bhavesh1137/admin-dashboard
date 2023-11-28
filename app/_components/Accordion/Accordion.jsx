"use client"
import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border rounded mb-2">
      <div
        className="cursor-pointer p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

export default Accordion;