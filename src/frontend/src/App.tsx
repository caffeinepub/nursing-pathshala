import { Badge } from "@/components/ui/badge";
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Star,
  Trophy,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const WA_BASE = "https://wa.me/917003566542?text=";
const WA_GENERAL =
  WA_BASE +
  encodeURIComponent(
    "Hello, I want to know more about Nursing Pathshala courses",
  );
const WA_JEPBN =
  WA_BASE +
  encodeURIComponent(
    "Hello, I want to know more about the JEPBN course at Nursing Pathshala",
  );
const WA_JEMSCN =
  WA_BASE +
  encodeURIComponent(
    "Hello, I want to know more about the JEMSCN course at Nursing Pathshala",
  );
const WA_WBHRB =
  WA_BASE +
  encodeURIComponent(
    "Hello, I want to know more about the WBHRB CBT course at Nursing Pathshala",
  );

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Results", href: "#results" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const courses = [
  {
    id: "jepbn",
    title: "JEPBN",
    fullName: "Joint Entrance for B.Sc Nursing",
    color: "from-[#0E4A73] to-[#1A6FA5]",
    icon: "🏥",
    description:
      "Comprehensive preparation for the Joint Entrance exam for B.Sc Nursing programs across top institutions in West Bengal. Covers all subjects with our proven methodology.",
    duration: "11–12 Months",
    highlights: [
      "Complete Syllabus Coverage",
      "Mock Tests & Practice Papers",
      "Previous Year Analysis",
      "Personal Doubt Sessions",
    ],
    whatsapp: WA_JEPBN,
  },
  {
    id: "jemscn",
    title: "JEMSCN",
    fullName: "Joint Entrance for M.Sc Nursing",
    color: "from-[#0B3E60] to-[#0E6199]",
    icon: "🎓",
    description:
      "Advanced coaching for M.Sc Nursing entrance, designed for nursing graduates aiming for post-graduate excellence and specialization in top nursing colleges.",
    duration: "11–12 Months",
    highlights: [
      "Advanced Subject Material",
      "Research Methodology",
      "Interview Preparation",
      "Expert Faculty Mentorship",
    ],
    whatsapp: WA_JEMSCN,
  },
  {
    id: "wbhrb",
    title: "WBHRB CBT",
    fullName: "West Bengal Health Recruitment Board CBT",
    color: "from-[#082F4A] to-[#0E5080]",
    icon: "💼",
    description:
      "Targeted preparation for WBHRB Computer Based Tests — your gateway to government nursing jobs in West Bengal. Expert guidance for staff nurse recruitment exams.",
    duration: "3–6 Months",
    highlights: [
      "Computer-Based Test Training",
      "Government Job Focus",
      "500+ Practice MCQs",
      "Current Affairs Integration",
    ],
    whatsapp: WA_WBHRB,
  },
];

const results = [
  {
    name: "Priya Sharma",
    exam: "JEPBN 2024",
    result: "Rank 12",
    badge: "rank",
    quote:
      "Got into AIIMS Nursing! My dream came true with Nursing Pathshala's guidance.",
    initials: "PS",
    color: "bg-[#0E4A73]",
  },
  {
    name: "Rahul Das",
    exam: "WBHRB CBT 2024",
    result: "Cleared",
    badge: "cleared",
    quote:
      "Secured a government nursing job. The mock tests were exactly like the real exam!",
    initials: "RD",
    color: "bg-[#D6B04A]",
  },
  {
    name: "Ananya Roy",
    exam: "JEMSCN 2023",
    result: "Rank 5",
    badge: "rank",
    quote: "Top 10 in the state! The faculty here is absolutely world-class.",
    initials: "AR",
    color: "bg-[#0B3E60]",
  },
  {
    name: "Soumya Ghosh",
    exam: "JEPBN 2023",
    result: "Rank 8",
    badge: "rank",
    quote:
      "Dream college achieved! The study material was comprehensive and on-point.",
    initials: "SG",
    color: "bg-[#1A6FA5]",
  },
  {
    name: "Dipankar Sen",
    exam: "WBHRB CBT 2023",
    result: "Cleared",
    badge: "cleared",
    quote: "Proud to serve as a government nurse. Thank you Nursing Pathshala!",
    initials: "DS",
    color: "bg-[#D6B04A]",
  },
  {
    name: "Riya Mondal",
    exam: "JEMSCN 2024",
    result: "Rank 3",
    badge: "rank",
    quote:
      "All thanks to Pathshala! The personal mentoring made all the difference.",
    initials: "RM",
    color: "bg-[#082F4A]",
  },
];

