import React from "react";

export default function VerticalBack() {
    return (
        <div className="min-h-screen bg-white md:bg-gray-100 flex items-start justify-center p-0 md:p-8 font-body print:p-0 print:bg-white">
            {/* Half Page Container (5.5" x 8.5") */}
            <div className="w-[5.5in] h-[8.5in] mx-auto bg-olchi-bg px-8 py-12 flex flex-col items-center justify-center text-center shadow-none md:shadow-xl print:shadow-none print:w-[5.5in] print:h-[8.5in] print:m-0 border-none md:border border-[#D3C7B5] print:border-none">

                {/* Logo */}
                <div className="mb-8">
                    <img
                        src="/olchi_logo.png"
                        alt="Olchi Logo"
                        className="w-32 object-contain opacity-90"
                    />
                </div>

                {/* Content */}
                <div className="max-w-xs space-y-6 text-olchi-text">
                    <h2 className="text-olchi-red text-2xl tracking-[0.2em] font-extrabold uppercase mb-4">
                        That’s Olchi.
                    </h2>

                    <div className="space-y-4">
                        <p className="text-sm leading-relaxed font-medium">
                            Olchi (올치) means "that’s right."<br />
                            It’s the moment something feels correct—simple food, done properly.
                        </p>

                        <p className="text-xs text-olchi-muted leading-relaxed">
                            Our roots go back to Apgujeong, Seoul, where our parents ran a neighborhood charcoal BBQ and budae jjigae spot in the early 2000s. The cooking was straightforward and honest—built on grilling over charcoal, simmering one pot at a time, and feeding the same regulars every day.
                        </p>

                        <p className="text-xs text-olchi-muted leading-relaxed">
                            Years later, that approach carried over to the Bay Area.
                        </p>

                        <div className="space-y-1 pt-0">
                            <p className="font-medium text-sm text-olchi-text">Olchi is fully family-run.</p>
                            <p className="text-xs text-olchi-muted leading-relaxed">
                                Every dish starts in our home kitchen, the same way our mom cooks for family—no shortcuts, no extras.
                            </p>
                            <p className="font-medium text-sm text-olchi-text pt-1">
                                Simple Korean comfort food, meant to feel familiar from the first bite.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-10 text-olchi-red">
                    <p className="tracking-[0.3em] font-bold text-[10px]">EST. 2024</p>
                </div>
            </div>
        </div>
    );
}
