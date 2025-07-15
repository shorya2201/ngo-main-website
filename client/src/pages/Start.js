"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowRight, Heart, Users, Zap, Building } from "lucide-react"
import rnp from "../img/rnp.png"
import wecare from "../img/wecare.png"

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeIntervention, setActiveIntervention] = useState("Education")
  const [activeCenter, setActiveCenter] = useState("CSAA")

  // Sample images for slideshow
  const slides = [
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1594736797933-d0d3085cf6dd?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const partnerLogos = [
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
    "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop",
    "https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=100&fit=crop",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
    "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop",
  ]

  // Logo arrays for different categories
  const institutionLogos = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fd1y9nyGy7R4GjfuBXIX45cj3hGghN.png", // Will be extracted from the institutions image
    "/placeholder.svg?height=80&width=120",
    "/placeholder.svg?height=80&width=120",
    "/placeholder.svg?height=80&width=120",
    "/placeholder.svg?height=80&width=120",
    "/placeholder.svg?height=80&width=120",
  ]

  const marketLogos = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RykRI0M2XQ0fbbgV0PrTAeyLnQgAVv.png", // Will be extracted from the markets image
    "/placeholder.svg?height=80&width=120",
    "/placeholder.svg?height=80&width=120",
    "/placeholder.svg?height=80&width=120",
    "/placeholder.svg?height=80&width=120",
    "/placeholder.svg?height=80&width=120",
  ]

  const civilSocietyLogos = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EpgonihgBXupynpKj9hC5K693iTjOv.png", // Will be extracted from the civil society image
    "/placeholder.svg?height=80&width=120",
    "/placeholder.svg?height=80&width=120",
    "/placeholder.svg?height=80&width=120",
    "/placeholder.svg?height=80&width=120",
    "/placeholder.svg?height=80&width=120",
  ]

  const interventions = {
    Education: {
      title: "Education",
      content: [
        "Our mission to democratize access to quality education drives our relentless work with underserved children across India. At SWIS, we partner with shelter homes, government schools, and slum communities to provide holistic educational support—from trained teachers and digital learning tools to personalized mentoring. By focusing on foundational learning, inclusive pedagogy, and bridge programs, we aim to eliminate learning poverty and create pathways to academic success.",
        "Education is not just a right; it is a powerful tool for breaking intergenerational cycles of poverty. Our interventions go beyond classroom instruction—we work with communities, parents, and local schools to foster a culture of learning. By integrating life skills, career guidance, and awareness on rights and civic responsibilities, we are raising a generation of empowered, informed, and socially conscious citizens.",
      ],
    },
    "Skill Development": {
      title: "Skill Development",
      content: [
        "At SWIS, we believe in equipping youth with the skills they need to thrive in today's fast-changing world. Through targeted skill development initiatives—ranging from digital and financial education to vocational training and leadership workshops—we prepare individuals for real-world challenges and opportunities. Our programs are demand-driven, industry-aligned, and focused on making youth job-ready and future-proof.",
        "We work closely with educational institutions, grassroots trainers, and professional mentors to ensure each participant builds a tangible skill set. Whether it's preparing for employment, becoming a social entrepreneur, or gaining confidence through public speaking and negotiation, our goal is to turn potential into impact. Every skill learned at SWIS becomes a stepping stone to economic independence and personal dignity.",
      ],
    },
    Nutrition: {
      title: "Nutrition",
      content: [
        "Good nutrition is the foundation of good health, learning, and productivity—yet it remains out of reach for many children in underserved communities. SWIS runs sustainable nutrition programs that ensure children receive wholesome, freshly prepared meals at shelter homes, orphanages and schools we support. Our goal is to fight malnutrition with dignity, efficiency, and community participation.",
        "We don't just serve food—we build a culture of nutrition. Our interventions include nutrition education, weekly meal planning with local produce, and regular health check-ups. By combining food security with awareness, we're helping families make informed choices and ensuring children have the physical and mental stamina to pursue their dreams.",
      ],
    },
    Healthcare: {
      title: "Healthcare",
      content: [
        "SWIS's healthcare initiatives address the deep inequities that deny basic medical access to vulnerable populations. We conduct regular health camps, provide access to diagnostics and essential medicines, and work with experts to deliver preventive care in both urban slums and remote villages. Our healthcare outreach is people-centered, culturally sensitive, and action-oriented.",
        "From menstrual hygiene awareness to mental health counseling, our approach is comprehensive and inclusive. By collaborating with public health professionals and local volunteers, we bring dignity to care and bridge the last-mile health gap. At SWIS, we believe that everyone—regardless of where they're born—deserves the right to live a healthy and hopeful life.",
      ],
    },
    "Relief of Poor": {
      title: "Relief of Poor",
      content: [
        "In the face of emergencies or chronic poverty, SWIS stands as a pillar of support. Whether it's distributing relief during natural disasters or supporting families during financial crises, our focus is on swift, empathetic, and meaningful action. We identify the most vulnerable—daily wage earners, women-led households, orphaned children—and deliver targeted aid where it's needed most.",
        "But our work goes beyond temporary relief. We empower the poor through sustainable interventions: linking them to government schemes, providing access to education, healthcare, and skilling opportunities, and enabling long-term community development. Our vision is not just to provide aid—but to restore agency, dignity, and hope to every life we touch.",
      ],
    },
  }

  const centers = {
    CSAA: {
      title: "Centre for Social Awareness & Action",
      subtitle: "CSAA",
      content: [
        "Our commitment to creating socially aware leaders is embedded in the work of the Centre for Social Awareness & Action. We recognize that lasting impact begins with understanding—and CSAA equips youth, changemakers, and professionals with the tools to analyze, engage, and act on pressing social issues. Through intensive courses, live projects, field immersions, and practical workshops, CSAA fosters a deep sense of responsibility and purpose.",
        "Our mission is to drive systemic change through education and experiential learning. By nurturing a new generation of social advocates, proposal writers, and on-ground project designers, CSAA serves as a launchpad for impact-driven careers and initiatives. Every engagement is designed to spark thought, build empathy, and translate awareness into meaningful social action.",
      ],
    },
    CSII: {
      title: "Centre for Social Impact & Innovation",
      subtitle: "CSII",
      content: [
        "Growth is meaningful only when it uplifts those at the grassroots. The Centre for Social Impact & Innovation stands at the intersection of strategy, support, and sustainability—empowering small and mid-sized NGOs with the tools, training, and resources they need to scale impact. Through CSR facilitation, access to grants, and powerful partnerships, CSII enables ideas to become institutions of change.",
        "We are committed to building the next generation of high-impact organizations. Our capacity-building initiatives go beyond compliance, focusing on innovation, resilience, and operational excellence. CSII supports organizations to become agile, accountable, and aligned with the broader SDG framework—ensuring that every rupee invested creates enduring social value.",
      ],
    },
    CCAE: {
      title: "Centre for Civil Administration & Engagement",
      subtitle: "CCAE",
      content: [
        "At SWIS, we believe that democracy thrives when citizens are engaged and informed. The Centre for Civil Administration & Engagement is our initiative to build civic consciousness through fellowships, structured volunteering, and real-world exposure to public systems. By placing young citizens in the heart of governance and community action, CCAE nurtures a new culture of ethical public engagement.",
        "Our goal is to create a generation that doesn't just demand change—but knows how to deliver it. Through mentorship, training, and field experiences with local government bodies and civil society partners, CCAE transforms idealism into public leadership. Every program we run is an investment in participatory democracy and responsive governance.",
      ],
    },
  }

  const ImageSlideshow = ({ images, className = "" }) => {
    const [currentImageSlide, setCurrentImageSlide] = useState(0)

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentImageSlide((prev) => (prev + 1) % images.length)
      }, 3000)
      return () => clearInterval(timer)
    }, [images.length])

    return (
      <div className={`relative h-96 rounded-lg overflow-hidden ${className}`}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageSlide}
            src={images[currentImageSlide]}
            alt={`Slide ${currentImageSlide + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>
    )
  }

  const EnhancedLogoStrip = ({ logos, direction = "left", title, bgColor = "#FCFDFF" }) => {
    const duplicatedLogos = [...logos, ...logos, ...logos, ...logos]

    return (
      <div className="py-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold mb-2" style={{ color: "#04307b" }}>
            {title}
          </h3>
          <div className="w-16 h-1 mx-auto" style={{ backgroundColor: "#04307b" }}></div>
        </div>
        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-6 items-center"
            animate={{
              x: direction === "left" ? [0, -2000] : [-2000, 0],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 50,
                ease: "linear",
              },
            }}
            style={{ width: "fit-content" }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="w-36 h-24 bg-white rounded-xl p-4 flex items-center justify-center shadow-xl flex-shrink-0 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: bgColor }}
              >
                <img
                  src={logo || "/placeholder.svg"}
                  alt={`${title} Partner ${index + 1}`}
                  className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    )
  }

  const ContinuousLogoStrip = ({ logos, direction = "left" }) => {
    const duplicatedLogos = [...logos, ...logos, ...logos, ...logos]

    return (
      <div className="overflow-hidden relative mt-12 py-4">
        <motion.div
          className="flex gap-8 items-center"
          animate={{
            x: direction === "left" ? [0, -1600] : [-1600, 0],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="w-32 h-20 bg-white rounded-lg p-3 flex items-center justify-center shadow-lg flex-shrink-0"
              style={{ backgroundColor: "#FCFDFF" }}
            >
              <img
                src={logo || "/placeholder.svg"}
                alt={`Partner ${index + 1}`}
                className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FCFDFF" }}>
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-end justify-start bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&h=1080&fit=crop")',
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-8 font-medium">
              Turning Compassion
              <br />
              into Action
            </h1>
            <div className="w-32 h-1 mb-8" style={{ backgroundColor: "#d2d5e0" }}></div>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 font-medium">
                about us <ArrowRight size={16} />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 font-medium">
                our impact <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* We Care Section - Using Provided Image */}
      <section className="py-0" style={{ backgroundColor: "#fdf2df" }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <img
            src={wecare || "/placeholder.svg"}
            alt="WE CARE - SWIS is an Indian non-profit committed to radically impact the life of 2M+ people in the next 2 decades"
            className="w-full h-auto object-cover"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-center text-lg md:text-xl font-medium text-gray-700 leading-relaxed">
              WE CARE - SWIS is an Indian non-profit committed to radically impact the life of 2M+ people in the next 2
              decades
            </p>
          </div>
        </motion.div>
      </section>

      {/* Our Interventions Section */}
      <section
        className="relative py-20 min-h-screen flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=1080&fit=crop")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <div className="flex items-center gap-3 mb-6">
                <Heart size={24} style={{ color: "#d2d5e0" }} />
                <span className="text-lg font-medium tracking-wide" style={{ color: "#d2d5e0" }}>
                  OUR INTERVENTIONS
                </span>
              </div>

              <h2 className="text-6xl  mb-8 font-serif">{interventions[activeIntervention].title}</h2>

              <div className="space-y-6 mb-8">
                {interventions[activeIntervention].content.map((paragraph, index) => (
                  <p key={index} className="text-md leading-relaxed font-small opacity-90">
                    {paragraph}
                  </p>
                ))}
              </div>

              <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 font-medium">
                read more <ArrowRight size={16} />
              </button>
            </motion.div>

            {/* Right Navigation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:pl-12"
            >
              <div className="space-y-8">
                {Object.keys(interventions).map((intervention, index) => (
                  <motion.div
                    key={intervention}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`cursor-pointer transition-all duration-300 ${
                      activeIntervention === intervention ? "opacity-100" : "opacity-60 hover:opacity-80"
                    }`}
                    onClick={() => setActiveIntervention(intervention)}
                  >
                    <div className="relative">
                      <h3 className="text-2xl font-medium text-white font-serif mb-2">{intervention.toUpperCase()}</h3>
                      <div
                        className={`h-0.5 transition-all duration-300 ${
                          activeIntervention === intervention ? "w-full bg-orange-400" : "w-0 bg-white"
                        }`}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Combined Centers Section with Exact Reference Navigation */}
      <section className="py-20" style={{ backgroundColor: "#04307b" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation Tabs - Exact Reference Style */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid grid-cols-3 gap-0 max-w-6xl mx-auto">
              {Object.keys(centers).map((center) => {
                // Define icons for each center
                const centerIcons = {
                  CSAA: <Users size={24} />,
                  CSII: <Zap size={24} />,
                  CCAE: <Building size={24} />,
                }

                return (
                  <button
                    key={center}
                    onClick={() => setActiveCenter(center)}
                    className={`relative py-8 px-8 text-left transition-all duration-300 ${
                      activeCenter === center ? "text-white" : "text-white/70 hover:text-white/90"
                    }`}
                  >
                    <div className="relative">
                      <div
                        className={`absolute top-0 left-0 right-0 h-1 transition-all duration-300 ${
                          activeCenter === center ? "bg-orange-400" : "bg-white"
                        }`}
                      ></div>
                      <div className="pt-6 flex items-center gap-3">
                        {centerIcons[center]}
                        <h3 className="text-2xl font-normal">{center}</h3>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </motion.div>

          {/* Content */}
          <div className="w-full">
            <motion.div
              key={activeCenter}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              {/* Glass morphism card */}
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-12 shadow-2xl">
                <div className="text-white max-w-none">
                  <h2 className="text-6xl font-semibold mb-6 font-serif leading-tight">
                    {centers[activeCenter].subtitle}
                  </h2>
                  <h3 className="text-2xl font-medium mb-8 font-serif opacity-90">{centers[activeCenter].title}</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {centers[activeCenter].content.map((paragraph, index) => (
                      <p key={index} className="text-lg leading-relaxed font-medium opacity-90">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners & Collaborations Section */}
      <section className="py-20" style={{ backgroundColor: "#d2d5e0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-8 font-serif" style={{ color: "#04307b" }}>
              Partners & Collaborations
            </h2>
            <p className="text-xl max-w-4xl mx-auto font-medium leading-relaxed" style={{ color: "#04307b" }}>
              Building meaningful partnerships across institutions, markets, and civil society to create lasting social
              impact
            </p>
          </motion.div>

          {/* Institutions Strip */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <EnhancedLogoStrip logos={institutionLogos} direction="left" title="Institutions" bgColor="#FCFDFF" />
          </motion.div>

          {/* Markets Strip */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <EnhancedLogoStrip logos={marketLogos} direction="right" title="Markets" bgColor="#FCFDFF" />
          </motion.div>

          {/* Civil Society Strip */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <EnhancedLogoStrip logos={civilSocietyLogos} direction="left" title="Civil Society" bgColor="#FCFDFF" />
          </motion.div>
        </div>
      </section>

      {/* Enhanced Reach and Presence Section */}
      <section className="py-32 min-h-screen flex items-center" style={{ backgroundColor: "#023080" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Title and Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-6xl font-semibold mb-8 leading-tight font-serif">
                Reach &<br />
                Presence
              </h2>
              <div className="w-24 h-1 mb-8" style={{ backgroundColor: "#d2d5e0" }}></div>
              <p className="text-xl leading-relaxed opacity-90 font-medium">
                SWIS operates across multiple states in India, bringing sustainable change to communities nationwide.
              </p>
            </motion.div>

            {/* Center - Large India Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <img
                src={rnp || "/placeholder.svg"}
                alt="India Map showing SWIS presence across multiple states"
                className="max-w-full h-auto max-h-[800px] object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Grid Section */}
      <section className="py-20" style={{ backgroundColor: "#FCFDFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold mb-8 font-serif" style={{ color: "#04307b" }}>
              Our Impact
            </h2>
            <p className="text-xl max-w-3xl mx-auto font-medium" style={{ color: "#04307b" }}>
              Transforming lives across India through sustainable interventions and community engagement.
            </p>
          </motion.div>

          {/* Updated Grid Layout */}
          <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto">
            {/* Row 1 */}
            {/* 12+ Locations */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="aspect-square rounded-2xl flex flex-col items-center justify-center text-white text-center p-6"
              style={{ backgroundColor: "#023080" }}
            >
              <h3 className="text-5xl font-semibold mb-3 font-serif">12+</h3>
              <p className="text-2xl font-medium font-medium">Locations</p>
            </motion.div>

            {/* Children studying image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="aspect-square rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=400&fit=crop"
                alt="Children studying together"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* 3K+ Benefited */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="aspect-square rounded-2xl flex flex-col items-center justify-center text-white text-center p-6"
              style={{ backgroundColor: "#023080" }}
            >
              <h3 className="text-5xl font-semibold mb-3 font-serif">3K+</h3>
              <p className="text-2xl font-medium font-medium">Benefited</p>
            </motion.div>

            {/* Row 2 */}
            {/* Group learning image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="aspect-square rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=400&fit=crop"
                alt="Community group learning"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* 10K+ Impacted - Center large box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="aspect-square rounded-2xl flex flex-col items-center justify-center text-white text-center p-6"
              style={{ backgroundColor: "#023080" }}
            >
              <h3 className="text-6xl font-semibold mb-4 font-serif">10K+</h3>
              <p className="text-3xl font-medium font-medium">Impacted</p>
            </motion.div>

            {/* Classroom image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="aspect-square rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1594736797933-d0d3085cf6dd?w=400&h=400&fit=crop"
                alt="Classroom learning environment"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Row 3 */}
            {/* 25+ Partners */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="aspect-square rounded-2xl flex flex-col items-center justify-center text-white text-center p-6"
              style={{ backgroundColor: "#023080" }}
            >
              <h3 className="text-5xl font-semibold mb-3 font-serif">25+</h3>
              <p className="text-2xl font-medium font-medium">Partners</p>
            </motion.div>

            {/* Team image - spans 2 columns */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="col-span-2 aspect-[2/1] rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1594736797933-d0d3085cf6dd?w=800&h=400&fit=crop"
                alt="SWIS team members together"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Life at SWIS Section */}
      <section className="py-20 relative" style={{ backgroundColor: "#04307b" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-5xl mb-8 font-serif font-semibold">Life at SWIS</h2>
              <h3 className="text-2xl font-medium mb-6 font-serif">Why work at SWIS?</h3>
              <p className="text-lg leading-relaxed mb-8 font-medium">
                SWIS is one of the most impactful non-profit organizations in India. With the help of a robust,
                consistent, and merit-driven framework for people management, SWIS continues to maintain an inclusive,
                progressive, and high-performance environment, where purpose-driven talent is enabled with unprecedented
                access to opportunities for growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 font-medium">
                  meet our people <ArrowRight size={16} />
                </button>
                <a
                  href="/JoinUs"
                  className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 font-medium"
                >
                  search & apply <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 rounded-lg overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={slides[currentSlide]}
                    alt={`Slide ${currentSlide + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Additional Images Grid */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-red-600 text-white px-2 py-1 text-xs rounded font-medium">
                    Best Employers
                  </div>
                </div>
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop"
                    alt="Impact work"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage
