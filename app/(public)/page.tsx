import { ArrowRight, CheckCircle2, Mail, Search, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="relative overflow-hidden bg-[#f6f4ef]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-12 lg:items-stretch lg:px-8 lg:py-10">
          <div className="rounded-[2rem] bg-transparent lg:col-span-7">
            <div className="flex h-full flex-col justify-center px-0 py-6 sm:px-4 lg:px-8">
              <div className="inline-flex w-fit items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm text-orange-700">
                Målrettet antenneforeninger
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Opdag ejerskifter automatisk — og kontakt nye beboere først
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
                Velio hjælper antenneforeninger med at finde nye ejere, skabe
                overblik og klargøre velkomst, så I kan reagere hurtigt og mere
                professionelt.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#hvordan">
                  <Button size="lg" className="rounded-xl px-6 text-base">
                    Se hvordan det virker
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="#kontakt">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-xl px-6 text-base"
                  >
                    Kontakt os
                  </Button>
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <InfoCard
                  title="Hurtigere kontakt"
                  text="Reagér tidligt, når nye ejere flytter ind."
                />
                <InfoCard
                  title="Mindre manuelt arbejde"
                  text="Få data og proces samlet ét sted."
                />
                <InfoCard
                  title="Klar til udsendelse"
                  text="Breve og mails gøres klar til næste skridt."
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="h-full rounded-[2rem] border border-gray-200 bg-[#061330] p-6 shadow-xl shadow-gray-200/60">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-400">Velio</p>
                  <h2 className="mt-1 text-2xl font-semibold text-white">
                    Så enkelt kan det fungere
                  </h2>
                </div>
                <div className="rounded-full bg-orange-500/15 px-3 py-1 text-sm text-orange-300">
                  Proof of concept
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <StepCard
                  step="1"
                  title="Tilføj dine adresser"
                  text="Start med de adresser, du vil overvåge."
                  icon={<Mail className="h-5 w-5" />}
                />
                <StepCard
                  step="2"
                  title="Velio finder ejerskifter automatisk"
                  text="Systemet opdager ændringer og samler dem i ét overblik."
                  icon={<Search className="h-5 w-5" />}
                />
                <StepCard
                  step="3"
                  title="Du modtager et klar-til-print brev – eller Velio sender det for dig"
                  text="Vælg selv, hvor meget af processen du vil håndtere."
                  icon={<Send className="h-5 w-5" />}
                  highlight
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hvordan vil I bruge Velio?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Velio skal gøre det lettere at arbejde struktureret med nye ejere
              og velkomst — uden at I skal bygge processen manuelt.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <ScenarioChip text="Ejerskifteovervågning" />
            <ScenarioChip text="Velkomstbrev" />
            <ScenarioChip text="Manuel postomdeling" />
            <ScenarioChip text="Velio sender for os" />
            <ScenarioChip text="Historik og overblik" />
          </div>
        </div>
      </section>

      <section id="hvordan" className="border-t border-gray-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              Hvordan det virker
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Et konkret flow i stedet for manuelt detektivarbejde
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Velio er bygget til at gøre processen enkel: fra overvågning til
              klar handling. Målet er ikke mere administration — men bedre
              timing og mindre spildtid.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <FeatureCard
              number="01"
              title="Tilføj adresser"
              text="Opret de adresser eller områder, som skal følges. Det bliver udgangspunktet for overvågningen."
            />
            <FeatureCard
              number="02"
              title="Få besked om ejerskifte"
              text="Når der registreres ændringer, samles det i et klart overblik, så du hurtigt kan tage stilling."
            />
            <FeatureCard
              number="03"
              title="Godkend og send"
              text="Velkomsten bliver klargjort, så du enten selv kan stå for postomdeling — eller lade Velio gøre det for dig."
            />
          </div>
        </div>
      </section>

      <section id="fordele" className="bg-gray-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              Fordele
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Lavet til foreninger, der vil arbejde mere struktureret
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Velio skal gøre det lettere at få overblik over nye ejere og
              reagere hurtigt, uden at I skal bygge jeres egen proces i mails,
              ark eller mapper.
            </p>
          </div>

          <div className="grid gap-4 lg:col-span-7 sm:grid-cols-2">
            <BenefitItem text="Målrettet antenneforeninger" />
            <BenefitItem text="Mindre manuelt arbejde" />
            <BenefitItem text="Hurtigere kontakt til nye beboere" />
            <BenefitItem text="Klar proces fra fund til udsendelse" />
            <BenefitItem text="Overblik over historik og næste skridt" />
            <BenefitItem text="Kan kombineres med manuel eller assisteret udsendelse" />
          </div>
        </div>
      </section>

      <section id="kontakt" className="border-t border-gray-200 bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
            Kontakt
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Vil du høre mere om Velio?
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            Frontpage er første skridt. Login, dashboard og kundeflow kommer
            bagefter. Men idéen og retningen er allerede på plads.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="mailto:kontakt@velio.dk">
              <Button size="lg" className="rounded-xl px-6 text-base">
                Skriv til os
              </Button>
            </a>
            <a href="#hvordan">
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl px-6 text-base"
              >
                Se hvordan det virker
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-gray-900">{title}</p>
      <p className="mt-1 text-sm text-gray-600">{text}</p>
    </div>
  );
}

function StepCard({
  step,
  title,
  text,
  icon,
  highlight = false,
}: {
  step: string;
  title: string;
  text: string;
  icon: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 transition ${
        highlight
          ? 'border-orange-400 bg-orange-500 text-white'
          : 'border-white/10 bg-white/5 text-white'
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold ${
            highlight
              ? 'bg-white text-orange-600'
              : 'bg-white/10 text-white'
          }`}
        >
          {step}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <div className={highlight ? 'text-white' : 'text-orange-300'}>
              {icon}
            </div>
            <h3 className="text-base font-semibold leading-6">{title}</h3>
          </div>
          <p
            className={`mt-2 text-sm leading-6 ${
              highlight ? 'text-orange-50' : 'text-gray-300'
            }`}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold text-orange-600">{number}</p>
      <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-3 text-base leading-7 text-gray-600">{text}</p>
    </div>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-500" />
      <p className="text-base leading-7 text-gray-700">{text}</p>
    </div>
  );
}

function ScenarioChip({ text }: { text: string }) {
  return (
    <button
      type="button"
      className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm transition hover:border-gray-400 hover:bg-gray-50"
    >
      {text}
    </button>
  );
}