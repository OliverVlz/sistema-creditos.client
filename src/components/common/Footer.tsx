import whatsappIcon from '../../assets/images/icons/contact/whatsapp.png';
import facebookIcon from '../../assets/images/icons/social/facebook.svg';
import instagramIcon from '../../assets/images/icons/social/instagram.svg';
import emailIcon from '../../assets/images/icons/contact/email.svg';
import logoWhite from '../../assets/images/ui/logo-white.png';

const Footer = () => {
  return (
    <footer className="w-full bg-footer-1 pt-[15px] sm:pt-[18px] md:pt-[20px] pr-[15px] sm:pr-[18px] md:pr-[20px] pb-[15px] sm:pb-[18px] md:pb-[20px] pl-[15px] sm:pl-[18px] md:pl-[20px] -mt-[20px] sm:-mt-[23px] md:-mt-[26px]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[12px] sm:gap-[14px] md:gap-[16px] justify-start items-center w-full mt-[27px] sm:mt-[32px] md:mt-[36px]">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full px-[40px] sm:px-[46px] md:px-[52px] lg:px-[58px] gap-8 lg:gap-0">
            {/* Contact Section */}
            <div className="flex flex-col gap-[14px] sm:gap-[16px] md:gap-[18px] justify-start items-start w-full lg:w-auto">
              <h3 className="font-plus-jakarta text-[16px] sm:text-[17px] md:text-[18px] font-extrabold leading-[20px] sm:leading-[22px] md:leading-[23px] text-left text-global-13">
                Contactanos
              </h3>
              
              {/* WhatsApp */}
              <div className="flex flex-row gap-[8px] sm:gap-[9px] md:gap-[10px] justify-start items-center w-auto">
                <img src={whatsappIcon} alt="WhatsApp" className="w-[28px] sm:w-[30px] md:w-[32px] h-[28px] sm:h-[30px] md:h-[32px]" />
                <span className="font-plus-jakarta text-[14px] sm:text-[15px] md:text-[16px] font-semibold leading-[18px] sm:leading-[20px] md:leading-[21px] text-left text-global-13 self-end">
                  315 8008588
                </span>
              </div>
              
              {/* Facebook */}
              <div className="flex flex-row gap-[8px] sm:gap-[9px] md:gap-[10px] justify-start items-start w-auto">
                <img src={facebookIcon} alt="Facebook" className="w-[28px] sm:w-[30px] md:w-[32px] h-[28px] sm:h-[30px] md:h-[32px] self-center" />
                <span className="font-plus-jakarta text-[14px] sm:text-[15px] md:text-[16px] font-semibold leading-[18px] sm:leading-[20px] md:leading-[21px] text-left text-global-13">
                  Inversiones Murillo Martinez
                </span>
              </div>
              
              {/* Instagram */}
              <div className="flex flex-row gap-[8px] sm:gap-[9px] md:gap-[10px] justify-start items-center w-auto">
                <img src={instagramIcon} alt="Instagram" className="w-[28px] sm:w-[30px] md:w-[32px] h-[28px] sm:h-[30px] md:h-[32px]" />
                <span className="font-plus-jakarta text-[14px] sm:text-[15px] md:text-[16px] font-semibold leading-[18px] sm:leading-[20px] md:leading-[21px] text-left text-global-13 self-end">
                  @Inversiones Murillo Martinez
                </span>
              </div>
              
              {/* Email */}
              <div className="flex flex-row gap-[8px] sm:gap-[9px] md:gap-[10px] justify-start items-center w-auto">
                <img src={emailIcon} alt="Email" className="w-[28px] sm:w-[30px] md:w-[32px] h-[28px] sm:h-[30px] md:h-[32px]" />
                <span className="font-plus-jakarta text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-[18px] sm:leading-[20px] md:leading-[21px] text-left text-global-13 self-end">
                  inversionesmurillomartinez@outlook.es
                </span>
              </div>
            </div>
            
            {/* Logo and Legal Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-[56%] gap-8 lg:gap-0">
              {/* Logo */}
              <img 
                src={logoWhite} 
                alt="Company Logo" 
                className="w-full max-w-[120px] sm:max-w-[140px] md:max-w-[176px] h-auto lg:w-[26%]" 
              />
              
              {/* Legal Links */}
              <div className="flex flex-col gap-[20px] sm:gap-[23px] md:gap-[26px] justify-start items-center lg:items-end w-auto">
                <h3 className="font-plus-jakarta text-[16px] sm:text-[17px] md:text-[18px] font-extrabold leading-[20px] sm:leading-[22px] md:leading-[23px] text-center lg:text-left text-global-13">
                  Legales
                </h3>
                <span className="font-plus-jakarta text-[14px] sm:text-[15px] md:text-[16px] font-semibold leading-[18px] sm:leading-[20px] md:leading-[21px] text-center lg:text-right text-global-13 cursor-pointer hover:opacity-80">
                  Condiciones de crédito
                </span>
                <span className="font-plus-jakarta text-[14px] sm:text-[15px] md:text-[16px] font-semibold leading-[18px] sm:leading-[20px] md:leading-[21px] text-center lg:text-right text-global-13 cursor-pointer hover:opacity-80">
                  Tratamiento de datos
                </span>
                <span className="font-plus-jakarta text-[14px] sm:text-[15px] md:text-[16px] font-semibold leading-[18px] sm:leading-[20px] md:leading-[21px] text-center lg:text-right text-global-13 cursor-pointer hover:opacity-80">
                  Politicas de seguridad e internet
                </span>
                <span className="font-plus-jakarta text-[14px] sm:text-[15px] md:text-[16px] font-semibold leading-[18px] sm:leading-[20px] md:leading-[21px] text-center lg:text-right text-global-13 cursor-pointer hover:opacity-80">
                  Aviso de privacidad
                </span>
              </div>
            </div>
          </div>
          
          {/* Divider Line */}
          <div className="w-full h-[1px] bg-footer-2"></div>
          
          {/* Copyright */}
          <p className="font-plus-jakarta text-[14px] sm:text-[15px] md:text-[16px] font-semibold leading-[18px] sm:leading-[20px] md:leading-[21px] text-center text-global-13">
            ©2025 Todos los Derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
