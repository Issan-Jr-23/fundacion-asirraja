import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, User } from "lucide-react"

// Sample news data
const newsItems = [
  {
    id: 1,
    title: "Inauguración de nuevo centro comunitario",
    excerpt: "Hemos inaugurado un nuevo espacio para el desarrollo de nuestros programas y actividades comunitarias.",
    date: "15 de Mayo, 2023",
    author: "Equipo Fundación Asirraja",
    readTime: "5 min",
    image: "/placeholder.svg?height=400&width=600",
    slug: "inauguracion-centro-comunitario",
  },
  {
    id: 2,
    title: "Campaña de recolección de útiles escolares",
    excerpt: "Iniciamos nuestra campaña anual para recolectar materiales educativos para niños de escasos recursos.",
    date: "3 de Abril, 2023",
    author: "María González",
    readTime: "3 min",
    image: "/placeholder.svg?height=400&width=600",
    slug: "campana-utiles-escolares",
  },
  {
    id: 3,
    title: "Taller de emprendimiento para jóvenes",
    excerpt: "Jóvenes de nuestra comunidad participaron en un taller sobre emprendimiento y desarrollo de negocios.",
    date: "20 de Marzo, 2023",
    author: "Carlos Rodríguez",
    readTime: "4 min",
    image: "/placeholder.svg?height=400&width=600",
    slug: "taller-emprendimiento-jovenes",
  },
  {
    id: 4,
    title: "Jornada de salud comunitaria",
    excerpt: "Realizamos una jornada de atención médica gratuita para familias de escasos recursos.",
    date: "5 de Marzo, 2023",
    author: "Ana Martínez",
    readTime: "6 min",
    image: "/placeholder.svg?height=400&width=600",
    slug: "jornada-salud-comunitaria",
  },
  {
    id: 5,
    title: "Convenio con universidad local",
    excerpt:
      "Firmamos un convenio de colaboración con la Universidad Nacional para el desarrollo de proyectos sociales.",
    date: "15 de Febrero, 2023",
    author: "Equipo Fundación Asirraja",
    readTime: "3 min",
    image: "/placeholder.svg?height=400&width=600",
    slug: "convenio-universidad-local",
  },
  {
    id: 6,
    title: "Celebración del Día del Niño",
    excerpt: "Organizamos una jornada de actividades recreativas y educativas para celebrar el Día del Niño.",
    date: "28 de Enero, 2023",
    author: "María González",
    readTime: "5 min",
    image: "/placeholder.svg?height=400&width=600",
    slug: "celebracion-dia-nino",
  },
]

// Sample events data
const eventsItems = [
  {
    id: 1,
    title: "Taller de Arte para Niños",
    description: "Un espacio creativo donde los niños pueden expresarse a través del arte.",
    date: "15 de Mayo, 2023",
    time: "10:00 AM - 12:00 PM",
    location: "Centro Comunitario Asirraja",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Jornada de Salud Comunitaria",
    description: "Atención médica gratuita para familias de la comunidad.",
    date: "22 de Mayo, 2023",
    time: "9:00 AM - 3:00 PM",
    location: "Plaza Central",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Charla sobre Nutrición Saludable",
    description: "Aprende sobre alimentación balanceada y económica para toda la familia.",
    date: "5 de Junio, 2023",
    time: "5:00 PM - 7:00 PM",
    location: "Centro Comunitario Asirraja",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Noticias y Eventos</h1>
            <p className="mt-6 text-xl">Mantente informado sobre nuestras actividades, logros y próximos eventos.</p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Últimas Noticias</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Conoce las novedades y logros de nuestra fundación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48 w-full">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{item.date}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{item.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <User className="h-4 w-4 mr-1" />
                      <span>{item.author}</span>
                    </div>
                    <Link href={`/noticias/${item.slug}`} className="text-orange-600 hover:text-orange-700 font-medium">
                      Leer más →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/noticias/archivo">Ver todas las noticias</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Próximos Eventos</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Participa en nuestras actividades y forma parte del cambio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsItems.map((event) => (
              <Card key={event.id}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 text-orange-600 p-3 rounded-lg text-center min-w-[60px]">
                      <span className="block text-xl font-bold">{event.date.split(" ")[0]}</span>
                      <span className="text-sm">{event.date.split(" ")[2]}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-2">{event.description}</p>
                      <div className="flex items-center text-sm text-gray-500 mb-1">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/noticias/calendario">Ver calendario completo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Testimonios</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Historias de personas que han sido parte de nuestros programas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Foto de Ana Pérez"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-gray-600 italic mb-4">
                      "Los talleres de formación me han permitido desarrollar habilidades que nunca pensé que tendría.
                      Ahora tengo mi propio emprendimiento y puedo mantener a mi familia."
                    </p>
                    <p className="font-bold">Ana Pérez</p>
                    <p className="text-sm text-gray-500">Participante del programa de emprendimiento</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Foto de Juan Gómez"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-gray-600 italic mb-4">
                      "El apoyo psicológico que recibimos como familia fue fundamental para superar momentos difíciles.
                      Estamos muy agradecidos con la fundación por su acompañamiento."
                    </p>
                    <p className="font-bold">Juan Gómez</p>
                    <p className="text-sm text-gray-500">Beneficiario del programa de apoyo psicosocial</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Suscríbete a nuestro boletín</h2>
            <p className="mt-4 text-lg opacity-90">
              Recibe noticias, eventos y actualizaciones directamente en tu correo electrónico.
            </p>
            <form className="mt-8 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-900 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
              <Button type="submit" className="bg-white text-primary hover:bg-gray-100">
                Suscribirse
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
