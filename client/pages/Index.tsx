import { useState, useEffect } from "react";
import {
  Heart,
  Calendar,
  MapPin,
  MessageCircle,
  Copy,
} from "lucide-react";
import BackgroundMusic from "../components/BackgroundMusic";
import CountdownTimer from "@/components/CountdownTimer";

const WeddingHomepage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    "/images/IMG_46.jpg", "/images/IMG_1048.jpg", "/images/IMG_71.jpg",
    "/images/IMG_1132.jpg", "/images/IMG_87.jpg", "/images/IMG_1168.jpg", 
    "/images/IMG_146.jpg", "/images/IMG_1193.jpg", "/images/IMG_184.jpg", 
    "/images/IMG_1244.jpg", "/images/IMG_198.jpg", "/images/IMG_1251.jpg", 
    "/images/IMG_286.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

const handleWhatsAppRSVP = () => {
  const message = "Olá! Gostaria de confirmar minha presença no casamento de Letícia & Pedro!";
  window.open(`https://wa.me/5519999280670?text=${encodeURIComponent(message)}`);
};

  const handleGoogleMaps = () => {
    const address = "Estr. Mun. José Martins da Costa, Itapira - SP";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      "Espaço Cedro Eventos " + address,
    )}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      {/* Background Music Component  5519999280670 */}
      <BackgroundMusic />
    
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed bg-no-repeat mobile-bg"
        style={{
          backgroundImage: "url('/images/IMG_1163.jpg')",
          paddingLeft: '200px',
        }}
      >
        <style dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 640px) {
              .mobile-bg {
                background-image: url("/images/IMG_1173.jpg") !important;
              }
                
            @media (max-width: 1215px) {
              .mobile-bg {
                background-image: url("/images/IMG_1163T.jpg");
                justify-content: flex-start !important;
                align-items: stretch !important;
                padding-left: 0 !important;
              }
              .mobile-container {
                justify-content: space-between !important;
                align-items: center !important;
                margin: 0 !important;
                padding: 20px !important;
                width: 100% !important;
                height: 100svh !important;
                min-height: 100dvh !important;
                max-width: none !important;
              }
              .mobile-heading-wrapper {
                display: flex !important;
                flex-direction: column !important;
                align-items: center !important;
                margin-bottom: 0 !important;
              }
              .mobile-heading {
                display: flex !important;
                flex-direction: column !important;
                justify-content: center !important;
                align-items: center !important;
                margin: 0 !important;
              }
              .mobile-names {
                justify-content: center !important;
                align-items: center !important;
                font-size: 50px !important;
              }
              .mobile-name {
                font-size: 50px !important;
              }
              .mobile-ampersand {
                font-size: 50px !important;
                padding: 0 10px !important;
              }
              .mobile-date-location {
                display: flex !important;
                flex-direction: column !important;
                gap: 15px !important;
                align-items: center !important;
                margin: auto 0 40px !important;
                margin-bottom: 40px !important;
              }
              .mobile-date-text {
                color: rgba(0, 0, 0, 1) !important;
                margin-top: -3px !important;
              }
              .mobile-button-container {
                margin-bottom: 20px !important;
              }
              .mobile-button {
                margin-bottom: 30px !important;
              }
            }
            `
        }} />
        <div className="text-center flex flex-col justify-center mobile-container" style={{ maxWidth: '1812px', marginLeft: 'auto', padding: '0 122px 0 200px' }}>
          <div className="space-y-2 mb-8 mobile-heading-wrapper">
            <h1 className="font-playfair text-charcoal font-bold leading-tight mobile-heading" style={{ font: '700 85px/120px "Playfair Display", serif' }}>
              <div className="flex flex-row mobile-names">
                <span className="mobile-name">Letícia </span>
                <span className="text-rose-gold mobile-ampersand">&amp;</span>
                <span className="mobile-name"> Pedro</span>
              </div>
            </h1>
            <div className="flex items-center justify-center gap-3 text-charcoal">
              <Calendar size={24} className="text-rose-gold" />
              <span className="font-poppins text-lg mobile-date-text">23 de Novembro, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Nosso Convite */}
      <section className="py-20 bg-cream min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl text-charcoal mb-4">
              Nosso Convite
            </h2>
            <div className="w-24 h-1 bg-rose-gold mx-auto mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative w-full rounded-2xl aspect-[1/1] overflow-hidden mb-6 md:mb-8 lg:mb-10">
                <img className="absolute inset-0 w-full h-full object-cover" src="/images/IMG_168.jpg" alt="Convite" />
              </div>
              <div className="md:flex md:items-center md:justify-center md:h-full">
                <p className="text-charcoal font-poppins text-xl max-w-2xl mx-auto md:inline-block md:text-center">
                  Com imensa alegria, convidamos você para celebrar conosco o início de um novo capítulo de nossa história. Sua presença será motivo de felicidade e tornará este dia ainda mais especial.
                  <br></br>
                  <br></br>Com carinho, 
                  <br></br>Os noivos.<Heart size={20} className="inline text-rose-gold ml-1"/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Details Section */}
      <section
        id="detalhes"
        className="py-20 bg-gradient-to-b from-cream to-blush min-h-screen flex text-center items-center justify-center"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl text-charcoal mb-4">
              Detalhes da Celebração
            </h2>
            <div className="w-24 h-1 bg-rose-gold mx-auto"></div>
          </div>

          {/* Ceremony Details */}
          <div className="space-y-4">
            <p className="text-charcoal text-2xl font-bold font-poppins">
              23 de Novembro, 2025
            </p>
            <p className="text-charcoal text-xl font-bold font-poppins">16:30h</p>
            <p className="text-charcoal text-xl font-poppins">
              Espaço Cedro Eventos
            </p>
            <p className="text-charcoal text-xl font-poppins">
              Estr. Mun. José Martins da Costa - Itapira
            </p>
          </div>

          {/* Google Maps Button */}
          <div className="text-center space-y-4 mt-8">
            <button
              onClick={handleGoogleMaps}
              className="bg-rose-gold hover:bg-rose-gold/90 text-white px-8 py-4 rounded-full font-poppins font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
            >
              <MapPin size={24} />
              Ver no Google Maps
            </button>
            <button
              onClick={handleWhatsAppRSVP}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-poppins font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
            >
              <MessageCircle size={24} />
              Confirmar Presença
            </button>
            <p className="text-charcoal text-lg font-poppins font-bold">
              Confirmar a presença até o dia <span className="text-rose-gold">1 de Novembro</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Cronometro */}
      <section className="py-20 bg-cream min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl text-charcoal mb-4">
              Contagem Regressiva
            </h2>
            <div className="w-24 h-1 bg-rose-gold mx-auto mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-items-center">
              <div className="relative w-full rounded-2xl aspect-[1/1] overflow-hidden mb-6 md:mb-8 lg:mb-10">
                <img className="absolute inset-0 w-full h-full object-cover" src="/images/IMG_138.jpg" alt="Convite" />
              </div>
              <div className="flex flex-col items-center">
                <div className="text-rose-gold text-2xl font-poppins mb-8 md:mb-10">
                  <CountdownTimer targetDate={new Date("2025-11-23T16:30:00")} />
                </div>
                <div className="md:flex md:items-center md:justify-center md:h-full">
                  <p className="text-charcoal font-poppins text-lg max-w-2xl mx-auto md:inline-block md:text-center">
                    "Para tudo há uma ocasião certa; há um tempo certo para cada propósito debaixo do céu" - Eclesiastes 3:1
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl text-charcoal mb-4">
              Nosso Amor
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105"
                style={{ aspectRatio: 'auto' }} // Adiciona proporção automática
              >
                <img
                  src={image}
                  alt={`Foto do casal ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Heart size={32} className="text-rose-gold" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Presente */}
      <section className="py-20 bg-cream min-h-screen flex flex-col items-center justify-center">
        <h2 className="font-playfair text-5xl text-charcoal mb-4 text-center mb-8 md:mb-10 ">
          Presente
        </h2>
        <p className="text-charcoal font-poppins text-center max-w-2xl mx-auto mb-8">
          Sua presença já é o melhor presente que poderíamos desejar! Mas, se desejar nos presentear, ficaremos muito felizes em receber uma contribuição via PIX para ajudar a construir nosso novo lar.
        </p>
        <div className="flex flex-col items-center gap-3">
          <span className="text-rose-gold text-sm mt-2">
            Copie a chave ou aponte a câmera para o QR Code
          </span>
          <span className="font-poppins text-charcoal mb-2">
            Chave PIX:
          </span>
          <img
            src="/images/qrcode.png"
            alt="QR Code PIX"
            className="w-48 h-48 rounded-lg shadow-lg border border-gray-200"
          />
          <button
            onClick={() => {
              navigator.clipboard.writeText("00020126360014BR.GOV.BCB.PIX0114+55199995702165204000053039865802BR5901N6001C62120508Presente63045B66");
            }}
            className="bg-rose-gold hover:bg-rose-gold/90 text-white px-8 py-4 rounded-full font-poppins font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
          >
            <Copy size={24} />
            Copiar
          </button>
        </div>
      </section>

      {/* RSVP Fixed Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsAppRSVP}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110"
        >
          <MessageCircle size={24} />
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-charcoal text-cream py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-playfair text-3xl mb-4">Letícia & Pedro</h3>
          <p className="font-poppins text-sage mb-6">23 de Novembro, 2025</p>
          <div className="flex justify-center space-x-4">
            {[...Array(3)].map((_, i) => (
              <Heart key={i} size={20} className="text-rose-gold" />
            ))}
          </div>
          <p className="font-poppins text-sm text-sage mt-8">
            Com amor, esperamos celebrar este momento especial com vocês ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WeddingHomepage;
