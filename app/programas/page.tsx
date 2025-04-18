import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Heart, Users, Calendar, Gift, Music } from "lucide-react"

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Programas y Proyectos</h1>
            <p className="mt-6 text-xl">
              Conoce nuestras iniciativas y cómo trabajamos para generar un impacto positivo en la comunidad.
            </p>
          </div>
        </div>
      </section>

      {/* Education Programs */}
      <section id="educacion" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-orange-100 mb-4">
              <BookOpen className="h-6 w-6 text-orange-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Educación para Todos</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Útiles escolares, tutoría y apoyo académico para niños.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]">
              <Link href="/programas/educacion" className="block">
                <CardContent className="p-0">
                  <div className="relative h-60 w-full">
                    <Image
                      src="/placeholder.svg?height=240&width=500"
                      alt="Apoyo Educativo"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Apoyo Educativo</h3>
                    <p className="text-gray-600 mb-4">Útiles escolares, tutoría y apoyo académico para niños.</p>
                  </div>
                </CardContent>
              </Link>
            </Card>

            <Card className="overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]">
              <Link href="/programas/alimentacion" className="block">
                <CardContent className="p-0">
                  <div className="relative h-60 w-full">
                    <Image
                      src="/placeholder.svg?height=240&width=500"
                      alt="Asistencia Alimentaria Familiar"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Asistencia Alimentaria Familiar</h3>
                    <p className="text-gray-600 mb-4">
                      Distribución de paquetes de alimentos y apoyo nutricional para familias completas.
                    </p>
                  </div>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Psychosocial Support */}
      <section id="apoyo" className="py-16 bg-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
              <Heart className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Alegría a través de Juguetes</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Compartiendo sonrisas con donaciones de juguetes y eventos recreativos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]">
              <Link href="/programas/juguetes" className="block">
                <CardContent className="p-0">
                  <div className="relative h-60 w-full">
                    <Image
                      src="/placeholder.svg?height=240&width=500"
                      alt="Alegría a través de Juguetes"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Alegría a través de Juguetes</h3>
                    <p className="text-gray-600 mb-4">
                      Compartiendo sonrisas con donaciones de juguetes y eventos recreativos.
                    </p>
                  </div>
                </CardContent>
              </Link>
            </Card>

            <Card className="overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]">
              <Link href="/programas/salud" className="block">
                <CardContent className="p-0">
                  <div className="relative h-60 w-full">
                    <Image
                      src="/placeholder.svg?height=240&width=500"
                      alt="Salud y Bienestar"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Salud y Bienestar</h3>
                    <p className="text-gray-600 mb-4">
                      Promoviendo la salud física y emocional para niños y sus familias.
                    </p>
                  </div>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Development */}
      <section id="comunidad" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Conciencia Cultural</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Apoyando y elevando la cultura y tradiciones Wayúu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]">
              <Link href="/programas/cultura" className="block">
                <CardContent className="p-0">
                  <div className="relative h-60 w-full">
                    <Image
                      src="/placeholder.svg?height=240&width=500"
                      alt="Conciencia Cultural"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Conciencia Cultural</h3>
                    <p className="text-gray-600 mb-4">
                      Apoyando y elevando la cultura y tradiciones Wayúu a través de programas educativos, eventos
                      culturales y participación comunitaria.
                    </p>
                    <ul className="text-gray-600 mb-4 space-y-1">
                      <li>• Talleres culturales y exposiciones</li>
                      <li>• Preservación de artesanías y arte tradicional</li>
                      <li>• Iniciativas de preservación del idioma</li>
                      <li>• Transferencia de conocimiento intergeneracional</li>
                    </ul>
                  </div>
                </CardContent>
              </Link>
            </Card>

            <Card className="overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]">
              <Link href="/programas/comunidad" className="block">
                <CardContent className="p-0">
                  <div className="relative h-60 w-full">
                    <Image
                      src="/placeholder.svg?height=240&width=500"
                      alt="Desarrollo Comunitario"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Desarrollo Comunitario</h3>
                    <p className="text-gray-600 mb-4">
                      Construyendo comunidades más fuertes a través de proyectos colaborativos e iniciativas de
                      desarrollo sostenible.
                    </p>
                    <ul className="text-gray-600 mb-4 space-y-1">
                      <li>• Formación de líderes comunitarios</li>
                      <li>• Gestión sostenible de recursos</li>
                      <li>• Proyectos de mejora de infraestructura</li>
                      <li>• Espacios de reunión comunitaria</li>
                    </ul>
                  </div>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Otros Programas</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Iniciativas complementarias que enriquecen nuestra labor social.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Campamentos Vacacionales</h3>
                <p className="text-gray-600 mb-4">
                  Actividades recreativas, deportivas y educativas durante los periodos de vacaciones escolares.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-pink-100 flex items-center justify-center mb-4">
                  <Gift className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Donaciones y Ayuda Humanitaria</h3>
                <p className="text-gray-600 mb-4">
                  Entrega de alimentos, ropa, útiles escolares y otros artículos de primera necesidad a familias en
                  situación de vulnerabilidad.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-yellow-100 flex items-center justify-center mb-4">
                  <Music className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Arte y Cultura</h3>
                <p className="text-gray-600 mb-4">
                  Talleres de música, danza, teatro y otras expresiones artísticas que promueven el desarrollo integral
                  y la identidad cultural.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">¿Quieres apoyar nuestros programas?</h2>
            <p className="mt-4 text-lg opacity-90">
              Tu contribución nos permite seguir desarrollando estos programas y llegar a más personas que lo necesitan.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600"
              >
                <Link href="/donar">Donar ahora</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                <Link href="/voluntariado">Ser voluntario</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
