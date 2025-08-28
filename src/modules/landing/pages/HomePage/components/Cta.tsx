import Button from '../../../../../components/ui/Button';

export default function Cta() {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Decorative Circle 1 */}
      <div className="absolute top-0 right-24 md:right-32 w-24 h-24 md:w-32 md:h-32 bg-global-2 rounded-full shadow-xl z-10"></div>
      
      {/* Main CTA */}
      <div className="w-full bg-global-5 py-16 md:py-20 relative z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Button 
            variant="primary"
            size="large"
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-blue-600 px-8 py-4 rounded-xl"
          >
            ¡Solicita tu crédito ya!
          </Button>
        </div>
      </div>
      
      {/* Decorative Circle 2 */}
      <div className="absolute bottom-0 left-24 md:left-32 w-24 h-24 md:w-32 md:h-32 bg-global-10 rounded-full shadow-xl z-10 transform translate-y-1/2"></div>
    </section>
  );
}

