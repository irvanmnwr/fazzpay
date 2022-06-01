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
        d="M14 5.83301V22.1663"
        stroke={props.color}
        stroke-opacity="0.8"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.8335 14H22.1668"
        stroke={props.color}
        stroke-opacity="0.8"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
