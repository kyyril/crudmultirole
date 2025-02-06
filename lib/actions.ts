"use server";

import { RegisterSchema } from "@/lib/zod";
import { hashSync } from "bcrypt-ts";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const signUpCredentials = async (FormData: FormData) => {
  const validatedFields = RegisterSchema.safeParse(
    Object.fromEntries(FormData.entries())
  );
  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = hashSync(password, 10);

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  } catch (error) {
    return { error: "Failed to create user" };
  }
  redirect("/login");
};
