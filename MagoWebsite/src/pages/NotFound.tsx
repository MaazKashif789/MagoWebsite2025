import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Mago International</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-background-light)] px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-[var(--color-primary)] mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="inline-block bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound; 