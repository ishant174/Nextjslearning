export default function Page() {
  return <p>Invoices Page {process.env.POSTGRES_USER}</p>;
}