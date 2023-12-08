import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { Product } from '@/data/types/product'
import { api } from '@/data/api'

interface SearchProps {
  searchParams: {
    q: string
  }
}

async function searchProducts(query: string): Promise<Product[]> {
  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const products = await response.json()

  return products
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams

  if (!query) {
    redirect('/')
  }

  const products = await searchProducts(query)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center bg-cover"
            >
              <Image
                src={product.image}
                className="h-full w-full"
                width={480}
                height={480}
                quality={100}
                alt=""
              />

              <div className="absolute bottom-1 right-1 h-12 flex items-center gap-2 max-w-[280px]  border-2 border-blueBorder bg-background pl-2.5">
                <span className="text-md font-semibold truncate">
                  {product.title}
                </span>
                <span className="flex h-full items-center justify-center  bg-blueBorder  px-4 font-semibold">
                  {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
