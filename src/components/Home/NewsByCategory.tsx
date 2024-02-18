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
                        className='text mb-2 font-bold bg-gray-200 p-2 rounded-lg'
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
