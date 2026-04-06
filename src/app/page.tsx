"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

export default function LandingPage() {
  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center overflow-hidden px-8">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvd95KSpe72Y_vv7ykHF7srGYmBY_uPo3iJA_VHXEml8n27BNUADhGzrUVNPgu2bcdy6nlYFR5XCo7qUt4r1QqEATKL6GVuSAggGS2YCnaee4s8zCnwiS8Q__Gxx1SfYcneFUo2c6yewajE69T8A3Cb54vcz2hnHXxnJf87hGMkaEuAQWOFKbDtbpfAWWANRxTrl7q8nQmcZFKQA5DUty7NNXCxX5YL0Z1TvTQSpL6t6Bx4NtYd_-mc75OEL2iFGbD9bLzsPM8tUA"
              alt="Cinematic shot of a peaceful Hindu temple interior at dawn with soft sunlight beams filtering through stone arches and incense smoke swirling"
              fill
              sizes="100vw"
              className="object-cover opacity-20 scale-105"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface"></div>
          </div>
          <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary-container/20 text-primary font-semibold tracking-wider text-xs uppercase">
                Authentic Traditions, Seamlessly Orchestrated
              </div>
              <h1 className="text-6xl md:text-8xl font-headline font-bold text-on-surface leading-[1.1] tracking-tight">
                Your Ritual, <br/>
                <span className="text-primary italic">Orchestrated</span> by AI.
              </h1>
              <p className="text-xl md:text-2xl text-on-surface-variant max-w-3xl font-light leading-relaxed">
                Connect with nearby Pandits, Decorators, Caterers, Photographers, Venue Providers, Temples, Puja Supplies, Media & Design, DJs, and Event Planners to bring the divine into your most sacred moments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/register/customer" className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2">
                  Register as Customer
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </Link>
                <Link href="/register/provider" className="bg-white text-primary border-2 border-primary/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/5 transition-all text-center">
                  Apply as Provider
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary-container/30 rounded-full blur-[100px] -z-10"></div>
              <div className="relative temple-arch overflow-hidden bg-surface-container-lowest shadow-2xl border border-outline-variant/10">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdlL2ZM_y0Ai3CemxhXgoYBq-9Omvupc0LSIDzPRcV42kQkfFK2ZCDUBB0cFc4eyuVgKrMtcVaV6oyMNfcIXGEnatBYOISjePpF2QSi6YPjfei-KSEKqFbL2iv9Sj7tSJmIuPZtADMY5s6S6aRU4FU103hb6GwXaLI1-4mcgqFq-atAs6-LKnWa_WmrRTnJdJBwvoY9NnGOgZm1l5R68UVuuS7Q968Qm_3F64lGgVeNrUfZhqaYSrXJ-CIN225CwOy21rwNqBO9IY"
                  alt="High-end editorial photo of a copper puja thali with marigolds and a single lit brass lamp on textured beige stone surface"
                  width={600}
                  height={750}
                  className="w-full aspect-[4/5] object-cover"
                  unoptimized
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white/90 font-headline italic text-lg">"Precision in every mantra. Beauty in every ritual."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">Sacred Rituals, Elevated</h2>
              <p className="text-lg text-on-surface-variant">Experience the richness of Vedic ceremonies through a seamless, premium interface connecting Customers with verified Pandits, Decorators, and Caterers.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-surface-container-lowest aspect-video md:aspect-auto h-[400px]">
                <Image 
                  src="/vedic_wedding_puja_1775391547447.png"
                  alt="Elegant close-up of a Pandit's hands performing a ritual with sacred fire and grains in a high-end setting"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 space-y-4">
                  <h3 className="text-3xl font-headline font-bold text-white">Authentic Pujas & Homas</h3>
                  <p className="text-white/80 max-w-md">Every gesture, mantra, and samagri curated by experts to ensure cosmic alignment for your space and family.</p>
                  <Link className="inline-flex items-center text-secondary-container font-semibold group-hover:gap-4 transition-all gap-2" href="#">
                    Explore Rituals <span className="material-symbols-outlined">east</span>
                  </Link>
                </div>
              </div>
              {/* Feature Card 2 */}
              <div className="group relative overflow-hidden rounded-3xl bg-primary aspect-square md:aspect-auto">
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "20px 20px" }}></div>
                </div>
                <div className="relative h-full p-10 flex flex-col justify-between text-white">
                  <span className="material-symbols-outlined text-5xl">auto_awesome</span>
                  <div>
                    <h3 className="text-2xl font-headline font-bold mb-4">Precision Muhurats</h3>
                    <p className="text-white/80">AI-driven astrological precision to find the exact millisecond for your ritual's maximum potency.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sacred Intelligence Section */}
        <section className="py-32 overflow-hidden bg-surface">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6 pt-12">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <Image 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDft9h1b9pdWOMMlPaKYsZRguG_E7SuQnweqPzXv0EBYmMrmDgdBE9AkGFmFFiKcHXamWhIJnliCTldDZLap7zUUDPWF7u5VdhbXImfxGNuKLRrYhtxzgXnKwk77MMNGnR3hcuIqj4-vzGwSzwZjo1OBpPEXaFDwH4gDyqN_-wRGCp3y4mJAmf2-De8BdvwhFfaPz73Ka2UwfrXBhjEc-X_zu9zSH2QbqQro2KIJzgwPFCYm0PCBLXHNqbVtIokaoxTY4VgReIr4xc"
                      alt="Close up of a premium smartphone screen displaying an elegant AI-powered ritual planning interface with saffron accents"
                      width={400}
                      height={500}
                      className="w-full aspect-[4/5] object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="bg-secondary-container p-8 rounded-2xl text-on-secondary-container">
                    <span className="material-symbols-outlined text-4xl mb-4">chat_bubble</span>
                    <h4 className="font-bold text-xl mb-2">WhatsApp Concierge</h4>
                    <p className="text-sm opacity-80">Automated guest management and ceremony live-streaming for your global family.</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-surface-container-highest p-8 rounded-2xl">
                    <span className="material-symbols-outlined text-4xl mb-4 text-primary">inventory_2</span>
                    <h4 className="font-bold text-xl mb-2">Smart Samagri</h4>
                    <p className="text-sm text-on-surface-variant">Intelligent inventory tracking ensures every sacred ingredient is pristine and present.</p>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <Image 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKGIj-v3l-p4qyPtb_h-Eg_svqIWgSgeIjXKDE-ZM3noantzPDW2JDKb4FT5_WeHx32Z0qDWUa8euDT3xtZyIxDKQf3ThO-9-t2-9tI1g7RPgaodWgPzXluINR4qyS_oYVtBwGGHKkN1jCGUEkH6biEMThaKRykscRH9_IrDsHuWCGT5YwXH7G64olcVRzjJwutK7OkRGEGSk0tostPseaktU2VgJlqfct4iqXzqlQOLxvhoQ9S-fs2fjgNbl2BvXjSLqooPKghdk"
                      alt="Abstract golden light trails swirling in a dark space, representing flowing digital data and ancient energy"
                      width={400}
                      height={400}
                      className="w-full aspect-square object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="w-12 h-1 bg-primary mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold leading-tight">Sacred Intelligence</h2>
              <p className="text-xl text-on-surface-variant leading-relaxed">
                We don't replace tradition; we amplify it. Our proprietary AI orchestrates the logistics—from vendor coordination to guest invites—so you can remain in the meditative state the ritual demands.
              </p>
              <ul className="space-y-6 pt-4">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  </div>
                  <div>
                    <span className="font-bold text-lg block">Automated Guest Flow</span>
                    <span className="text-on-surface-variant">Seamless digital invitations with ritual context and dress-code guidance.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  </div>
                  <div>
                    <span className="font-bold text-lg block">Zero-Inventory Stress</span>
                    <span className="text-on-surface-variant">Our AI cross-references 100+ items to ensure nothing is missing for the Homa.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Trusted Lineage Section */}
        <section className="py-24 bg-surface-container-highest/30">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">Trusted Lineage</h2>
                <p className="text-lg text-on-surface-variant">Every Pandit on our platform undergoes a rigorous 3-tier verification of their Shastric knowledge and lineage.</p>
              </div>
              <button className="border-b-2 border-primary text-primary font-bold py-2 px-1 hover:text-primary-container transition-all">View All Experts</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Pandit 1 */}
              <div className="bg-surface p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow group">
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-6 relative">
                  <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCefNWrZ8EO054ckRkdkjMrViu9j3GAjh12sKQqwkFNI-sf3hwbgwpWlhaAAUgC8vDF77v1PRaTEbOLodVjnr5IfKab7FLqoKSoEcB1FDG7Cb5Y5mOFkEUXR2mNztpZVtUYV9Mr-NEoeSpfj1goyVKX_8NM2k7HdOZUbM47n1tdZzSCCyGlcYcBIyID7hA06dAANnDzHuH-SrvoyL_koQ5mXPsMPnswBH3YaiBxv_97jHZclTuf6lu8kn8Zm9JRcCMDS7EJqNfE320"
                    alt="Portrait of a senior Pandit with grey hair and beard, wearing traditional white dhoti and saffron shawl, serene expression"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    unoptimized
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px] text-orange-600" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    Verified
                  </div>
                </div>
                <h4 className="font-headline font-bold text-xl mb-1 text-on-surface">Acharya Sharma</h4>
                <p className="text-primary text-sm font-semibold mb-4 text-on-secondary-container">30+ Years Experience • Varanasi</p>
                <p className="text-on-surface-variant text-sm line-clamp-2">Specializing in Rigvedic Homas and planetary remedial rituals for domestic peace.</p>
              </div>
              {/* Pandit 2 */}
              <div className="bg-surface p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow group">
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-6 relative">
                  <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP7I303goYwDQmOalLZR5W0UOiM4Ow2oX4yUpUkF-FH8KdZh0GULhhXWuQLg9tswYdo1CwD4hLyR8I3bSlNwb5l1zuinDrhDgxxwKn-g5I2biDQJyJm1eKA7usblSfGdUp432iT4F_is4BgMlu8clBSaGX18gyT3awDRo_P6Ow3rhEXzahhy-dc3NUXJvuL8dhExxSy7dWGFhgVzGhT1NSsDmzJpcHkMRs8FwIb0I-vUO5Av_bYW1dphY7VZkAVtqPlo2ikv3hSYM"
                    alt="Portrait of a Vedic scholar woman in professional attire with traditional elements, representing modern expertise"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    unoptimized
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px] text-orange-600" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    Verified
                  </div>
                </div>
                <h4 className="font-headline font-bold text-xl mb-1 text-on-surface">Dr. Ananya Iyer</h4>
                <p className="text-primary text-sm font-semibold mb-4 text-on-secondary-container">PhD Vedic Studies • Chennai</p>
                <p className="text-on-surface-variant text-sm line-clamp-2">Expert in Griha Pravesh and vastu-aligned ritual orchestration for modern homes.</p>
              </div>
              {/* Decorative Card */}
              <div className="md:col-span-2 bg-primary-container/10 p-12 rounded-2xl flex flex-col justify-center items-center text-center border-2 border-dashed border-primary/20">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-4xl">temple_hindu</span>
                </div>
                <h4 className="text-3xl font-headline font-bold mb-4 text-on-surface">Join the Sangha</h4>
                <p className="text-on-surface-variant mb-8 max-w-sm">Are you a verified Pandit, Decorator, or Event Professional looking to digitalize your practice?</p>
                <Link href="/register/provider" className="bg-on-surface text-white px-8 py-3 rounded-full font-bold hover:bg-primary transition-all inline-block">Apply as a Provider</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-surface text-center">
          <div className="max-w-4xl mx-auto px-8 flex flex-col items-center">
            <span className="material-symbols-outlined text-6xl text-primary mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>flare</span>
            <h2 className="text-5xl md:text-7xl font-headline font-bold mb-8 text-on-surface">Begin Your Path.</h2>
            <p className="text-xl text-on-surface-variant mb-12">The Digital Sanctuary is now open. Step into a world where ancient tradition is respected and modern life is simplified.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/register" className="bg-primary text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl shadow-primary/40 hover:scale-105 transition-all">Get Started Today</Link>
              <button className="outline outline-2 outline-primary/30 text-primary px-12 py-5 rounded-full font-bold text-xl hover:bg-primary/5 transition-all">Schedule a Consultation</button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-50 w-full border-t border-stone-200/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12 py-16 max-w-7xl mx-auto">
          <div className="space-y-6">
            <Link href="/" className="font-headline font-bold text-orange-800 text-3xl flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_florist</span>
              MyPandits
            </Link>
            <p className="font-sans text-sm uppercase tracking-widest text-stone-500 max-w-xs leading-relaxed">
              © 2024 MyPandits. The Digital Sanctuary. All Rights Reserved.
            </p>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-stone-400 hover:text-orange-600 cursor-pointer transition-colors">language</span>
              <span className="material-symbols-outlined text-stone-400 hover:text-orange-600 cursor-pointer transition-colors">eco</span>
              <span className="material-symbols-outlined text-stone-400 hover:text-orange-600 cursor-pointer transition-colors">public</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h5 className="font-sans text-sm uppercase tracking-widest text-orange-800 font-bold">Discover</h5>
              <ul className="space-y-2">
                <li><Link className="font-sans text-sm uppercase tracking-widest text-stone-500 hover:text-orange-600 hover:underline underline-offset-4 transition-opacity duration-500" href="#">Ritual Guidelines</Link></li>
                <li><Link className="font-sans text-sm uppercase tracking-widest text-stone-500 hover:text-orange-600 hover:underline underline-offset-4 transition-opacity duration-500" href="#">Astrology Insight</Link></li>
                <li><Link className="font-sans text-sm uppercase tracking-widest text-stone-500 hover:text-orange-600 hover:underline underline-offset-4 transition-opacity duration-500" href="#">Sacred Wisdom</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="font-sans text-sm uppercase tracking-widest text-orange-800 font-bold">Legal</h5>
              <ul className="space-y-2">
                <li><Link className="font-sans text-sm uppercase tracking-widest text-stone-500 hover:text-orange-600 hover:underline underline-offset-4 transition-opacity duration-500" href="#">Terms of Service</Link></li>
                <li><Link className="font-sans text-sm uppercase tracking-widest text-stone-500 hover:text-orange-600 hover:underline underline-offset-4 transition-opacity duration-500" href="#">Privacy Policy</Link></li>
                <li><Link className="font-sans text-sm uppercase tracking-widest text-stone-500 hover:text-orange-600 hover:underline underline-offset-4 transition-opacity duration-500" href="#">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sari-border"></div>
      </footer>
    </div>
  );
}
