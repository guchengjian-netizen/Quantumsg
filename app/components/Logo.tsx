import Image from "next/image";

export default function Logo() {
  return <span className="logo-lockup"><span className="logo-symbol" aria-hidden="true"><Image src="/brand/quantum-lion.png" alt="" width={52} height={52} priority /></span><span className="logo-type"><strong>Quantum</strong><small>Singapore</small></span></span>;
}
