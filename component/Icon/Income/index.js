export default function Icon(props) {
  return (
    // didapat dari file svg yang dimasukkan kedalam component selanjutnya untuk bagian stroke diubah isinya yang dimana mengambil dari props
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 5.83366L14 22.167"
        stroke="#1EC15F"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.1667 14.0003L14 22.167L5.83333 14.0003"
        stroke="#1EC15F"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
