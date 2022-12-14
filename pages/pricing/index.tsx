import Link from "next/link"
import { MainLayout } from "../../components/layouts/MainLayout"

export default function Pricing () {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>
      <h1 className="title">
        Ir a <Link href='/'>Home</Link>
      </h1>

      <p className="description">
        Editar{' '}
        <code className="code">pages/pricing.jsx</code>
      </p>
    </MainLayout>
  )
}
