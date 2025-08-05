import React from "react";

import showcase from '@/assets/projects/mangrove/can_label.webp'
import style1 from '@/assets/projects/mangrove/casestudy/farbschema.webp'
import style2 from '@/assets/projects/mangrove/casestudy/schriftarten.webp'
import branding1 from '@/assets/projects/mangrove/casestudy/Mangrove_Snake.webp'
import branding2 from '@/assets/projects/mangrove/casestudy/Mangrove_Logo.webp'


const mangrove_cs = (
    <>

        {/*<div
            style={{
                position: 'relative',
                paddingTop: 'max(60%, 324px)',
                width: '100%',
                height: 0,
            }}
        >
            <iframe
                src="https://online.fliphtml5.com/marius-lassl/zquj/"
                style={{
                    position: 'absolute',
                    border: 'none',
                    width: '100%',
                    height: '70%',
                    left: 0,
                    top: 0,
                }}
                seamless="seamless"
                scrolling="no"
                frameBorder="0"
                allowTransparency="true"
                allowFullScreen
                title="Flipbook"
            ></iframe>
        </div>*/}

        <h3>01 SHOWCASE</h3>
        <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
                <p>
                    "Fuel your ambitions": so lautet der Slogan von Mangrove Energy.
                    Für diese fiktive Getränkemarke wurde eine eigenständige Markenidentität entwickelt,
                    die vom Logo bis zur Verpackung reicht.
                    Das zentrale Motiv ist eine Mangroven-Nachtbaumnatter (Boiga dendrophila), die sich als
                    Markenzeichen durch alle Entwürfe zieht.
                </p>
            </div>
            <div className="md:w-2/3">
                <img src={showcase} alt="Mangrove Showcase" className="w-full h-auto rounded shadow object-cover"/>
            </div>
        </div>

        <h3 className="mt-24">02 MARKENIDENTITÄT</h3>
        <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
                <p>
                    Die Markenidentität basiert auf einer klar definierten Farbpalette und Typografie.
                    Diese Grundlagen sind unter anderem im Styleguide ausführlich dokumentiert, der unter „REFERENZEN“
                    zu finden ist, und prägen das gesamte Erscheinungsbild.
                </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
                <img src={style1} alt="Styleguide Farbe" className="w-full h-auto object-cover"/>
                <img src={style2} alt="Styleguide Typografie" className="w-full h-auto object-cover"/>
            </div>
        </div>

        <h3 className="mt-24">03 BRANDING</h3>
        <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
                <p>
                    Das Herzstück des Designs ist das handillustrierte Schlangenmotiv, das sich durch das gesamte
                    Branding zieht.
                    Die Gestaltung soll Wiedererkennungswert schaffen und gleichzeitig die Einzigartigkeit der Marke
                    betonen.
                    Dabei passen die leuchtend gelben Streifen der Nachtbaumnatter perfekt zur Firmenidee und stehen für
                    Energie, Tatendrang und Kraft.
                </p>

            </div>
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div></div>
                <img src={branding1} alt="Mangrove Schlange" className="w-full h-auto object-cover scale-x-[-1]"/>
            </div>
        </div>
    </>
);

export default mangrove_cs;