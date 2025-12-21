import React from "react";

export default function HorizontalBack() {
    return (
        <div className="min-h-screen bg-olchi-bg overflow-hidden print:overflow-visible flex items-center justify-center">
            {/* Print Landscape Force */}
            <style>{`
            @media print {
                @page { size: landscape; margin: 0; }
                body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            }
        `}</style>

            <div className="w-[8.5in] h-[5.5in] mx-auto bg-olchi-bg px-8 py-8 flex flex-col items-center justify-center text-center shadow-none md:shadow-xl print:shadow-none print:w-[8.5in] print:h-[5.5in] print:m-0 border-none md:border border-[#D3C7B5] print:border-none">

                {/* Logo */}
                <div className="mb-12">
                    <img
                        src="/olchi_logo.png"
                        alt="Olchi Logo"
                        className="w-56 md:w-72 object-contain"
                    />
                </div>

                {/* Content Container */}
                <div className="max-w-4xl space-y-8 text-olchi-text">
                    <h2 className="text-olchi-red text-3xl md:text-4xl tracking-[0.2em] font-extrabold uppercase mb-8">
                        That’s Olchi.
                    </h2>

                    <p className="text-xl leading-relaxed font-medium max-w-2xl mx-auto">
                        Olchi (올치) means "that’s right."<br />
                        It’s the moment something feels correct—simple food, done properly.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left text-base text-olchi-muted leading-relaxed items-start mt-8">
                        <div className="space-y-4">
                            <p>
                                Our roots go back to Apgujeong, Seoul, where our parents ran a neighborhood charcoal BBQ and budae jjigae spot in the early 2000s. The cooking was straightforward and honest—built on grilling over charcoal, simmering one pot at a time, and feeding the same regulars every day.
                            </p>
                            <p>
                                Years later, that approach carried over to the Bay Area.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <p className="font-medium text-lg text-olchi-text">Olchi is fully family-run.</p>
                            <p>
                                Every dish starts in our home kitchen, the same way our mom cooks for family—no shortcuts, no extras.
                            </p>
                            <p className="font-medium text-lg text-olchi-text">
                                Simple Korean comfort food, meant to feel familiar from the first bite.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Decor / Footer */}
                <div className="mt-20 text-olchi-red">
                    <p className="tracking-[0.3em] font-bold text-sm">EST. 2024</p>
                </div>
            </div>
        </div>
    );
}
