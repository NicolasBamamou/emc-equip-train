import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const MaintenancePreventivePageTest = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-600 mb-4">
            MAINTENANCE PRÉVENTIVE - TEST
          </h1>
          <p className="text-xl text-gray-600">
            Cette page fonctionne! Le problème était dans la complexité du composant.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MaintenancePreventivePageTest;
