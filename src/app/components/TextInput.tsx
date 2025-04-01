type TextInputProps = {
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    multiline?: boolean;
}

export const TextInput = ({ label, placeholder, value, onChange, multiline = false }: TextInputProps) => {
    return <div className="flex flex-col gap-2">
        <label htmlFor={label} className="font-nexa-heavy text-sm">{label}</label>
        {multiline ? (
            <textarea
                className="w-full border-2 border-gray-100 rounded-md p-2 bg-gray-50"
                placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
        ) : (
            <input
                className="w-full border-2 border-gray-100 rounded-md p-2 bg-gray-50"
                type="text" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
        )}
    </div>
}