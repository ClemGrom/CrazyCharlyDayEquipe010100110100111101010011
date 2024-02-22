"use client";

import React from "react";
import { SignupForm } from "@/components/component/signup-form";
import { useRouter } from "next/router";

export default function FormPage() {
  const router = useRouter();

  return <SignupForm />;
}
