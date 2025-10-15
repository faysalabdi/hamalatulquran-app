export default function StatsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-medium lg:text-5xl">Our Community</h2>
                    <p>Alhamdulillah, we're blessed to have a growing community of dedicated students and experienced teachers committed to preserving and teaching the Quran.</p>
                </div>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">40+</div>
                        <p>Active Students</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">5</div>
                        <p>Dedicated Teachers</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">6 Days</div>
                        <p>Online Revision</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
