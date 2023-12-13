import CarouselContainer from '@/components/carousel'
import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
/**
 * Cache & Memoization
 */

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const products = await response.json()

  return products
}

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <>
      <div className="hidden md:grid  md:max-h-[700px] md:grid-cols-9 md:grid-rows-6 gap-2 md:gap-6 max-w-[1400px] z-40">
        <Link
          href={`/product/${highlightedProduct.slug}`}
          className="group w-full relative md:col-span-6 md:row-span-6 rounded-lg overflow-hidden flex justify-center items-end"
        >
          <Image
            src={highlightedProduct.image}
            className="group-hover:scale-105 transition-all w-full h-full"
            width={1000}
            height={900}
            quality={100}
            alt=""
          />

          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-md border-2 border-blueBorder bg-background pl-2">
            <span className="text-md font-bold truncate text-center px-4">
              {highlightedProduct.title}
            </span>
            <span className="flex h-full items-center justify-center  bg-blueBorder px-4 font-semibold text-orangeDark">
              {highlightedProduct.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>

        {otherProducts.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group w-[100%] relative md:col-span-3 md:row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end bg-contain"
            >
              <Image
                src={product.image}
                className="group-hover:scale-105 transition-all w-full bg-contain"
                width={920}
                height={920}
                quality={100}
                alt=""
              />

              <div className="absolute bottom-2 right-2 h-12 flex items-center gap-2 md:max-w-[280px] rounded-md border-2 border-blueBorder bg-background pl-2">
                <span className="text-xs md:text-sm truncate font-bold ">
                  {product.title}
                </span>
                <span className="flex h-full items-center justify-center  bg-blueBorder px-1 md:px-4 font-semibold text-orangeDark">
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

      <div className="flex w-full h-[80%] items-center md:hidden">
        <CarouselContainer
          highProduct={highlightedProduct}
          otherProducts={otherProducts}
        />
      </div>
    </>
  )
}
