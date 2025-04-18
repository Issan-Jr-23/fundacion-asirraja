import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Gift, CreditCard, Calendar, Users, Briefcase } from "lucide-react"

export default function DonatePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Involúcrate / Donar</h1>
            <p className="mt-6 text-xl">
              Sé parte de nuestra misión. Tu apoyo nos ayuda a proporcionar esperanza, recursos y amor a los niños y
              familias que más lo necesitan.
            </p>
            <p className="mt-4 text-xl font-semibold">Juntos, podemos cambiar vidas.</p>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Opciones de Donación</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Hay muchas formas de apoyar nuestra labor. Elige la que mejor se adapte a ti.
            </p>
          </div>

          <Tabs defaultValue="monetaria" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="monetaria">Donación Monetaria</TabsTrigger>
                <TabsTrigger value="especie">Donación en Especie</TabsTrigger>
                <TabsTrigger value="voluntariado">Voluntariado</TabsTrigger>
              </TabsList>
            </div>

            {/* Monetary Donation */}
            <TabsContent value="monetaria" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Donación Monetaria</h3>
                  <p className="text-gray-600 mb-6">
                    Tu aporte económico nos permite financiar nuestros programas y llegar a más personas que lo
                    necesitan. Puedes realizar una donación única o convertirte en donante recurrente.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mr-4 mt-1">
                        <CreditCard className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Donación única</h4>
                        <p className="text-gray-600">
                          Realiza un aporte puntual del monto que desees para apoyar nuestros programas.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mr-4 mt-1">
                        <Calendar className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Donación recurrente</h4>
                        <p className="text-gray-600">
                          Conviértete en donante mensual y ayúdanos a planificar nuestras actividades a largo plazo.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <h4 className="font-bold text-gray-900">Elige el monto de tu donación</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <Button variant="outline" className="h-16">
                        $10
                      </Button>
                      <Button variant="outline" className="h-16">
                        $25
                      </Button>
                      <Button variant="outline" className="h-16">
                        $50
                      </Button>
                      <Button variant="outline" className="h-16">
                        $100
                      </Button>
                      <Button variant="outline" className="h-16">
                        $200
                      </Button>
                      <Button variant="outline" className="h-16">
                        Otro monto
                      </Button>
                    </div>
                    <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700">Donar ahora</Button>
                  </div>
                </div>

                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Niños beneficiados por donaciones"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            {/* In-kind Donation */}
            <TabsContent value="especie" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Donación en Especie</h3>
                  <p className="text-gray-600 mb-6">
                    Puedes donar alimentos, ropa, útiles escolares, juguetes, medicamentos y otros artículos que son de
                    gran ayuda para las familias que apoyamos.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1">
                        <Gift className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">¿Qué puedes donar?</h4>
                        <ul className="text-gray-600 space-y-1 mt-2">
                          <li>• Alimentos no perecederos</li>
                          <li>• Ropa y calzado en buen estado</li>
                          <li>• Útiles escolares</li>
                          <li>• Juguetes</li>
                          <li>• Libros y material educativo</li>
                          <li>• Medicamentos (no vencidos)</li>
                          <li>• Mobiliario y equipos</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1">
                        <Calendar className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">¿Dónde y cuándo entregar?</h4>
                        <p className="text-gray-600 mt-2">
                          Puedes entregar tus donaciones en nuestra sede principal de lunes a viernes de 9:00 AM a 5:00
                          PM, o coordinar con nosotros para recogerlas si son de gran volumen.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button asChild className="mt-8">
                    <Link href="/contacto">Contactar para coordinar</Link>
                  </Button>
                </div>

                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Donaciones en especie"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Volunteering */}
            <TabsContent value="voluntariado" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Voluntariado</h3>
                  <p className="text-gray-600 mb-6">
                    Tu tiempo y habilidades son valiosos. Únete a nuestro equipo de voluntarios y contribuye
                    directamente con nuestros programas y actividades.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                        <Users className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Áreas de voluntariado</h4>
                        <ul className="text-gray-600 space-y-1 mt-2">
                          <li>• Apoyo educativo (refuerzo escolar, talleres)</li>
                          <li>• Actividades recreativas y culturales</li>
                          <li>• Apoyo logístico en eventos</li>
                          <li>• Comunicación y redes sociales</li>
                          <li>• Apoyo administrativo</li>
                          <li>• Profesionales (psicólogos, médicos, abogados, etc.)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                        <Briefcase className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Requisitos</h4>
                        <ul className="text-gray-600 space-y-1 mt-2">
                          <li>• Ser mayor de 18 años</li>
                          <li>• Disponibilidad de al menos 4 horas semanales</li>
                          <li>• Compromiso y responsabilidad</li>
                          <li>• Participar en la capacitación inicial</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Button asChild className="mt-8">
                    <Link href="/voluntariado">Postularme como voluntario</Link>
                  </Button>
                </div>

                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Voluntarios en acción"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">El impacto de tu ayuda</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Conoce cómo tu apoyo transforma vidas y comunidades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">$25</h3>
                <p className="text-gray-600">Proporciona materiales educativos para un niño durante un mes.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">$50</h3>
                <p className="text-gray-600">Cubre una sesión de apoyo psicológico para una familia.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">$100</h3>
                <p className="text-gray-600">Financia un taller de formación para 10 jóvenes.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Cada donación, sin importar su monto, contribuye a nuestra misión de transformar vidas y construir un
              futuro mejor para niños, jóvenes y familias en situación de vulnerabilidad.
            </p>
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link href="#donar">Donar ahora</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Corporate Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Alianzas Corporativas</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Invitamos a empresas a unirse a nuestra causa a través de diferentes modalidades de colaboración.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Patrocinio de Programas</h3>
                <p className="text-gray-600 mb-4">
                  Las empresas pueden financiar programas específicos alineados con sus valores y objetivos de
                  responsabilidad social.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Programa educativo</li>
                  <li>• Talleres de formación</li>
                  <li>• Campañas de salud</li>
                  <li>• Eventos comunitarios</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Donaciones en Especie</h3>
                <p className="text-gray-600 mb-4">
                  Las empresas pueden donar productos, servicios o equipos que contribuyan al desarrollo de nuestros
                  programas.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Equipos tecnológicos</li>
                  <li>• Mobiliario</li>
                  <li>• Materiales educativos</li>
                  <li>• Servicios profesionales</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Voluntariado Corporativo</h3>
                <p className="text-gray-600 mb-4">
                  Los colaboradores de la empresa pueden participar en actividades de voluntariado, aportando su tiempo
                  y habilidades.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Jornadas de voluntariado</li>
                  <li>• Mentorías</li>
                  <li>• Talleres especializados</li>
                  <li>• Apoyo en eventos</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/contacto">Contactar para alianzas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Testimonios de Donantes</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Conoce las experiencias de quienes ya apoyan nuestra causa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Foto de Laura Martínez"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-gray-600 italic mb-4">
                      "Donar a Fundación Asirraja ha sido una de las mejores decisiones que he tomado. Me siento parte
                      de algo más grande y puedo ver cómo mi aporte ayuda a transformar vidas."
                    </p>
                    <p className="font-bold">Laura Martínez</p>
                    <p className="text-sm text-gray-500">Donante mensual desde 2019</p>
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
                      alt="Foto de Empresa XYZ"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-gray-600 italic mb-4">
                      "Como empresa, buscábamos una forma de retribuir a la comunidad. La transparencia y el impacto
                      real de Fundación Asirraja nos convenció de que era el aliado perfecto."
                    </p>
                    <p className="font-bold">Carlos Ramírez</p>
                    <p className="text-sm text-gray-500">Director de RSE, Empresa XYZ</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Preguntas Frecuentes</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Respuestas a las dudas más comunes sobre donaciones y ayuda.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-900 mb-2">¿Las donaciones son deducibles de impuestos?</h3>
              <p className="text-gray-600">
                Sí, todas las donaciones realizadas a Fundación Asirraja son deducibles de impuestos. Te
                proporcionaremos un recibo oficial que podrás utilizar para tu declaración fiscal.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                ¿Cómo puedo saber en qué se utilizan mis donaciones?
              </h3>
              <p className="text-gray-600">
                Publicamos informes anuales detallando el uso de los fondos y el impacto generado. Además, enviamos
                actualizaciones periódicas a nuestros donantes sobre los proyectos que están apoyando.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                ¿Puedo elegir a qué programa destinar mi donación?
              </h3>
              <p className="text-gray-600">
                Sí, puedes especificar si deseas que tu donación se destine a un programa específico (educación, salud,
                desarrollo comunitario, etc.) o dejarla como donación general para que se utilice donde más se necesite.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-900 mb-2">¿Cómo puedo cancelar mi donación recurrente?</h3>
              <p className="text-gray-600">
                Puedes cancelar tu donación recurrente en cualquier momento contactándonos por teléfono o correo
                electrónico. No hay compromisos de permanencia ni penalizaciones por cancelación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="donar" className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Únete a nuestra causa hoy</h2>
            <p className="mt-4 text-lg opacity-90">
              Tu apoyo es fundamental para seguir transformando vidas. Cada donación cuenta, sin importar su tamaño.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                <Link href="#donar">Donar ahora</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600"
              >
                <Link href="/contacto">Contactar para más información</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
