"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

// Sample gallery data
const galleryItems = [
  {
    id: 1,
    title: "Taller de Arte para Niños",
    description: "Los niños expresan su creatividad a través de la pintura y el dibujo.",
    category: "talleres",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Entrega de Útiles Escolares",
    description: "Donación de materiales educativos a familias de la comunidad.",
    category: "donaciones",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Jornada de Salud Comunitaria",
    description: "Atención médica gratuita para familias de escasos recursos.",
    category: "salud",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Huerto Comunitario",
    description: "Vecinos trabajando juntos en el cultivo de alimentos orgánicos.",
    category: "comunidad",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Taller de Música",
    description: "Jóvenes aprendiendo a tocar instrumentos musicales.",
    category: "talleres",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "Campamento de Verano",
    description: "Actividades recreativas y educativas durante las vacaciones escolares.",
    category: "eventos",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 7,
    title: "Formación de Líderes",
    description: "Capacitación para jóvenes líderes comunitarios.",
    category: "talleres",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 8,
    title: "Celebración Navideña",
    description: "Fiesta comunitaria con entrega de regalos para los niños.",
    category: "eventos",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 9,
    title: "Grupo de Apoyo Emocional",
    description: "Sesión grupal para el manejo de emociones y desarrollo personal.",
    category: "salud",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Galería</h1>
            <p className="mt-6 text-xl">Imágenes que reflejan nuestro trabajo y el impacto en la comunidad.</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="todos" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="todos">Todos</TabsTrigger>
                <TabsTrigger value="talleres">Talleres</TabsTrigger>
                <TabsTrigger value="eventos">Eventos</TabsTrigger>
                <TabsTrigger value="donaciones">Donaciones</TabsTrigger>
                <TabsTrigger value="comunidad">Comunidad</TabsTrigger>
                <TabsTrigger value="salud">Salud</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="todos" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.map((item) => (
                  <GalleryItem key={item.id} item={item} onClick={() => setSelectedImage(item)} />
                ))}
              </div>
            </TabsContent>

            {["talleres", "eventos", "donaciones", "comunidad", "salud"].map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryItems
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <GalleryItem key={item.id} item={item} onClick={() => setSelectedImage(item)} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 rounded-full bg-black/20 p-1 text-white hover:bg-black/40"
          >
            <X className="h-5 w-5" />
          </button>
          {selectedImage && (
            <div className="bg-white p-4 rounded-lg">
              <div className="relative h-[60vh] w-full">
                <Image
                  src={selectedImage.image || "/placeholder.svg"}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                <p className="text-gray-600 mt-2">{selectedImage.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Video Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Videos</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Conoce más sobre nuestro trabajo a través de estos videos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-0">
                <div className="relative pt-[56.25%]">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-t-lg">
                    <p className="text-gray-500">Video: Testimonio de beneficiarios</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Testimonios de Beneficiarios</h3>
                  <p className="text-gray-600">
                    Familias que han participado en nuestros programas comparten sus experiencias y cómo ha mejorado su
                    calidad de vida.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="relative pt-[56.25%]">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-t-lg">
                    <p className="text-gray-500">Video: Resumen de actividades anuales</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Resumen Anual de Actividades</h3>
                  <p className="text-gray-600">
                    Un recorrido por los principales logros y actividades realizadas durante el último año.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

interface GalleryItemProps {
  item: (typeof galleryItems)[0]
  onClick: () => void
}

function GalleryItem({ item, onClick }: GalleryItemProps) {
  return (
    <Card className="overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]" onClick={onClick}>
      <CardContent className="p-0">
        <div className="relative h-64 w-full">
          <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
        </div>
        <div className="p-4">
          <h3 className="font-bold">{item.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{item.description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
