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
        d="M11.6667 3.5H3.5V11.6667H11.6667V3.5Z"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.5 3.5H16.3333V11.6667H24.5V3.5Z"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.5 16.333H16.3333V24.4997H24.5V16.333Z"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6667 16.333H3.5V24.4997H11.6667V16.333Z"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
