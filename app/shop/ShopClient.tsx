"use client"

import { useState } from "react"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Star, Filter, ShoppingCart, Heart } from "lucide-react"

interface Product {
  id: number
  name: string
  category: string
  price: string
  image: string
  description: string
  rating: number
  inStock: boolean
}

const products: Product[] = [
  {
    id: 1,
    name: "Luxury Table Linens",
    category: "linens",
    price: "$45/table",
    image: "/luxury-table-linens-ivory-blush.png",
    description: "Elegant ivory and blush table linens perfect for romantic weddings and upscale events.",
    rating: 5,
    inStock: true,
  },
  {
    id: 2,
    name: "Gold Floral Centerpiece",
    category: "centerpieces",
    price: "$85/piece",
    image: "/elegant-gold-centerpiece-with-flowers.png",
    description: "Stunning gold centerpiece with fresh seasonal flowers for sophisticated table settings.",
    rating: 5,
    inStock: true,
  },
  {
    id: 3,
    name: "Romantic Candle Display",
    category: "centerpieces",
    price: "$65/set",
    image: "/romantic-candle-centerpiece-setup.png",
    description: "Intimate candle arrangements creating warm, romantic ambiance for special occasions.",
    rating: 4,
    inStock: true,
  },
  {
    id: 4,
    name: "Crystal Chandelier",
    category: "lighting",
    price: "$250/day",
    image: "/crystal-chandelier-event-lighting.png",
    description: "Magnificent crystal chandelier adding glamour and elegance to any venue.",
    rating: 5,
    inStock: true,
  },
  {
    id: 5,
    name: "Gold Chiavari Chairs",
    category: "furniture",
    price: "$12/chair",
    image: "/elegant-chiavari-chairs-gold.png",
    description: "Classic gold Chiavari chairs providing timeless elegance for ceremony and reception seating.",
    rating: 5,
    inStock: true,
  },
  {
    id: 6,
    name: "Luxury Lounge Set",
    category: "furniture",
    price: "$350/set",
    image: "/luxury-lounge-furniture-setup.png",
    description: "Sophisticated lounge furniture creating intimate conversation areas for cocktail hours.",
    rating: 4,
    inStock: false,
  },
  {
    id: 7,
    name: "Vintage China Collection",
    category: "tableware",
    price: "$8/place setting",
    image: "/vintage-china-place-setting.png",
    description: "Exquisite vintage china place settings for refined dining experiences.",
    rating: 5,
    inStock: true,
  },
  {
    id: 8,
    name: "Premium Event Linens",
    category: "linens",
    price: "$55/table",
    image: "/elegant-wedding-linens-display.png",
    description: "Premium quality event linens in various colors and textures for any occasion.",
    rating: 4,
    inStock: true,
  },
]

