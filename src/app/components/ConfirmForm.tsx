'use client'
import { ToastContainer } from "react-toastify";
import { TextInput } from "./TextInput";
import { useState } from "react";
import { toast } from "react-toastify";

const ConfirmForm = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch('/api/confirm', {
                method: 'POST',
                body: JSON.stringify(formData)
            })
            const data = await response.json();
            if (response.ok) {
                toast.success('Asistencia confirmada', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
                setFormData({
                    name: '',
                    email: ''
                })
                setIsLoading(false);
            } else {
                toast.error(data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
                setIsLoading(false);
            }
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    }

    return (
        <form className="p-8 gap-4 flex flex-col" onSubmit={handleSubmit}>
            <TextInput label="Nombre Completo" placeholder="Nombre Completo" value={formData.name} onChange={(value) => setFormData({ ...formData, name: value })} />
            <TextInput label="Correo electrónico (opcional)" placeholder="Correo electrónico" value={formData.email} onChange={(value) => setFormData({ ...formData, email: value })} />
            <button type="submit" disabled={isLoading} className="cursor-pointer bg-primary-500 text-white px-4 py-3 rounded-md disabled:opacity-50 disabled:cursor-not-allowed">Confirmar asistencia</button>
            <ToastContainer />
        </form>
    )
}

export default ConfirmForm;