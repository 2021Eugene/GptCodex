import React from "react";
import { useState } from "react";

// Contact Form Component
function ContactForm({ isDE }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {isDE ? "Name *" : "Name *"}
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
            placeholder={isDE ? "Ihr Name" : "Your name"}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {isDE ? "Telefon" : "Phone"}
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
            placeholder={isDE ? "Ihre Telefonnummer" : "Your phone number"}
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          E-Mail *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
          placeholder={isDE ? "ihre.email@beispiel.de" : "your.email@example.com"}
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {isDE ? "Betreff" : "Subject"}
        </label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
        >
          <option value="">
            {isDE ? "Bitte wählen..." : "Please select..."}
          </option>
          <option value="pc-repair">
            {isDE ? "PC/Notebook Reparatur" : "PC/Notebook Repair"}
          </option>
          <option value="network">
            {isDE ? "Netzwerk & WLAN" : "Network & Wi-Fi"}
          </option>
          <option value="security">
            {isDE ? "IT-Sicherheit" : "IT Security"}
          </option>
          <option value="business">
            {isDE ? "Business IT" : "Business IT"}
          </option>
          <option value="other">
            {isDE ? "Sonstiges" : "Other"}
          </option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {isDE ? "Nachricht *" : "Message *"}
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors resize-none"
          placeholder={isDE ? "Beschreiben Sie Ihr Anliegen..." : "Describe your request..."}
        />
      </div>
      
      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-green-800 text-sm">
              {isDE 
                ? "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet." 
                : "Thank you! Your message has been sent successfully."}
            </p>
          </div>
        </div>
      )}
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {isDE ? "Wird gesendet..." : "Sending..."}
          </>
        ) : (
          isDE ? "Nachricht senden" : "Send message"
        )}
      </button>
    </form>
  );
}

