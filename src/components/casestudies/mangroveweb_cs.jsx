import React from "react";

import hero from '@/assets/projects/webdevelopment/casestudy/mangrove_website_hero.webp';
import product from '@/assets/projects/webdevelopment/casestudy/mangrove_website_product.webp';
import cart from '@/assets/projects/webdevelopment/casestudy/mangrove_website_cart.webp';
import blog from '@/assets/projects/webdevelopment/casestudy/mangrove_website_blog.webp';
import contact from '@/assets/projects/webdevelopment/casestudy/mangrove_website_contactus.webp';
import highlight from '@/assets/projects/webdevelopment/casestudy/mangrove_website_highlight.webp';

const mangroveweb_cs = (
    <>
        <h3>01 SHOWCASE</h3>

        <div className="flex flex-col md:flex-row gap-8 mt-6">
            <div className="md:w-1/3">
                <p>
                    Die Markenidentität von Mangrove Energy wird in dem Online-Shop konsistent umgesetzt, sodass sie sich durch das gesamte Nutzererlebnis zieht und die Wiedererkennbarkeit stärkt.
                </p>
            </div>
            <div className="md:w-2/3">
                <img src={hero} alt="Mangrove Online Shop Homepage" className="w-full h-auto rounded shadow object-cover" />
            </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-24">
            <div className="md:w-1/3">
                <p>Produktseite mit Beispielprodukt im Shop.</p>
            </div>
            <div className="md:w-2/3">
                <img src={product} alt="Mangrove Beispielprodukt" className="w-full h-auto rounded shadow object-cover" />
            </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-24">
            <div className="md:w-1/3">
                <p>Der Warenkorb zeigt den Checkout-Prozess.</p>
            </div>
            <div className="md:w-2/3">
                <img src={cart} alt="Mangrove Warenkorb" className="w-full h-auto rounded shadow object-cover" />
            </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-24">
            <div className="md:w-1/3">
                <p>Der Blog-Bereich bietet Inhalte, die die Markenbotschaft und Produktinformationen ergänzen.</p>
            </div>
            <div className="md:w-2/3">
                <img src={blog} alt="Mangrove Blog" className="w-full h-auto rounded shadow object-cover" />
            </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-24">
            <div className="md:w-1/3">
                <p>Kontaktseite mit allen wichtigen Informationen zur direkten Kommunikation.</p>
            </div>
            <div className="md:w-2/3">
                <img src={contact} alt="Mangrove Kontaktinformationen" className="w-full h-auto rounded shadow object-cover" />
            </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-24 mb-24">
            <div className="md:w-1/3">
                <p>Neue Produkte können beispielsweise auf der Hauptseite besonders hervorgehoben werden.</p>
            </div>
            <div className="md:w-2/3">
                <img src={highlight} alt="Mangrove Extra Power Hervorhebung" className="w-full h-auto rounded shadow object-cover" />
            </div>
        </div>
    </>
);

export default mangroveweb_cs;
