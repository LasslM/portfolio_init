import poster from '@/assets/projects/magazine/magazine_spread.webp'

const wondrousnature_cs = (
    <>
        <h3 className="md:text-center md:pb-4"> 01 ORCHIDEEN MANTIS</h3>
        <div className="md:w-2/3 xxl:w-1/3 xxs:w-full m-auto">
            <p>
                Die markanten Schlagworte „Gnadenlos“, „Täuschend“ und „Elegant“ ziehen sofort die Aufmerksamkeit auf sich und bringen auf den Punkt, was dieses Insekt ausmacht. Das lebendige Layout mit dem freigestellten Bild und den klar gegliederten Textfeldern macht die Doppelseite spannend und bietet einen übersichtlichen Einblick in die Besonderheiten der Orchideenmantis.
            </p>
        </div>

        <div className="w-full md:p-8 xxs:py-8">
            <img
                src={poster}
                alt="Kapitel: Orchideen Mantis"
                className="rounded shadow object-cover"
            />
        </div>

        <div className="w-full m-auto">
            <p className="text-center">
                weitere Kapitel folgen ...
            </p>
        </div>
    </>
);

export default wondrousnature_cs;