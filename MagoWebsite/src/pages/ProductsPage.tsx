import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Search, Filter } from 'lucide-react';
import truckbg from '../assets/truckbg.jpg';
import containersImage from '../assets/containers.jpg';
import chemicalImage from '../assets/misc.jpg';
import { useEffect } from 'react';
interface Product {
  id: string;
  name: string;
  hsCode: string;
  description: string;
  grades: string[];
  category: string;
  image: string;
}

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  // Sample data - Replace with your actual data
  const categories = [
    'Acids',
    'Acrylates',
    'Alcohols',
    'Amines',
    'Glycols',
    'Oils',
    'Pigments',
    'Polymers',
    'Solvents',
    'Surfactants'
  ];

  const products: Product[] = [
    {
      id: '1',
      name: 'Acetic Acid',
      hsCode: '2915.21.00',
      description: 'Clear, colorless liquid with a pungent odor. Used in the production of vinyl acetate monomer, acetic anhydride, and acetate esters.',
      grades: ['Technical Grade', 'Food Grade', 'Pharmaceutical Grade'],
      category: 'Acids',
      image: chemicalImage
    },
    {
      id: '2',
      name: 'Industrial Solvents',
      hsCode: '2905.11.00',
      description: 'High-quality industrial solvents for various manufacturing processes. Available in different concentrations and grades.',
      grades: ['Industrial Grade', 'Technical Grade'],
      category: 'Solvents',
      image: containersImage
    },
    {
      id: '3',
      name: 'Chemical Transport',
      hsCode: 'N/A',
      description: 'Specialized chemical transportation services with certified containers and trained personnel.',
      grades: ['Standard', 'Hazardous'],
      category: 'Services',
      image: truckbg
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.hsCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[var(--color-background-light)]">
      {/* <Navbar /> */}
      <main className="pt-20 pb-10">
        {/* Hero Section with Gradient Background */}
        <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white py-16 mb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Products
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Explore our comprehensive range of chemical products. Find exactly what you need with our advanced search and filtering options.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          {/* Search and Filter Section */}
          <div className="mb-12 bg-white rounded-lg shadow-md max-w-2xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search products by name, HS code, or description..."
                  className="pl-10 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="relative w-full md:w-40">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  className="w-full pl-10 p-2 border rounded-md bg-white appearance-none"
                  value={selectedCategory || ''}
                  onChange={(e) => setSelectedCategory(e.target.value || null)}
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-[var(--color-text-dark)]">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              {selectedCategory && ` in ${selectedCategory}`}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="relative h-48 w-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-4 right-4 text-sm text-white bg-[var(--color-primary)]/80 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors">
                      {product.name}
                    </CardTitle>
                  </div>
                  <p className="text-sm text-[var(--color-text-gray)]">
                    HS Code: {product.hsCode}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-[var(--color-text-dark)] mb-4 line-clamp-3">
                    {product.description}
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-[var(--color-text-gray)]">Available Grades:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.grades.map(grade => (
                        <span
                          key={grade}
                          className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-sm"
                        >
                          {grade}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results Message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16 bg-white rounded-lg shadow-md">
              <p className="text-[var(--color-text-dark)] text-lg mb-4">
                No products found matching your search criteria.
              </p>
              <p className="text-[var(--color-text-gray)]">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default ProductsPage; 