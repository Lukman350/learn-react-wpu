export default function Footer({ items }) {
  const totalItems = items.length;
  const sudahDibeli = items.filter((item) => item.checked).length;
  const persentase = Math.round((sudahDibeli / totalItems) * 100);

  return (
    <footer className="stats">
      Ada {totalItems} barang di daftar belanjaan, {sudahDibeli} barang sudah
      dibeli ({isNaN(persentase) ? '0' : persentase}%)
    </footer>
  );
}
