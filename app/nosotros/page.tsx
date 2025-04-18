import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Target, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Sobre Nosotros</h1>
            <p className="mt-6 text-xl">
              Conoce nuestra historia, misión, visión y los valores que guían nuestro trabajo diario.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Fundación Asirraja nació en 2010 como respuesta a las necesidades sociales identificadas en
                  comunidades vulnerables. Un grupo de profesionales comprometidos con el cambio social decidió unir
                  esfuerzos para crear una organización que pudiera brindar apoyo integral a niños, jóvenes y familias.
                </p>
                <p>
                  Desde nuestros inicios, hemos trabajado incansablemente para desarrollar programas que aborden las
                  causas fundamentales de la vulnerabilidad social, promoviendo la educación, el bienestar emocional y
                  el desarrollo comunitario.
                </p>
                <p>
                  A lo largo de estos años, hemos crecido tanto en alcance como en impacto, estableciendo alianzas
                  estratégicas con otras organizaciones, empresas y entidades gubernamentales que comparten nuestra
                  visión de un mundo más justo y equitativo.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Fundadores de la Fundación Asirraja"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Misión, Visión y Valores</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Los pilares que sostienen nuestro trabajo y guían nuestras acciones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Quiénes Somos</h3>
                <p className="text-gray-600">
                  Fundación Asirraja es una organización sin fines de lucro dedicada a ayudar a niños y familias en
                  necesidad, especialmente dentro de las comunidades Wayúu.
                </p>
                <p className="text-gray-600 mt-2">
                  Nuestro objetivo es proporcionar acceso a educación, alimentos, juguetes y atención médica, asegurando
                  dignidad y un futuro más brillante para cada niño y familia que servimos.
                </p>
                <p className="text-gray-600 mt-2">
                  Nos preocupamos profundamente por nuestros hermanos y hermanas Wayúu, respetando su cultura y
                  caminando junto a ellos en solidaridad.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Nuestra Visión</h3>
                <p className="text-gray-600">
                  Un futuro donde todos los niños y familias—sin importar su etnia o procedencia—tengan la oportunidad
                  de crecer, aprender y vivir con dignidad.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Nuestros Valores</h3>
                <ul className="text-gray-600 text-left space-y-2">
                  <li>• Compasión</li>
                  <li>• Inclusión</li>
                  <li>• Respeto Cultural</li>
                  <li>• Apoyo Familiar</li>
                  <li>• Solidaridad</li>
                  <li>• Integridad</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Nuestro Equipo</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Personas comprometidas que trabajan día a día para cumplir nuestra misión.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=256&width=256"
                  alt="María González - Directora Ejecutiva"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">María González</h3>
              <p className="text-orange-600">Directora Ejecutiva</p>
              <p className="mt-2 text-gray-600 px-4">
                Trabajadora social con más de 15 años de experiencia en proyectos de desarrollo comunitario.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=256&width=256"
                  alt="Carlos Rodríguez - Director de Programas"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Carlos Rodríguez</h3>
              <p className="text-orange-600">Director de Programas</p>
              <p className="mt-2 text-gray-600 px-4">
                Psicólogo especializado en intervención social y desarrollo de proyectos educativos.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=256&width=256"
                  alt="Ana Martínez - Coordinadora de Voluntariado"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Ana Martínez</h3>
              <p className="text-orange-600">Coordinadora de Voluntariado</p>
              <p className="mt-2 text-gray-600 px-4">
                Especialista en gestión de equipos y desarrollo de programas de voluntariado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Nuestros Aliados</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Organizaciones que confían en nuestro trabajo y nos apoyan.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="flex items-center justify-center p-4">
                <Image
                  src="/placeholder.svg?height=80&width=160"
                  alt={`Logo aliado ${i}`}
                  width={160}
                  height={80}
                  className="max-h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
