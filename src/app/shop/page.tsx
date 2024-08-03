import { ShopComponent } from "@/components/Shop/Shop";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Furniro | Shop',
};

export default function Shop() {
  return (
    <>
      <ShopComponent />
    </>
  );
}

