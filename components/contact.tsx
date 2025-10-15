'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card } from '@/components/ui/card'
import { useState } from 'react'

export default function ContactSection() {
    const [result, setResult] = useState('')
    const [isUnder18, setIsUnder18] = useState(false)

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setResult('Sending....')
        const formData = new FormData(event.currentTarget)

        formData.append('access_key', 'e4cadda5-dfcd-44c7-9cf9-5ad1d24867f1')

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        })

        const data = await response.json()

        if (data.success) {
            setResult('Registration submitted successfully! We will be in touch soon.')
            event.currentTarget.reset()
            setIsUnder18(false)
        } else {
            console.log('Error', data)
            setResult(data.message)
        }
    }

    return (
        <section id="register" className="py-32 bg-zinc-50 dark:bg-transparent">
            <div className="mx-auto max-w-4xl px-8 lg:px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-semibold lg:text-5xl">Registration Form</h1>
                    <p className="mt-4 text-lg">Join us to learn, live, and love the Quran!</p>
                    <p className="mt-2 text-muted-foreground italic">"The best of you are those who learn and teach the Quran."</p>
                </div>

                <Card className="p-8 shadow-md sm:p-12">
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold">Hamalatulquran Academy</h2>
                        <p className="mt-4 leading-relaxed">
                            HAMALATULQURAN is dedicated to teaching the Quran with excellence in Tajweed, memorisation (Hifz), and understanding. 
                            We provide a supportive environment for all levels, fostering a lifelong connection to Allah's words.
                        </p>
                    </div>

                    <form onSubmit={onSubmit} className="space-y-6">
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

                        <div className="mt-8 p-6 border rounded-lg bg-primary/5">
                            <h3 className="font-semibold text-lg mb-4">Payment Details</h3>
                            <div className="space-y-3 text-sm">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="font-semibold">Bank Name:</p>
                                        <p>Hamalatulquran Institute</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">BSB:</p>
                                        <p>083-495</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Account Number:</p>
                                        <p>261740154</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Monthly Fee:</p>
                                        <p className="text-xl font-bold text-primary">$150</p>
                                    </div>
                                </div>
                                <div className="mt-4 space-y-2">
                                    <p className="font-semibold">Payment Instructions:</p>
                                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                        <li>Set up a recurring monthly payment of $150 via online banking</li>
                                        <li>Choose either the 1st or 15th of each month for payment</li>
                                        <li>Use your Full Name as the payment reference</li>
                                        <li>Email screenshot/receipt to: hamalatulquraninstitute@gmail.com</li>
                                    </ul>
                                    <p className="italic text-xs mt-3">
                                        <strong>Important:</strong> Timely payments help ensure classes continue without interruption and allow us to stay focused on providing the best Qur'an learning experience for everyone.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Button type="submit" size="lg" className="w-full">
                            Submit Registration
                        </Button>

                        {result && (
                            <p className={`text-center text-sm ${result.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                                {result}
                            </p>
                        )}
                    </form>
                </Card>
            </div>
        </section>
    )
}
