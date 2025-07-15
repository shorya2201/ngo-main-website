"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Heart, School, Users, ArrowRight, Baby } from "lucide-react"

// Counter animation component
const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime
      const startValue = 0
      const endValue = value

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart)

        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [isInView, value, duration])

  return <span ref={ref}>{count}</span>
}

const Nutrition = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeCard, setActiveCard] = useState(0)
  const [selectedTimelineItem, setSelectedTimelineItem] = useState(0)

  // Timeline data
  const timelineData = [
    {
      year: "1947",
      percentage: "50%",
      description: "of India was hungry",
      subtitle: "Independence Era",
      background: "https://images.unsplash.com/photo-1594736797933-d0d3085cf6dd?w=800&h=600&fit=crop",
    },
    {
      year: "2005",
      percentage: "35%",
      description: "of India was hungry",
      subtitle: "Progress Made",
      background: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
    },
    {
      year: "2015",
      percentage: "27%",
      description: "of India was hungry",
      subtitle: "Continued Growth",
      background: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
    },
    {
      year: "2024",
      percentage: "22%",
      description: "of India was hungry",
      subtitle: "Current Reality",
      background: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop",
    },
  ]

  // Programs data
  const programData = [
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Orphanages & Shelter",
      fullTitle: "Daily Meal Programs in Orphanages & Shelter Homes",
      description:
        "A study by Childline India (2021) found that 1 in 3 children in shelter homes suffer from inadequate nutrition. We address this by providing fresh, balanced meals packed with essential nutrients, helping improve immunity, cognitive development, and emotional well-being.",
      features: [
        "Fresh, balanced meals",
        "Essential nutrients focus",
        "Immunity building",
        "Cognitive development support",
      ],
      color: "from-[#023080] to-[#04307b]",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Old Age Homes",
      fullTitle: "Daily Meal Programs in Old Age Homes",
      description:
        "According to HelpAge India (2022), over 50% of elderly in institutional care are undernourished or have diet-related health issues. Our meals are tailored to meet the needs of the elderly—rich in fiber, calcium, and protein, while being easy to digest and suitable for conditions like diabetes and hypertension.",
      features: [
        "Tailored elderly nutrition",
        "Rich in fiber & calcium",
        "Easy to digest meals",
        "Health condition specific",
      ],
      color: "from-[#8e9fc5] to-[#023080]",
    },
    {
      icon: <School className="w-8 h-8" />,
      title: "School Enhancement",
      fullTitle: "Mid-Day Meal Enhancement in Low-Income Schools",
      description:
        "More than 115 million children rely on the Mid-Day Meal Scheme (MoE, 2023), yet many schools struggle with poor quality and hygiene. We collaborate with schools to enhance nutrition, improve hygiene, and introduce locally sourced, diverse meals—leading to better attendance and academic focus.",
      features: [
        "Enhanced nutrition quality",
        "Improved hygiene standards",
        "Locally sourced meals",
        "Better attendance rates",
      ],
      color: "from-[#d2d5e0] to-[#8e9fc5]",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Supplementation",
      fullTitle: "Meal Planning, Health Screening & Supplementation",
      description:
        "NFHS-5 reports that 57% of women aged 15–49 and 68.9% of children aged 6–59 months are anemic. We conduct regular health screenings, provide iron and vitamin supplementation, and train caregivers in nutrient planning and hygiene, ensuring a holistic approach to nutrition.",
      features: [
        "Regular health screenings",
        "Iron & vitamin supplements",
        "Caregiver training",
        "Holistic nutrition approach",
      ],
      color: "from-[#8e9fc5] to-[#023080]",
    },
  ]

  // Slideshow images
  const slideImages = [
    "https://images.unsplash.com/photo-1594736797933-d0d3085cf6dd?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop",
  ]

  // Impact areas data with individual images
  const impactAreas = [
    {
      icon: Baby,
      title: "Orphanages",
      image: "https://images.unsplash.com/photo-1594736797933-d0d3085cf6dd?w=400&h=250&fit=crop",
      description: "Supporting children in orphanages and shelter homes with nutritious meals",
    },
    {
      icon: School,
      title: "Schools",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop",
      description: "Enhancing mid-day meal programs in low-income schools",
    },
    {
      icon: Users,
      title: "Old Age Homes",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=250&fit=crop",
      description: "Providing specialized nutrition for elderly residents",
    },
  ]

  useEffect(() => {}, [slideImages.length])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Timeline Background */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-20"
        style={{
          backgroundImage: `url("${timelineData[selectedTimelineItem].background}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-32 pb-16">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <span className="text-[#d2d5e0] text-lg font-medium tracking-wider uppercase">SWIS FOUNDATION</span>
            </motion.div>
            <h1 className="text-6xl font-serif mb-8">Nutrition</h1>
            <p className="text-2xl mb-12 max-w-3xl mx-auto">
              A nutritious India, <span className="text-blue-300 italic">within our lifetime</span>
            </p>
          </motion.div>

          {/* Timeline with increased spacing and connecting lines */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex justify-center items-center space-x-16 mt-16"
          >
            {/* Continuous connecting line */}
            <div className="absolute top-1/2 left-[5%] right-[5%] h-0.5 bg-white bg-opacity-30 transform -translate-y-1/2"></div>

            {timelineData.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center z-10">
                <motion.button
                  onClick={() => setSelectedTimelineItem(index)}
                  className={`flex flex-col items-center p-6 rounded-lg transition-all duration-300 bg-black bg-opacity-40 ${
                    selectedTimelineItem === index
                      ? "bg-white bg-opacity-20 scale-110"
                      : "hover:bg-white hover:bg-opacity-10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-4xl font-bold" style={{ color: "#FCFDFF" }}>
                    {item.year}
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full my-3 ${selectedTimelineItem === index ? "bg-white" : "bg-white bg-opacity-50"}`}
                  ></div>
                  <div
                    className="text-3xl font-bold"
                    style={{ color: "#023080", backgroundColor: "#FCFDFF", padding: "8px 16px", borderRadius: "8px" }}
                  >
                    {item.percentage}
                  </div>
                  <div className="text-sm mt-3 text-center max-w-32">{item.description}</div>
                  <div className="text-xs mt-2 text-[#d2d5e0] font-medium">{item.subtitle}</div>
                </motion.button>
              </div>
            ))}
          </motion.div>

          {/* Hero description based on selected timeline */}
          <motion.div
            key={selectedTimelineItem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <p className="text-xl text-[#d2d5e0]/90 leading-relaxed">
              {selectedTimelineItem === 0 &&
                "At independence, India faced massive hunger challenges with half the population lacking adequate nutrition."}
              {selectedTimelineItem === 1 &&
                "Significant progress was made through various nutrition programs and food security initiatives."}
              {selectedTimelineItem === 2 &&
                "Continued efforts brought down hunger rates, but malnutrition remained a persistent challenge."}
              {selectedTimelineItem === 3 &&
                "Today, while hunger has decreased, nutrition quality and access to healthy meals remain critical issues."}
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center mt-4"
          >
            <motion.a
              href="/JoinUs"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#023080] px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 group"
            >
              Join Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* India's Nutrition Crisis Section */}
      <section className="py-24" style={{ backgroundColor: "#FCFDFF" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-[#023080] mb-12">India's Nutrition Crisis</h2>
            <p className="text-xl lg:text-2xl text-[#04307b]/90 leading-relaxed font-medium max-w-5xl mx-auto">
              India faces a silent nutrition crisis—over 35% of children under five are stunted and 32% are underweight
              (NFHS-5). The impact is worse in rural, tribal, and underserved communities. Hunger knows no age. Children
              in orphanages, the elderly in old age homes, and students in low-income schools often receive irregular,
              inadequate meals. Despite government schemes like the Mid-Day Meal Program, gaps in implementation leave
              many without consistent nutrition or care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rough Edge Image Section */}
      <div className="relative">
        <div
          className="absolute top-0 left-0 right-0 h-6"
          style={{
            backgroundColor: "#FCFDFF",
            clipPath:
              "polygon(0 0, 100% 0, 99% 100%, 97% 90%, 95% 100%, 93% 85%, 91% 100%, 89% 95%, 87% 100%, 85% 90%, 83% 100%, 81% 95%, 79% 100%, 77% 85%, 75% 100%, 73% 90%, 71% 100%, 69% 95%, 67% 100%, 65% 90%, 63% 100%, 61% 95%, 59% 100%, 57% 85%, 55% 100%, 53% 90%, 51% 100%, 49% 95%, 47% 100%, 45% 90%, 43% 100%, 41% 95%, 39% 100%, 37% 85%, 35% 100%, 33% 90%, 31% 100%, 29% 95%, 27% 100%, 25% 90%, 23% 100%, 21% 95%, 19% 100%, 17% 85%, 15% 100%, 13% 90%, 11% 100%, 9% 95%, 7% 100%, 5% 90%, 3% 100%, 1% 95%, 0 100%)",
          }}
        ></div>
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=400&fit=crop"
          alt="Youth learning and skill development"
          className="w-full h-64 object-cover"
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-6"
          style={{
            backgroundColor: "#023080",
            clipPath:
              "polygon(0 100%, 100% 100%, 99% 0, 97% 10%, 95% 0, 93% 15%, 91% 0, 89% 5%, 87% 0, 85% 10%, 83% 0, 81% 5%, 79% 0, 77% 15%, 75% 0, 73% 10%, 71% 0, 69% 5%, 67% 0, 65% 10%, 63% 0, 61% 5%, 59% 0, 57% 15%, 55% 0, 53% 10%, 51% 0, 49% 5%, 47% 0, 45% 10%, 43% 0, 41% 5%, 39% 0, 37% 15%, 35% 0, 33% 10%, 31% 0, 29% 5%, 27% 0, 25% 10%, 23% 0, 21% 5%, 19% 0, 17% 15%, 15% 0, 13% 10%, 11% 0, 9% 5%, 7% 0, 5% 10%, 3% 0, 1% 5%, 0 0)",
          }}
        ></div>
      </div>

      {/* Our Nutrition Outreach Includes Section */}
      <section className="py-24" style={{ backgroundColor: "#023080" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Our Nutrition Outreach Includes</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              At SWIS, we believe that access to nutritious food is a basic human right, not a privilege. Our
              interventions are rooted in empathy, dignity, and sustainability—ensuring that every child, every elder,
              and every student under our care receives meals that nourish both body and mind.
            </p>
          </motion.div>

          {/* Program Navigation Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {programData.map((program, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveCard(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-2xl transition-all duration-300 text-center ${
                  activeCard === index
                    ? "bg-white border-4 border-orange-400 shadow-xl"
                    : "bg-white/80 border-2 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-start gap-3 px-2">
                  <div className="text-gray-600 flex-shrink-0">{program.icon}</div>
                  <h3 className="text-sm font-semibold text-gray-800 text-left leading-tight">{program.title}</h3>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Equal Sized Content Grid - Text Card Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side - Active Program Content Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl h-64 lg:h-80 flex flex-col"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-[#023080]">
                      {programData[activeCard].icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl  font-bold text-[#023080] mb-4">
                      {programData[activeCard].fullTitle}
                    </h3>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-gray-700 text-md leading-relaxed">{programData[activeCard].description}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right Side - Single Image */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-64 lg:h-80 rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src={slideImages[0] || "/placeholder.svg"}
                  alt="Nutrition program"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* second Rough Edge Image Section */}
      <div className="relative">
        <div
          className="absolute top-0 left-0 right-0 h-6"
          style={{
            backgroundColor: "#023080",
            clipPath:
              "polygon(0 0, 100% 0, 99% 100%, 97% 90%, 95% 100%, 93% 85%, 91% 100%, 89% 95%, 87% 100%, 85% 90%, 83% 100%, 81% 95%, 79% 100%, 77% 85%, 75% 100%, 73% 90%, 71% 100%, 69% 95%, 67% 100%, 65% 90%, 63% 100%, 61% 95%, 59% 100%, 57% 85%, 55% 100%, 53% 90%, 51% 100%, 49% 95%, 47% 100%, 45% 90%, 43% 100%, 41% 95%, 39% 100%, 37% 85%, 35% 100%, 33% 90%, 31% 100%, 29% 95%, 27% 100%, 25% 90%, 23% 100%, 21% 95%, 19% 100%, 17% 85%, 15% 100%, 13% 90%, 11% 100%, 9% 95%, 7% 100%, 5% 90%, 3% 100%, 1% 95%, 0 100%)",
          }}
        ></div>
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=400&fit=crop"
          alt="Youth learning and skill development"
          className="w-full h-64 object-cover"
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-6"
          style={{
            backgroundColor: "#023080",
            clipPath:
              "polygon(0 100%, 100% 100%, 99% 0, 97% 10%, 95% 0, 93% 15%, 91% 0, 89% 5%, 87% 0, 85% 10%, 83% 0, 81% 5%, 79% 0, 77% 15%, 75% 0, 73% 10%, 71% 0, 69% 5%, 67% 0, 65% 10%, 63% 0, 61% 5%, 59% 0, 57% 15%, 55% 0, 53% 10%, 51% 0, 49% 5%, 47% 0, 45% 10%, 43% 0, 41% 5%, 39% 0, 37% 15%, 35% 0, 33% 10%, 31% 0, 29% 5%, 27% 0, 25% 10%, 23% 0, 21% 5%, 19% 0, 17% 15%, 15% 0, 13% 10%, 11% 0, 9% 5%, 7% 0, 5% 10%, 3% 0, 1% 5%, 0 0)",
          }}
        ></div>
      </div>

      {/* Where We Work Section */}
      <section className="py-24" style={{ backgroundColor: "#023080" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">Where We Work</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img src={area.image || "/placeholder.svg"} alt={area.title} className="w-full h-full object-cover" />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="text-[#023080]">
                      <area.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-[#023080]">{area.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-24" style={{ backgroundColor: "#FCFDFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-[#023080]"
          >
            Our Impact
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold mb-4" style={{ color: "#023080" }}>
                <AnimatedCounter value={2} />+
              </div>
              <div className="text-xl text-gray-700">States</div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold mb-4" style={{ color: "#023080" }}>
                <AnimatedCounter value={4} />+
              </div>
              <div className="text-xl text-gray-700">Locations</div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold mb-4" style={{ color: "#023080" }}>
                <AnimatedCounter value={10000} />+
              </div>
              <div className="text-xl text-gray-700">Meals Served</div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold mb-4" style={{ color: "#023080" }}>
                <AnimatedCounter value={150} />+
              </div>
              <div className="text-xl text-gray-700">Beneficiaries Impacted</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fourth Rough Edge Image Section */}
      <div className="relative">
        <div
          className="absolute top-0 left-0 right-0 h-6"
          style={{
            backgroundColor: "#FCFDFF",
            clipPath:
              "polygon(0 0, 100% 0, 99% 100%, 97% 90%, 95% 100%, 93% 85%, 91% 100%, 89% 95%, 87% 100%, 85% 90%, 83% 100%, 81% 95%, 79% 100%, 77% 85%, 75% 100%, 73% 90%, 71% 100%, 69% 95%, 67% 100%, 65% 90%, 63% 100%, 61% 95%, 59% 100%, 57% 85%, 55% 100%, 53% 90%, 51% 100%, 49% 95%, 47% 100%, 45% 90%, 43% 100%, 41% 95%, 39% 100%, 37% 85%, 35% 100%, 33% 90%, 31% 100%, 29% 95%, 27% 100%, 25% 90%, 23% 100%, 21% 95%, 19% 100%, 17% 85%, 15% 100%, 13% 90%, 11% 100%, 9% 95%, 7% 100%, 5% 90%, 3% 100%, 1% 95%, 0 100%)",
          }}
        ></div>
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=400&fit=crop"
          alt="Nutrition impact and healthy communities"
          className="w-full h-64 object-cover"
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-6"
          style={{
            backgroundColor: "#04307b",
            clipPath:
              "polygon(0 100%, 100% 100%, 99% 0, 97% 10%, 95% 0, 93% 15%, 91% 0, 89% 5%, 87% 0, 85% 10%, 83% 0, 81% 5%, 79% 0, 77% 15%, 75% 0, 73% 10%, 71% 0, 69% 5%, 67% 0, 65% 10%, 63% 0, 61% 5%, 59% 0, 57% 15%, 55% 0, 53% 10%, 51% 0, 49% 5%, 47% 0, 45% 10%, 43% 0, 41% 5%, 39% 0, 37% 15%, 35% 0, 33% 10%, 31% 0, 29% 5%, 27% 0, 25% 10%, 23% 0, 21% 5%, 19% 0, 17% 15%, 15% 0, 13% 10%, 11% 0, 9% 5%, 7% 0, 5% 10%, 3% 0, 1% 5%, 0 0)",
          }}
        ></div>
      </div>

      {/* 2030 Vision Section */}
      <section className="py-24" style={{ backgroundColor: "#04307b" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-white">Our 2030 Vision</h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-7xl font-bold text-[#d2d5e0] mb-8"
            >
              600K+
            </motion.div>
            <p className="text-lg lg:text-xl text-[#d2d5e0]/90 max-w-4xl mx-auto leading-relaxed mb-12">
              By 2030, provide 600K+ healthy meals annually to vulnerable populations across shelter homes, schools, and
              senior care centers—fighting hunger, improving health, and restoring dignity for those most often
              forgotten.
            </p>

            {/* Join Mission Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <motion.a
                href="/JoinUs"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#023080] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-[#d2d5e0] transition-all duration-300 transform hover:shadow-2xl inline-flex items-center gap-3 group"
              >
                Join Our Mission
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </motion.div>

            {/* Short tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-[#d2d5e0]/80 text-sm"
            >
              Be part of India's transformation. Help us nourish those who need it most.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Fifth Rough Edge Image Section */}
      <div className="relative">
        <div
          className="absolute top-0 left-0 right-0 h-6"
          style={{
            backgroundColor: "#04307b",
            clipPath:
              "polygon(0 0, 100% 0, 99% 100%, 97% 90%, 95% 100%, 93% 85%, 91% 100%, 89% 95%, 87% 100%, 85% 90%, 83% 100%, 81% 95%, 79% 100%, 77% 85%, 75% 100%, 73% 90%, 71% 100%, 69% 95%, 67% 100%, 65% 90%, 63% 100%, 61% 95%, 59% 100%, 57% 85%, 55% 100%, 53% 90%, 51% 100%, 49% 95%, 47% 100%, 45% 90%, 43% 100%, 41% 95%, 39% 100%, 37% 85%, 35% 100%, 33% 90%, 31% 100%, 29% 95%, 27% 100%, 25% 90%, 23% 100%, 21% 95%, 19% 100%, 17% 85%, 15% 100%, 13% 90%, 11% 100%, 9% 95%, 7% 100%, 5% 90%, 3% 100%, 1% 95%, 0 100%)",
          }}
        ></div>
        <img
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1920&h=400&fit=crop"
          alt="Children achieving nutritional goals"
          className="w-full h-64 object-cover"
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-6"
          style={{
            backgroundColor: "#d2d5e0",
            clipPath:
              "polygon(0 100%, 100% 100%, 99% 0, 97% 10%, 95% 0, 93% 15%, 91% 0, 89% 5%, 87% 0, 85% 10%, 83% 0, 81% 5%, 79% 0, 77% 15%, 75% 0, 73% 10%, 71% 0, 69% 5%, 67% 0, 65% 10%, 63% 0, 61% 5%, 59% 0, 57% 15%, 55% 0, 53% 10%, 51% 0, 49% 5%, 47% 0, 45% 10%, 43% 0, 41% 5%, 39% 0, 37% 15%, 35% 0, 33% 10%, 31% 0, 29% 5%, 27% 0, 25% 10%, 23% 0, 21% 5%, 19% 0, 17% 15%, 15% 0, 13% 10%, 11% 0, 9% 5%, 7% 0, 5% 10%, 3% 0, 1% 5%, 0 0)",
          }}
        ></div>
      </div>

      {/* Statistics Section - Moved to end */}
      <section className="py-24" style={{ backgroundColor: "#d2d5e0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-8">
              Why It Matters: <span style={{ color: "#023080" }}>Key Nutrition Statistics</span>
            </h2>
            <p className="text-lg text-[#023080]/80 max-w-6xl mx-auto mb-16">
              These statistics reveal the urgent need for comprehensive nutrition interventions across vulnerable
              populations in India.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-7xl font-bold mb-4" style={{ color: "#023080" }}>
                  <AnimatedCounter value={1} />
                  <span className="text-4xl">in</span>
                  <AnimatedCounter value={3} />
                </div>
                <div className="text-gray-700 mb-4 text-lg font-semibold">
                  children in shelter homes do not receive adequate nutrition
                </div>
                <div className="text-sm" style={{ color: "#023080" }}>
                  Source: Childline India Foundation, 2021
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-7xl font-bold mb-4" style={{ color: "#023080" }}>
                  <AnimatedCounter value={50} />
                  %+
                </div>
                <div className="text-gray-700 mb-4 text-lg font-semibold">
                  of elderly in care homes suffer from undernutrition or chronic deficiencies
                </div>
                <div className="text-sm" style={{ color: "#023080" }}>
                  Source: HelpAge India, 2022
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-7xl font-bold mb-4" style={{ color: "#023080" }}>
                  <AnimatedCounter value={115} />M
                </div>
                <div className="text-gray-700 mb-4 text-lg font-semibold">
                  children depend on Mid-Day Meals in India, yet quality, quantity, and safety remain major concerns
                </div>
                <div className="text-sm" style={{ color: "#023080" }}>
                  Source: Ministry of Education, Govt. of India, 2023
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Nutrition
