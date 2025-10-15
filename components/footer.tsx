import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'

const links = [
    {
        title: 'About',
        href: '#about',
    },
    {
        title: 'Programs',
        href: '#programs',
    },
    {
        title: 'Schedule',
        href: '#schedule',
    },
    {
        title: 'Register',
        href: '#register',
    },
]

export default function FooterSection() {
    return (
        <footer className="border-t bg-white py-12 dark:bg-zinc-950">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Hamalatulquran Academy</h3>
                        <p className="text-sm text-muted-foreground">
                            Dedicated to teaching the Quran with excellence in Tajweed, memorisation, and understanding.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
                        <div className="space-y-3 text-sm text-muted-foreground">
                            <div className="flex items-start gap-2">
                                <Mail className="size-4 mt-0.5 flex-shrink-0" />
                                <a href="mailto:hamalatulquraninstitute@gmail.com" className="hover:text-primary">
                                    hamalatulquraninstitute@gmail.com
                                </a>
                            </div>
                            <div className="flex items-start gap-2">
                                <MapPin className="size-4 mt-0.5 flex-shrink-0" />
                                <span>
                                    Darusalam Society<br />
                                    1/72-74 Chifley Dr<br />
                                    Preston VIC 3072
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <div className="flex flex-col gap-3 text-sm">
                            {links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="text-muted-foreground hover:text-primary duration-150">
                                    <span>{link.title}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="border-t pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <span className="text-muted-foreground text-center text-sm">
                            © {new Date().getFullYear()} Hamalatulquran Academy. All rights reserved.
                        </span>
                        <div className="text-center">
                            <p className="text-sm font-arabic text-muted-foreground">
                                فَٱذْكُرُونِىٓ أَذْكُرْكُمْ
                            </p>
                            <p className="text-xs italic text-muted-foreground mt-1">
                                &quot;So remember Me; I will remember you&quot; (2:152)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
