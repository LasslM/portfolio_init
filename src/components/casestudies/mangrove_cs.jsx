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

        <h3 className="md:text-center md:pb-4"> 01 VERPACKUNGSDESIGN</h3>
        <div className="md:w-2/3 xxl:w-1/3 xxs:w-full m-auto">
            <p>
                Das Verpackungsdesign des Energy Drinks MANGROVE "Citrus Boost" zeichnet sich durch einen knallig gelben Hintergrund, einen auffälligen Schlangenkopf und große Typografie aus. Die klare Sans-Serif-Schrift verleiht dem Design einen modernen Look, während die strukturierte Textur im Hintergrund an Mangrovenbäume erinnert. Die kräftigen Farben und starken Kontraste unterstreichen den energiegeladenen Charakter des Produkts.
            </p>
        </div>

        <div className="w-full md:p-8 xxs:py-8">
            <img
                src={showcase}
                alt="Verpackungsdesign"
                className="rounded shadow object-cover"
            />
        </div>

        <h3 className="md:text-center md:pb-4 mt-24"> 02 STYLEGUIDE</h3>
        <div className="md:w-2/3 xxl:w-1/3 xxs:w-full m-auto">
            <p className="text-center">
                Die interaktive Magazinansicht des vollständigen Styleguides wird in Kürze hier verfügbar sein.
            </p>
        </div>
    </>
);

export default mangrove_cs;