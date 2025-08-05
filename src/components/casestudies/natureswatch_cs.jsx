import poster from '@/assets/projects/poster/nw_poster.webp'
import detail from '@/assets/projects/poster/nw_poster_detail.webp'

const natureswatch_cs = (
    <>
        <h3> 01 SHOWCASE</h3>
        <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 flex items-start">
                <p>
                    „Nature’s Watch“ ist eine fiktive Veranstaltung, bei der es darum geht, die Welt mit neuen Augen zu sehen.
                    Das zentrale Auge zieht durch seine Größe sofort die Aufmerksamkeit auf sich
                    und es wirkt wie ein Symbol für das wachsame Beobachten der Natur.
                    Der darunterliegende Grashüpfer steht stellvertretend für die Natur selbst, die auf uns zurückblickt.
                    Der Overprint-Effekt sorgt für Tiefe und verbindet die beiden Bildelemente zu einer Einheit.
                    Die Typografie bleibt bewusst schlicht, damit das Motiv im Vordergrund stehen kann.

                </p>
            </div>

            <div className="md:w-2/3 flex justify-center items-center">
                <img
                    src={poster}
                    alt="Plakat"
                    className="md:w-1/2 xxs:w-full h-auto rounded shadow object-cover"
                />
            </div>
        </div>
    </>
);

export default natureswatch_cs;