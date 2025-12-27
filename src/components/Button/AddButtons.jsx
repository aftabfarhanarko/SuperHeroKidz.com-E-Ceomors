"use client";
import { handleCart } from "@/actions/addcart";
import { ShoppingCart } from "lucide-react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const AddButtons = ({ producat }) => {
  //   console.log(producat);
  const router = useRouter();
  const path = usePathname();
  const [tsLoading, setTsLoading] = useState(false);

  const session = useSession();
  const isLogin = session.status == "authenticated";

  const producatAddCard = async () => {
    setTsLoading(true);
    if (isLogin) {
      const result = await handleCart({ producat, inc: true });
      if (result.success) {
        toast.success(`কার্টে যোগ করা পণ্যের নাম -  ${producat.bangla}`);
        console.log(result);
      } else {
        toast.warning(`${result.message} || Somthings is Rongs  `);
      }
      setTsLoading(false);
    } else {
      router.push(`/login?callbackUrl=${path}`);
      setTsLoading(false);
    }
  };

  return (
    <div>
      <button
        disabled={session.status == "loading" || tsLoading}
        onClick={producatAddCard}
        className="flex-1 bg-gradient-to-r  from-orange-600 to-red-600 text-white px-8 py-3 rounded-xl w-full font-bold hover:shadow-lg transform hover:scale-105 transition-all flex items-center justify-center gap-2"
      >
        <ShoppingCart className="w-5 h-5" />
        Add to Cart
      </button>
    </div>
  );
};

export default AddButtons;
