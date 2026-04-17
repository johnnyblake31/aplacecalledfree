import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — A Place Called Free",
  description:
    "Learn about our mission, values, and the lived experience behind A Place Called Free.",
};

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-forest py-16 text-cream">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            About Us
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-cream/80">
            A Place Called Free was born from lived experience — and built on the
            belief that every person deserves a real shot at freedom.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-forest-dark">
              Our Mission
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-warm-gray">
              A Place Called Free exists to support men currently or formerly
              impacted by incarceration through mental, emotional, and spiritual
              wellness programming. We provide reentry education, case
              management, mentorship, mental and emotional support, and spiritual
              formation — because we believe that holistic care is the
              foundation of lasting change.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-warm-gray">
              Our work is grounded in the understanding that freedom is more than
              a release date. It is a process — one that requires community,
              accountability, and access to the resources that make a new life
              possible.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-warm-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-sage">
              The Founder
            </p>
            <h2 className="mt-2 text-2xl font-bold text-forest-dark">
              Ramon Durham
            </h2>
            <p className="text-warm-gray">Founder & Executive Director</p>

            <div className="mt-8 space-y-4 text-base leading-relaxed text-warm-gray">
              <p>
                Ramon Durham founded A Place Called Free out of his own
                experience with incarceration and reentry. He knows firsthand
                what it means to walk out of a facility and face a world that
                wasn&apos;t designed to welcome you back — and he knows what it
                takes to rebuild.
              </p>
              <p>
                That lived experience is not just background. It is the
                foundation of everything A Place Called Free does. Ramon brings
                an understanding of the reentry journey that cannot be learned
                from a textbook — the isolation, the systemic barriers, the
                internal work that real freedom demands.
              </p>
              <p>
                Today, Ramon leads A Place Called Free with a commitment to
                meeting men exactly where they are and providing the kind of
                support he wished he&apos;d had: honest mentorship,
                faith-informed care, practical resources, and a community that
                holds you accountable because it genuinely believes in your
                future.
              </p>
              <p className="italic text-forest">
                A full bio for Ramon is coming soon. In the meantime, reach out
                directly — he&apos;d welcome the conversation.
              </p>
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-block rounded-lg bg-forest px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-forest-light"
            >
              Get in Touch with Ramon
            </Link>
          </div>
        </div>
      </section>

      {/* Values (expanded) */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-forest-dark">
              What We Stand For
            </h2>
            <div className="mt-8 space-y-8">
              <ValueDetail
                title="Dignity"
                text="We refuse to reduce anyone to their worst moment. Every man who walks through our doors is met with respect, seen as a whole person, and treated as someone with something to offer — not just someone who needs fixing."
              />
              <ValueDetail
                title="Accountability"
                text="Real growth requires honesty — with yourself and with the people around you. We create spaces where accountability is not punishment, but a practice of showing up for the life you're building."
              />
              <ValueDetail
                title="Restorative Justice"
                text="We believe in repair over retribution. Healing happens through relationship, through making amends, and through communities willing to do the work of restoration alongside the people they've excluded."
              />
              <ValueDetail
                title="Faith-Informed Care"
                text="Spiritual wellness is central to the work we do — not as doctrine, but as an invitation. We honor each person's spiritual path and create space for the kind of inner transformation that sustains outer change."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ValueDetail({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-forest">{title}</h3>
      <p className="mt-2 leading-relaxed text-warm-gray">{text}</p>
    </div>
  );
}
