"use server";

import { RegisterSchema } from "@/lib/zod";
import { hashSync } from "bcrypt-ts";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const signUpCredentials = async (
  PrevState: unknown,
  formData: FormData
) => {
  const validatedFields = RegisterSchema.safeParse(
    Object.fromEntries(formData.entries())
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
        name: name,
        email: email,
        password: hashedPassword,
      },
    });
  } catch (error) {
    return { error: "Failed to create user" };
  }
  redirect("/login");
};
