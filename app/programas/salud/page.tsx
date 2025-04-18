import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ArrowLeft, Calendar, Users } from "lucide-react"

export default function SaludPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
              <Heart className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Salud y Bienestar</h1>
            <p className="mt-6 text-xl">
              Promoviendo la salud física y emocional de niños, jóvenes y familias a través de atención médica,
              prevención y educación en salud.
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
                  El programa "Salud y Bienestar" de la Fundación Asirraja busca mejorar las condiciones de salud de las
                  comunidades vulnerables, con especial atención a niños, mujeres embarazadas y adultos mayores.
                  Entendemos que la salud es un derecho fundamental y una condición necesaria para el desarrollo pleno
                  de las personas y comunidades.
                </p>

                <div className="relative h-80 w-full my-8 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Jornada de salud comunitaria"
                    fill
                    className="object-cover"
                  />
                </div>

                <h3>Componentes del Programa</h3>
                <ul>
                  <li>
                    <strong>Jornadas de salud:</strong> Organizamos jornadas médicas periódicas en las comunidades,
                    ofreciendo consultas generales, odontología, oftalmología y otros servicios especializados.
                  </li>
                  <li>
                    <strong>Atención materno-infantil:</strong> Brindamos seguimiento a mujeres embarazadas y niños
                    menores de 5 años, con controles de crecimiento, vacunación y suplementación nutricional.
                  </li>
                  <li>
                    <strong>Salud mental:</strong> Ofrecemos apoyo psicológico individual y grupal, así como talleres
                    para el manejo del estrés, prevención de violencia y desarrollo de habilidades socioemocionales.
                  </li>
                  <li>
                    <strong>Educación en salud:</strong> Realizamos charlas y talleres sobre higiene, prevención de
                    enfermedades, salud sexual y reproductiva, y hábitos saludables.
                  </li>
                  <li>
                    <strong>Gestión de medicamentos:</strong> Facilitamos el acceso a medicamentos esenciales para
                    personas con enfermedades crónicas y casos especiales.
                  </li>
                </ul>

                <h3>Impacto</h3>
                <p>
                  A través de este programa, hemos realizado más de 30 jornadas de salud, beneficiando a más de 1,500
                  personas con atención médica directa. Hemos logrado reducir la incidencia de enfermedades prevenibles
                  en las comunidades donde trabajamos y mejorado el acceso a servicios de salud para poblaciones
                  tradicionalmente excluidas.
                </p>

                <div className="relative h-80 w-full my-8 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Taller de salud preventiva"
                    fill
                    className="object-cover"
                  />
                </div>

                <h3>Testimonios</h3>
                <blockquote className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 my-6">
                  <p className="italic">
                    "Gracias a las jornadas de salud de la fundación, pude detectar a tiempo un problema en mi vista que
                    no sabía que tenía. Me proporcionaron los lentes que necesitaba y ahora puedo seguir estudiando sin
                    dificultad. Estoy muy agradecido por esta ayuda que ha cambiado mi vida."
                  </p>
                  <footer className="mt-2 font-bold">— Pedro, 14 años, beneficiario del programa</footer>
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
                        <span>Donando medicamentos e insumos médicos para nuestras jornadas de salud.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-blue-600 text-sm font-bold">2</span>
                        </div>
                        <span>Apadrinando el tratamiento médico de un niño o adulto mayor.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-blue-600 text-sm font-bold">3</span>
                        </div>
                        <span>Siendo voluntario profesional de la salud en nuestras jornadas médicas y talleres.</span>
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
                          <span className="block text-lg font-bold">22</span>
                          <span className="text-xs">Jun</span>
                        </div>
                        <div>
                          <h4 className="font-bold">Jornada de salud general</h4>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>Centro Comunitario, 8:00 AM</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-100 text-blue-600 p-2 rounded-lg text-center min-w-[50px]">
                          <span className="block text-lg font-bold">29</span>
                          <span className="text-xs">Jun</span>
                        </div>
                        <div>
                          <h4 className="font-bold">Taller de salud mental</h4>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>Biblioteca Comunitaria, 2:00 PM</span>
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
                          <span>Personas atendidas</span>
                        </div>
                        <span className="font-bold">+1,500</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Heart className="h-5 w-5 text-blue-600 mr-2" />
                          <span>Jornadas realizadas</span>
                        </div>
                        <span className="font-bold">+30</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                          <span>Talleres de salud</span>
                        </div>
                        <span className="font-bold">+45</span>
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
            <h2 className="text-3xl font-bold sm:text-4xl">Apoya nuestro programa de salud</h2>
            <p className="mt-4 text-lg opacity-90">
              Tu contribución puede mejorar la calidad de vida de muchas personas. Cada donación nos acerca más a
              comunidades más saludables y con mejor acceso a servicios médicos.
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
