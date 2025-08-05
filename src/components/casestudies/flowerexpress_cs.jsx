import poster from '@/assets/projects/flowerexpress/poster.webp'

const flowerexpress_cs = (
    <>
        <h3> 01 SHOWCASE</h3>
        <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 flex items-start">
                <p>
                    Das zentrale Bild mit dem Blumenstrauß zieht sofort die Blicke auf sich und zeigt klar, worum es geht.
                    Die Frage „Need flowers?“ spricht direkt an und weckt Interesse, woraufhin die Antwort „Don’t worry, we got you.“
                    selbstbewusst wirkt und vermittelt Vertrauen in den Service.
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

export default flowerexpress_cs;