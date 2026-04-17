import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-sage-light">
            Boston, MA
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Freedom is not only about release from prison.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/85 md:text-xl">
            A Place Called Free supports men currently or formerly impacted by
            incarceration through mental, emotional, and spiritual wellness
            programming — because true liberation begins in the mind, spirit,
            and body.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/programs"
              className="rounded-lg bg-clay px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-earth-light"
            >
              Explore Our Programs
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-cream/30 px-6 py-3 text-sm font-semibold transition-colors hover:bg-cream/10"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-forest-dark">
            What We Provide
          </h2>
          <p className="mt-4 max-w-2xl text-warm-gray">
            Holistic reentry support designed to meet men where they are — and
            walk alongside them toward lasting freedom.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Reentry Education"
              description="Structured learning that equips men with practical knowledge and life skills for successful reintegration into their communities."
            />
            <ServiceCard
              title="Case Management"
              description="Individualized support to navigate housing, employment, benefits, and the complex systems that follow incarceration."
            />
            <ServiceCard
              title="Mentorship"
              description="One-on-one relationships built on trust, accountability, and shared understanding of the reentry journey."
            />
            <ServiceCard
              title="Mental & Emotional Support"
              description="Safe spaces for processing trauma, building resilience, and developing emotional wellness practices."
            />
            <ServiceCard
              title="Spiritual Formation"
              description="Faith-informed care that nurtures the whole person — honoring each individual's spiritual path toward healing."
            />
            <ServiceCard
              title="Emergency Assistance"
              description="Scholarships, transportation assistance, emergency needs support, and sober living placements for those in critical moments."
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-warm-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-forest-dark">
            Our Values
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ValueCard
              title="Dignity"
              description="Every person deserves to be seen, heard, and treated with respect — regardless of their past."
            />
            <ValueCard
              title="Accountability"
              description="We hold ourselves and one another to the commitments we make, with honesty and without judgment."
            />
            <ValueCard
              title="Restorative Justice"
              description="Healing happens through relationship, repair, and a shared commitment to making things whole."
            />
            <ValueCard
              title="Faith-Informed Care"
              description="We honor the spiritual dimension of recovery, meeting each person where they are on their journey."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-20 text-cream">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            This is an invitation into a movement.
          </h2>
          <p className="mt-4 text-lg text-cream/80">
            Whether you&apos;re seeking support, looking to partner, or ready to
            contribute — there is a place for you here.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-clay px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-earth-light"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="rounded-lg border border-cream/30 px-6 py-3 text-sm font-semibold transition-colors hover:bg-cream/10"
            >
              Learn Our Story
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-cream-dark bg-warm-white p-6">
      <h3 className="text-lg font-semibold text-forest">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-warm-gray">
        {description}
      </p>
    </div>
  );
}

function ValueCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border-l-2 border-sage pl-5">
      <h3 className="font-semibold text-forest">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-warm-gray">
        {description}
      </p>
    </div>
  );
}
