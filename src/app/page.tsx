import { memo } from "react";
import ConfirmForm from "./components/ConfirmForm";
import CountdownSection from "./components/CountdownSection";
import NavigationButtonSection from "./components/NavigationButtonSection";
import { IconButton } from "./components/IconButton";
import { RedirectButton } from "./components/RedirectButton";
import Image from "next/image";

const CountdownSectionMemo = memo(CountdownSection);
export default function Home() {
    return (
        <div className="main-container">
            <div className="content-container">
                <div className="@max-xs: p-4 ">
                    <Image src={'/logo/logo.svg'} alt="logo" className="w-full h-96" width={1000} height={1000} />
                    <h1 className="font-calista text-4xl mt-2 text-center">
                        Mariela & Gerardo
                    </h1>
                    <div className="px-4 flex flex-col items-end mt-4">
                        <h6 className="font-carves text-xl text-center text-gray-600">
                            “Por encima de todo, vístanse de amor, que es el vínculo perfecto”.
                        </h6>
                        <span className="font-nexa-extra-light text-md">
                            Colosenses 3:14
                        </span>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <Image src={'/couple.png'} alt="couple" className=" w-72 object-center " width={1000} height={1000} />
                </div>

                <div className="flex items-center justify-center flex-col pt-8 pb-8 gap-2">
                    <Image src="/rings.svg" alt="rings" className="w-12 opacity-50" width={1000} height={1000} />
                    <div className="pt-4">
                        <h2 className="font-calista text-3xl text-secondary-500 opacity-80 text-center">
                            Tenemos el honor de invitarles a celebrar nuestro matrimonio.
                        </h2>
                        <div className="flex gap-2 row-auto border-t-sky-900 border-b-sky-900 border-t-2 border-b-2 mt-2 mb-2 pt-2 pb-2 items-center justify-center mx-6">
                            <h2 className="font-carves text-3xl">
                                Sabado
                            </h2>
                            <h2 className="font-carves text-5xl text-secondary-500">
                                24
                            </h2>
                            <h2 className="font-carves text-3xl">
                                Mayo
                            </h2>
                        </div>
                    </div>
                </div>

                <CountdownSectionMemo />

                <div className="p-8">
                    <div className="flex flex-col items-center gap-8 justify-center ">
                        <Image src="/pin.svg" alt="map" className="w-12 " width={1000} height={1000} />
                        <div>
                            <h2 className="font-calista text-4xl text-center">
                                Detalles del evento
                            </h2>
                            <h4 className="font-nexa-extra-light text-xl text-center">
                                Conoce los detalles sobre la ceremonia y recepción.
                            </h4>
                        </div>
                    </div>
                </div>

                <div className="p-8">
                    <div className="flex flex-col items-center gap-8 justify-center ">
                        <div className="flex flex-col gap-8 items-center">
                            <h2 className="font-calista text-4xl text-center">
                                Ceremonia
                            </h2>
                            <Image src="/church.svg" alt="map" className="w-24" width={1000} height={1000} />
                            <div>
                                <h4 className="font-nexa-heavy text-xl text-center">
                                    Parroquia Corazón de María
                                </h4>
                                <h5 className="font-nexa-extra-light text-lg text-center">
                                    79 Avenida Sur #200, Colonia Escalón, San Salvador.
                                </h5>
                                <h5 className="font-carves text-2xl text-center">
                                    4:00 PM
                                </h5>
                            </div>
                            <NavigationButtonSection
                                googleMapsLink="https://maps.app.goo.gl/xQV8hTCfvumkSEBm6"
                                wazeLink="https://ul.waze.com/ul?place=ChIJ__kd6TwwY48RMEcqjojE5VE&ll=13.70085970%2C-89.23602210&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                            />
                        </div>
                    </div>
                </div>

                <div className="p-8">
                    <div className="flex flex-col items-center gap-8 justify-center ">
                        <div className="flex flex-col gap-8 items-center">
                            <h2 className="font-calista text-4xl text-center">
                                Recepción
                            </h2>
                            <Image src="/cheers.svg" alt="map" className="w-24" width={1000} height={1000} />
                            <div>
                                <h4 className="font-nexa-heavy text-xl text-center">
                                    Sala de eventos Los Laureles
                                </h4>
                                <h5 className="font-nexa-extra-light text-lg text-center">
                                    Prolongación Alameda Juan Pablo II, Senda los Laureles, San Salvador.
                                </h5>
                                <h5 className="font-carves text-2xl text-center">
                                    7:00 PM
                                </h5>
                            </div>
                            <NavigationButtonSection
                                googleMapsLink="https://maps.app.goo.gl/BAqiRpGbPLDY2FUh8"
                                wazeLink="https://ul.waze.com/ul?place=ChIJO0uVZR0wY48ROXtPhvfnuBE&ll=13.70978040%2C-89.22941020&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                            />
                        </div>
                    </div>
                </div>

                <div className="p-8">
                    <div className="flex flex-col items-center gap-8 justify-center ">
                        <div className="flex flex-col gap-8 items-center">
                            <h2 className="font-calista text-4xl text-center">
                                Dress Code
                            </h2>
                            <Image src="/dresscode.svg" alt="map" className="w-44" width={1000} height={1000} />
                            <div>
                                <h4 className="font-nexa-heavy text-xl text-center">
                                    Vestimenta formal
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-8">
                    <div className="flex flex-col items-center gap-8 justify-center ">
                        <div className="flex flex-col gap-8 items-center">
                            <h4 className="font-nexa-heavy text-xl text-center">
                                Deseamos que todos disfruten al maximo de la fiesta de matrimonio y es por eso que decidimos
                                que solo sea para adultos.
                            </h4>
                        </div>
                    </div>
                </div>

                <div className="p-8">
                    <div className="flex flex-col items-center gap-8 justify-center ">
                        <div className="flex flex-col gap-8 items-center">
                            <h2 className="font-calista text-4xl text-center">
                                Mesa de regalos
                            </h2>
                            <Image src="/gift.svg" alt="map" className="w-32" width={1000} height={1000} />
                            <div>
                                <h5 className="font-nexa-extra-light text-lg text-center">
                                    Contar contigo en nuestra boda es el mejor regalo, pero si deseas tener un detalle con nosotros.
                                </h5>
                                <h4 className="font-nexa-heavy text-xl text-center">
                                    Agradecemos regalo de sobre, mesa de regalo Siman; para empezar nuestra vida juntos.
                                </h4>
                            </div>
                            <RedirectButton
                                redirect="https://simangiftregistry.web.app/table/10007754"
                                label="Mesa de regalos"
                            />
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <Image src="/formbg.jpg" alt="formbg" className="w-full h-full object-cover absolute" width={1000} height={1000} />
                    <div className="p-8 w-full h-full  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80">
                        <h2 className="font-calista text-4xl text-center">
                            Nos acompañarias?
                        </h2>
                        <h5 className="font-nexa-extra-light text-lg text-center">
                            Por favor confirma tu asistencia antes del 30 de abril, con tu nombre completo.
                        </h5>
                        <ConfirmForm />
                    </div>

                </div>
            </div>
        </div>
    );
}
