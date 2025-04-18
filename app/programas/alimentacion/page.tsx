import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ArrowLeft, Calendar, Users } from "lucide-react"

export default function AlimentacionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
              <Heart className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Asistencia Alimentaria Familiar</h1>
            <p className="mt-6 text-xl">
              Proporcionando alimentos y apoyo nutricional a familias en situación de vulnerabilidad para garantizar su
              seguridad alimentaria.
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
                  El programa de "Asistencia Alimentaria Familiar" de la Fundación Asirraja busca combatir la
                  inseguridad alimentaria en comunidades vulnerables, con especial atención a familias con niños
                  pequeños, mujeres embarazadas y adultos mayores. Entendemos que una nutrición adecuada es fundamental
                  para el desarrollo físico y cognitivo, así como para mantener una buena salud.
                </p>

                <div className="relative h-80 w-full my-8 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Entrega de alimentos a familias"
                    fill
                    className="object-cover"
                  />
                </div>

                <h3>Componentes del Programa</h3>
                <ul>
                  <li>
                    <strong>Distribución de paquetes alimentarios:</strong> Entregamos periódicamente paquetes con
                    alimentos básicos no perecederos a familias identificadas en situación de vulnerabilidad.
                  </li>
                  <li>
                    <strong>Comedores comunitarios:</strong> Operamos comedores en zonas de alta vulnerabilidad donde se
                    ofrecen comidas nutritivas, especialmente para niños y adultos mayores.
                  </li>
                  <li>
                    <strong>Huertos familiares y comunitarios:</strong> Promovemos la creación de huertos para el
                    autoconsumo, proporcionando semillas, herramientas y capacitación.
                  </li>
                  <li>
                    <strong>Educación nutricional:</strong> Realizamos talleres sobre alimentación saludable,
                    preparación de alimentos y aprovechamiento de recursos locales.
                  </li>
                  <li>
                    <strong>Atención a casos especiales:</strong> Proporcionamos suplementos nutricionales para casos de
                    desnutrición infantil y dietas especiales para personas con condiciones médicas específicas.
                  </li>
                </ul>

                <h3>Impacto</h3>
                <p>
                  A través de este programa, hemos logrado beneficiar a más de 200 familias de manera regular, mejorando
                  sus condiciones nutricionales y reduciendo los casos de desnutrición infantil en las comunidades donde
                  trabajamos. Los huertos comunitarios han permitido a muchas familias complementar su alimentación y,
                  en algunos casos, generar ingresos adicionales.
                </p>

                <div className="relative h-80 w-full my-8 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Huerto comunitario"
                    fill
                    className="object-cover"
                  />
                </div>

                <h3>Testimonios</h3>
                <blockquote className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 my-6">
                  <p className="italic">
                    "El apoyo alimentario que recibimos ha sido fundamental para mi familia. Como madre soltera con tres
                    hijos, a veces era difícil poner comida en la mesa todos los días. Ahora, con la ayuda de la
                    fundación y lo que producimos en nuestro pequeño huerto, mis hijos tienen una alimentación más
                    completa y saludable."
                  </p>
                  <footer className="mt-2 font-bold">— Carmen, 34 años, beneficiaria del programa</footer>
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
                        <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-green-600 text-sm font-bold">1</span>
                        </div>
                        <span>Donando alimentos no perecederos para nuestros paquetes alimentarios.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-green-600 text-sm font-bold">2</span>
                        </div>
                        <span>Apadrinando a una familia para garantizar su seguridad alimentaria mensual.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-green-600 text-sm font-bold">3</span>
                        </div>
                        <span>Siendo voluntario en nuestros comedores comunitarios o talleres nutricionales.</span>
                      </li>
                    </ul>
                    <Button asChild className="w-full mt-6 bg-green-600 hover:bg-green-700">
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
                        <div className="bg-green-100 text-green-600 p-2 rounded-lg text-center min-w-[50px]">
                          <span className="block text-lg font-bold">18</span>
                          <span className="text-xs">Jun</span>
                        </div>
                        <div>
                          <h4 className="font-bold">Entrega de paquetes alimentarios</h4>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>Centro Comunitario, 9:00 AM</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 text-green-600 p-2 rounded-lg text-center min-w-[50px]">
                          <span className="block text-lg font-bold">25</span>
                          <span className="text-xs">Jun</span>
                        </div>
                        <div>
                          <h4 className="font-bold">Taller de nutrición infantil</h4>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>Comedor Comunitario, 2:00 PM</span>
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
                          <Users className="h-5 w-5 text-green-600 mr-2" />
                          <span>Familias beneficiadas</span>
                        </div>
                        <span className="font-bold">+200</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Heart className="h-5 w-5 text-green-600 mr-2" />
                          <span>Paquetes entregados</span>
                        </div>
                        <span className="font-bold">+1,500</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-green-600 mr-2" />
                          <span>Huertos establecidos</span>
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
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Apoya nuestro programa alimentario</h2>
            <p className="mt-4 text-lg opacity-90">
              Tu contribución puede asegurar que una familia tenga alimentos en su mesa. Cada donación nos acerca más a
              un futuro donde nadie pase hambre en nuestra comunidad.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600"
              >
                <Link href="/donar">Donar ahora</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Link href="/voluntariado">Ser voluntario</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
