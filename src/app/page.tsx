import ConfirmForm from "./components/ConfirmForm";
import CountdownSection from "./components/CountdownSection";
import NavigationButtonSection from "./components/NavigationButtonSection";

export default function Home() {
    return (
        <div className="main-container">
            <div className="content-container">
                <div className="@max-xs: p-4 ">
                    <img src={'/logo/logo.svg'} alt="logo" className="w-full h-96" />
                    <h1 className="font-calista text-4xl mt-2 text-center">
                        Mariela & Gerardo
                    </h1>
                </div>
                <div className="flex items-center justify-center">
                    <img src={'/couple.jpg'} alt="couple" className="h-64 w-64 object-center rounded-full" />
                </div>

                <div className="flex items-center justify-center flex-col pt-8 pb-8 gap-2">
                    <img src="/rings.svg" alt="rings" className="w-12 opacity-50" />
                    <div className="px-4 flex flex-col items-end">
                        <h6 className="font-carves text-xl text-center">
                            “Por encima de todo, vístanse de amor, que es el vínculo perfecto”.
                        </h6>
                        <span className="font-nexa-extra-light text-md">
                            Colosenses 3:14
                        </span>
                    </div>
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

                <CountdownSection />

                <div className="p-8">
                    <div className="flex flex-col items-center gap-8 justify-center ">
                        <img src="/pin.svg" alt="map" className="w-12 " />
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
                            <img src="/church.svg" alt="map" className="w-24" />
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
                            <img src="/cheers.svg" alt="map" className="w-24" />
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
                            <img src="/dresscode.svg" alt="map" className="w-44" />
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
                            <img src="/gift.svg" alt="map" className="w-32" />
                            <div>
                                <h5 className="font-nexa-extra-light text-lg text-center">
                                    Contar contigo en nuestra boda es el mejor regalo, pero si deseas tener un detalle con nosotros.
                                </h5>
                                <h4 className="font-nexa-heavy text-xl text-center">
                                    Agradecemos regalo de sobre, mesa de regalo Siman; para empezar nuestra vida juntos.
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="p-8">
                        <h2 className="font-calista text-4xl text-center">
                            Nos acompañarias?
                        </h2>
                        <h5 className="font-nexa-extra-light text-lg text-center">
                            Por favor confirma tu asistencia antes del 4 de mayo, con tu nombre completo.
                        </h5>
                    </div>
                    <ConfirmForm />
                </div>
            </div>
        </div>
    );
}
