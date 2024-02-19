import React from 'react';

interface NewsByCategoryProps {
    button: string[];
    handleFilter: (category: string) => void;
}

const NewsByCategory: React.FC<NewsByCategoryProps> = ({ button, handleFilter }) => {
    return (
        <div>
            {button.map((category, index) => (
                <div key={index}>
                    <button
                        className='text  font-semibold  p-2 hover:underline'
                        onClick={() => handleFilter(category)}
                    >
                        {category}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default NewsByCategory;
