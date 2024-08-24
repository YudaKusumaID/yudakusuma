import React, { ReactNode } from 'react'

interface TabButtonProps {
    active: boolean;
    selectTab: () => void;
    children: ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-white border-b border-white' : 'text-[#ADB7BE]'
    return (
        <button
            onClick={selectTab}
            className={`relative mr-3 font-semibold hover:text-white ${buttonClasses}`
        }
        >
            {children}
        </button>
    )
}

export default TabButton