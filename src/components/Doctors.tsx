"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"

const getDoctors = (t: (key: string) => string) => [
    {
        name: t("doctors.doctor1Name"),
        role: t("doctors.doctor1Role"),
        image: "/images/doctor-1.png",
    },
    {
        name: t("doctors.doctor2Name"),
        role: t("doctors.doctor2Role"),
        image: "/images/doctor-2.png",
    },
    {
        name: t("doctors.doctor3Name"),
        role: t("doctors.doctor3Role"),
        image: "/images/doctor-3.png",
    },
    {
        name: t("doctors.doctor4Name"),
        role: t("doctors.doctor4Role"),
        image: "/images/doctor-4.png",
    },
    {
        name: t("doctors.doctor5Name"),
        role: t("doctors.doctor5Role"),
        image: "/images/doctor-5.png",
    },
]

export const Doctors = () => {
    const { t } = useLanguage()
    const doctors = getDoctors(t)
    
    return (
        <section id="doctors" className="py-16 section-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="inline-block py-2 px-4 rounded-full bg-blue-100 text-primary text-sm font-semibold mb-4">
                        {t("doctors.title")}
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                        {t("doctors.subtitle")}
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        {t("doctors.description")}
                    </p>
                    <Link href="/doctors" className="btn-outline inline-block">
                        {t("doctors.viewProfile")}
                    </Link>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {doctors.map((doctor, index) => (
                        <div key={index} className="medical-card text-center">
                            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-3 bg-gray-200">
                                <Image
                                    src={doctor.image}
                                    alt={doctor.name}
                                    width={96}
                                    height={96}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <h3 className="text-base font-bold text-primary mb-1">{doctor.name}</h3>
                            <p className="text-xs text-secondary font-semibold">{doctor.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
