import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIcon as svg } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props: svg) {
  return (
    <BaseIcon {...props}>
      <path d="M9.96317 18.2865C10.0276 18.3466 10.0794 18.419 10.1152 18.4995C10.1511 18.58 10.1704 18.6669 10.1719 18.755C10.1735 18.8431 10.1573 18.9307 10.1243 19.0124C10.0913 19.0941 10.0421 19.1683 9.97983 19.2306C9.91751 19.293 9.84328 19.3421 9.76157 19.3751C9.67985 19.4081 9.59233 19.4243 9.50422 19.4228C9.4161 19.4212 9.3292 19.4019 9.2487 19.366C9.1682 19.3302 9.09575 19.2785 9.03567 19.214L0.285673 10.464C0.162779 10.3409 0.09375 10.1741 0.09375 10.0002C0.09375 9.82633 0.162779 9.65953 0.285673 9.53648L9.03567 0.786482C9.16007 0.670562 9.32462 0.607454 9.49463 0.610454C9.66464 0.613453 9.82685 0.682326 9.94709 0.802563C10.0673 0.922799 10.1362 1.08501 10.1392 1.25502C10.1422 1.42504 10.0791 1.58958 9.96317 1.71398L1.67802 10.0002L9.96317 18.2865Z" />
    </BaseIcon>
  );
}