const features = [
  {
    icon: GraduationCap,
    title: "Expert Faculty",
    desc: "Our team of experienced educators and nursing professionals bring real-world expertise to every class.",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    desc: "Hundreds of students have cleared top nursing exams under our guidance with outstanding ranks.",
  },
  {
    icon: BookOpen,
    title: "Study Material",
    desc: "Meticulously crafted notes, practice papers, and mock tests aligned to the latest exam patterns.",
  },
  {
    icon: Users,
    title: "Personalized Mentoring",
    desc: "Individual doubt-clearing sessions and progress tracking to ensure no student is left behind.",
  },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["home", "courses", "results", "why-us", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-poppins min-h-screen bg-white">
      {/* TOP UTILITY BAR */}
      <div className="bg-[#082F4A] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <span className="text-white/70 font-medium tracking-wide">
            🎓 West Bengal's Premier Nursing Coaching Institute
          </span>
          <div className="flex items-center gap-4">
            <a
              href="tel:+917003566542"
              className="flex items-center gap-1 hover:text-[#D6B04A] transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>+91 70035 66542</span>
            </a>
            <span className="text-white/40">|</span>
            <a
              href="mailto:admin@nursingpathshala.in"
              className="flex items-center gap-1 hover:text-[#D6B04A] transition-colors"
            >
              <Mail className="w-3 h-3" />
              <span>admin@nursingpathshala.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* STICKY NAVBAR */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Brand */}
          <button
            type="button"
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-2 group"
            data-ocid="nav.link"
            aria-label="Nursing Pathshala — go to top"
          >
            <img
              src="/assets/uploads/logo-019d3627-fd2f-770b-8f13-a41b0ec5a029-1.png"
              alt="Nursing Pathshala"
              className="h-12 w-auto object-contain"
            />
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => scrollTo(link.href)}
                data-ocid="nav.link"
                className={`px-3 py-1.5 text-sm font-medium rounded transition-all ${
                  activeSection === link.href.replace("#", "")
                    ? "text-[#0E4A73] border-b-2 border-[#0E4A73]"
                    : "text-[#0B2233]/70 hover:text-[#0E4A73]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="nav.primary_button"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#0E4A73] hover:bg-[#0B3E60] text-white text-sm font-semibold px-4 py-2 rounded-full transition-all shadow hover:shadow-md"
            >
              Register Now
            </a>
            <button
              type="button"
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              data-ocid="nav.toggle"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white border-t border-gray-100 px-4 pb-4"
            >
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  data-ocid="nav.link"
                  className="block w-full text-left py-3 border-b border-gray-50 text-[#0B2233] text-sm font-medium hover:text-[#0E4A73] transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="nav.primary_button"
                className="mt-3 flex items-center justify-center gap-2 bg-[#0E4A73] text-white font-semibold py-3 rounded-full text-sm"
              >
                Register Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden scroll-mt-16"
        style={{
          background:
            "linear-gradient(135deg, #0B3E60 0%, #0E4A73 40%, #1A6FA5 70%, #2980b9 100%)",
        }}
      >
        {/* Decorative shapes */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10 bg-white" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-5 bg-white translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-[#D6B04A] opacity-60" />
          <div className="absolute top-1/4 right-1/3 w-3 h-3 rounded-full bg-white opacity-20" />
          <img
            src="/assets/generated/hero-nursing.dim_1200x600.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-overlay"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Badge className="bg-[#D6B04A]/20 text-[#D6B04A] border border-[#D6B04A]/40 mb-4 text-xs font-semibold tracking-widest uppercase px-3 py-1">
                🎓 West Bengal's Top Nursing Coaching
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
                Your Path to a{" "}
                <span className="text-[#D6B04A] relative inline-block">
                  Nursing Career
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    height="4"
                    viewBox="0 0 200 4"
                    fill="none"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <path
                      d="M0 2 Q100 4 200 2"
                      stroke="#D6B04A"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                Starts Here
              </h1>

              <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                Expert coaching for JEPBN, JEMSCN & WBHRB CBT exams. Join
                hundreds of successful nursing professionals who trusted Nursing
                Pathshala to achieve their dreams.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <button
                  type="button"
                  onClick={() => scrollTo("#courses")}
                  data-ocid="hero.primary_button"
                  className="inline-flex items-center gap-2 bg-[#D6B04A] hover:bg-[#E0B94E] text-[#082F4A] font-bold px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-xl text-sm"
                >
                  Explore Courses <ChevronRight className="w-4 h-4" />
                </button>
                <a
                  href={WA_GENERAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="hero.secondary_button"
                  className="inline-flex items-center gap-2 border-2 border-white/50 hover:border-white text-white font-semibold px-6 py-3 rounded-full transition-all text-sm hover:bg-white/10"
                >
                  💬 Enquire on WhatsApp
                </a>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-4">
                {[
                  { value: "500+", label: "Students Enrolled" },
                  { value: "95%", label: "Pass Rate" },
                  { value: "5+", label: "Years of Excellence" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center min-w-[100px]"
                  >
                    <div className="text-2xl font-extrabold text-[#D6B04A]">
                      {stat.value}
                    </div>
                    <div className="text-white/70 text-xs mt-0.5 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section id="courses" className="py-20 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <Badge className="bg-[#EAF4FB] text-[#0E4A73] border border-[#0E4A73]/20 mb-3 text-xs font-semibold tracking-widest uppercase px-3 py-1">
              What We Offer
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2233] mt-2">
              Our Courses
            </h2>
            <p className="text-[#5E6B75] mt-3 max-w-xl mx-auto text-sm sm:text-base">
              Carefully designed programs to maximize your chances of success in
              nursing entrance exams.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-ocid={`courses.item.${i + 1}`}
                className="bg-white rounded-2xl shadow-card border border-[#E7EDF2] overflow-hidden hover:-translate-y-1 transition-transform duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${course.color}`} />
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#EAF4FB] rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      {course.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-[#0B2233]">
                        {course.title}
                      </h3>
                      <p className="text-[#0E4A73] text-xs font-semibold mt-0.5">
                        {course.fullName}
                      </p>
                    </div>
                  </div>

                  <p className="text-[#5E6B75] text-sm leading-relaxed mb-4">
                    {course.description}
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-[#0E4A73]" />
                    <span className="text-sm font-semibold text-[#0B2233]">
                      Duration: {course.duration}
                    </span>
                  </div>

                  <div className="space-y-1.5 mb-6">
                    {course.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0E4A73] flex-shrink-0" />
                        <span className="text-sm text-[#0B2233]">{h}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={course.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={`courses.item.${i + 1}`}
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20b858] text-white font-semibold py-2.5 rounded-xl transition-all text-sm shadow hover:shadow-md"
                  >
                    💬 Enroll via WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section id="results" className="py-20 bg-[#EAF4FB] scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <Badge className="bg-[#0E4A73]/10 text-[#0E4A73] border border-[#0E4A73]/20 mb-3 text-xs font-semibold tracking-widest uppercase px-3 py-1">
              Success Stories
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2233] mt-2">
              Previous Year Results
            </h2>
            <p className="text-[#5E6B75] mt-3 max-w-xl mx-auto text-sm sm:text-base">
              Real students. Real results. See what our dedicated coaching has
              achieved.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                data-ocid={`results.item.${i + 1}`}
                className="bg-white rounded-2xl shadow-card border border-[#E7EDF2] p-6 hover:-translate-y-0.5 transition-transform"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 ${r.color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  >
                    {r.initials}
                  </div>
                  <div>
                    <p className="font-bold text-[#0B2233] text-sm">{r.name}</p>
                    <p className="text-[#5E6B75] text-xs">{r.exam}</p>
                  </div>
                  <div className="ml-auto">
                    {r.badge === "rank" ? (
                      <Badge className="bg-[#0E4A73] text-white text-xs px-2 py-0.5 flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        {r.result}
                      </Badge>
                    ) : (
                      <Badge className="bg-[#25D366] text-white text-xs px-2 py-0.5 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        {r.result}
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {["1", "2", "3", "4", "5"].map((si) => (
                    <Star
                      key={si}
                      className="w-3.5 h-3.5 fill-[#D6B04A] text-[#D6B04A]"
                    />
                  ))}
                </div>
                <p className="text-[#5E6B75] text-sm italic leading-relaxed">
                  "{r.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-us" className="py-20 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <Badge className="bg-[#D6B04A]/15 text-[#a8871e] border border-[#D6B04A]/30 mb-3 text-xs font-semibold tracking-widest uppercase px-3 py-1">
              Our Advantage
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2233] mt-2">
              Why Choose Us?
            </h2>
            <p className="text-[#5E6B75] mt-3 max-w-xl mx-auto text-sm sm:text-base">
              We combine expert knowledge with proven teaching methods to give
              you the best shot at success.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                data-ocid={`features.item.${i + 1}`}
                className="text-center p-6 rounded-2xl border border-[#E7EDF2] hover:border-[#0E4A73]/30 hover:shadow-card transition-all group"
              >
                <div className="w-16 h-16 bg-[#EAF4FB] group-hover:bg-[#0E4A73] rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <f.icon className="w-7 h-7 text-[#0E4A73] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-[#0B2233] mb-2">{f.title}</h3>
                <p className="text-[#5E6B75] text-sm leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#082F4A] text-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/assets/uploads/logo-019d3627-fd2f-770b-8f13-a41b0ec5a029-1.png"
                  alt="Nursing Pathshala"
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                West Bengal's premier nursing coaching institute, guiding
                aspiring nurses toward successful careers through expert
                teaching and comprehensive exam preparation.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[#D6B04A] font-bold mb-4 text-sm uppercase tracking-widest">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      type="button"
                      onClick={() => scrollTo(link.href)}
                      data-ocid="footer.link"
                      className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-1.5"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[#D6B04A]" />{" "}
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h4 className="text-[#D6B04A] font-bold mb-4 text-sm uppercase tracking-widest">
                Courses
              </h4>
              <ul className="space-y-2">
                {courses.map((c) => (
                  <li key={c.id}>
                    <a
                      href={c.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ocid="footer.link"
                      className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-1.5"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[#D6B04A]" />{" "}
                      {c.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[#D6B04A] font-bold mb-4 text-sm uppercase tracking-widest">
                Contact Us
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-[#D6B04A] mt-0.5 flex-shrink-0" />
                  <a
                    href="tel:+917003566542"
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    +91 70035 66542
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-[#D6B04A] mt-0.5 flex-shrink-0" />
                  <a
                    href="mailto:admin@nursingpathshala.in"
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    admin@nursingpathshala.in
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#D6B04A] mt-0.5 flex-shrink-0" />
                  <span className="text-white/60 text-sm">
                    Kolkata, West Bengal, India
                  </span>
                </li>
                <li className="pt-1">
                  <a
                    href={WA_GENERAL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="footer.primary_button"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white font-semibold px-4 py-2 rounded-full text-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/40">
            <span>
              © {new Date().getFullYear()} Nursing Pathshala. All rights
              reserved.
            </span>
            <span>
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                caffeine.ai
              </a>
            </span>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <motion.a
        href={WA_GENERAL}
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="whatsapp.primary_button"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white font-semibold px-4 py-3 rounded-full shadow-xl transition-all hover:shadow-2xl hover:-translate-y-0.5 text-sm"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </motion.a>
    </div>
  );
}
