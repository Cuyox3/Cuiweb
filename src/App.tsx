import { useState } from 'react';
import { 
  Code, 
  Cpu, 
  Cog, 
  ChevronDown, 
  Users, 
  MessageSquareQuote, 
  ArrowRight,
  Mail,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value;
    const telefono = (form.elements.namedItem('telefono') as HTMLInputElement)?.value;
    const service = (form.elements.namedItem('service') as HTMLSelectElement)?.value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value;

    const mailtoLink = `mailto:artuciiz@cuyox3.com?subject=Nombre: ${name} - Servicio: ${service}&body=Teléfono: ${telefono}%0D%0AMensaje: ${message}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-900/30">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-fuchsia-500 to-purple-600 font-bold text-xl sm:text-2xl">
              CuyoX3
            </div>
          </div>
          
          {/* Escritorio */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Inicio</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">Nosotros</a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Servicios</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonios</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contacto</a>
          </div>
          
          <div className="flex items-center">
            <button className="hidden sm:block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2 rounded-full hover:shadow-[0_0_15px_rgba(131,56,236,0.8)] transition-shadow text-sm sm:text-base">
              Contáctanos
            </button>
            
            {/* Mobile */}
            <button 
              className="md:hidden ml-4 text-gray-300 hover:text-white"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-b border-purple-900/30">
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors py-2" onClick={closeMobileMenu}>Inicio</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors py-2" onClick={closeMobileMenu}>Nosotros</a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors py-2" onClick={closeMobileMenu}>Servicios</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors py-2" onClick={closeMobileMenu}>Testimonios</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors py-2" onClick={closeMobileMenu}>Contacto</a>
              <button className="sm:hidden w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-[0_0_15px_rgba(131,56,236,0.8)] transition-shadow">
                Contáctanos
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,56,202,0.15),rgba(12,10,29,0))]"></div>
        
        {/* Lineas Neon */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
          <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-30"></div>
          <div className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>
          
          <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-30"></div>
          <div className="absolute top-0 left-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-fuchsia-500 to-transparent opacity-30"></div>
          <div className="absolute top-0 left-2/3 w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="block">Innovación</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-fuchsia-500 to-purple-600">
                  Tecnológica
                </span>
                <span className="block">del Futuro</span>
              </h1>
              <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-xl mx-auto md:mx-0">
                Desarrollamos soluciones de vanguardia en software, electrónica y mecánica para transformar tu visión en realidad.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-[0_0_15px_rgba(131,56,236,0.8)] transition-shadow">
                  Explorar Servicios
                </button>
                <button className="border border-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-900/20 transition-colors">
                  Conócenos
                </button>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <div className="relative w-full h-64 sm:h-80 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-fuchsia-600/20 to-purple-600/20 rounded-2xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 sm:w-32 h-24 sm:h-32 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-fuchsia-500 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl sm:text-5xl font-bold text-white">X3</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
                  <ChevronDown size={32} className="text-purple-500 animate-bounce" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* Sobre Nosotros */}
      <section id="about" className="py-16 sm:py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(131,56,236,0.1),rgba(12,10,29,0))]"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ">¿Quiénes Somos?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-fuchsia-500 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative rounded-xl overflow-hidden h-64 sm:h-80 shadow-[0_0_25px_rgba(131,56,236,0.3)]">
                <img 
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=3126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Portátil" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-fuchsia-500 to-purple-600 text-center md:text-left">
                Innovación en Cada Dimensión
              </h3>
              <p className="text-gray-300 mb-6 text-center md:text-left">
                En CuyoX3, fusionamos tecnología de punta con creatividad para ofrecer soluciones integrales que trascienden los límites convencionales. Nuestro equipo multidisciplinario combina experiencia en desarrollo de software, electrónica avanzada y diseño mecánico para crear productos y servicios que marcan la diferencia.
              </p>
              <p className="text-gray-300 mb-6 text-center md:text-left">
                Desde nuestra fundación, nos hemos dedicado a transformar ideas ambiciosas en realidades tangibles, colaborando con empresas visionarias que buscan destacarse en la era digital.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-6">
                <div className="flex flex-col items-center">
                  <div className="text-blue-500 font-bold text-3xl sm:text-4xl">5+</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Años de Experiencia</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-purple-800"></div>
                <div className="flex flex-col items-center">
                  <div className="text-fuchsia-500 font-bold text-3xl sm:text-4xl">25+</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Proyectos Completados</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-purple-800"></div>
                <div className="flex flex-col items-center">
                  <div className="text-purple-500 font-bold text-3xl sm:text-4xl">25+</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Clientes Satisfechos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="services" className="py-16 sm:py-20 relative bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(67,56,202,0.1),rgba(12,10,29,0))]"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-fuchsia-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto px-4">
              Ofrecemos soluciones integrales en tres áreas clave, combinando tecnologías de vanguardia para crear productos y servicios innovadores.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Software */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-6 sm:p-8 border border-blue-900/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-shadow group">
              <div className="w-16 h-16 rounded-full bg-blue-900/30 flex items-center justify-center mb-6 group-hover:bg-blue-900/50 transition-colors mx-auto md:mx-0">
                <Code size={32} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 text-center md:text-left">
                Desarrollo de Software
              </h3>
              <p className="text-gray-400 mb-6 text-center md:text-left">
                Creamos aplicaciones web y móviles personalizadas, sistemas de gestión empresarial y soluciones de comercio electrónico utilizando las tecnologías más avanzadas.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                  Aplicaciones Web Responsivas
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                  Desarrollo Móvil Multiplataforma
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                  Sistemas de Gestión Empresarial
                </li>
                
              </ul>
              <a href="#contact" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                Saber más <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
            
            {/* Electrónica */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-6 sm:p-8 border border-fuchsia-900/30 hover:shadow-[0_0_25px_rgba(219,39,119,0.3)] transition-shadow group">
              <div className="w-16 h-16 rounded-full bg-fuchsia-900/30 flex items-center justify-center mb-6 group-hover:bg-fuchsia-900/50 transition-colors mx-auto md:mx-0">
                <Cpu size={32} className="text-fuchsia-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-fuchsia-600 text-center md:text-left">
                Electrónica
              </h3>
              <p className="text-gray-400 mb-6 text-center md:text-left">
                Diseñamos y desarrollamos sistemas electrónicos a medida, desde prototipos hasta productos listos para producción, integrando las últimas tecnologías.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-fuchsia-500 mr-2"></div>
                  Diseño de PCB y Circuitos
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-fuchsia-500 mr-2"></div>
                  Sistemas Embebidos
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-fuchsia-500 mr-2"></div>
                  IoT y Dispositivos Conectados
                </li>
                
              </ul>
              <a href="#contact" className="inline-flex items-center text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
                Saber más <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
            
            {/* Mecánica */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-6 sm:p-8 border border-purple-900/30 hover:shadow-[0_0_25px_rgba(147,51,234,0.3)] transition-shadow group md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none">
              <div className="w-16 h-16 rounded-full bg-purple-900/30 flex items-center justify-center mb-6 group-hover:bg-purple-900/50 transition-colors mx-auto md:mx-0">
                <Cog size={32} className="text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 text-center md:text-left">
                Mecánica
              </h3>
              <p className="text-gray-400 mb-6 text-center md:text-left">
                Ofrecemos servicios de diseño y fabricación mecánica de precisión, utilizando tecnologías avanzadas de modelado 3D y manufactura.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                  Diseño CAD/CAM
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                  Impresión 3D y Prototipado Rápido
                </li>
              
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                  Diseño de Productos Mecatrónicos
                </li>
              </ul>
              <a href="#contact" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                Saber más <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonials" className="py-16 sm:py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(131,56,236,0.1),rgba(12,10,29,0))]"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Lo Que Dicen Nuestros Clientes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-fuchsia-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Descubre cómo nuestras soluciones han transformado los negocios de nuestros clientes y han superado sus expectativas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Test. 1 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-6 sm:p-8 border border-blue-900/30 relative">
              <div className="absolute -top-5 -left-5">
                <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center">
                  <MessageSquareQuote size={20} className="text-blue-400" />
                </div>
              </div>
              <p className="text-gray-300 mb-6 italic">
                "CuyoX3 transformó nuestra idea en un producto completo que superó todas nuestras expectativas. Su enfoque integral en software y hardware nos permitió lanzar al mercado en tiempo récord."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                  MG
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-white">Miguel Gutiérrez Hernández</h4>
                  <p className="text-gray-400 text-sm">CEO, TEMSCorp</p>
                </div>
              </div>
            </div>
            
            {/* Test. 2 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-6 sm:p-8 border border-fuchsia-900/30 relative">
              <div className="absolute -top-5 -left-5">
                <div className="w-10 h-10 rounded-full bg-fuchsia-900/50 flex items-center justify-center">
                  <MessageSquareQuote size={20} className="text-fuchsia-400" />
                </div>
              </div>
              <p className="text-gray-300 mb-6 italic">
                "La capacidad de CuyoX3 para integrar soluciones de software con sistemas electrónicos personalizados nos permitió automatizar procesos críticos y aumentar nuestra eficiencia operativa en un 40%."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 flex items-center justify-center text-white font-bold">
                  JR
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-white">Keyla Castro</h4>
                  <p className="text-gray-400 text-sm">Director de Operaciones, Empaques y Maquinas Nacionales</p>
                </div>
              </div>
            </div>
            
            {/* Test. 3 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-6 sm:p-8 border border-purple-900/30 relative md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none">
              <div className="absolute -top-5 -left-5">
                <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center">
                  <MessageSquareQuote size={20} className="text-purple-400" />
                </div>
              </div>
              <p className="text-gray-300 mb-6 italic">
                "El equipo de CuyoX3 no solo entendió nuestras necesidades técnicas, sino que aportó ideas innovadoras que mejoraron significativamente nuestro producto final. Su experiencia en el desarrollo web fue invaluable."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-fuchsia-600 flex items-center justify-center text-white font-bold">
                  AL
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-white">Alberto López</h4>
                  <p className="text-gray-400 text-sm">Fundador, MAF Automation</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-900/30 via-fuchsia-900/30 to-purple-900/30 px-6 sm:px-8 py-3 sm:py-4 rounded-full">
              <Users size={20} className="text-purple-400" />
              <span className="text-gray-300 text-sm sm:text-base">Más de <span className="font-bold text-white">30 clientes satisfechos</span> confían en nosotros</span>
            </div>
          </div>
        </div>
      </section>

      {/* C2A */}
      <section id="contact" className="py-16 sm:py-20 relative bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(67,56,202,0.15),rgba(12,10,29,0))]"></div>
        
        {/* Lineas Neon */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-6 sm:p-10 border border-purple-900/30 shadow-[0_0_50px_rgba(131,56,236,0.15)]">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">¿Listo para Transformar tu Visión en Realidad?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Contáctanos hoy mismo para discutir cómo podemos ayudarte a llevar tu proyecto al siguiente nivel con nuestras soluciones tecnológicas integrales.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-fuchsia-500 to-purple-600 text-center md:text-left">
                  Hablemos de tu Proyecto
                </h3>
                <p className="text-gray-300 mb-6 text-center md:text-left">
                  Completa el formulario y nuestro equipo se pondrá en contacto contigo en menos de 24 horas para discutir tus necesidades y cómo podemos ayudarte.
                </p>
                <div className="flex items-center space-x-4 mb-4 justify-center md:justify-start">
                  <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center">
                    <Mail size={20} className="text-blue-400" />
                  </div>
                  <span className="text-gray-300">artuciiz@cuyox3.com</span>
                </div>
                <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl border border-purple-900/30">
                  <h4 className="font-bold text-white mb-2 text-center md:text-left">¿Por qué elegirnos?</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></div>
                      <span className="text-gray-300">Soluciones integrales en software, electrónica y mecánica</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-fuchsia-500 mt-2 mr-2"></div>
                      <span className="text-gray-300">Equipo multidisciplinario de expertos</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></div>
                      <span className="text-gray-300">Enfoque personalizado para cada proyecto</span>
                    </li>
                  </ul>
                </div>
              </div>
              
               <div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Nombre</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      className="w-full bg-gray-900 border border-purple-900/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-gray-300 mb-2">Teléfono</label>
                    <input 
                      type="telefono" 
                      id="telefono" 
                      name="telefono"
                      className="w-full bg-gray-900 border border-purple-900/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="55-55-55-55-55"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-gray-300 mb-2">Servicio de Interés</label>
                    <select 
                      id="service" 
                      name="service"
                      className="w-full bg-gray-900 border border-purple-900/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="software">Desarrollo de Software</option>
                      <option value="electronics">Electrónica</option>
                      <option value="mechanical">Diseño Mecánico</option>
                      <option value="integrated">Solución Integral</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Mensaje</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={4} 
                      className="w-full bg-gray-900 border border-purple-900/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 via-fuchsia-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-[0_0_15px_rgba(131,56,236,0.5)] transition-shadow font-bold"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-10 border-t border-purple-900/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-fuchsia-500 to-purple-600 font-bold text-xl sm:text-2xl mb-2">
                CuyoX3
              </div>
              <p className="text-gray-400">Innovación Tecnológica del Futuro</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-0">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">Inicio</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">Nosotros</a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Servicios</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonios</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contacto</a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">© 2025 CuyoX3. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;