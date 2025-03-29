
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Erreur: L'utilisateur a tenté d'accéder à une route inexistante:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-16">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <p className="text-2xl text-gray-800 mb-6">Oups! Page non trouvée</p>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            La page que vous recherchez a peut-être été supprimée, a changé de nom ou est temporairement indisponible.
          </p>
          <Button asChild size="lg">
            <Link to="/">Retour à l'Accueil</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
