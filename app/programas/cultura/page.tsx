import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Music, ArrowLeft, Calendar, Users } from "lucide-react"

export default function CulturaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 mb-6">
              <Music className="h-8 w-8 text-yellow-600" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Conciencia Cultural</h1>
            <p className="mt-6 text-xl">
              Preservando y promoviendo la rica cultura y tradiciones Wayúu para las generaciones actuales y futuras.
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
                  El programa "Conciencia Cultural" de la Fundación Asirraja está dedicado a preservar, promover y
                  celebrar la rica herencia cultural del pueblo Wayúu. Reconocemos que la cultura es un elemento
                  fundamental de la identidad y el bienestar de las comunidades, y trabajamos para asegurar que las
                  tradiciones, el idioma, las artesanías y los conocimientos ancestrales se mantengan vivos y sean
                  transmitidos a las nuevas generaciones.
                </p>

                <div className="relative h-80 w-full my-8 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Celebración cultural Wayúu"
                    fill
                    className="object-cover"
                  />
                </div>

                <h3>Componentes del Programa</h3>
                <ul>
                  <li>
                    <strong>Talleres culturales:</strong> Organizamos talleres de tejido tradicional, música, danza,
                    gastronomía y otras expresiones culturales Wayúu, dirigidos tanto a miembros de la comunidad como al
                    público general.
                  </li>
                  <li>
                    <strong>Preservación del idioma:</strong> Desarrollamos iniciativas para la enseñanza y
                    documentación del wayuunaiki, el idioma tradicional del pueblo Wayúu, a través de clases, materiales
                    educativos y actividades de inmersión lingüística.
                  </li>
                  <li>
                    <strong>Exposiciones y ferias:</strong> Realizamos eventos donde artesanos y artistas Wayúu pueden
                    mostrar y comercializar sus creaciones, promoviendo el valor cultural y económico de su trabajo.
                  </li>
                  <li>
                    <strong>Documentación cultural:</strong> Recopilamos historias, leyendas, conocimientos
                    tradicionales y prácticas culturales a través de entrevistas con ancianos y líderes comunitarios.
                  </li>
                  <li>
                    <strong>Intercambios culturales:</strong> Facilitamos encuentros entre comunidades Wayúu y otros
                    grupos culturales para promover el diálogo, el respeto y el enriquecimiento mutuo.
                  </li>
                </ul>

                <h3>Impacto</h3>
                <p>
                  A través de este programa, hemos logrado involucrar a más de 300 personas en actividades de
                  preservación cultural, capacitado a 50 artesanos en técnicas tradicionales y comercialización justa, y
                  documentado más de 100 historias y prácticas culturales. Hemos observado un renovado orgullo cultural
                  en las comunidades participantes y un mayor interés de las nuevas generaciones por aprender y
                  preservar su herencia.
                </p>

                <div className="relative h-80 w-full my-8 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Taller de tejido tradicional Wayúu"
                    fill
                    className="object-cover"
                  />
                </div>

                <h3>Testimonios</h3>
                <blockquote className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 my-6">
                  <p className="italic">
                    "Participar en los talleres de tejido tradicional me ha permitido conectar con mis raíces y sentirme
                    orgullosa de mi herencia Wayúu. Ahora puedo transmitir estos conocimientos a mis hijas y asegurar
                    que nuestras tradiciones no se pierdan. Además, la venta de mis tejidos me ha dado independencia
                    económica."
                  </p>
                  <footer className="mt-2 font-bold">— Josefa, 45 años, participante del programa</footer>
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
                        <div className="h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-yellow-600 text-sm font-bold">1</span>
                        </div>
                        <span>Adquiriendo artesanías y productos culturales Wayúu a precio justo.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-yellow-600 text-sm font-bold">2</span>
                        </div>
                        <span>Patrocinando talleres culturales y eventos de preservación del idioma.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-yellow-600 text-sm font-bold">3</span>
                        </div>
                        <span>Siendo voluntario en la documentación y difusión de la cultura Wayúu.</span>
                      </li>
                    </ul>
                    <Button asChild className="w-full mt-6 bg-yellow-600 hover:bg-yellow-700">
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
                        <div className="bg-yellow-100 text-yellow-600 p-2 rounded-lg text-center min-w-[50px]">
                          <span className="block text-lg font-bold">25</span>
                          <span className="text-xs">Jun</span>
                        </div>
                        <div>
                          <h4 className="font-bold">Exposición de arte Wayúu</h4>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>Centro Cultural, 10:00 AM</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-yellow-100 text-yellow-600 p-2 rounded-lg text-center min-w-[50px]">
                          <span className="block text-lg font-bold">2</span>
                          <span className="text-xs">Jul</span>
                        </div>
                        <div>
                          <h4 className="font-bold">Taller de idioma wayuunaiki</h4>
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
                          <Users className="h-5 w-5 text-yellow-600 mr-2" />
                          <span>Participantes</span>
                        </div>
                        <span className="font-bold">+300</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Music className="h-5 w-5 text-yellow-600 mr-2" />
                          <span>Artesanos capacitados</span>
                        </div>
                        <span className="font-bold">+50</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-yellow-600 mr-2" />
                          <span>Historias documentadas</span>
                        </div>
                        <span className="font-bold">+100</span>
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
      <section className="py-16 bg-yellow-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Ayúdanos a preservar la cultura Wayúu</h2>
            <p className="mt-4 text-lg opacity-90">
              Tu contribución puede ayudar a mantener viva una cultura milenaria. Cada acción en favor de la
              preservación cultural es un paso hacia un futuro donde la diversidad cultural es valorada y celebrada.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-yellow-600"
              >
                <Link href="/donar">Donar ahora</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
                <Link href="/voluntariado">Ser voluntario</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
