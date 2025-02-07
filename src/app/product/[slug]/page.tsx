import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../type/products";
import { groq } from "next-sanity";
import Image from "next/image";

interface ProductPageProp {
    params: { slug: string };
}

async function getProduct(slug: string): Promise<Product> {
    return client.fetch(
        groq`*[_type == "product" && slug.current == $slug][0]{
            _id,
            productName,
            _type,
            image,
            category,
            price,
            inventory,
            colors,
            status,
            description
        }`, { slug }
    );
}

export default async function ProductPage({ params }: ProductPageProp) {
    const { slug } = params;
    const product = await getProduct(slug);

    return (
        <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="aspect-square">
                    {product.image && (
                        <Image
                            src={urlFor(product.image).url()}
                            alt={product.productName}
                            width={500}
                            height={500}
                            className="rounded-lg shadow-md"
                        />
                    )}
                </div>
                <div className="text-xl font-semibold text-gray-900 flex flex-col justify-start items-start mt-20">
                    <h1 className="flex flex-col justify-start items-start gap-8">
                        {product.productName}
                    </h1>
                    <div className="text-sm font-semibold text-gray-600 flex flex-col justify-start items-start">
                        <p className="text-red-500">{product.status}</p>
                        <p>{product.category}</p>
                        <p>${product.price}</p>
                        <p>{product.inventory}</p>
                        <p>{product.colors}</p>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
