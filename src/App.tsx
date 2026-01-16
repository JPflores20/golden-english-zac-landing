import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { uploadData } from "./seed"; // <--- 1. IMPORTAR ESTO

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* 2. AGREGAR ESTE BOTÓN TEMPORAL */}
      <button 
        onClick={uploadData} 
        className="fixed top-0 left-0 z-[9999] bg-red-600 text-white p-4 font-bold border-2 border-white"
      >
        CLICK PARA SUBIR DATOS (SOLO 1 VEZ)
      </button>

      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;