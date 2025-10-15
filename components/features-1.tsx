import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Book, BookOpen, Users, Clock } from 'lucide-react'
import { ReactNode } from 'react'

export default function Features() {
    return (
        <section id="programs" className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-6xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Our Programs</h2>
                    <p className="mt-4 text-lg">Excellence in Quran education with dedicated teachers and structured programs</p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-4 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16 md:grid-cols-2">
                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Book
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Hifdh (Memorization)</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Comprehensive memorization program with structured curriculum and regular assessments to help you memorize the Quran effectively.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Clock
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Daily Revision</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">6 days of online revision with dedicated teachers to maintain strong Hifdh and ensure long-term retention.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <BookOpen
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Tajweed Excellence</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Master the art of proper Quranic recitation with our expert teachers. Beginner-friendly approach for all levels.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Users
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">All Levels Welcome</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">From beginners to advanced students, we provide personalized attention and support for your Quranic journey.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
        />

        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
