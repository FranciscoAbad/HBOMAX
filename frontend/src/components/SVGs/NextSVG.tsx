import { SVGProps } from "../../utils/GlobalInterfaces";

export default function NextSVG(props: SVGProps) {
  return (
    <svg
      viewBox="0 0 14 25"
      aria-hidden="true"
      width={props.width}
      height={props.height}
    >
      <path d="M9.74023 12.227L0.520924 3.0077C-0.167129 2.31965 -0.167132 1.20409 0.520922 0.51604C1.20897 -0.172013 2.32453 -0.172013 3.01258 0.51604L13.4149 10.9184C13.4368 10.9382 13.4582 10.9586 13.4793 10.9796C14.1673 11.6677 14.1673 12.7832 13.4793 13.4713L3.0143 23.9363C2.32625 24.6243 1.21069 24.6243 0.522641 23.9363C-0.165412 23.2482 -0.165412 22.1327 0.522642 21.4446L9.74023 12.227Z"></path>
    </svg>
  );
}