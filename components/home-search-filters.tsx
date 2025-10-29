'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Search, X, Filter } from 'lucide-react'
import { lasVegasCommunities } from '@/lib/communities-data'

interface ActiveFilters {
  community?: string
  minPrice?: string
  maxPrice?: string
  bedrooms?: string
  bathrooms?: string
}

export default function HomeSearchFilters() {
  const [filters, setFilters] = useState<ActiveFilters>({})
  const [showFilters, setShowFilters] = useState(false)

  const handleFilterChange = (key: keyof ActiveFilters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value || undefined }))
  }

  const clearFilters = () => {
    setFilters({})
  }

  const activeFilterCount = Object.values(filters).filter(Boolean).length

  const priceRanges = [
    { label: 'Up to $400K', value: '0-400000' },
    { label: '$400K - $600K', value: '400000-600000' },
    { label: '$600K - $800K', value: '600000-800000' },
    { label: '$800K - $1M', value: '800000-1000000' },
    { label: '$1M+', value: '1000000' },
  ]

  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Search className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Search Homes</h3>
            <p className="text-sm text-muted-foreground">
              Find your perfect 55+ home in Las Vegas
            </p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden"
        >
          <Filter className="mr-2 h-4 w-4" />
          Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
        </Button>
      </div>

      <div className={`space-y-4 ${showFilters ? 'block' : 'hidden md:block'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Community</label>
            <select
              value={filters.community || ''}
              onChange={(e) => handleFilterChange('community', e.target.value)}
              className="w-full px-4 py-2.5 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Communities</option>
              {lasVegasCommunities.map((community) => (
                <option key={community.slug} value={community.slug}>
                  {community.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Price Range</label>
            <select
              value={filters.minPrice || ''}
              onChange={(e) => handleFilterChange('minPrice', e.target.value)}
              className="w-full px-4 py-2.5 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Any Price</option>
              {priceRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Bedrooms</label>
            <select
              value={filters.bedrooms || ''}
              onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
              className="w-full px-4 py-2.5 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Bathrooms</label>
            <select
              value={filters.bathrooms || ''}
              onChange={(e) => handleFilterChange('bathrooms', e.target.value)}
              className="w-full px-4 py-2.5 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>
        </div>

        {activeFilterCount > 0 && (
          <div className="flex items-center gap-2 flex-wrap pt-2">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            {filters.community && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {lasVegasCommunities.find((c) => c.slug === filters.community)?.name}
                <button
                  onClick={() => handleFilterChange('community', '')}
                  className="hover:bg-primary/20 rounded-full p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {filters.minPrice && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {priceRanges.find((r) => r.value === filters.minPrice)?.label}
                <button
                  onClick={() => handleFilterChange('minPrice', '')}
                  className="hover:bg-primary/20 rounded-full p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {filters.bedrooms && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {filters.bedrooms}+ Bedrooms
                <button
                  onClick={() => handleFilterChange('bedrooms', '')}
                  className="hover:bg-primary/20 rounded-full p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {filters.bathrooms && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {filters.bathrooms}+ Bathrooms
                <button
                  onClick={() => handleFilterChange('bathrooms', '')}
                  className="hover:bg-primary/20 rounded-full p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-sm"
            >
              Clear All
            </Button>
          </div>
        )}

        <div className="pt-2">
          <Button size="lg" className="w-full md:w-auto">
            <Search className="mr-2 h-4 w-4" />
            Search {activeFilterCount > 0 && `(${activeFilterCount} filter${activeFilterCount > 1 ? 's' : ''})`}
          </Button>
        </div>
      </div>
    </div>
  )
}

