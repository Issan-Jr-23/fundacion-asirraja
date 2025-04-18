import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, ArrowLeft, Calendar, Home } from "lucide-react"

export default function ComunidadPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Desarrollo Comunitario</h1>
            <p className="mt-6 text-xl">
              Fortaleciendo comunidades a través de proyectos participativos, liderazgo local y desarrollo sostenible.
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
                  El programa de "Desarrollo Comunitario" de la Fundación Asirraja busca fortalecer las capacidades
                  locales y promover el desarrollo sostenible en las comunidades donde trabajamos. Creemos en el poder
                  de la acción colectiva y en la importancia de que las comunidades sean protagonistas de su propio
                  desarrollo, por lo que nuestro enfoque se basa en la participación, el empoderamiento y el
                  fortalecimiento del tejido social.
                </p>

                <div className="relative h-80 w-full my-8 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Reunión comunitaria"
                    fill
                    className="object-cover"
                  />
                </div>

                <h3>Componentes del Programa</h3>
                <ul>
                  <li>
                    <strong>Formación de líderes comunitarios:</strong> Capacitamos a líderes locales en temas como
                    gestión de proyectos, resolución de conflictos, incidencia política y desarrollo organizacional.
                  </li>
                  <li>
                    <strong>Mejora de infraestructura comunitaria:</strong> Apoyamos la construcción y rehabilitación de
                    espacios comunitarios como centros de reunión, parques, canchas deportivas y áreas recreativas.
                  </li>
                  <li>
                    <strong>Gestión sostenible de recursos:</strong> Promovemos prácticas de manejo sostenible del agua,
                    la tierra y otros recursos naturales, así como iniciativas de energía renovable y gestión de
                    residuos.
                  </li>
                  <li>
                    <strong>Fortalecimiento organizativo:</strong> Acompañamos a organizaciones comunitarias en su
                    proceso de formalización, planificación estratégica y desarrollo de capacidades de gestión.
                  </li>
                  <li>
                    <strong>Proyectos productivos comunitarios:</strong> Apoyamos iniciativas económicas colectivas como
                    cooperativas, asociaciones de productores y emprendimientos sociales.
                  </li>
                </ul>

                <h3>Impacto</h3>
                <p>
                  A través de este programa, hemos formado a más de 100 líderes comunitarios, apoyado la creación o
                  fortalecimiento de 15 organizaciones de base y ejecutado más de 20 proyectos de mejora de
                  infraestructura comunitaria. Hemos observado cómo las comunidades participantes han incrementado su
                  capacidad de autogestión, mejorado su cohesión social y desarrollado iniciativas propias para abordar
                  sus necesidades y aspiraciones.
                </p>

                <div className="relative h-80 w-full my-8 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Proyecto de infraestructura comunitaria"
                    fill
                    className="object-cover"
                  />
                </div>

                <h3>Testimonios</h3>
                <blockquote className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 my-6">
                  <p className="italic">
                    "La formación que recibí como líder comunitario me ha dado las herramientas para trabajar junto a mi
                    comunidad en la solución de nuestros problemas. Hemos logrado gestionar la construcción de nuestro
                    centro comunitario y ahora estamos desarrollando un proyecto de agua potable. Lo más importante es
                    que ahora sabemos que unidos podemos lograr grandes cambios."
                  </p>
                  <footer className="mt-2 font-bold">— Roberto, 38 años, líder comunitario</footer>
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
                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-blue-600 text-sm font-bold">1</span>
                        </div>
                        <span>Aportando recursos para proyectos de infraestructura comunitaria.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-blue-600 text-sm font-bold">2</span>
                        </div>
                        <span>Compartiendo tus conocimientos profesionales como mentor o capacitador.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-blue-600 text-sm font-bold">3</span>
                        </div>
                        <span>Siendo voluntario en jornadas comunitarias y proyectos de desarrollo local.</span>
                      </li>
                    </ul>
                    <Button asChild className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
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
                        <div className="bg-blue-100 text-blue-600 p-2 rounded-lg text-center min-w-[50px]">
                          <span className="block text-lg font-bold">28</span>
                          <span className="text-xs">Jun</span>
                        </div>
                        <div>
                          <h4 className="font-bold">Taller de liderazgo comunitario</h4>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>Centro Comunitario, 9:00 AM</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-100 text-blue-600 p-2 rounded-lg text-center min-w-[50px]">
                          <span className="block text-lg font-bold">5</span>
                          <span className="text-xs">Jul</span>
                        </div>
                        <div>
                          <h4 className="font-bold">Jornada de mejora del parque</h4>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>Parque Central, 8:00 AM</span>
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
                          <Users className="h-5 w-5 text-blue-600 mr-2" />
                          <span>Líderes formados</span>
                        </div>
                        <span className="font-bold">+100</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Home className="h-5 w-5 text-blue-600 mr-2" />
                          <span>Proyectos de infraestructura</span>
                        </div>
                        <span className="font-bold">+20</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                          <span>Organizaciones fortalecidas</span>
                        </div>
                        <span className="font-bold">+15</span>
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
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Apoya el desarrollo comunitario</h2>
            <p className="mt-4 text-lg opacity-90">
              Tu contribución puede fortalecer comunidades enteras. Cada aporte nos acerca más a un futuro donde las
              comunidades son protagonistas de su propio desarrollo sostenible.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Link href="/donar">Donar ahora</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/voluntariado">Ser voluntario</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
