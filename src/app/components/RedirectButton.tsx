'use client'
interface RedirectButtonProps {
    redirect: string;
    label: string;
}

export const RedirectButton = ({ redirect, label }: RedirectButtonProps) => {
    return (
        <button onClick={() => window.open(redirect, "_blank")} 
            className="bg-primary-500 text-white p-4 rounded-full hover:bg-primary-100 active:bg-primary-100 transition-all duration-100">
            <span className="text-sm font-nexa-heavy">
                {label}
            </span>
        </button>
    )
}

