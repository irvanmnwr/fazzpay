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
        d="M10.5 24.5H5.83333C5.21449 24.5 4.621 24.2542 4.18342 23.8166C3.74583 23.379 3.5 22.7855 3.5 22.1667V5.83333C3.5 5.21449 3.74583 4.621 4.18342 4.18342C4.621 3.74583 5.21449 3.5 5.83333 3.5H10.5"
        stroke={props.color}
        stroke-opacity="0.8"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.6665 19.8337L24.4998 14.0003L18.6665 8.16699"
        stroke={props.color}
        stroke-opacity="0.8"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24.5 14H10.5"
        stroke={props.color}
        stroke-opacity="0.8"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
