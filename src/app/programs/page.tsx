import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs — A Place Called Free",
  description:
    "Explore our curriculum, programming, and support services for men impacted by incarceration.",
};

export default function Programs() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-forest py-16 text-cream">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Programs & Curriculum
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-cream/80">
            A structured, holistic approach to reentry — designed to support the
            whole person through education, mentorship, and care.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-forest-dark">
              Our Approach
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-warm-gray">
              A Place Called Free&apos;s programming is built around the belief
              that sustainable reentry requires more than job training or a
              checklist of services. It requires transformation — of mindset, of
              relationships, of the way a person sees himself and his future.
            </p>
            <p className="mt-4 leading-relaxed text-warm-gray">
              Our curriculum is developed and led by Ramon Durham, drawing from
              his lived experience and his work with men navigating reentry. Each
              module is designed to be practical, honest, and rooted in real
              life — not theory.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Modules */}
      <section className="bg-warm-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-forest-dark">
            Curriculum Preview
          </h2>
          <p className="mt-2 text-warm-gray">
            Core modules that form the foundation of our programming.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <ModuleCard
              number="01"
              title="Identity & Self-Worth"
              description="Confronting the labels that follow incarceration and rebuilding a sense of self rooted in dignity, purpose, and possibility."
              topics={[
                "Reclaiming personal narrative",
                "Overcoming shame and stigma",
                "Defining who you are becoming",
              ]}
            />
            <ModuleCard
              number="02"
              title="Emotional Wellness & Resilience"
              description="Developing the emotional tools to handle the pressures of reentry — from managing triggers to building healthy coping strategies."
              topics={[
                "Processing trauma and grief",
                "Emotional regulation practices",
                "Building a resilience toolkit",
              ]}
            />
            <ModuleCard
              number="03"
              title="Relationships & Accountability"
              description="Learning how to rebuild trust, set boundaries, and show up for the people in your life — starting with yourself."
              topics={[
                "Repairing family relationships",
                "Healthy communication skills",
                "Peer accountability structures",
              ]}
            />
            <ModuleCard
              number="04"
              title="Spiritual Formation"
              description="Exploring the spiritual dimension of healing and freedom — creating space for reflection, growth, and inner transformation."
              topics={[
                "Faith as a foundation for change",
                "Mindfulness and reflection practices",
                "Community and spiritual belonging",
              ]}
            />
            <ModuleCard
              number="05"
              title="Practical Reentry Skills"
              description="Navigating the systems and decisions that define the first months and years after release — with real-world knowledge and support."
              topics={[
                "Housing and employment navigation",
                "Financial literacy basics",
                "Understanding your rights and resources",
              ]}
            />
            <ModuleCard
              number="06"
              title="Community & Purpose"
              description="Moving from survival to contribution — finding your role in a community and building a life that matters to you."
              topics={[
                "Giving back and mentoring others",
                "Setting long-term goals",
                "Sustaining momentum beyond the program",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-forest-dark">
              Beyond the Curriculum
            </h2>
            <p className="mt-4 leading-relaxed text-warm-gray">
              Programming alone is not enough. A Place Called Free also provides
              direct support services to help men address the immediate,
              practical barriers to successful reentry:
            </p>
            <ul className="mt-6 space-y-3">
              <SupportItem text="Case management and individualized reentry planning" />
              <SupportItem text="One-on-one mentorship with trained mentors" />
              <SupportItem text="Scholarships for education and vocational training" />
              <SupportItem text="Transportation assistance" />
              <SupportItem text="Emergency needs support" />
              <SupportItem text="Sober living placement assistance" />
            </ul>
          </div>
        </div>
      </section>

      {/* Enroll CTA */}
      <section className="bg-forest py-20 text-cream">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to take the next step?
          </h2>
          <p className="mt-4 text-lg text-cream/80">
            Whether you&apos;re looking to enroll, refer someone, or learn more
            about how our programs work — we&apos;re here.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-clay px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-earth-light"
          >
            Contact Us to Enroll
          </Link>
        </div>
      </section>
    </>
  );
}

function ModuleCard({
  number,
  title,
  description,
  topics,
}: {
  number: string;
  title: string;
  description: string;
  topics: string[];
}) {
  return (
    <div className="rounded-xl border border-cream-dark bg-cream p-6">
      <span className="text-sm font-bold text-sage">Module {number}</span>
      <h3 className="mt-1 text-lg font-semibold text-forest-dark">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-warm-gray">
        {description}
      </p>
      <ul className="mt-4 space-y-1">
        {topics.map((topic) => (
          <li
            key={topic}
            className="flex items-start gap-2 text-sm text-warm-gray"
          >
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage" />
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SupportItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-warm-gray">
      <svg
        className="mt-1 h-5 w-5 flex-shrink-0 text-sage"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
      {text}
    </li>
  );
}
