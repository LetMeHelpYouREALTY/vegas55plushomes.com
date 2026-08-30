type Faq = { question: string; answer: string }

type FaqSectionProps = {
  title?: string
  faqs: Faq[]
}

export default function FaqSection({
  title = 'Frequently asked questions',
  faqs,
}: FaqSectionProps) {
  if (faqs.length === 0) return null

  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{title}</h2>
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-lg border bg-card p-6"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {faq.question}
                  <span className="text-muted-foreground group-open:hidden">+</span>
                  <span className="hidden text-muted-foreground group-open:inline">−</span>
                </span>
              </summary>
              <p className="answer-first mt-4 text-muted-foreground" data-speakable="true">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
