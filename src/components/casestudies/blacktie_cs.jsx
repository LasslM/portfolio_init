import poster from '@/assets/projects/blacktie/casestudy/BlackTie_Plakat_A2.webp'
import ticketf from '@/assets/projects/blacktie/casestudy/BlackTie_Eintrittskarte_70x150.webp'
import ticketb from '@/assets/projects/blacktie/casestudy/BlackTie_Eintrittskarte_70x1502.webp'

import post1 from '@/assets/projects/blacktie/casestudy/BlackTie_1x1.webp'
import post2 from '@/assets/projects/blacktie/casestudy/BlackTie_1x1_sponsoren.webp'
import post3 from '@/assets/projects/blacktie/casestudy/BlackTie_desscode_1x1.webp'
import post4 from '@/assets/projects/blacktie/casestudy/BlackTie_Tombola_1x1.webp'

import draft1 from '@/assets/projects/blacktie/casestudy/konzept (3).webp'
import draft2 from '@/assets/projects/blacktie/casestudy/konzept (2).webp'
import draft3 from '@/assets/projects/blacktie/casestudy/konzept (5).webp'
import draft4 from '@/assets/projects/blacktie/casestudy/konzept (1).webp'
import draft5 from '@/assets/projects/blacktie/casestudy/konzept (6).webp'
import draft6 from '@/assets/projects/blacktie/casestudy/konzept (4).webp'

const blacktie_cs = (
    <>
        <h3> 01 SHOWCASE</h3>
        <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 align-center">
                <p >
                    Das prominente Bildmotiv und der bewusst weggelassene Kopf dienen als Eye-Catcher, um sich klar von anderen Plakaten abzuheben.
                    Die rote Signalfarbe lenkt den Blick gezielt auf die wichtigsten Informationen.
                    Um das Motiv nicht zu überlagern, ist die gesamte Typografie und sonstige Farbgestaltung bewusst schlicht gestaltet.
                </p>
            </div>

            <div className="md:w-2/3 flex gap-4">
                <div className="w-1/2">
                    <img src={poster} alt="Plakat" className="w-full h-auto rounded shadow object-cover"/>
                </div>

                <div className="w-1/2 flex flex-col justify-start gap-4">
                    <img src={ticketf} alt="Eintrittskarte Vorderseite"
                         className="w-full rounded shadow "/>
                    <img src={ticketb} alt="Eintrittskarte Rückseite"
                         className="w-full rounded shadow "/>
                </div>
            </div>
        </div>
        <h3 className="mt-24"> 02 SOCIAL MEDIA</h3>
        <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
                <p>
                    Außerdem sollte das Clubbing über Instagram beworben werden. Dafür wurden vier gezielte Social-Media-Posts gestaltet.
                    Neben einer adaptierten Version des Plakats und einem Beitrag zu den Sponsoren informierten weitere Posts über den Dresscode
                    sowie über die Tombolapreise.
                </p>
            </div>

            <div className="md:w-2/3 grid grid-cols-2 gap-4">
                <img src={post1} alt="Instagram Post 1" className="w-full h-auto rounded shadow object-cover" />
                <img src={post2} alt="Instagram Post 2" className="w-full h-auto rounded shadow object-cover" />
                <img src={post3} alt="Instagram Post 3" className="w-full h-auto rounded shadow object-cover" />
                <img src={post4} alt="Instagram Post 4" className="w-full h-auto rounded shadow object-cover" />
            </div>
        </div>
        <h3 className="mt-24"> 03 DESIGNPROZESS</h3>
        <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
                <p className="">
                    Im Laufe des Designprozesses entstanden mehrere Entwürfe, in denen Typografie, Bildsprache und Farbstimmung
                    erprobt wurden.
                </p>
            </div>

            <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4">
                <img src={draft1} alt="Entwurf 1" className="w-full h-auto rounded shadow object-cover" />
                <img src={draft2} alt="Entwurf 2" className="w-full h-auto rounded shadow object-cover" />
                <img src={draft3} alt="Entwurf 3" className="w-full h-auto rounded shadow object-cover" />
                <img src={draft4} alt="Entwurf 4" className="w-full h-auto rounded shadow object-cover" />
                <img src={draft5} alt="Entwurf 5" className="w-full h-auto rounded shadow object-cover" />
                <img src={draft6} alt="Entwurf 6" className="w-full h-auto rounded shadow object-cover" />
            </div>
        </div>

    </>
);

export default blacktie_cs;