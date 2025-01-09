import FormRegister from "@/components/auth/FormRegister";
import React from "react";

function Registerpage() {
  return (
    <div className="p-6 space-y-6">
      <div className="text-2xl font-bold text-gray-900">Buat Akun</div>
      <FormRegister />
    </div>
  );
}

export default Registerpage;
