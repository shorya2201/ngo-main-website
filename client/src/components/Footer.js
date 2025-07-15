import { Link } from "react-router-dom"
import { Facebook, Instagram, Linkedin, Youtube, X } from "lucide-react"

const Footer = () => {
  const bluelogo = require("../img/bluelogo.png")

  return (
    <footer style={{ backgroundColor: "#FCFDFF" }} className="border-t border-gray-200 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Social Media Icons - Centered */}
        <div className="flex justify-center items-center space-x-4 mb-8">
          {[
            { icon: <Facebook size={20} />, url: "https://facebook.com/swis" },
            { icon: <Instagram size={20} />, url: "https://instagram.com/swis" },
            { icon: <X size={20} />, url: "https://twitter.com/swis" },
            { icon: <Linkedin size={20} />, url: "https://linkedin.com/company/swis" },
            { icon: <Youtube size={20} />, url: "https://youtube.com/swis" },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors hover:bg-[#000000]"
              style={{ backgroundColor: "#000000" }}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Main Footer Content - Centered columns with left-aligned text */}
        <div className="flex justify-center mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl text-left">
            {/* About Us Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#000000" }}>
                About Us
              </h3>
              <ul className="space-y-2">
                {[
                  { text: "Our History", path: "/history" },
                  { text: "Chairman & Managing Trustee", path: "/founderchairman" },
                  { text: "Advisory Board", path: "/member" },
                  { text: "Board Members", path: "/member" },
                  { text: "Core Team", path: "/member" },
                  { text: "Founding Supporters", path: "/member" },
                  { text: "Partners & Collaborations", path: "/allinone" },
                  { text: "Reach & Presence", path: "/allinone" },
                  { text: "Privacy Policy", path: "/PrivacyPolicy" },
                  { text: "Terms & Conditions", path: "/TermsAndConditions" },
                ].map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      className="transition-colors hover:text-[#000000]"
                      style={{ color: "#000000" }}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interventions Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#000000" }}>
                Interventions
              </h3>
              <div className="mb-4">
                <h4 className="text-xl font-bold mb-2" style={{ color: "#000000" }}>
                  SWIS Foundation
                </h4>
                <ul className="space-y-1">
                  <li>
                    <Link to="/new" className="transition-colors hover:text-[#000000]" style={{ color: "#000000" }}>
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/SkillDevelopment"
                      className="transition-colors hover:text-[#000000]"
                      style={{ color: "#000000" }}
                    >
                      Skill Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/new" className="transition-colors hover:text-[#000000]" style={{ color: "#000000" }}>
                      Nutrition
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2" style={{ color: "#000000" }}>
                  SWIS Institute
                </h4>
                <ul className="space-y-1">
                  <li>
                    <Link to="/csii" className="transition-colors hover:text-[#000000]" style={{ color: "#000000" }}>
                      Centre for Social Impact & Innovation
                    </Link>
                  </li>
                  <li>
                    <Link to="/csaa" className="transition-colors hover:text-[#000000]" style={{ color: "#000000" }}>
                      Centre for Social Awareness & Action
                    </Link>
                  </li>
                  <li>
                    <Link to="/ccae" className="transition-colors hover:text-[#000000]" style={{ color: "#000000" }}>
                      Centre for Civil Administration & Engagement
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Careers & Contact Section */}
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#000000" }}>
                  Careers
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/Careers" className="transition-colors hover:text-[#000000]" style={{ color: "#000000" }}>
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link to="/Careers" className="transition-colors hover:text-[#000000]" style={{ color: "#000000" }}>
                      Working at SWIS
                    </Link>
                  </li>
                  <li>
                    <Link to="/coc" className="transition-colors hover:text-[#000000]" style={{ color: "#000000" }}>
                      Code of Conduct
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#000000" }}>
                  Contact Us
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/ContactPage"
                      className="transition-colors hover:text-[#000000]"
                      style={{ color: "#000000" }}
                    >
                      Get in Touch
                    </Link>
                  </li>
                  <li>
                    <Link to="/anushka" className="transition-colors hover:text-[#000000]" style={{ color: "#000000" }}>
                      Join Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative border-t pt-8" style={{ borderColor: "#d2d5e0" }}>
          {/* Logo centered on top of border */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 bg-white px-4 max-w-[90%]">
            <img src={bluelogo || "/placeholder.svg"} alt="SWIS Foundation" className="h-12 w-auto max-w-full" />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-4">
            {/* Copyright */}
            <div className="text-sm mb-4 md:mb-0" style={{ color: "#000000" }}>
              © 2025 SWIS Foundation. All rights reserved.
            </div>

            {/* Empty center space */}
            <div className="hidden md:block"></div>

            {/* Developer Credits - Moved left */}
            <div className="text-sm text-center md:text-left md:ml-20 self-start" style={{ color: "#000000" }}>
              Website designed and developed by Jiya Gudhaka, Nandini Parab, Shreya Mahajan
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
