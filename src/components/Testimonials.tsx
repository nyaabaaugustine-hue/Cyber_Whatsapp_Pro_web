import { Star, Quote } from "lucide-react";

const BG_IMAGE =
  "https://res.cloudinary.com/dwsl2ktt2/image/upload/w_1600,q_auto,f_auto/v1777694366/hp_nukt5i.jpg";

const testimonials = [
  {
    name: "Kwame Mensah",
    role: "Digital Marketer",
    location: "Accra, Ghana",
    avatar: "KM",
    color: "bg-emerald-500",
    rating: 5,
    text: "Cyber WhatsApp Pro completely changed how I run my campaigns. I used to spend 3 hours sending messages manually — now it takes 10 minutes. The bulk send feature is incredibly fast and reliable.",
  },
  {
    name: "Abena Osei",
    role: "Small Business Owner",
    location: "Kumasi, Ghana",
    avatar: "AO",
    color: "bg-cyan-500",
    rating: 5,
    text: "I was skeptical at first but the installation guide made it so easy. Within 5 minutes I had it running. My customer response rate went up because I can now follow up with everyone consistently.",
  },
  {
    name: "Yaw Darko",
    role: "Sales Manager",
    location: "Takoradi, Ghana",
    avatar: "YD",
    color: "bg-violet-500",
    rating: 5,
    text: "The auto-reply templates alone are worth it. My team no longer misses customer enquiries even after hours. Support was also super responsive when I had a question about setup.",
  },
  {
    name: "Ama Boateng",
    role: "Event Promoter",
    location: "Accra, Ghana",
    avatar: "AB",
    color: "bg-amber-500",
    rating: 5,
    text: "Promoting events used to be stressful. Now I upload my contact list, write one message, and it goes to thousands in minutes. I've already recommended it to 10 of my colleagues.",
  },
  {
    name: "Kofi Asante",
    role: "E-commerce Seller",
    location: "Accra, Ghana",
    avatar: "KA",
    color: "bg-rose-500",
    rating: 5,
    text: "Best investment for my online business. I use it daily to send order confirmations and promotional messages. Clean interface and it just works — no complicated setup required.",
  },
  {
    name: "Efua Nyarko",
    role: "Real Estate Agent",
    location: "East Legon, Ghana",
    avatar: "EN",
    color: "bg-teal-500",
    rating: 5,
    text: "Sending property listings to hundreds of clients used to take my whole morning. With Cyber WhatsApp Pro I'm done in under 15 minutes. The contact manager keeps everything organised perfectly.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-20 px-4 overflow-hidden"
      style={{
        backgroundImage: `url("${BG_IMAGE}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay so text stays readable over any image */}
      <div className="absolute inset-0 bg-slate-900/75 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/30 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>Trusted by 5,000+ Users</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            What Our Users Say
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto">
            Real results from businesses and marketers across Ghana using Cyber WhatsApp Pro every day.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-white/20 fill-white/20" />

              {/* Rating */}
              <StarRating count={t.rating} />

              {/* Text */}
              <p className="mt-4 text-slate-200 text-sm leading-relaxed">"{t.text}"</p>

              {/* Author */}
              <div className="mt-5 flex items-center gap-3">
                <div
                  className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center flex-shrink-0 ring-2 ring-white/30`}
                >
                  <span className="text-white text-xs font-bold">{t.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-slate-400">
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "5,000+", label: "Active Users" },
            { value: "4.9 / 5", label: "Average Rating" },
            { value: "2 min", label: "Avg. Install Time" },
            { value: "24 / 7", label: "Support Available" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl"
            >
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
