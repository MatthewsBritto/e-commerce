import Image from 'next/image'
import { Metadata } from 'next'

import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import { AddToCartButton } from '@/components/add-to-cart-button'
import { StarIcon } from 'lucide-react'

interface ProductProps {
  params: {
    slug: string
  }
}

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const product = await response.json()

  return product
}

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const product = await getProduct(params.slug)

  return {
    title: product.title,
  }
}

export async function generateStaticParams() {
  const response = await api('/products/featured')
  const products: Product[] = await response.json()

  return products.map((product) => {
    return { slug: product.slug }
  })
}

export default async function ProductPage({ params }: ProductProps) {
  const product = await getProduct(params.slug)

  return (
    <div className="relative h-[600px] items-center pt-8 md:mt-4 justify-center rounded-md">
      <div className="flex flex-col md:flex-row md:h-[400px] w-full max-w-[1280px] lg:h-[600px] justify-center h-[600px]">
        <div className="overflow-hidden h-full sm:w-full">
          <Image
            className="w-full h-full md:rounded-l-md rounded-t-md"
            src={product.image}
            alt=""
            width={250}
            height={250}
            quality={100}
          />
        </div>

        <div className="flex flex-col justify-center md:px-12 p-4 h-full  rounded-r-md bg-white">
          <h1 className="text-xl md:text-3xl font-bold leading-tight">
            {product.title}
          </h1>

          <p className="text-sm md:text-lg mt-2 leading-relaxed text-zinc-700 py-2.5">
            {product.description}
          </p>

          <div className="flex w-full  gap-1 md:gap-4 items-center">
            <StarIcon fill="#FF4E26" />
            <StarIcon fill="#FF4E26" />
            <StarIcon fill="#FF4E26" />
            <StarIcon fill="#FF4E26" />
            <StarIcon fill="#FF4E26" />
          </div>

          <div className="mt-2 md:mt-8 flex flex-col items-start gap-3">
            <span className="text-3xl font-bold">
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
            <span className="text-sm text-zinc-400">
              Em até 12x s/ juros de{' '}
              {(product.price / 12).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </div>

          <AddToCartButton productId={product.id} />
        </div>
      </div>
    </div>
  )
}
