import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary-foreground border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Fundación Asirraja</h3>
            <p className="text-muted-foreground text-sm">
              Dedicados al apoyo social, educativo y comunitario, con especial atención a niños, jóvenes y familias en
              situación de vulnerabilidad.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                <span className="text-muted-foreground">Calle Principal #123, Ciudad</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-muted-foreground mr-2" />
                <span className="text-muted-foreground">+123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-muted-foreground mr-2" />
                <span className="text-muted-foreground">contacto@fundacionasirraja.org</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/nosotros" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="/programas" className="text-muted-foreground hover:text-primary transition-colors">
                  Programas
                </Link>
              </li>
              <li>
                <Link href="/donar" className="text-muted-foreground hover:text-primary transition-colors">
                  Cómo ayudar
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-muted-foreground hover:text-primary transition-colors">
                  Aviso legal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Fundación Asirraja. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
