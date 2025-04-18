import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, BookOpen, Calendar } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Niños sonriendo en un programa comunitario"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Llevando esperanza a niños y familias
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-white">
            En Fundación Asirraja, estamos comprometidos con apoyar a niños y familias Wayúu y no Wayúu en situaciones
            vulnerables. Nos enfocamos en educación, nutrición, bienestar emocional y salud—siempre guiados por la
            compasión y la solidaridad.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link href="/donar">Donar ahora</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white hover:bg-white/20"
            >
              <Link href="/programas">Conoce nuestros programas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Nuestra Misión</h2>
            <p className="mt-4 text-lg text-gray-600">
              Proporcionar oportunidades de desarrollo a través de programas de formación, apoyo psicológico, donaciones
              y actividades culturales para mejorar la calidad de vida de las comunidades más vulnerables.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Nuestros Programas</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Conoce las diferentes iniciativas que llevamos a cabo para apoyar a nuestra comunidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Educación para Todos</h3>
                <p className="text-gray-600 mb-4">Útiles escolares, tutoría y apoyo académico para niños.</p>
                <Link href="/programas#educacion" className="text-orange-600 hover:text-orange-700 font-medium">
                  Saber más →
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Asistencia Alimentaria Familiar</h3>
                <p className="text-gray-600 mb-4">
                  Distribución de paquetes de alimentos y apoyo nutricional para familias completas.
                </p>
                <Link href="/programas#apoyo" className="text-green-600 hover:text-green-700 font-medium">
                  Saber más →
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Conciencia Cultural</h3>
                <p className="text-gray-600 mb-4">Apoyando y elevando la cultura y tradiciones Wayúu.</p>
                <Link href="/programas#comunidad" className="text-blue-600 hover:text-blue-700 font-medium">
                  Saber más →
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/programas">Ver todos los programas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">Nuestro Impacto</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg opacity-90">
              Cifras que reflejan nuestro compromiso con la comunidad.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold">+500</p>
              <p className="mt-2 text-lg opacity-90">Niños beneficiados</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">+200</p>
              <p className="mt-2 text-lg opacity-90">Familias apoyadas</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">+50</p>
              <p className="mt-2 text-lg opacity-90">Voluntarios activos</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">+20</p>
              <p className="mt-2 text-lg opacity-90">Proyectos realizados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Próximos Eventos</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Participa en nuestras actividades y forma parte del cambio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 text-orange-600 p-3 rounded-lg text-center min-w-[60px]">
                    <span className="block text-xl font-bold">15</span>
                    <span className="text-sm">Mayo</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Taller de Arte para Niños</h3>
                    <p className="text-gray-600 mb-2">
                      Un espacio creativo donde los niños pueden expresarse a través del arte.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>15 de Mayo, 2023 - 10:00 AM</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 text-green-600 p-3 rounded-lg text-center min-w-[60px]">
                    <span className="block text-xl font-bold">22</span>
                    <span className="text-sm">Mayo</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Jornada de Salud Comunitaria</h3>
                    <p className="text-gray-600 mb-2">Atención médica gratuita para familias de la comunidad.</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>22 de Mayo, 2023 - 9:00 AM</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/noticias">Ver todos los eventos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Únete a nuestra causa</h2>
            <p className="mt-4 text-lg opacity-90">
              Tu apoyo es fundamental para seguir transformando vidas. Juntos podemos hacer la diferencia.
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
