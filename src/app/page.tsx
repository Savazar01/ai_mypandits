"use client";

// [PROD CHECK] Verify the service URL during initialization
if (typeof window === "undefined") {
  console.log(">>>> [PROD CHECK] WhatsApp Service URL:", process.env.WHATSAPP_SERVICE_URL);
}

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

export default function LandingPage() {
  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      <Header />

      <main className="pt-20 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] md:min-h-[921px] flex items-center overflow-hidden px-6 md:px-12">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=2070"
              alt="Cinematic wide shot of a high-end corporate networking event with elegant lighting and professional atmosphere"
              fill
              sizes="100vw"
              className="object-cover opacity-20 scale-105"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface"></div>
          </div>
          <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary-container/20 text-primary font-semibold tracking-wider text-[10px] md:text-xs uppercase">
                Professional Events, Seamlessly Orchestrated
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-8xl font-headline font-bold text-on-surface leading-[1.1] tracking-tight">
                Your Event, <br className="hidden sm:block" />
                <span className="text-primary italic">Orchestrated</span> by AI.
              </h1>
              <p className="text-base md:text-2xl text-on-surface-variant max-w-3xl font-light leading-relaxed">
                Connect with professional Decorators, Caterers, Photographers, Venue Providers, Media & Design, Entertainment, and Event Planners to execute your most important moments with precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/register/customer" className="saffron-gold-gradient text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2">
                  Register as Customer
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </Link>
                <Link href="/register/provider" className="bg-surface text-primary border-2 border-primary/40 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/10 transition-all text-center hover:scale-[1.02] active:scale-95">
                  Apply as Provider
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-12 -left-12 w-48 md:w-64 h-48 md:h-64 bg-secondary-container/30 rounded-full blur-[80px] md:blur-[100px] -z-10"></div>
              <div className="relative hero-card-radius overflow-hidden bg-surface-container-lowest shadow-2xl border border-outline-variant/10 rounded-2xl lg:rounded-none">
                <Image 
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=2069"
                  alt="Modern corporate conference room with premium furniture and event staging"
                  width={600}
                  height={750}
                  priority
                  className="w-full aspect-[4/5] object-cover max-h-[300px] md:max-h-none"
                  unoptimized
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white/90 font-headline italic text-base md:text-lg">"Precision in every detail. Excellence in every event."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">Professional Events, Elevated</h2>
              <p className="text-lg text-on-surface-variant">Experience the future of event management through a seamless, premium interface connecting Customers with verified Vendors, Decorators, and Planners.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-surface-container-lowest aspect-video md:aspect-auto h-[350px] md:h-[400px]">
                <Image 
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=2012"
                  alt="Modern conference hall with people engaged and high-end lighting"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 space-y-4">
                  <h3 className="text-3xl font-headline font-bold text-white">Seamless Orchestration</h3>
                  <p className="text-white/80 max-w-md">Every detail, timeline, and vendor curated by AI to ensure perfect execution for your corporate or social gatherings.</p>
                  <Link className="inline-flex items-center text-secondary-container font-semibold group-hover:gap-4 transition-all gap-2" href="#">
                    Explore Event Types <span className="material-symbols-outlined">east</span>
                  </Link>
                </div>
              </div>
              {/* Feature Card 2 */}
              <div className="group relative overflow-hidden rounded-3xl bg-primary aspect-square md:aspect-auto">
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "20px 20px" }}></div>
                </div>
                <div className="relative h-full p-10 flex flex-col justify-between text-white">
                  <span className="material-symbols-outlined text-5xl">schedule_send</span>
                  <div>
                    <h3 className="text-2xl font-headline font-bold mb-4">Precision Scheduling</h3>
                    <p className="text-white/80">AI-driven timeline optimization to ensure every segment of your event occurs at the perfect moment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intelligent Orchestration Section */}
        <section className="py-32 overflow-hidden bg-surface">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6 pt-12">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <Image 
                      src="https://images.unsplash.com/photo-1512428559083-a400aee70237?auto=format&fit=crop&q=80&w=2070"
                      alt="Close-up of a high-end smartphone screen showing a professional event management dashboard with real-time logistics"
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
                    <h4 className="font-bold text-xl mb-2">Smart Inventory</h4>
                    <p className="text-sm text-on-surface-variant">Intelligent logistics tracking ensures every event material is high-quality and delivered on site.</p>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <Image 
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
                      alt="Digital rendering of glowing data nodes and connections representing AI-driven event logic"
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
              <h2 className="text-4xl md:text-5xl font-headline font-bold leading-tight">Intelligent Orchestration</h2>
              <p className="text-xl text-on-surface-variant leading-relaxed">
                We simplify the complex logsitics of event planning. Our proprietary AI orchestrates everything from vendor coordination to real-time guest communication, so you can focus on the experience.
              </p>
              <ul className="space-y-6 pt-4">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  </div>
                  <div>
                    <span className="font-bold text-lg block">Smart Guest Management</span>
                    <span className="text-on-surface-variant">Seamless digital invitations with real-time RSVPs and schedule updates.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  </div>
                  <div>
                    <span className="font-bold text-lg block">Automated Supply Logistics</span>
                    <span className="text-on-surface-variant">AI-driven tracking ensures every requirement is confirmed and delivered on time.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Trusted Lineage Section */}
        <section className="py-24 bg-surface-container-highest/30">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">Verified Expertise</h2>
                <p className="text-lg text-on-surface-variant">Every vendor on our platform undergoes a rigorous 3-tier verification of their professional track record and service quality.</p>
              </div>
              <button className="border-b-2 border-primary text-primary font-bold py-2 px-1 hover:text-primary-container transition-all">View All Vendors</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Consultant 1 */}
              <div className="bg-surface p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow group">
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-6 relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1974"
                    alt="Portrait of a professional event consultant in a business suit with a friendly and expert expression"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    unoptimized
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold tracking-widest uppercase flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px] text-orange-600" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    Verified
                  </div>
                </div>
                <h4 className="font-headline font-bold text-xl mb-1 text-on-surface">Marcus Sterling</h4>
                <p className="text-primary text-sm font-semibold mb-4 text-on-secondary-container">Conference Specialist • 15+ Years</p>
                <p className="text-on-surface-variant text-sm line-clamp-2">Expert in high-stakes corporate event logistics and large-scale community orchestration.</p>
              </div>
              {/* Designer 2 */}
              <div className="bg-surface p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow group">
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-6 relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1976"
                    alt="Portrait of a senior event designer in professional attire representing high-end creative expertise"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    unoptimized
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold tracking-widest uppercase flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px] text-orange-600" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    Verified
                  </div>
                </div>
                <h4 className="font-headline font-bold text-xl mb-1 text-on-surface">Elena Rodriguez</h4>
                <p className="text-primary text-sm font-semibold mb-4 text-on-secondary-container">Event Designer • Award-Winning</p>
                <p className="text-on-surface-variant text-sm line-clamp-2">Creative visionary specializing in transformative social events and immersive experiences.</p>
              </div>
              {/* Decorative Card */}
              <div className="md:col-span-2 bg-primary-container/10 p-12 rounded-2xl flex flex-col justify-center items-center text-center border-2 border-dashed border-primary/20">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-4xl">event_seat</span>
                </div>
                <h4 className="text-3xl font-headline font-bold mb-4 text-on-surface">Join the Network</h4>
                <p className="text-on-surface-variant mb-8 max-w-sm">Are you a professional Decorator, Caterer, or Event Planner looking to digitalize your business?</p>
                <Link href="/register/provider" className="bg-on-surface text-white px-8 py-3 rounded-full font-bold hover:bg-primary transition-all inline-block">Apply as a Provider</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-32 bg-surface text-center">
          <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center">
            <span className="material-symbols-outlined text-6xl text-primary mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>event_available</span>
            <h2 className="text-5xl md:text-7xl font-headline font-bold mb-8 text-on-surface">Begin Your Event.</h2>
            <p className="text-xl text-on-surface-variant mb-12">The EventicAI platform is now open for all your event planning needs. Step into a world where complex logistics are simplified by AI.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/register" className="bg-primary text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl shadow-primary/40 hover:scale-105 transition-all">Get Started Today</Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-50 w-full border-t border-stone-200/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 py-16 max-w-7xl mx-auto">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img 
                src="https://savazar.com/wp-content/uploads/2023/10/cropped-Transparent_Image_2-300x100.png" 
                alt="EventicAI Logo" 
                className="h-8 w-auto object-contain"
              />
              <span className="font-headline font-bold text-orange-800 text-2xl">EventicAI</span>
            </Link>
            <p className="font-sans text-sm uppercase tracking-widest text-stone-500 max-w-xs leading-relaxed">
              © 2024 EventicAI. AI Event Orchestration. All Rights Reserved.
            </p>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-stone-400 hover:text-orange-600 cursor-pointer transition-colors">calendar_month</span>
              <span className="material-symbols-outlined text-stone-400 hover:text-orange-600 cursor-pointer transition-colors">groups</span>
              <span className="material-symbols-outlined text-stone-400 hover:text-orange-600 cursor-pointer transition-colors">location_on</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h5 className="font-sans text-sm uppercase tracking-widest text-orange-800 font-bold">Discover</h5>
              <ul className="space-y-2">
                <li><Link className="font-sans text-sm uppercase tracking-widest text-stone-500 hover:text-orange-600 hover:underline underline-offset-4 transition-opacity duration-500" href="#">Event Types</Link></li>
                <li><Link className="font-sans text-sm uppercase tracking-widest text-stone-500 hover:text-orange-600 hover:underline underline-offset-4 transition-opacity duration-500" href="#">Vendor Directory</Link></li>
                <li><Link className="font-sans text-sm uppercase tracking-widest text-stone-500 hover:text-orange-600 hover:underline underline-offset-4 transition-opacity duration-500" href="#">Planning Tools</Link></li>
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
        <div className="section-divider-dots"></div>
      </footer>
    </div>
  );
}
