import { CreditCard, Banknote, Landmark, Check } from 'lucide-react';

const PaymentOptions = () => {
  return (
    <section id="pagos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
            Facilidades
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6 animate-fade-up">
            Métodos de <span className="text-primary">Pago</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-up delay-100">
            Queremos que tu inscripción sea lo más sencilla posible. Aceptamos diversas formas de pago para tu comodidad.
          </p>
        </div>

        {/* Grid de Opciones */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Tarjeta */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group animate-fade-up delay-200">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm text-primary group-hover:scale-110 transition-transform duration-300">
              <CreditCard className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-4">Tarjeta de Crédito/Débito</h3>
            <p className="text-muted-foreground mb-6">
              Aceptamos todas las tarjetas principales directamente en sucursal.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-navy/80">
                <Check className="w-4 h-4 text-primary" /> Visa y Mastercard
              </li>
              <li className="flex items-center gap-2 text-sm text-navy/80">
                <Check className="w-4 h-4 text-primary" /> American Express
              </li>
            </ul>
          </div>

          {/* Efectivo */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group animate-fade-up delay-300">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm text-green-600 group-hover:scale-110 transition-transform duration-300">
              <Banknote className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-4">Efectivo</h3>
            <p className="text-muted-foreground mb-6">
              Puedes realizar tu pago de forma segura directamente en nuestras instalaciones.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-navy/80">
                <Check className="w-4 h-4 text-green-600" /> Pago directo en recepción
              </li>
              <li className="flex items-center gap-2 text-sm text-navy/80">
                <Check className="w-4 h-4 text-green-600" /> Recibo inmediato
              </li>
              <li className="flex items-center gap-2 text-sm text-navy/80">
                <Check className="w-4 h-4 text-green-600" /> Horario de oficina
              </li>
            </ul>
          </div>

          {/* Transferencia */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group animate-fade-up delay-400">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm text-blue-600 group-hover:scale-110 transition-transform duration-300">
              <Landmark className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-4">Transferencia Bancaria</h3>
            <p className="text-muted-foreground mb-6">
              Realiza tu pago cómodamente desde tu aplicación bancaria móvil.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-navy/80">
                <Check className="w-4 h-4 text-blue-600" /> SPEI 24/7
              </li>
              <li className="flex items-center gap-2 text-sm text-navy/80">
                <Check className="w-4 h-4 text-blue-600" /> Confirmación por WhatsApp
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PaymentOptions;