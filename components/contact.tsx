'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card } from '@/components/ui/card'
import { useState } from 'react'

export default function ContactSection() {
    const [isUnder18, setIsUnder18] = useState(false)

    return (
        <section id="register" className="py-32 bg-zinc-50 dark:bg-transparent">
            <div className="mx-auto max-w-4xl px-8 lg:px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-semibold lg:text-5xl">Registration Form</h1>
                    <p className="mt-4 text-lg">Begin your journey with the Book of Allah</p>
                    <div className="mt-4 space-y-2">
                        <p className="text-lg font-arabic text-muted-foreground">
                            إِنَّ هَٰذَا ٱلْقُرْءَانَ يَهْدِى لِلَّتِى هِىَ أَقْوَمُ
                        </p>
                        <p className="text-sm italic text-muted-foreground">
                            &quot;Indeed, this Quran guides to that which is most suitable&quot; (17:9)
                        </p>
                    </div>
                </div>

                <Card className="p-8 shadow-md sm:p-12">
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold">Hamalatulquran Academy</h2>
                        <p className="mt-4 leading-relaxed">
                        Hamalatulquran Academy is dedicated to teaching the Quran with excellence in Tajweed, memorisation (Hifz), and understanding. 
                            We provide a supportive environment for all levels, fostering a lifelong connection to Allah&apos;s words.
                        </p>
                    </div>

                    <div className="mb-8 p-6 border rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 text-center">
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg text-foreground">Investment in Your Quran Journey</h3>
                            <div className="space-y-2">
                                <p className="text-4xl font-bold text-primary">$150</p>
                                <p className="text-sm text-muted-foreground">per month</p>
                            </div>
                            <div className="space-y-3 text-sm text-left max-w-md mx-auto">
                                <p className="font-medium text-foreground">What you&apos;ll receive:</p>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary">•</span>
                                        <span>2 in-person classes per week (Wed & Sun)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary">•</span>
                                        <span>6 days of online revision sessions</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary">•</span>
                                        <span>Personalized attention from experienced teachers</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary">•</span>
                                        <span>Structured curriculum for Hifdh & Tajweed</span>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-xs text-muted-foreground italic">
                                Payment details will be provided upon acceptance
                            </p>
                        </div>
                    </div>

                    <form action="https://formspree.io/f/mblpoqkj" method="POST" className="space-y-6">
                        <input type="hidden" name="_subject" value="New Hamalatulquran Academy Registration" />
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <Label htmlFor="firstName">First Name <span className="text-red-500">*</span></Label>
                                <Input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    required
                                />
                            </div>

                            <div className="space-y-3">
                                <Label htmlFor="lastName">Last Name <span className="text-red-500">*</span></Label>
                                <Input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <Label htmlFor="age">Age <span className="text-red-500">*</span></Label>
                                <Input
                                    type="number"
                                    id="age"
                                    name="age"
                                    required
                                    onChange={(e) => setIsUnder18(parseInt(e.target.value) < 18)}
                                />
                            </div>

                            <div className="space-y-3">
                                <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                                <Input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                />
                            </div>
                        </div>

                        {isUnder18 && (
                            <div className="p-6 border rounded-lg bg-muted/50 space-y-4">
                                <h3 className="font-semibold text-lg">Parent/Guardian Details</h3>
                                <div className="space-y-3">
                                    <Label htmlFor="parentName">Parent/Guardian Name</Label>
                                    <Input
                                        type="text"
                                        id="parentName"
                                        name="parentName"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <Label htmlFor="parentPhone">Parent/Guardian Contact Number</Label>
                                    <Input
                                        type="tel"
                                        id="parentPhone"
                                        name="parentPhone"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <Label htmlFor="parentEmail">Parent/Guardian Email Address</Label>
                                    <Input
                                        type="email"
                                        id="parentEmail"
                                        name="parentEmail"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="space-y-3">
                            <Label htmlFor="address">Residential Address <span className="text-red-500">*</span></Label>
                            <Textarea
                                id="address"
                                name="address"
                                rows={3}
                                required
                            />
                        </div>

                        <div className="space-y-3">
                            <Label htmlFor="quranLevel">Level of Quran <span className="text-red-500">*</span></Label>
                            <Select name="quranLevel" required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select your level" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="beginner">Beginner</SelectItem>
                                    <SelectItem value="intermediate">Intermediate</SelectItem>
                                    <SelectItem value="advanced">Advanced</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <Button type="submit" size="lg" className="w-full">
                            Submit Registration
                        </Button>
                    </form>
                </Card>
            </div>
        </section>
    )
}
