'use client'
import { Product } from '@/data/types/product'
import Image from 'next/image'
import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Star } from 'lucide-react'

interface CarouselProps {
  highProduct: Product
  otherProducts: Product[]
}

export default function CarouselContainer({
  highProduct,
  otherProducts,
}: CarouselProps) {
  const array = [highProduct, ...otherProducts]
  return (
    <Carousel
      showIndicators={false}
      showStatus={false}
      className="overflow-hidden mt-5 z-40"
    >
      {array.map((product) => {
        return (
          <div key={product.id} className="h-full w-full">
            <Link href={`product/${product.slug}`}>
              <div className="bg-contain rounded-t-lg flex-1">
                <Image
                  src={product.image}
                  alt=""
                  className="h-[300px] rounded-t-lg"
                  width={500}
                  height={300}
                />
              </div>

              <div className="w-full flex flex-col items-center justify-between py-2 bg-white h-[150px] flex-1 rounded-b-lg">
                <h2 className="font-bold text-lg py-1">{product.title}</h2>
                <span className="text-xl font-semibold py-2">
                  R$ {product.price},00
                </span>
                <button className="py-2 font-semibold bg-orangeDark w-2/3 rounded text-white">
                  Saiba Mais
                </button>
              </div>
            </Link>
          </div>
        )
      })}
    </Carousel>
  )
}
