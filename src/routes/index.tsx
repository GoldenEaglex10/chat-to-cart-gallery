import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Check, CheckCheck, ChevronDown, Mic, Paperclip, Phone, Smile, Sparkles, CreditCard, CalendarCheck, Truck, ShoppingBag } from "lucide-react";
import food from "@/assets/uc-food.jpg";
import salon from "@/assets/uc-salon.jpg";
import carwash from "@/assets/uc-carwash.jpg";
import sneakers from "@/assets/uc-sneakers.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TengaNow — Sell. Book. Grow on WhatsApp" },
      { name: "description", content: "Take orders, book appointments, collect payments and manage deliveries — all through WhatsApp." },
      { property: "og:title", content: "TengaNow — Sell. Book. Grow on WhatsApp" },
      { property: "og:description", content: "Orders, bookings and payments for shops, salons, clinics and mobile services on WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Scene = { tag: string; store: string; initial: string; img: string; title: string; text: string; cta: string; price: string; reply: string; confirm: string };

const scenes: Scene[] = [
  { tag: "Restaurants", store: "Harvest Kitchen", initial: "H", img: food, title: "Rainbow Grain Bowl", text: "Fresh today: quinoa, roasted sweet potato, avocado & chickpeas.", cta: "ORDER THIS ITEM", price: "$8.50", reply: "2 bowls please, deliver to Avondale 🙏", confirm: "Order #2041 confirmed · Rider on the way 🛵" },
  { tag: "Barbers & Salons", store: "Fade Studio", initial: "F", img: salon, title: "Skin Fade + Beard Trim", text: "Next free slots today: 14:00 · 15:30 · 17:00", cta: "BOOK A SLOT", price: "$12", reply: "15:30 works for me ✂️", confirm: "Booked! See you at 15:30. Reminder set ⏰" },
  { tag: "Car Washes", store: "SparkleWash", initial: "S", img: carwash, title: "Full Valet — Mobile", text: "We come to you. Foam wash, interior vacuum & tyre shine.", cta: "BOOK MOBILE WASH", price: "$20", reply: "Saturday 9am at my office please", confirm: "Confirmed for Sat 09:00 · Pay link sent 💳" },
  { tag: "Retail Shops", store: "Kicks Corner", initial: "K", img: sneakers, title: "Court Classic — Green", text: "Sizes 38–45 in stock. Free delivery in Harare.", cta: "ORDER THIS ITEM", price: "$45", reply: "Size 42, I'll pay with EcoCash", confirm: "Payment received ✅ Shipping today" },
];

const useCases = ["Restaurants", "Barbers", "Salons", "Car washes", "Clinics", "Tyre services", "Boutiques", "Cleaning", "Home repairs", "Bakeries", "Pharmacies", "Tutors"];

function Index() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % scenes.length), 5000);
    return () => clearInterval(t);
  }, []);
  const s = scenes[i];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/" className="font-display text-2xl font-extrabold tracking-tight">Tenga<span className="rounded-md bg-lime px-1">Now</span></a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground lg:flex">
          {["Appointments", "Shops", "Other businesses"].map((n) => (
            <span key={n} className="flex cursor-pointer items-center gap-1 hover:text-foreground">{n}<ChevronDown className="size-3.5" /></span>
          ))}
          {["Features", "Pricing", "FAQ"].map((n) => <a key={n} className="hover:text-foreground" href="#">{n}</a>)}
        </nav>
        <div className="flex items-center gap-4">
          <a href="#" className="hidden text-sm font-semibold sm:block">Sign in</a>
          <a href="#" className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-primary-foreground">Get started <ArrowRight className="size-4" /></a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-20 pt-10 lg:grid-cols-[1.05fr_1fr] lg:pt-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold">
            <span className="size-2 rounded-full bg-wa animate-pulse-ring" /> Now serving <span key={s.tag} className="animate-msg text-wa">{s.tag}</span>
          </span>
          <h1 className="mt-7 font-display text-6xl font-extrabold leading-[0.92] tracking-tight sm:text-7xl xl:text-[5.5rem]">
            Sell. Book.<br />Grow on<br />
            <span className="relative inline-block -rotate-2 rounded-2xl bg-lime px-4 pb-2">WhatsApp</span>
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Orders, bookings, payments and deliveries — all inside the chat your customers already use every day.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground transition hover:-translate-y-0.5">Book a demo <ArrowRight className="size-4" /></a>
            <a href="#" className="inline-flex items-center rounded-full border border-border bg-card px-7 py-4 font-semibold transition hover:-translate-y-0.5">View pricing</a>
          </div>
          <div className="mt-10 flex gap-2">
            {scenes.map((sc, k) => (
              <button key={sc.tag} onClick={() => setI(k)} className={`rounded-full px-4 py-2 text-xs font-semibold transition ${k === i ? "bg-ink text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-secondary"}`}>{sc.tag}</button>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center [perspective:1600px]">
          <div className="absolute inset-0 -z-0 scale-125 bg-glow" />
          <Chip className="-left-8 top-4 [animation-delay:-1s]" icon={<CreditCard className="size-4" />} label="Payment received" sub={s.price} />
          <Chip className="-right-2 top-40 [animation-delay:-3s]" icon={<CalendarCheck className="size-4" />} label="Auto reminders" sub="Sent 1h before" />
          <Chip className="bottom-24 -left-4 [animation-delay:-2s]" icon={<Truck className="size-4" />} label="Delivery tracking" sub="Live updates" />
          <Chip className="bottom-6 right-4 [animation-delay:-4s]" icon={<ShoppingBag className="size-4" />} label="+38 orders today" sub="via WhatsApp" />

          <div className="relative animate-sway">
            <div className="w-[300px] rounded-[3rem] bg-ink p-3 shadow-phone sm:w-[330px]">
              <div className="overflow-hidden rounded-[2.4rem] bg-wa">
                <div className="flex items-center justify-between px-6 pt-3 text-[11px] font-semibold text-primary-foreground">
                  <span>9:41</span><span className="h-5 w-24 rounded-full bg-ink" /><span>5G</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 text-primary-foreground">
                  <span className="grid size-9 place-items-center rounded-full bg-lime font-bold text-ink">{s.initial}</span>
                  <div className="flex-1 leading-tight">
                    <p key={s.store} className="animate-msg text-sm font-bold">{s.store} <Check className="inline size-3 rounded-full bg-primary-foreground p-px text-wa" /></p>
                    <p className="text-[11px] opacity-80">online</p>
                  </div>
                  <Phone className="size-4" />
                </div>
                <div key={i} className="chat-pattern flex h-[470px] flex-col gap-3 p-3">
                  <span className="mx-auto rounded-md bg-card px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">TODAY</span>
                  <div className="animate-msg w-[88%] rounded-2xl rounded-tl-sm bg-card p-2 shadow-sm">
                    <img src={s.img} alt={s.title} width={944} height={704} className="h-32 w-full rounded-xl object-cover" />
                    <div className="flex items-baseline justify-between px-1 pt-2">
                      <p className="text-xs font-bold">{s.title}</p><p className="text-xs font-bold text-wa">{s.price}</p>
                    </div>
                    <p className="px-1 pt-1 text-[11px] leading-snug text-muted-foreground">{s.text}</p>
                    <div className="mt-2 rounded-lg bg-wa py-2 text-center text-[11px] font-bold text-primary-foreground">{s.cta}</div>
                  </div>
                  <div className="animate-msg ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-wa-bubble px-3 py-2 text-[11px] [animation-delay:1.1s]">
                    {s.reply}<span className="ml-2 inline-flex items-center gap-0.5 text-[9px] text-muted-foreground">09:42 <CheckCheck className="size-3 text-wa" /></span>
                  </div>
                  <div className="animate-msg flex w-[85%] items-center gap-2 rounded-2xl rounded-tl-sm bg-card px-3 py-2 text-[11px] font-semibold [animation-delay:2.2s]">
                    <Sparkles className="size-3.5 shrink-0 text-wa" />{s.confirm}
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-wa-chat px-3 pb-5 pt-2 text-muted-foreground">
                  <Smile className="size-4" /><Paperclip className="size-4" />
                  <span className="flex-1 rounded-full bg-card px-3 py-1.5 text-[11px]">Type a message…</span>
                  <span className="grid size-8 place-items-center rounded-full bg-wa text-primary-foreground"><Mic className="size-4" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-6">
        <div className="flex w-max animate-marquee gap-10">
          {[...useCases, ...useCases].map((u, k) => (
            <span key={k} className="flex items-center gap-10 font-display text-2xl font-bold text-muted-foreground">{u}<span className="size-2 rounded-full bg-lime" /></span>
          ))}
        </div>
      </section>
    </div>
  );
}

function Chip({ className, icon, label, sub }: { className: string; icon: React.ReactNode; label: string; sub: string }) {
  return (
    <div className={`absolute z-10 hidden animate-float items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-chip sm:flex ${className}`}>
      <span className="grid size-9 place-items-center rounded-xl bg-lime text-ink">{icon}</span>
      <div className="leading-tight"><p className="text-xs font-bold">{label}</p><p className="text-[11px] text-muted-foreground">{sub}</p></div>
    </div>
  );
}
