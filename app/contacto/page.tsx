"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Contacto</h1>
            <p className="mt-6 text-xl">Estamos aquí para responder tus preguntas y escuchar tus inquietudes.</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h2>
              <p className="text-gray-600 mb-8">
                Completa el formulario y nos pondremos en contacto contigo lo antes posible. Tu opinión es importante
                para nosotros.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-bold text-green-800 mb-2">¡Mensaje enviado!</h3>
                  <p className="text-green-700">
                    Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos a la brevedad.
                  </p>
                  <Button className="mt-4" onClick={() => setIsSubmitted(false)}>
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nombre completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Correo electrónico
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Asunto
                    </label>
                    <Select onValueChange={handleSelectChange} value={formState.subject}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un asunto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="informacion">Información general</SelectItem>
                        <SelectItem value="donaciones">Donaciones</SelectItem>
                        <SelectItem value="voluntariado">Voluntariado</SelectItem>
                        <SelectItem value="alianzas">Alianzas y colaboraciones</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Escribe tu mensaje aquí..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  </Button>
                </form>
              )}
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Información de contacto</h2>
              <p className="text-gray-600 mb-8">
                También puedes contactarnos directamente a través de los siguientes medios:
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-orange-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">Dirección</h3>
                    <p className="text-gray-600">Calle Principal #123, Ciudad</p>
                    <p className="text-gray-600">Código Postal 12345</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-orange-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">Teléfono</h3>
                    <p className="text-gray-600">+123 456 7890</p>
                    <p className="text-gray-600">Lunes a Viernes, 9:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-orange-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">Correo electrónico</h3>
                    <p className="text-gray-600">contacto@fundacionasirraja.org</p>
                    <p className="text-gray-600">info@fundacionasirraja.org</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Redes sociales</h3>
                  <div className="flex space-x-4">
                    <Link
                      href="https://facebook.com"
                      className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                    >
                      <span className="sr-only">Facebook</span>
                      <Facebook className="h-5 w-5 text-gray-700" />
                    </Link>
                    <Link
                      href="https://instagram.com"
                      className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                    >
                      <span className="sr-only">Instagram</span>
                      <Instagram className="h-5 w-5 text-gray-700" />
                    </Link>
                    <Link
                      href="https://twitter.com"
                      className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                    >
                      <span className="sr-only">Twitter</span>
                      <Twitter className="h-5 w-5 text-gray-700" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-orange-50 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Horario de atención</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Lunes - Viernes:</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sábado:</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Domingo:</span>
                    <span>Cerrado</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Nuestra ubicación</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Visítanos en nuestras instalaciones.</p>
          </div>

          <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Mapa de ubicación</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Preguntas frecuentes</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Respuestas a las preguntas más comunes sobre nuestra fundación.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-900 mb-2">¿Cómo puedo hacer una donación?</h3>
              <p className="text-gray-600">
                Puedes realizar donaciones a través de nuestra página web en la sección "Donar", mediante transferencia
                bancaria o visitando nuestras instalaciones.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-900 mb-2">¿Cómo puedo ser voluntario?</h3>
              <p className="text-gray-600">
                Para ser voluntario, puedes completar el formulario en la sección "Voluntariado" o contactarnos
                directamente. Realizamos entrevistas y capacitaciones periódicas para nuevos voluntarios.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-900 mb-2">¿Qué tipo de ayuda ofrecen?</h3>
              <p className="text-gray-600">
                Ofrecemos programas educativos, apoyo psicosocial, desarrollo comunitario, donaciones de alimentos y
                útiles escolares, entre otros servicios. Puedes conocer más en la sección "Programas".
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-900 mb-2">¿Cómo puedo solicitar ayuda?</h3>
              <p className="text-gray-600">
                Si necesitas ayuda, puedes contactarnos a través del formulario de contacto, llamarnos por teléfono o
                visitar nuestras instalaciones. Evaluaremos tu caso y te orientaremos sobre los programas disponibles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
