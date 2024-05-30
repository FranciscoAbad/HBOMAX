import { SVGProps } from "../../utils/GlobalInterfaces";

export default function EditSVG(props: SVGProps) {
  return (
    <svg width="20" height="20" onClick={props.onClick}>
      <path
        d="M10.7971 11.7933L7.5 12.4998L8.20652 9.20274L15.7428 1.6665L18.3333 4.25708L10.7971 11.7933Z"
        stroke="white"
        stroke-width="1.25"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M10.2082 2.2915H2.2915V17.7082H17.7082V8.95817"
        stroke="white"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
}
