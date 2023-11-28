import React from 'react';

const QuestionForm = ({ title, options, radioRegister, error, classname, span }) => {

    return (
        <div className={`${span} flex justify-between items-center py-[14px]`}>
            <h2 className={`${classname} text-[16px] font-normal`}>{title}</h2>
            <div className='flex gap-[24px] flex-col sm:flex-row'>
                {options.map((option, i) => {
                    return <label key={i} className='flex gap-2 items-center cursor-pointer'>
                        <input
                            type="radio"
                            value={option}
                            className="w-4 h-4"
                            {...radioRegister}
                        />
                        {option}
                    </label>
                })}
                {<p className='text-red-400'>{error}</p>}
            </div>
        </div>
    );
};

export default QuestionForm;
