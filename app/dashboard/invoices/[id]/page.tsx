export default function Page({ params }: { params: { id: string } }) {
    return <p>Invoice {params.id} </p>;
  }