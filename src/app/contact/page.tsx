import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — A Place Called Free",
  description:
    "Get in touch with A Place Called Free. Enroll in programs, explore partnerships, or support our mission.",
};

export default function Contact() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-forest py-16 text-cream">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-cream/80">
            Whether you&apos;re looking for support, want to partner with us, or
            are ready to contribute — reach out. We&apos;d welcome the
            conversation.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Direct Contact */}
            <div>
              <h2 className="text-2xl font-bold text-forest-dark">
                Reach Out Directly
              </h2>
              <p className="mt-4 leading-relaxed text-warm-gray">
                The best way to connect with A Place Called Free is to email
                Ramon Durham directly. Whether you have questions about
                enrollment, want to explore a partnership, or just want to learn
                more — don&apos;t hesitate.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-forest/10">
                    <svg
                      className="h-5 w-5 text-forest"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-dark">Email</h3>
                    <a
                      href="mailto:ramondurham2@gmail.com"
                      className="text-earth hover:text-earth-light"
                    >
                      ramondurham2@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-forest/10">
                    <svg
                      className="h-5 w-5 text-forest"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-dark">Location</h3>
                    <p className="text-warm-gray">Boston, Massachusetts</p>
                  </div>
                </div>
              </div>
            </div>

            {/* How You Can Help */}
            <div>
              <h2 className="text-2xl font-bold text-forest-dark">
                How You Can Be Part of This
              </h2>
              <div className="mt-6 space-y-6">
                <ContactPath
                  title="Enroll in Our Programs"
                  description="If you or someone you know is currently or formerly incarcerated and looking for support, reach out. We'll walk you through our programs and find the right fit."
                />
                <ContactPath
                  title="Partner With Us"
                  description="We work with organizations, faith communities, corrections facilities, and service providers. If you share our mission, let's explore how to work together."
                />
                <ContactPath
                  title="Support Financially"
                  description="Your contributions directly fund scholarships, transportation assistance, emergency needs, and sober living placements for men in our programs. Every dollar goes toward someone's second chance."
                />
                <ContactPath
                  title="Volunteer or Mentor"
                  description="We're always looking for people willing to invest their time and experience. Mentorship is at the heart of what we do."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct CTA */}
      <section className="bg-forest py-16 text-cream">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-bold">
            Don&apos;t wait. Reach out today.
          </h2>
          <p className="mt-3 text-cream/80">
            Send an email to Ramon and start the conversation.
          </p>
          <a
            href="mailto:ramondurham2@gmail.com"
            className="mt-6 inline-block rounded-lg bg-clay px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-earth-light"
          >
            Email Ramon Durham
          </a>
        </div>
      </section>
    </>
  );
}

function ContactPath({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border-l-2 border-sage pl-5">
      <h3 className="font-semibold text-forest">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-warm-gray">
        {description}
      </p>
    </div>
  );
}
