import Image from "next/image"
import Link from "next/link"

const doctors = [
    {
        name: "Dr. Neetu Shah",
        role: "Cardiologist",
        image: "/images/doctor-1.png",
    },
    {
        name: "Dr. Nayra Patel",
        role: "Neurologist",
        image: "/images/doctor-2.png",
    },
    {
        name: "Dr. Ritika Sharma",
        role: "Radiologist",
        image: "/images/doctor-3.png",
    },
    {
        name: "Dr. Nitya Desai",
        role: "Dentist",
        image: "/images/doctor-3.png",
    },
]

export const Doctors = () => {
    return (
        <section id="doctors" className="py-16 section-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="inline-block py-2 px-4 rounded-full bg-blue-100 text-primary text-sm font-semibold mb-4">
                        OUR MEDICAL TEAM
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                        Meet Our Specialists
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Our team of highly qualified doctors and surgeons is dedicated to providing the best medical care with expertise and compassion.
                    </p>
                    <Link href="/doctors" className="btn-outline inline-block">
                        View All Doctors
                    </Link>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {doctors.map((doctor, index) => (
                        <div key={index} className="medical-card text-center">
                            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 bg-gray-200">
                                <Image
                                    src={doctor.image}
                                    alt={doctor.name}
                                    width={128}
                                    height={128}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-1">{doctor.name}</h3>
                            <p className="text-sm text-secondary font-semibold">{doctor.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
