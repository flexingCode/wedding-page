'use client'
type IconButtonProps = {
    onClick: () => void;
    icon: React.ReactNode;
}

export const IconButton = ({ onClick, icon }: IconButtonProps) => {
    return (
        <button onClick={onClick} 
            className="bg-primary-500 text-white p-4 rounded-full hover:bg-primary-100 active:bg-primary-100 transition-all duration-100">
            {icon}
        </button>
    )
}

