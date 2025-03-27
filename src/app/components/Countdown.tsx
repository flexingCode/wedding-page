type CountdownProps = {
    number: number;
    label: string;
}

export const Countdown = ({ number, label }: CountdownProps) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="font-carves text-4xl">{number}</h2>
            <h2 className="font-calista text-2xl">{label}</h2>
        </div>
    )
}