export default function ITServiceSite() {
  const [language, setLanguage] = useState("de");
  const isDE = language === "de";

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header - Anthropic Style */}
      <header className="border-b border-gray-100 py-6 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-medium tracking-tight">
              IT Service Düsseldorf
            </h1>
            <nav className="hidden md:flex space-x-6 text-sm text-gray-600">
              <a href="#services" className="hover:text-gray-900 transition-colors">{isDE ? "Services" : "Services"}</a>
              <a href="#about" className="hover:text-gray-900 transition-colors">{isDE ? "Über uns" : "About"}</a>
              <a href="#contact" className="hover:text-gray-900 transition-colors">{isDE ? "Kontakt" : "Contact"}</a>
            </nav>
          </div>
          <div className="flex items-center space-x-3">
            <button
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                isDE 
                  ? "bg-gray-900 text-white" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => setLanguage("de")}
            >
              DE
            </button>
            <button
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                !isDE 
                  ? "bg-gray-900 text-white" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Anthropic Style */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-8 leading-tight">
            {isDE 
              ? "IT-Support für Privat & Business" 
              : "IT support for private & business clients"}
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            {isDE
              ? "Zuverlässige Systemadministration in Düsseldorf und Umgebung. Schnell, flexibel und mehrsprachig."
              : "Reliable system administration in Düsseldorf and surroundings. Fast, flexible and multilingual."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              {isDE ? "Kontakt aufnehmen" : "Get in touch"}
            </a>
            <a 
              href="#services" 
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-gray-400 hover:text-gray-900 transition-colors"
            >
              {isDE ? "Services ansehen" : "View services"}
            </a>
          </div>
        </div>
      </section>

      {/* Values Section - Anthropic Inspired */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-light mb-4">
              {isDE ? "Ihre Technik in besten Händen" : "Your technology in safe hands"}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isDE 
                ? "Wir entwickeln IT-Lösungen mit dem Menschen im Mittelpunkt – zuverlässig, verständlich und zukunftssicher."
                : "We develop IT solutions with people at the center – reliable, understandable and future-proof."}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium mb-2">
                {isDE ? "Sicherheit first" : "Security first"}
              </h4>
              <p className="text-gray-600 text-sm">
                {isDE 
                  ? "Schutz Ihrer Daten und Systeme steht an erster Stelle"
                  : "Protection of your data and systems comes first"}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium mb-2">
                {isDE ? "Schnelle Hilfe" : "Fast support"}
              </h4>
              <p className="text-gray-600 text-sm">
                {isDE 
                  ? "Fernwartung und Vor-Ort-Service für maximale Effizienz"
                  : "Remote and on-site service for maximum efficiency"}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 3.621A48.348 48.348 0 0118 8.25m-6 0a49.126 49.126 0 00-3.334-.114M9 5.25V8.25m3.334-3.114A48.474 48.474 0 019 5.621m3.334-.114A48.348 48.348 0 0118 8.25M9 8.25a49.126 49.126 0 013.334-.114" />
                </svg>
              </div>
              <h4 className="text-lg font-medium mb-2">
                {isDE ? "Mehrsprachig" : "Multilingual"}
              </h4>
              <p className="text-gray-600 text-sm">
                {isDE 
                  ? "Service in Deutsch, Ukrainisch und Russisch"
                  : "Service in German, Ukrainian and Russian"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-light mb-4">
              {isDE ? "Unsere Services" : "Our Services"}
            </h3>
            <p className="text-gray-600">
              {isDE 
                ? "Komplette IT-Betreuung für Privatpersonen und kleine Unternehmen"
                : "Complete IT support for individuals and small businesses"}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                     </svg>,
                title: isDE ? "PC & Notebook Service" : "PC & Notebook Service",
                desc: isDE ? "Einrichtung, Reparatur und Optimierung" : "Setup, repair and optimization"
              },
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                     </svg>,
                title: isDE ? "Netzwerk & WLAN" : "Network & Wi-Fi",
                desc: isDE ? "Aufbau und Konfiguration von Netzwerken" : "Network setup and configuration"
              },
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                     </svg>,
                title: isDE ? "IT-Sicherheit" : "IT Security",
                desc: isDE ? "Virenschutz, Backups und Datenschutz" : "Antivirus, backups and data protection"
              },
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5l4.72-4.72a.75.75 0 011.06 1.06L16.81 11.6a3.75 3.75 0 01-1.06.3v5.85a.75.75 0 01-1.5 0v-5.85a3.75 3.75 0 01-1.06-.3L8.47 16.34a.75.75 0 01-1.06-1.06L12.13 10.5H6.75a.75.75 0 010-1.5h5.38L7.41 4.28a.75.75 0 111.06-1.06L12.19 7.94a3.75 3.75 0 011.06.3V2.39a.75.75 0 011.5 0v5.85a3.75 3.75 0 011.06.3l4.72-4.72z" />
                     </svg>,
                title: isDE ? "Überwachung & Smart Home" : "Surveillance & Smart Home",
                desc: isDE ? "Moderne Sicherheitstechnik" : "Modern security technology"
              },
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                     </svg>,
                title: isDE ? "Fernwartung" : "Remote Support",
                desc: isDE ? "Schnelle Hilfe per Fernzugriff" : "Quick help via remote access"
              },
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m2.25-18v18m13.5-18v18m2.25-18v18M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3" />
                     </svg>,
                title: isDE ? "Business IT" : "Business IT",
                desc: isDE ? "IT-Service für kleine Unternehmen" : "IT service for small businesses"
              }
            ].map((service, idx) => (
              <div key={idx} className="p-6 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all">
                <div className="text-gray-700 mb-3">{service.icon}</div>
                <h4 className="text-lg font-medium mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-light mb-6">
            {isDE ? "Mehrsprachiger Service" : "Multilingual Service"}
          </h3>
          <div className="flex justify-center items-center space-x-8 text-lg">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🇩🇪</span>
              <span>Deutsch</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🇺🇦</span>
              <span>Українська</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🇷🇺</span>
              <span>Русский</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-light mb-4">
              {isDE ? "Was unsere Kunden sagen" : "What our clients say"}
            </h3>
            <p className="text-gray-600">
              {isDE 
                ? "Vertrauen Sie auf die Erfahrungen zufriedener Kunden"
                : "Trust the experience of satisfied customers"}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-sm">
                  {"★".repeat(5)}
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {isDE 
                  ? "Sehr professioneller Service! Mein Laptop wurde schnell repariert und läuft jetzt wie neu. Kann ich nur empfehlen."
                  : "Very professional service! My laptop was repaired quickly and now runs like new. Highly recommended."}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600">MP</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">Maria P.</p>
                  <p className="text-xs text-gray-500">{isDE ? "Privatkundin" : "Private client"}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-sm">
                  {"★".repeat(5)}
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {isDE 
                  ? "Kompetente Beratung und schnelle Umsetzung. Unser Netzwerk läuft jetzt einwandfrei. Vielen Dank!"
                  : "Competent advice and quick implementation. Our network now runs flawlessly. Thank you!"}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600">AS</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">Andreas S.</p>
                  <p className="text-xs text-gray-500">{isDE ? "Geschäftsführer" : "CEO"}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-sm">
                  {"★".repeat(5)}
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {isDE 
                  ? "Hervorragender Support auf Ukrainisch! Endlich jemand, der meine Sprache spricht und technisch versiert ist."
                  : "Excellent support in Ukrainian! Finally someone who speaks my language and is technically skilled."}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600">OK</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">Oksana K.</p>
                  <p className="text-xs text-gray-500">{isDE ? "Privatkundin" : "Private client"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-light mb-4">
              {isDE ? "Kontakt" : "Contact"}
            </h3>
            <p className="text-gray-600">
              {isDE ? "Nehmen Sie Kontakt mit uns auf" : "Get in touch with us"}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-medium mb-8">
                {isDE ? "Kontaktinformationen" : "Contact Information"}
              </h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">
                      {isDE ? "Standort" : "Location"}
                    </h5>
                    <p className="text-gray-600 text-sm">
                      {isDE ? "Düsseldorf & Umgebung" : "Düsseldorf & surroundings"}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">
                      {isDE ? "Telefon" : "Phone"}
                    </h5>
                    <p className="text-gray-600 text-sm font-mono">+49 1520 1234567</p>
                    <p className="text-xs text-gray-500 mt-1">WhatsApp • Telegram</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">E-Mail</h5>
                    <p className="text-gray-600 text-sm font-mono">kontakt@mein-it-service.de</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h4 className="text-xl font-medium mb-8">
                {isDE ? "Nachricht senden" : "Send a message"}
              </h4>
              <ContactForm isDE={isDE} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-600">
          <p>&copy; 2025 IT Service Düsseldorf. {isDE ? "Alle Rechte vorbehalten." : "All rights reserved."}</p>
        </div>
      </footer>
    </div>
  );
}