'use client'

import { IconButton } from "./IconButton";

type NavigationButtonSectionProps = {
    googleMapsLink: string;
    wazeLink: string;
}


const NavigationButtonSection = ({ googleMapsLink, wazeLink }: NavigationButtonSectionProps) => {
    return (
        <div className="flex gap-4">
            <IconButton icon={<img src="/social-icons/google-maps.png" />} onClick={() => { window.open(googleMapsLink, "_blank") }} />
            <IconButton icon={<img src="/social-icons/waze.png" />} onClick={() => { window.open(wazeLink, "_blank") }} />
        </div>
    )
}

export default NavigationButtonSection;