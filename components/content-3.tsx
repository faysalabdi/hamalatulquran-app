import { Button } from '@/components/ui/button'
import { MapPin, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'

export default function ContentSection() {
    return (
        <section id="schedule" className="py-16 md:py-32 bg-zinc-50 dark:bg-transparent">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="text-center">
                    <h2 className="text-4xl font-semibold md:text-5xl">Class Schedule & Location</h2>
                    <p className="mt-4 text-lg text-muted-foreground">Join us for our in-person classes at our beautiful location</p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 md:gap-12 mt-12">
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-lg">
                                <Calendar className="size-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-2">Class Days</h3>
                                <p className="text-muted-foreground">Wednesdays and Sundays</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-lg">
                                <Clock className="size-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-2">Class Time</h3>
                                <p className="text-muted-foreground">6:30 PM - 8:30 PM</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-lg">
                                <MapPin className="size-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-2">Location</h3>
                                <p className="text-muted-foreground">
                                    Darusalam Society<br />
                                    1/72-74 Chifley Dr<br />
                                    Preston VIC 3072
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">For Both Men & Women</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Our academy provides a welcoming and structured learning environment for adults seeking to reconnect with the Quran. With experienced teachers and a focus on revision, you'll develop strong foundations in Tajweed and Hifdh.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            In addition to our in-person classes, we offer 6 days of online revision sessions to ensure consistent progress and strong retention of what you've memorized.
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="mt-4">
                            <Link href="#register">
                                <span>Register Now</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
