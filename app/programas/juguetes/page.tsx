import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Gift, ArrowLeft, Calendar, Users } from "lucide-react"

export default function JuguetesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 mb-6">
              <Gift className="h-8 w-8 text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Alegría a través de Juguetes</h1>
            <p className="mt-6 text-xl">
              Llevando sonrisas y momentos de felicidad a niños en situación de vulnerabilidad a través de juguetes y
              actividades recreativas.
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
                  El programa "Alegría a través de Juguetes" de la Fundación Asirraja reconoce la importancia del juego
                  en el desarrollo infantil. Creemos que todos los niños tienen derecho a jugar y disfrutar de su
                  infancia, independientemente de su situación socioeconómica. A través de este programa, buscamos
                  llevar momentos de alegría y diversión a niños en comunidades vulnerables, contribuyendo a su
                  bienestar emocional y desarrollo social.
                </p>

                <div className="relative h-80 w-full my-8 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Niños recibiendo juguetes"
                    fill
                    className="object-cover"
                  />
                </div>

                <h3>Componentes del Programa</h3>
                <ul>
                  <li>
                    <strong>Donación de juguetes:</strong> Recolectamos y distribuimos juguetes nuevos y en buen estado
                    a niños de comunidades vulnerables, especialmente durante fechas especiales como Navidad y Día del
                    Niño.
                  </li>
                  <li>
                    <strong>Ludotecas comunitarias:</strong> Establecemos espacios de juego en las comunidades donde los
                    niños pueden acceder a juguetes, juegos de mesa y materiales recreativos.
                  </li>
                  <li>
                    <strong>Jornadas recreativas:</strong> Organizamos eventos con actividades lúdicas, juegos
                    tradicionales, títeres, cuentacuentos y otras expresiones artísticas.
                  </li>
                  <li>
                    <strong>Talleres de juguetes artesanales:</strong> Enseñamos a niños y padres a crear juguetes con
                    materiales reciclados, fomentando la creatividad y la conciencia ambiental.
                  </li>
                  <li>
                    <strong>Celebraciones especiales:</strong> Realizamos fiestas infantiles en fechas significativas,
                    con piñatas, refrigerios y regalos para los niños.
                  </li>
                </ul>

                <h3>Impacto</h3>
                <p>
                  Desde el inicio del programa, hemos entregado más de 3,000 juguetes y realizado más de 50 jornadas
                  recreativas, beneficiando a cientos de niños. Hemos observado cómo estas actividades no solo generan
                  momentos de alegría, sino que también fortalecen los lazos comunitarios y promueven valores como la
                  solidaridad y el trabajo en equipo.
                </p>

                <div className="relative h-80 w-full my-8 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Jornada recreativa con niños"
                    fill
                    className="object-cover"
                  />
                </div>

                <h3>Testimonios</h3>
                <blockquote className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 my-6">
                  <p className="italic">
                    "Ver la sonrisa de los niños cuando reciben un juguete es algo indescriptible. Muchos de ellos nunca
                    habían tenido un juguete propio. Estas actividades les permiten ser simplemente niños, olvidar por
                    un momento las dificultades y disfrutar como merecen."
                  </p>
                  <footer className="mt-2 font-bold">— Luis, voluntario del programa</footer>
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
                        <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-purple-600 text-sm font-bold">1</span>
                        </div>
                        <span>Donando juguetes nuevos o en buen estado para nuestras campañas de distribución.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-purple-600 text-sm font-bold">2</span>
                        </div>
                        <span>Apadrinando una ludoteca comunitaria con donaciones de juegos y materiales.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-purple-600 text-sm font-bold">3</span>
                        </div>
                        <span>Siendo voluntario en nuestras jornadas recreativas y talleres infantiles.</span>
                      </li>
                    </ul>
                    <Button asChild className="w-full mt-6 bg-purple-600 hover:bg-purple-700">
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
                        <div className="bg-purple-100 text-purple-600 p-2 rounded-lg text-center min-w-[50px]">
                          <span className="block text-lg font-bold">20</span>
                          <span className="text-xs">Jun</span>
                        </div>
                        <div>
                          <h4 className="font-bold">Jornada de juegos tradicionales</h4>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>Plaza Central, 10:00 AM</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-100 text-purple-600 p-2 rounded-lg text-center min-w-[50px]">
                          <span className="block text-lg font-bold">30</span>
                          <span className="text-xs">Jun</span>
                        </div>
                        <div>
                          <h4 className="font-bold">Taller de juguetes reciclados</h4>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>Centro Comunitario, 3:00 PM</span>
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
                          <Users className="h-5 w-5 text-purple-600 mr-2" />
                          <span>Niños beneficiados</span>
                        </div>
                        <span className="font-bold">+1,200</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Gift className="h-5 w-5 text-purple-600 mr-2" />
                          <span>Juguetes entregados</span>
                        </div>
                        <span className="font-bold">+3,000</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-purple-600 mr-2" />
                          <span>Jornadas realizadas</span>
                        </div>
                        <span className="font-bold">+50</span>
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
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Ayúdanos a llevar sonrisas</h2>
            <p className="mt-4 text-lg opacity-90">
              Tu contribución puede hacer que un niño sonría. Cada juguete donado, cada momento de juego compartido,
              marca una diferencia en la vida de los niños de nuestra comunidad.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600"
              >
                <Link href="/donar">Donar ahora</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Link href="/voluntariado">Ser voluntario</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
