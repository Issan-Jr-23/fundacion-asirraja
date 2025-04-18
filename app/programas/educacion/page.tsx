import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, ArrowLeft, Calendar, Users } from "lucide-react"

export default function EducacionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 mb-6">
              <BookOpen className="h-8 w-8 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Educación para Todos</h1>
            <p className="mt-6 text-xl">
              Brindando oportunidades educativas y apoyo académico a niños y jóvenes para construir un futuro mejor.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Link href="/programas" className="flex items-center text-sm text-gray-600 hover:text-primary">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Programas
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <h2>Sobre el Programa</h2>
                <p>
                  El programa "Educación para Todos" de la Fundación Asirraja está diseñado para proporcionar apoyo
                  educativo integral a niños y jóvenes de comunidades vulnerables, con especial atención a la población
                  Wayúu. Creemos firmemente que la educación es la herramienta más poderosa para romper el ciclo de la
                  pobreza y crear oportunidades de desarrollo personal y comunitario.
                </p>

                <div className="relative h-80 w-full my-8 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Niños recibiendo apoyo educativo"
                    fill
                    className="object-cover"
                  />
                </div>

                <h3>Componentes del Programa</h3>
                <ul>
                  <li>
                    <strong>Dotación de útiles escolares:</strong> Entregamos kits de útiles escolares al inicio del año
                    lectivo para asegurar que los niños cuenten con los materiales necesarios para su educación.
                  </li>
                  <li>
                    <strong>Refuerzo escolar:</strong> Ofrecemos sesiones de tutoría y apoyo académico para reforzar los
                    conocimientos adquiridos en la escuela y mejorar el rendimiento académico.
                  </li>
                  <li>
                    <strong>Becas educativas:</strong> Proporcionamos becas para estudiantes destacados que desean
                    continuar su educación secundaria y universitaria.
                  </li>
                  <li>
                    <strong>Bibliotecas comunitarias:</strong> Establecemos espacios de lectura y aprendizaje en las
                    comunidades para fomentar el hábito de la lectura y el acceso a información.
                  </li>
                  <li>
                    <strong>Talleres de formación:</strong> Desarrollamos talleres en habilidades prácticas, tecnología,
                    artes y oficios que complementan la educación formal.
                  </li>
                </ul>

                <h3>Impacto</h3>
                <p>
                  Desde el inicio del programa, hemos beneficiado a más de 500 niños y jóvenes, mejorando
                  significativamente sus tasas de permanencia escolar y rendimiento académico. Nuestros estudiantes
                  becados han logrado acceder a educación superior y muchos de ellos regresan a sus comunidades para
                  contribuir a su desarrollo.
                </p>

                <div className="relative h-80 w-full my-8 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Estudiantes en taller educativo"
                    fill
                    className="object-cover"
                  />
                </div>

                <h3>Testimonios</h3>
                <blockquote className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500 my-6">
                  <p className="italic">
                    "Gracias al programa de becas de la Fundación Asirraja, pude terminar mis estudios secundarios y
                    ahora estoy en la universidad estudiando para ser maestra. Mi sueño es regresar a mi comunidad y
                    enseñar a los niños."
                  </p>
                  <footer className="mt-2 font-bold">— María, 20 años, beneficiaria del programa</footer>
                </blockquote>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* How to Help */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">¿Cómo puedes ayudar?</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-orange-600 text-sm font-bold">1</span>
                        </div>
                        <span>Donando útiles escolares o libros para nuestras bibliotecas comunitarias.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-orange-600 text-sm font-bold">2</span>
                        </div>
                        <span>Apadrinando la educación de un niño a través de nuestro programa de becas.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-orange-600 text-sm font-bold">3</span>
                        </div>
                        <span>Siendo voluntario como tutor o facilitador en nuestros talleres educativos.</span>
                      </li>
                    </ul>
                    <Button asChild className="w-full mt-6">
                      <Link href="/donar">Apoyar este programa</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Upcoming Events */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Próximos Eventos</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-orange-100 text-orange-600 p-2 rounded-lg text-center min-w-[50px]">
                          <span className="block text-lg font-bold">15</span>
                          <span className="text-xs">Jun</span>
                        </div>
                        <div>
                          <h4 className="font-bold">Entrega de útiles escolares</h4>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>Centro Comunitario, 10:00 AM</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-orange-100 text-orange-600 p-2 rounded-lg text-center min-w-[50px]">
                          <span className="block text-lg font-bold">22</span>
                          <span className="text-xs">Jun</span>
                        </div>
                        <div>
                          <h4 className="font-bold">Taller de lectura creativa</h4>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>Biblioteca Comunitaria, 3:00 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button asChild variant="outline" className="w-full mt-4">
                      <Link href="/noticias">Ver todos los eventos</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Stats */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Nuestro Impacto</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Users className="h-5 w-5 text-orange-600 mr-2" />
                          <span>Niños beneficiados</span>
                        </div>
                        <span className="font-bold">+500</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <BookOpen className="h-5 w-5 text-orange-600 mr-2" />
                          <span>Kits escolares entregados</span>
                        </div>
                        <span className="font-bold">+1,200</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-orange-600 mr-2" />
                          <span>Talleres realizados</span>
                        </div>
                        <span className="font-bold">+80</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Apoya nuestro programa educativo</h2>
            <p className="mt-4 text-lg opacity-90">
              Tu contribución puede cambiar la vida de un niño a través de la educación. Cada donación nos acerca más a
              un futuro donde todos los niños tengan acceso a una educación de calidad.
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