const categories = [
  { id: "all", name: "All Items", count: products.length },
  { id: "linens", name: "Linens", count: products.filter((p) => p.category === "linens").length },
  { id: "centerpieces", name: "Centerpieces", count: products.filter((p) => p.category === "centerpieces").length },
  { id: "lighting", name: "Lighting", count: products.filter((p) => p.category === "lighting").length },
  { id: "furniture", name: "Furniture", count: products.filter((p) => p.category === "furniture").length },
  { id: "tableware", name: "Tableware", count: products.filter((p) => p.category === "tableware").length },
]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const [favorites, setFavorites] = useState<number[]>([])

  const filteredProducts = products
    .filter((product) => selectedCategory === "all" || product.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === "price") {
        return Number.parseInt(a.price.replace(/\D/g, "")) - Number.parseInt(b.price.replace(/\D/g, ""))
      }
      if (sortBy === "rating") {
        return b.rating - a.rating
      }
      return a.name.localeCompare(b.name)
    })

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "hsl(var(--shop-background))", color: "hsl(var(--shop-foreground))" }}
    >
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/elegant-wedding-linens-display.png"
            alt="Luxury Event Rentals"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 animate-shop-fade-in">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">Curated Event Rentals</h1>
          <p className="text-xl md:text-2xl font-light mb-8 text-pretty">
            Transform your vision into reality with our collection of luxury event essentials
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="lg:w-1/4 animate-shop-filter-slide">
            <div className="sticky top-24">
              <div className="rounded-lg p-6 mb-8" style={{ backgroundColor: "hsl(var(--shop-sidebar))" }}>
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="w-5 h-5" style={{ color: "hsl(var(--shop-primary))" }} />
                  <h3 className="font-serif text-xl font-semibold">Filter by Category</h3>
                </div>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                        selectedCategory === category.id ? "text-white" : "hover:bg-white/50"
                      }`}
                      style={{
                        backgroundColor: selectedCategory === category.id ? "hsl(var(--shop-primary))" : "transparent",
                      }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{category.name}</span>
                        <span className="text-sm opacity-70">({category.count})</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-lg p-6" style={{ backgroundColor: "hsl(var(--shop-sidebar))" }}>
                <h3 className="font-serif text-xl font-semibold mb-4">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: "hsl(var(--shop-input))",
                    borderColor: "hsl(var(--shop-border))",
                    focusRingColor: "hsl(var(--shop-ring))",
                  }}
                >
                  <option value="name">Name (A-Z)</option>
                  <option value="price">Price (Low to High)</option>
                  <option value="rating">Rating (High to Low)</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="lg:w-3/4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-serif text-3xl font-bold">
                {selectedCategory === "all" ? "All Products" : categories.find((c) => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-lg opacity-70">
                {filteredProducts.length} {filteredProducts.length === 1 ? "item" : "items"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="group rounded-xl overflow-hidden animate-shop-card-hover"
                  style={{
                    backgroundColor: "hsl(var(--shop-card))",
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-colors duration-300"
                    >
                      <Heart
                        className={`w-5 h-5 ${favorites.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`}
                      />
                    </button>
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="bg-white px-4 py-2 rounded-full font-semibold text-gray-800">
                          Out of Stock
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                      <span className="text-sm opacity-70 ml-2">({product.rating}.0)</span>
                    </div>

                    <h3 className="font-serif text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-sm opacity-80 mb-4 line-clamp-2">{product.description}</p>

                    <div className="flex items-center justify-between">
                      <span className="font-bold text-lg" style={{ color: "hsl(var(--shop-primary))" }}>
                        {product.price}
                      </span>
                      <button
                        disabled={!product.inStock}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                        style={{
                          backgroundColor: product.inStock ? "hsl(var(--shop-accent))" : "hsl(var(--shop-muted))",
                          color: product.inStock
                            ? "hsl(var(--shop-accent-foreground))"
                            : "hsl(var(--shop-muted-foreground))",
                        }}
                      >
                        <ShoppingCart className="w-4 h-4" />
                        {product.inStock ? "Book Now" : "Unavailable"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl opacity-70">No products found in this category.</p>
              </div>
            )}
          </main>
        </div>

        {/* Testimonials Section */}
        <section className="mt-24 py-16 rounded-2xl" style={{ backgroundColor: "hsl(var(--shop-muted))" }}>
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl opacity-80">
              Hear from couples and event planners who trusted us with their special moments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah & Michael",
                event: "Wedding Reception",
                text: "The linens and centerpieces were absolutely stunning. Every detail was perfect!",
                rating: 5,
              },
              {
                name: "Corporate Events Inc.",
                event: "Annual Gala",
                text: "Professional service and beautiful rentals made our gala unforgettable.",
                rating: 5,
              },
              {
                name: "Jennifer Martinez",
                event: "Anniversary Party",
                text: "The luxury lounge furniture created the perfect intimate atmosphere.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-xl text-center"
                style={{ backgroundColor: "hsl(var(--shop-card))" }}
              >
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="italic mb-4 text-pretty">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm opacity-70">{testimonial.event}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
